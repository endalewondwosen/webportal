<?php

namespace App\Http\Controllers\Backend;

use App\Models\AcadamicYear;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AcadamicYearController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $acadamic=AcadamicYear::all();
        return response()->json($acadamic);
    }

 
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:acadamic_years',
            
          ]);
          $acadmics=new AcadamicYear();
          $acadmics->name=$request->name;
          if($acadmics->save()){
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
        $acadmics=AcadamicYear::find($id);
        return response()->json($acadmics);
    }


    public function update(Request $request, $id)
    {
        $acadamic=AcadamicYear::where('id',$id)->first();
        $validateData=$request->validate([
            'name'=>'required|string|max:255|unique:acadamic_years,name,'.$id,
            
          ]);
          
          $acadamic->name=$request->name;
          if($acadamic->save()){
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
        $acadamic=AcadamicYear::find($id);
        // dd($user->toArray());
         if($acadamic->delete()){
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
