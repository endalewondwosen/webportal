<?php

namespace App\Http\Controllers\Frontend;

use App\Models\StudentCopy;
use Illuminate\Http\Request;
use App\Mail\ApplicationMail;
use App\Models\OrginalDegree;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class OrginalDegreeController extends Controller
{
   public function sendOrginalDegreeRequest(Request $request){
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
        'service_type'=>'required',
        'bank_tr_ref'=>'required',
        // 'bank_receipt'=>'file|required|mimes:png,jpg,pdf,docx',
        // 'cost_sharing_letter'=>'file|required|mimes:png,jpg,pdf,docx',
        // 'other_documents'=>'file|required|mimes:png,jpg,pdf,docx',

      ]);

        $orginal_degree=new OrginalDegree();
        $orginal_degree->first_name=$request->first_name;
        $orginal_degree->father_name=$request->father_name;
        $orginal_degree->grand_father_name=$request->grand_father_name;
        $orginal_degree->sex=$request->sex;
        $orginal_degree->university_id=$request->university_id;
        $orginal_degree->mobile_number=$request->mobile_number;
        $orginal_degree->email=$request->email;
        $orginal_degree->admission_type=$request->admission_type;
        $orginal_degree->study_level=$request->study_level;
        $orginal_degree->college_id=$request->college_id;
        $orginal_degree->departement_id=$request->departement_id;
        $orginal_degree->year_of_graduation=$request->year_of_graduation;
        $orginal_degree->service_type=$request->service_type;
        $orginal_degree->bank_tr_ref=$request->bank_tr_ref;

        if($request->hasFile('bank_reciept')){

           $file=$request->file('bank_reciept');

           $file_name_ext=time().'.'.$file->getClientOriginalExtension();
           $upload_path='/orginal_degree/receipt/';
           $name=$upload_path.$file_name_ext;
           $file->move(public_path($upload_path),$file_name_ext);
           $orginal_degree->bank_receipt=$name;

        }
        if($request->hasFile('other_document')){

           $file=$request->file('other_document');

          $file_name=time().'.'.$file->getClientOriginalExtension();
          $upload_path='/orginal_degree/other_document/';
          $name=$upload_path.$file_name;
          $file->move(public_path($upload_path),$file_name);
          $orginal_degree->other_documents=$name;

      }
     if($request->hasFile('cost_sharing')){

       $file=$request->file('cost_sharing');
      $file_name=time().'.'.$file->getClientOriginalExtension();
      $upload_path= '/orginal_degree/cost_sharing/';
        $name=$upload_path.$file_name;
       $file->move(public_path($upload_path),$file_name);
        $orginal_degree->cost_sharing_letter=$name;
         }
        $app_num= rand('000000','999999');
        $orginal_degree->application_number=$app_num;

        if($orginal_degree->save()){
          $details= [
            'title'=>'MAIL FROM WOLLO UNIVERSITY PORTAL',
            'body'=>"This is your application number For your Orginal Degree Request",
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
    $applicant=OrginalDegree::with(['college','year','admission','study','departement'])->get();
    return response()->json($applicant);
   }

   public function show($id){
    $applicant=OrginalDegree::with(['college','year','admission','study','departement'])->where('id',$id)->get();
    return response()->json($applicant);
   }
 public function OrginalDegreeApplicants(){
  $admit=OrginalDegree::where('status','0')->get();
     return response()->json($admit);
 }

 public function getOrginalDegreeApplicant($id){
  $applicant=OrginalDegree::where('id',$id)->first();
  return response()->json($applicant);
 }

 public function OrginalDegreeRecieptAdd(Request $request,$id){
  $orginal=OrginalDegree::where('id',$id)->first();
  $validateData=$request->validate([
       'reciept_number'=>'required|unique:orginal_degrees,reciept_number,'.$id,
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
  $applicant=OrginalDegree::where('id',$id)->first();
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
  $applicant=OrginalDegree::where('id',$id)->first();
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
  $status=OrginalDegree:: where('year_of_graduation',$request->year_id)->where('application_number',$request->application_number)->first();
   if($status){
    return response()->json($status->status);
   }else{
     return response()->json([
      'message'=>'Incorrect Application Number or Year Of Application!',
     ]);
   }


}
public function orginalDegreeFile($id){
    $file=OrginalDegree::where('id',$id)->first();
    $file_path=$file->bank_receipt;
  //    return response()->json([
  //     'message'=>'You dowloaded a file!',
  //    ]);
     return response()->download(public_path($file_path));
}
public function orginalBankStatementFile($id){
    $file=OrginalDegree::where('id',$id)->first();
    $file_path=$file->bank_receipt;
  //    return response()->json([
  //     'message'=>'You dowloaded a file!',
  //    ]);
     return response()->download(public_path($file_path));
}
public function registerarCostSharingFile($id){
    $file=OrginalDegree::where('id',$id)->first();
    $file_path=$file->cost_sharing_letter;
  //    return response()->json([
  //     'message'=>'You dowloaded a file!',
  //    ]);
     return response()->download(public_path($file_path));
}
public function registerarOtherDocumentsFile($id){
    $file=OrginalDegree::where('id',$id)->first();
    $file_path=$file->cost_sharing_letter;
  //    return response()->json([
  //     'message'=>'You dowloaded a file!',
  //    ]);
     return response()->download(public_path($file_path));
}
}
