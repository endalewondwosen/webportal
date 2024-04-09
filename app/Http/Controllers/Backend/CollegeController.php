<?php

namespace App\Http\Controllers\Backend;

use App\Models\Collegue;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CollegeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
          $college=Collegue::all();
          //dd($college->toArray());
          return response()->json($college);
    }

 
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:collegues',
            
          ]);
          $college=new Collegue();
          $college->name=$request->name;
          if($college->save()){
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
        $college=Collegue::find($id);
        return response()->json($college);
    }

 
    public function update(Request $request, $id)
    {
        $college= Collegue::where('id',$id)->first();
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:collegues,name,'.$id,
            
          ]);
       
          $college->name=$request->name;
          if($college->save()){
            return response()->json([
                'message'=>'College is successfully Updated',
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
        $college=Collegue::find($id);
        // dd($user->toArray());
         if($college->delete()){
            return response()->json([
                'message'=>'user deleted successfully',
                'status_code'=>200
            ],200);
         }else{
            return response()->json([
                'message'=>'something wrong happen please try again!',
                'status_code'=>500
            ],500); 
         } 
    }
}
