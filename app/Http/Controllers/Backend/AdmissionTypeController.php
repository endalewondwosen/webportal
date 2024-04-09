<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Models\AdmissionType;
use App\Http\Controllers\Controller;

class AdmissionTypeController extends Controller
{
   
    public function index()
    {
        $admissiontype=AdmissionType::all();
        return response()->json($admissiontype);
    }

    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:admission_types',
            
          ]);
         
          $admissiontype=new AdmissionType();
          $admissiontype->name=$request->name;
          if($admissiontype->save()){
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
        $admissiontype=AdmissionType::find($id);
        return response()->json($admissiontype);
    }


    public function update(Request $request, $id)
    {
        $admissiontype=AdmissionType::where('id',$id)->first();
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:admission_types,name,'.$id,
            
          ]);
          
          $admissiontype->name=$request->name;
          if($admissiontype->save()){
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
        $admissiontype=AdmissionType::find($id);
        // dd($user->toArray());
         if($admissiontype->delete()){
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
