<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Models\GraduatedStudent;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\GraduatedStudentsImport;

class GraduatedStudentController extends Controller
{ 
    public function index()
    {
        $graduate_student=GraduatedStudent::with(['college','year','admission','study','departement'])->get();
        return response()->json($graduate_student);
    }

  
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'first_name'=>'required',
            'father_name'=>'required',
            'grand_father_name'=>'required',
            'sex'=>'required',
            'unversity_id'=>'required|unique:graduated_students',
            'mobile_number'=>'required|unique:graduated_students|',
            'email'=>'required|email|unique:graduated_students',
            'admission_type'=>'required',
            'study_level'=>'required',
            'college_id'=>'required',
            'departement_id'=>'required',
            'year_id'=>'required',
          ]);
          $graduate_student=new GraduatedStudent();
          $graduate_student->first_name=$request->first_name;
          $graduate_student->father_name=$request->father_name;
          $graduate_student->grand_father_name=$request->grand_father_name;
          $graduate_student->sex=$request->sex;
          $graduate_student->unversity_id=$request->unversity_id;
          $graduate_student->mobile_number=$request->mobile_number;
          $graduate_student->email=$request->email;
          $graduate_student->admission_type=$request->admission_type;
          $graduate_student->study_level=$request->study_level;
          $graduate_student->college_id=$request->college_id;
          $graduate_student->departement_id=$request->departement_id;
          $graduate_student->year_id=$request->year_id;

          if($graduate_student->save()){
            return response()->json([
                'message'=>'Gratuate Student is successfully registered',
                'status_code'=>201,
            ],201);
          }else{
            return response()->json([
                'message'=>'something happened wrong,please try again!',
                'status_code'=>500,
            ],500);
          }
    }
    // import from excel
public function importGraduateStudents(Request $request){
    // dd('yes');
    Excel::import(new GraduatedStudentsImport, $request->excelFile);
    return response()->Json(['message'=>'student imported successfuly']);
}
    public function show($id)
    {
        $graduate_student=GraduatedStudent::find($id);
        return response()->json($graduate_student);
    }

  
    public function update(Request $request, $id)
    {
        $graduate_student= GraduatedStudent::where('id',$id)->first();
       // dd($dept->toArray());
       $validateData=$request->validate([
        'first_name'=>'required',
        'father_name'=>'required',
        'grand_father_name'=>'required',
        'sex'=>'required',
        'unversity_id'=>'required|unique:graduated_students,unversity_id,'.$id,
        'mobile_number'=>'required|unique:graduated_students,mobile_number,'.$id,
        'email'=>'required|email|unique:graduated_students,email,'.$id,
        'admission_type'=>'required',
        'study_level'=>'required',
        'college_id'=>'required',
        'departement_id'=>'required',
        'year_id'=>'required',
      ]);
          $graduate_student->first_name=$request->first_name;
          $graduate_student->father_name=$request->father_name;
          $graduate_student->grand_father_name=$request->grand_father_name;
          $graduate_student->sex=$request->sex;
          $graduate_student->unversity_id=$request->unversity_id;
          $graduate_student->mobile_number=$request->mobile_number;
          $graduate_student->email=$request->email;
          $graduate_student->admission_type=$request->admission_type;
          $graduate_student->study_level=$request->study_level;
          $graduate_student->college_id=$request->college_id;
          $graduate_student->departement_id=$request->departement_id;
          $graduate_student->year_id=$request->year_id;
          if($graduate_student->save()){
            return response()->json([
                'message'=>'Graduate Student is successfully registered',
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
        $graduate_student=GraduatedStudent::find($id);
        // dd($user->toArray());
         if($graduate_student->delete()){
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

    public function getStudentId($unversity_id){
        $graduate_student=GraduatedStudent::with(['college','year','admission','study','departement'])->where('unversity_id',$unversity_id)->first(); 
        return response()->json($graduate_student);
    }

 
}
