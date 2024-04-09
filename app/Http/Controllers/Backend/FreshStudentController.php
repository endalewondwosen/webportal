<?php

namespace App\Http\Controllers\Backend;

use App\Models\FreshStudent;
use Illuminate\Http\Request;
use App\Imports\FreshStudentImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class FreshStudentController extends Controller
{
    
    public function index()
    {
        $fresh_student=FreshStudent::with(['college','year'])->get();
        return response()->json($fresh_student);
    }

  
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'first_name'=>'required',
            'lastname_name'=>'required',
            'grand_father_name'=>'required',
            'sex'=>'required',
            'unversity_id'=>'required|unique:fresh_students',
            'password'=>'required',
            'section'=>'required',
            'regstration_number'=>'required|unique:fresh_students',
            'campus'=>'required',
            'college_id'=>'required',
            'block_number'=>'required',
            'dorm_number'=>'required',
             'year_id'=>'required'
          ]);
          $fresh_student=new FreshStudent();
          $fresh_student->first_name=$request->first_name;
          $fresh_student->lastname_name=$request->lastname_name;
          $fresh_student->grand_father_name=$request->grand_father_name;
          $fresh_student->sex=$request->sex;
          $fresh_student->unversity_id=$request->unversity_id;
          $fresh_student->password=$request->password;
          $fresh_student->section=$request->section;
          $fresh_student->regstration_number=$request->regstration_number;
          $fresh_student->campus=$request->campus;
          $fresh_student->college_id=$request->college_id;
          $fresh_student->block_number=$request->block_number;
          $fresh_student->dorm_number=$request->dorm_number;
          $fresh_student->year_id=$request->year_id;

          if($fresh_student->save()){
            return response()->json([
                'message'=>'College is successfully registered',
                'status_code'=>201,
            ],201);
          }else{
            return response()->json([
                'message'=>'something happened wrong,please try again!',
                'status_code'=>500,
            ],500);
          }
    }
    public function importFreshStudents(Request $request){
        // dd('hey');
        $request->validate([
            'excelFile'=>'file|required|mimes:xlsx',

        ]);
        // dd($request->all());
        Excel::import(new FreshStudentImport, $request->excelFile);
        return response()->Json(['message'=>'student imported successfuly']);
    }
    public function show($id)
    {
        $fresh_student=FreshStudent::find($id);
        return response()->json($fresh_student);
    }

  
    public function update(Request $request, $id)
    {
        $fresh_student= FreshStudent::where('id',$id)->first();
       // dd($dept->toArray());
       $validateData=$request->validate([
        'first_name'=>'required',
        'lastname_name'=>'required',
        'grand_father_name'=>'required',
        'sex'=>'required',
       'unversity_id'=>'required|unique:fresh_students,unversity_id,'.$id,
        'password'=>'required',
        'section'=>'required',
       'regstration_number'=>'required|unique:fresh_students,regstration_number,'.$id,
        'campus'=>'required',
        'college_id'=>'required',
        'block_number'=>'required',
        'dorm_number'=>'required',
         'year_id'=>'required'
      ]);
      $fresh_student->first_name=$request->first_name;
      $fresh_student->lastname_name=$request->lastname_name;
      $fresh_student->grand_father_name=$request->grand_father_name;
      $fresh_student->sex=$request->sex;
      $fresh_student->unversity_id=$request->unversity_id;
      $fresh_student->password=$request->password;
      $fresh_student->section=$request->section;
      $fresh_student->regstration_number=$request->regstration_number;
      $fresh_student->campus=$request->campus;
      $fresh_student->college_id=$request->college_id;
      $fresh_student->block_number=$request->block_number;
      $fresh_student->dorm_number=$request->dorm_number;
      $fresh_student->year_id=$request->year_id;
          if($fresh_student->save()){
            return response()->json([
                'message'=>'College is successfully registered',
                'status_code'=>201,
            ],201);
          }else{
            return response()->json([
                'message'=>'something happened wrong,please try again!',
                'status_code'=>500,
            ],500);
          }
    }

    public function destroy($id)
    {
        $fresh_student=FreshStudent::find($id);
        // dd($user->toArray());
         if($fresh_student->delete()){
            return response()->json([
                'message'=>'Student deleted successfully',
                'status_code'=>200
            ],200);
         }else{
            return response()->json([
                'message'=>'something went wrong happen, please try again!',
                'status_code'=>500
            ],500); 
         } 
    }

    public function getStudentData(Request $request){
         $validateData=$request->validate([
           'regstration_number'=>'required',
         ]);
        
        $fresh_student=FreshStudent::with(['college','year'])->where('regstration_number',$request->regstration_number)->first();
        // dd($fresh_student->toArray());
        return response()->json($fresh_student);
    }
}
