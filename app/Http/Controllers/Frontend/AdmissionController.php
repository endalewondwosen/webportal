<?php

namespace App\Http\Controllers\Frontend;

use App\Models\ExamResult;
use App\Models\AdmitStudent;
use Illuminate\Http\Request;
use App\Mail\ApplicationMail;
use App\Exports\PassedStudentsList;
 use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Stroage;
use Illuminate\Support\Facades\Response;

class AdmissionController extends Controller
{

         public function index(){
          $applicant=AdmitStudent::with(['college','year','admission','study','departement','announce'])->get();
             return response()->json($applicant);
         }
       public function show($id){
        $applicant=AdmitStudent::with(['college','year','admission','study','departement','announce'])->where('id',$id)->get();
        return response()->json($applicant);
       }
       public function approveApplicant($id){
        $applicant=AdmitStudent::where('id',$id)->first();
        $applicant->status=1;
        if($applicant->save()){
         $exam=new ExamResult();
          $exam_num=rand('000000','999999');
          $exam->student_id=$id;
          $exam->departement_id=$applicant->departement_id;
          $exam->exam_number=$exam_num;
          $exam->save();
          return response()->json([
              'message'=>'Applicant Approved',
              'status_code'=>201,
          ],201);
        }else{
          return response()->json([
              'message'=>'something happened wrong,please try again!',
              'status_code'=>500,
          ],500);
        }
       }
       public function rejectApplicant($id){
        $applicant=AdmitStudent::where('id',$id)->first();
        $applicant->status=2;
        if($applicant->save()){
          $exam=ExamResult::where('student_id',$id)->first();
          $exam->delete();
          return response()->json([
              'message'=>'Applicant Rejected',
              'status_code'=>201,
          ],201);
        }else{
          return response()->json([
              'message'=>'something happened wrong,please try again!',
              'status_code'=>500,
          ],500);
        }
      }
    public function sendApplicationFormRequest(Request $request){
        $validateData=$request->validate([
            'undergraduate_unversity_name'=>'required',
            'undergraduate__cgpa'=>'required',
            'undergraduate_field_of_study'=>'required',
            'study_level'=>'required',
            'college_id'=>'required',
            'departement_id'=>'required',
            'year_id'=>'required',
            'announcement_id'=>'required',
            'finantial_support'=>'required',
            'first_name'=>'required',
            'father_name'=>'required',
            'grand_father_name'=>'required',
            'sex'=>'required',
            'date_of_birth'=>'required',
            'nationality'=>'required',
            'region'=>'required',
            'zone_or_subcity'=>'required',
            'woreda'=>'required',
            'mobile_number'=>'required|unique:admit_students',
            'email'=>'required|unique:admit_students',

          ]);
           $admit_student=new AdmitStudent();
            $admit_student->undergraduate_unversity_name=$request->undergraduate_unversity_name;
            $admit_student->undergraduate__cgpa=$request->undergraduate__cgpa;
            $admit_student->undergraduate_field_of_study=$request->undergraduate_field_of_study;
            $admit_student->postgraduate_unversity_name=$request->postgraduate_unversity_name;
            $admit_student->postgraduate__cgpa=$request->postgraduate__cgpa;
            $admit_student->postgraduate_field_of_study=$request-> postgraduate_field_of_study;
            $admit_student->admission_type=$request->  admission_type;
            $admit_student->study_level=$request->study_level;
            $admit_student->college_id=$request->college_id;
            $admit_student->departement_id=$request->departement_id;
            $admit_student->year_id=$request->year_id;
            $admit_student->announcement_id=$request->announcement_id;
            $admit_student->finantial_support=$request->finantial_support;
            $admit_student->first_name=$request->first_name;
            $admit_student->father_name=$request->father_name;
            $admit_student->grand_father_name=$request->grand_father_name;
            $admit_student->sex=$request->sex;
            $admit_student->date_of_birth=$request-> date_of_birth;
            $admit_student->nationality=$request->nationality;
            $admit_student->region=$request->  region;
            $admit_student->zone_or_subcity=$request->zone_or_subcity;
            $admit_student->woreda=$request->woreda;
            $admit_student->mobile_number=$request->mobile_number;
            $admit_student->email=$request->email;
            $app_num=rand('000000','999999');
             $admit_student->application_number=$app_num;
             if($admit_student->save()){
               $details= [
                'title'=>$request->first_name,
                'body'=>"This is your application number from your addmission request",
                'app_number'=>$app_num
               ];
               Mail::to($request->email)->send(new ApplicationMail($details));

                return response()->json([
                    'message'=>'Your Application is successfully sent',
                    'status_code'=>201,
                ],201);
              }else{
                return response()->json([
                    'message'=>'something happened wrong,please try again!',
                    'status_code'=>500,
                ],500);
              }



    }

    public function admisionUploadDocuments(Request $request){
       $validateData=$request->validate([
          'application_number'=>'required',
          'bank_statement'=>'file|mimes:png,jpg,pdf,docx',
          'student_copy'=>'file|mimes:png,jpg,pdf,docx',
          'orginal_degree'=>'file|mimes:png,jpg,pdf,docx',
          'other_document'=>'file|mimes:png,jpg,pdf,docx',
       ]);
                                    $admit=AdmitStudent::where('application_number',$request->application_number)->first();
                                    if($admit){
                                      if($request->hasFile('bank_statement')){

                                        $file=$request->file('bank_statement');

                                        $file_name_ext=time().'.'.$file->getClientOriginalExtension();
                                        $upload_path='/application/bank_reciept/';
                                        $name=$upload_path.$file_name_ext;
                                        $file->move(public_path($upload_path),$file_name_ext);
                                        $admit->bank_statement=$name;

                                    }
                                    if($request->hasFile('student_copy')){

                                      $file=$request->file('student_copy');

                                      $file_name_ext=time().'.'.$file->getClientOriginalExtension();
                                      $upload_path='/application/student_copy/';
                                      $name=$upload_path.$file_name_ext;
                                      $file->move(public_path($upload_path),$file_name_ext);
                                      $admit->student_copy=$name;

                                  }
                                  if($request->hasFile('orginal_degree')){

                                    $file=$request->file('orginal_degree');
                                    $file_name_ext=time().'.'.$file->getClientOriginalExtension();
                                    $upload_path='/application/orginal_degree/';
                                    $name=$upload_path.$file_name_ext;
                                    $file->move(public_path($upload_path),$file_name_ext);
                                    $admit->orginal_degree=$name;

                                }
                                if($request->hasFile('other_document')){

                                  $file=$request->file('other_document');

                                  $file_name_ext=time().'.'.$file->getClientOriginalExtension();
                                  $upload_path='/application/other_document/';
                                  $name=$upload_path.$file_name_ext;
                                  $file->move(public_path($upload_path),$file_name_ext);
                                  $admit->other_document=$name;

                              }
                               $admit->save();


                          return response()->json([
                            'message'=>'Document Uploaded Succeefully!',
                            'status'=>'success'
                          ]);
                          }else{
                            return response()->json([
                              'message'=>' Sorry,Incorrect no applicaiton number',
                              'status'=>'error'
                            ]);
                          }


    }

    public function getAdmissionApplicants(){
       $admit=AdmitStudent::where('status','0')->get();
     return response()->json($admit);
    }

    public function admissionRecieptAdd(Request $request, $id){
      $admit=AdmitStudent::where('id',$id)->first();
      $validateData=$request->validate([
           'receipt_number'=>'required|unique:official_transcripts,reciept_number,'.$id,
      ]);
    $admit->receipt_number=$request->receipt_number;
    if($admit->save()){
      return response()->json([
          'message'=>'Your Application is successfully sent',
          'status_code'=>201,
      ],201);
    }else{
      return response()->json([
          'message'=>'something happened wrong,please try again!',
          'status_code'=>500,
      ],500);
    }
    }
    public function getAdmissionApplicant($id){
      $applicant=AdmitStudent::where('id',$id)->first();
      return response()->json($applicant);
    }

    public function checkAdmissionStatus(Request $request){
      $validateData=$request->validate([
        'year_id'=>'required',
        'application_number'=>'required'
    ]);
    $status=AdmitStudent:: where('year_id',$request->year_id)->where('application_number',$request->application_number)->first();
     if($status){
      return response()->json($status->status);
     }else{
       return response()->json([
        'message'=>'Incorrect Application Number or Year Of Application!',
       ]);
     }

    }

    public function getExamNumber(Request $request){
          $validateData=$request->validate([
            'application_number'=>'required',
             'year_id'=>'required',
          ]);
         $admit=AdmitStudent::with(['exam'])->where('application_number',$request->application_number)->where('year_id',$request->year_id)->get();
        return response()->json($admit);



    }
    public function getExamResult(Request $request){
      $validateData=$request->validate([
        'exam_number'=>'required',
      ]);
      $exam=ExamResult::with('student')->where('exam_number',$request->exam_number)->get();

       return response()->json($exam);

    }

    public function getAdmissionApplicantFile($id){

       $file=AdmitStudent::where('id',$id)->first();
      $file_path=$file->bank_statement;
       return response()->json($file_path);
       return response()->download(public_path($file_path));

      // $path = public_path($file->bank_statement);
      // $fileName = 'official.pdf';
      //   return response()->json([
      //   'file dowloaded successfully'
      //  ]);
      // return Response::download($path, $fileName, ['Content-Type: application/pdf']);



    }

   public function viewFinanceApplicant($id){
     $data=AdmitStudent::find($id);
      return response()->json($data);
   }
   public function admitStudentFile($id){
    $file=AdmitStudent::where('id',$id)->first();
    $file_path=$file->bank_statement;
  //    return response()->json([
  //     'message'=>'You dowloaded a file!',
  //    ]);
     return response()->download(public_path($file_path));
   }
   public function admissionBankStatementFile($id){
    $file=AdmitStudent::where('id',$id)->first();
    $file_path=$file->bank_statement;
  //    return response()->json([
  //     'message'=>'You dowloaded a file!',
  //    ]);
     return response()->download(public_path($file_path));
   }
   public function admissionStudentCopyFile($id){
    $file=AdmitStudent::where('id',$id)->first();
    $file_path=$file->bank_statement;
  //    return response()->json([
  //     'message'=>'You dowloaded a file!',
  //    ]);
     return response()->download(public_path($file_path));
   }
   public function admissionOrginalDegreeFile($id){
    $file=AdmitStudent::where('id',$id)->first();
    $file_path=$file->orginal_degree;
  //    return response()->json([
  //     'message'=>'You dowloaded a file!',
  //    ]);
     return response()->download(public_path($file_path));
   }
   public function admissionOtherFile($id){
    $file=AdmitStudent::where('id',$id)->first();
    $file_path=$file->other_document;
  //    return response()->json([
  //     'message'=>'You dowloaded a file!',
  //    ]);
     return response()->download(public_path($file_path));
   }

   public function downloadAllPassedStudents(){
    return Excel::download( new PassedStudentsList(), 'selected_applicants.xlsx') ;
   }
}
