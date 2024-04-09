<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use App\Models\AcadamicYear;
use Illuminate\Http\Request;
use App\Models\AdmissionType;

class CalendarController extends Controller
{
    public function getCalendars(){
        // return Calendar::all();
        return  $calendar=Calendar::with('acadmic_year','addmission_type')->get();
    }
    public function index(){

        return $calendar=Calendar::with('acadmic_year','addmission_type')->get();
    }
    public function create(Request $request){
        $request->validate([
            'date'=>'required',
            'activity'=>'required',
            'acadamic_year'=>'required',
            'addmission_type'=>'required',

        ]);
        $calendar=new Calendar();
        $calendar->date=$request->date;
        $calendar->activity=$request->activity;
        $calendar->addmission_type=$request->addmission_type;
        $calendar->acadamic_year=$request->acadamic_year;

            if($calendar->save()){

              // Mail::to("girmay12adisu@gmail.com")->send(new ApplicationMail($details));

                return response()->json([
                    'message'=>'Your have added calendar successfully ',
                    'status_code'=>200,
                ],200);
              }else{
                return response()->json([
                    'message'=>'something happened wrong,please try again!',
                    'status_code'=>500,
                ],500);
              }
    }
    public function show($id){
        return $calendar=Calendar::with('acadmic_year','addmission_type')->where('id',$id)->first();  
    }
    public function update(Request $request,$id){
        $calendar= Calendar::where('id',$id)->first();
        $request->validate([
            'date'=>'required',
            'activity'=>'required',
            'addmission_type'=>'required',
            'acadamic_year'=>'required',
 ]);
        
        $calendar->date=$request->date;
        $calendar->activity=$request->activity;
        $calendar->addmission_type=$request->addmission_type;
        $calendar->acadamic_year=$request->acadamic_year;

            if($calendar->save()){

              // Mail::to("girmay12adisu@gmail.com")->send(new ApplicationMail($details));

                return response()->json([
                    'message'=>'Your have Updated calendar successfully ',
                    'status_code'=>200,
                ],200);
              }else{
                return response()->json([
                    'message'=>'something happened wrong,please try again!',
                    'status_code'=>500,
                ],500);
              }
    }
    public function destroy($id){
        $calendar=Calendar::find($id);
        $calendar->delete();
        return response()->Json(['message'=>'data deleted successfully!!']);
    }
      
    
}
