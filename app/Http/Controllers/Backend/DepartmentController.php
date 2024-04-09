<?php

namespace App\Http\Controllers\Backend;

use App\Models\Departement;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DepartmentController extends Controller
{

    public function index()
    {
        $dept=Departement::with(['college','admission','studyLevel'])->get();
        return response()->json($dept);
    }

  
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:departements',
            'collegue_id'=>'required',
            'studyLevel_id'=>'required',
            'admissionType_id'=>'required',
            'duration'=>'required',

          ]);
          $dept=new Departement();
          $dept->name=$request->name;
          $dept->collegue_id=$request->collegue_id;
          $dept->studyLevel_id=$request->studyLevel_id;
          $dept->admissionType_id=$request->admissionType_id;
          $dept->duration=$request->duration;
          if($dept->save()){
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

    public function show($id)
    {
        $data=Departement::find($id);
        return response()->json($data);
    }
 
  
    public function update(Request $request, $id)
    {
        $dept= Departement::where('id',$id)->first();
       // dd($dept->toArray());
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:departements,name,'.$id,
             'collegue_id'=>'required',
             'studyLevel_id'=>'required',
            'admissionType_id'=>'required',
            'duration'=>'required',
          ]);
         
          $dept->name=$request->name;
          $dept->collegue_id=$request->collegue_id;
          $dept->studyLevel_id=$request->studyLevel_id;
          $dept->admissionType_id=$request->admissionType_id;
          $dept->duration=$request->duration;
          if($dept->save()){
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
        $dept=Departement::find($id);
        // dd($user->toArray());
         if($dept->delete()){
            return response()->json([
                'message'=>'user deleted successfully',
                'status_code'=>200
            ],200);
         }else{
            return response()->json([
                'message'=>'something went wrong happen, please try again!',
                'status_code'=>500
            ],500); 
         } 
      
    }
    public function getPrograms(){
        $dept=Departement::with(['college','admission','studyLevel'])->get();
        return response()->json($dept);
    }
}
