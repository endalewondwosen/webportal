<?php

namespace App\Http\Controllers\Frontend;

use App\Models\StudentCopy;
use Illuminate\Http\Request;
use App\Mail\ApplicationMail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class StudentCopyController extends Controller
{
    public function sendStudentCopyRequest(Request $request){
        $validateData=$request->validate([
            'first_name'=>'required',
            'father_name'=>'required',
            'grand_father_name'=>'required',
            'sex'=>'required',
            'university_id'=>'required|unique:official_transcripts',
            'mobile_number'=>'required|unique:official_transcripts',
            'email'=>'required|email|unique:official_transcripts',
            'admission_type'=>'required',
            'study_level'=>'required',
            'college_id'=>'required',
            'departement_id'=>'required',
            'year_of_graduation'=>'required',
            'bank_tr_ref'=>'required',
            // 'bank_receipt'=>'file|required|mimes:png,jpg,pdf,docx',
            // 'cost_sharing_letter'=>'file|required|mimes:png,jpg,pdf,docx',
            // 'other_documents'=>'file|required|mimes:png,jpg,pdf,docx',

          ]);

            $student_copy=new StudentCopy();
            $student_copy->first_name=$request->first_name;
            $student_copy->father_name=$request->father_name;
            $student_copy->grand_father_name=$request->grand_father_name;
            $student_copy->sex=$request->sex;
            $student_copy->university_id=$request->university_id;
            $student_copy->mobile_number=$request->mobile_number;
            $student_copy->email=$request->email;
            $student_copy->admission_type=$request->admission_type;
            $student_copy->study_level=$request->study_level;
            $student_copy->college_id=$request->college_id;
            $student_copy->departement_id=$request->departement_id;
            $student_copy->year_of_graduation=$request->year_of_graduation;
            $student_copy->bank_tr_ref=$request->bank_tr_ref;
             if($request->hasFile('bank_reciept')){

               $file=$request->file('bank_reciept');

               $file_name_ext=time().'.'.$file->getClientOriginalExtension();
               $upload_path='/student_copy/receipt/';
               $name=$upload_path.$file_name_ext;
               $file->move(public_path($upload_path),$file_name_ext);
               $student_copy->bank_receipt=$name;

            }
            if($request->hasFile('other_document')){

               $file=$request->file('other_document');

              $file_name=time().'.'.$file->getClientOriginalExtension();
              $upload_path='/student_copy/other_document/';
              $name=$upload_path.$file_name;
              $file->move(public_path($upload_path),$file_name);
              $student_copy->other_documents=$name;
                   }
         if($request->hasFile('cost_sharing')){

           $file=$request->file('cost_sharing');
          $file_name=time().'.'.$file->getClientOriginalExtension();
          $upload_path= '/student_copy/cost_sharing/';
            $name=$upload_path.$file_name;
           $file->move(public_path($upload_path),$file_name);
            $student_copy->cost_sharing_letter=$name;
             }
            $app_num= rand('000000','999999');
            $student_copy->application_number=$app_num;

            if($student_copy->save()){
              $details= [
                'title'=>'MAIL FROM WOLLO UNIVERSITY PORTAL',
                'body'=>"This is your application number For your Student Copy Request",
                'app_number'=>$app_num
               ];
            // Mail::to("girmay12adisu@gmail.com")->send(new ApplicationMail($details));

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

        public function index(){
          $applicant=StudentCopy::with(['college','year','admission','study','departement'])->get();
          return response()->json($applicant);
         }

         public function show($id){
          $applicant=StudentCopy::with(['college','year','admission','study','departement'])->where('id',$id)->get();
          return response()->json($applicant);
         }

         public function StudentCopyApplicants(){
          $admit=StudentCopy::where('status','0')->get();
             return response()->json($admit);
         }

         public function getStudentCopyApplicant($id){
          $applicant=StudentCopy::where('id',$id)->first();
          return response()->json($applicant);
         }

         public function StudentCopyRecieptAdd(Request $request,$id){
          $orginal=StudentCopy::where('id',$id)->first();
          $validateData=$request->validate([
               'reciept_number'=>'required|unique:student_copies,reciept_number,'.$id,
          ]);
        $orginal->reciept_number=$request->reciept_number;
        if($orginal->save()){
          return response()->json([
              'message'=>'Reciept number Added',
              'status_code'=>201,
          ],201);
        }else{
          return response()->json([
              'message'=>'something happened wrong,please try again!',
              'status_code'=>500,
          ],500);
        }
         }

         public function approveApplicant($id){
          $applicant=StudentCopy::where('id',$id)->first();
          $applicant->status=1;
          if($applicant->save()){
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
          $applicant=StudentCopy::where('id',$id)->first();
          $applicant->status=2;
          if($applicant->save()){
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

        public function checkStatus(Request $request){
          $validateData=$request->validate([
              'year_id'=>'required',
              'application_number'=>'required'
          ]);
          $status=StudentCopy:: where('year_of_graduation',$request->year_id)->where('application_number',$request->application_number)->first();
           if($status){
            return response()->json($status->status);
           }else{
             return response()->json([
              'message'=>'Incorrect Application Number or Year Of Application!',
             ]);
           }

                 }
    public function studentCopyFile($id){
        $file=StudentCopy::where('id',$id)->first();
        $file_path=$file->bank_receipt;
      //    return response()->json([
      //     'message'=>'You dowloaded a file!',
      //    ]);
         return response()->download(public_path($file_path));
    }
    public function registerarBankRecieptFile($id){
        $file=StudentCopy::where('id',$id)->first();
        $file_path=$file->bank_receipt;
      //    return response()->json([
      //     'message'=>'You dowloaded a file!',
      //    ]);
         return response()->download(public_path($file_path));
    }
    public function registerarStudentCopyCostSharingFile($id){
        $file=StudentCopy::where('id',$id)->first();
        $file_path=$file->cost_sharing_letter;
      //    return response()->json([
      //     'message'=>'You dowloaded a file!',
      //    ]);
         return response()->download(public_path($file_path));
    }
    public function registerarStudentCopyOtherDocumentsFile($id){
        $file=StudentCopy::where('id',$id)->first();
        $file_path=$file->other_documents;
      //    return response()->json([
      //     'message'=>'You dowloaded a file!',
      //    ]);
         return response()->download(public_path($file_path));
    }
}
