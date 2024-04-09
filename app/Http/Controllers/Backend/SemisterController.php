<?php

namespace App\Http\Controllers\Backend;

use App\Models\Semister;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SemisterController extends Controller
{
    
    public function index()
    {
        $semister=Semister::all();
        return response()->json($semister);
    }

 
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:semisters',
            
          ]);
          $semister=new Semister();
          $semister->name=$request->name;
          if($semister->save()){
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
        $semister=Semister::find($id);
        return response()->json($semister);
    }


    public function update(Request $request, $id)
    {
        $semister=Semister::where('id',$id)->first();
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:semisters,name,'.$id,
            
          ]);
          
          $semister->name=$request->name;
          if($semister->save()){
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
        $semister=Semister::find($id);
        // dd($user->toArray());
         if($semister->delete()){
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
