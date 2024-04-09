<?php

namespace App\Http\Controllers\Backend;

use App\Models\ExamResult;
use App\Models\AdmitStudent;
use App\Models\ExamSchedule;
use Illuminate\Http\Request;
use App\Exports\examTakerStudents;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class DepartmentRoleController extends Controller
{
    public function getselectedApplicants($id){
    $admit=AdmitStudent::with(['year','exam','admission','study','announce'])
    ->where('status','1')
    ->where('departement_id',$id)
    ->get();
    //dd($admit->toArray());
        
         return response()->json($admit);
    }

    public function getstudentExamResult($id){
          $student=ExamResult::where('student_id',$id)->first();
           return response()->json($student);     
    }

   public function addExamResult(Request $request,$id){
     $exam=ExamResult::where('student_id',$id)->first();
  
      $validateData=$request->validate([
        'exam_result'=>'required', 
        'status'=>'required',
   ]);
      $exam->exam_result=$request->exam_result;
      $exam->status=$request->status;
      if($exam->save()){
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

   public function allPassedStudents(){
   
       $passed=ExamResult::with(['student'])->where('status','1')->get();
       return response()->json($passed);

   }

   public function getSchedules($id){
    $schedule=ExamSchedule::with(['announce'])->where('user_id',$id)->get();
    return response()->json($schedule);
   }

   public function deleteSchedule($id){
    $schedule=ExamSchedule::find($id);
        // dd($user->toArray());
         if($schedule->delete()){
            return response()->json([
                'message'=>'Schedule deleted successfully',
                'status_code'=>200
            ],200);
         }else{
            return response()->json([
                'message'=>'something went wrong happen, please try again!',
                'status_code'=>500
            ],500); 
         } 
   }

   public function addExamSchedule(Request $request){
        $validateData=$request->validate([
            'announce'=>'required|unique:exam_schedules',
            'exam_date'=>'required',
            'exam_time'=>'required',
            'exam_place'=>'required',
            'description'=>'required',
        ]);
    $exam=new ExamSchedule();
    $exam->announce=$request->announce;
    $exam->user_id=$request->user_id;
    $exam->exam_date=$request->exam_date;
    $exam->exam_time=$request->exam_time;
    $exam->exam_place=$request->exam_place;
    $exam->description=$request->description;
     if($exam->save()){
      return response()->json([
        'message'=>'schedule succesfuly saved',
      ],200);
     } else{
      return response()->json([
        'message'=>'Something happning wrong',
      ],500);
     }
   }

   public function getsingleSchedule($id){
        $schedule=ExamSchedule::where('id',$id)->first();
         return response()->json($schedule);
   }
   public function UpdateExamSchedule(Request $request,$id){
    $exam=ExamSchedule::where('id',$id)->first();
    $validateData=$request->validate([
      'announce'=>'required|unique:exam_schedules,announce,'.$id,
      'exam_date'=>'required',
      'exam_time'=>'required',
      'exam_place'=>'required',
      'description'=>'required',
  ]);
        $exam->announce=$request->announce;
        $exam->user_id=$request->user_id;
        $exam->exam_date=$request->exam_date;
        $exam->exam_time=$request->exam_time;
        $exam->exam_place=$request->exam_place;
        $exam->description=$request->description;
if($exam->save()){
return response()->json([
  'message'=>'schedule succesfuly saved',
],200);
} else{
return response()->json([
  'message'=>'Something happning wrong',
],500);
}
   }

   public function frontschedules(){
    $schedule=ExamSchedule::with(['announce'])->get();
     return response()->json($schedule);
   }
   public function getScheduleDetail($id){
    $schedule=ExamSchedule::with(['announce'])->where('id',$id)->get();
    return response()->json($schedule);
   }

   public function downloadAllExamApplicants(Request $request){
    return Excel::download(new examTakerStudents($request->id),'exam_taker_Students.xlsx');

   }
}




