<?php

namespace App\Http\Controllers\Backend;

use App\Models\StudyLevel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StudyLevelController extends Controller
{  public function index()
    {
        $study_level=StudyLevel::all();
        return response()->json($study_level);
    }

 
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:acadamic_years',
          ]);
          $study_level=new StudyLevel();
          $study_level->name=$request->name;
          if($study_level->save()){
            return response()->json([
                'message'=>'Acadamic Year is successfully registered',
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
        $study_level=StudyLevel::find($id);
        return response()->json($study_level);
    }


    public function update(Request $request, $id)
    {
        $study_level=StudyLevel::where('id',$id)->first();
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:study_levels,name,'.$id,
            
          ]);
          
          $study_level->name=$request->name;
          if($study_level->save()){
            return response()->json([
                'message'=>'Acadmic Year is successfully registered',
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
        $study_level=StudyLevel::find($id);
        // dd($user->toArray());
         if($study_level->delete()){
            return response()->json([
                'message'=>'Acadamic year deleted successfully',
                'status_code'=>200
            ],200);
         }else{
            return response()->json([
                'message'=>'something went wrong happen please try again!',
                'status_code'=>500
            ],500); 
         } 
    }
}
