<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\user\UserResource;
use Auth;
class UserController extends Controller
{
    public function index()
    {
        $user=User::with(['departement'])->get();
        return response()->json($user);
    }

    
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required|string|max:255',
            'email'=>'required|email|unique:users',
            'role'=>'required',
          ]);
          $user=new User();
          $user->name=$request->name;
          $user->email=$request->email;
          $user->departement=$request->departement;
          $code=rand('000000','999999');
        
          $user->password=bcrypt($code);
          $user->code=$code;
          $user->role=$request->role;
          if($user->save()){
            return response()->json([
                'message'=>'user is successfully registered',
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
     $data=User::where('id',$id)->first();
       return response()->json($data);
    }

  
    public function update(Request $request, $id){
        $user= User::where('id',$id)->first();
         $validateData=$request->validate([
            'name'=>'required|string|max:255',
            'email'=>'required|email|unique:users,email,'.$id,
            'role'=>'required',
          ]);
          $user->name=$request->name;
          $user->email=$request->email;
          $user->departement=$request->departement;
          $code=rand('000000','999999');
        
          $user->password=bcrypt($code);
          $user->code=$code;
          $user->role=$request->role;
          if($user->save()){
            return response()->json([
                'message'=>'user is successfully Updated',
                'status_code'=>201,
            ],201);
          }else{
            return response()->json([
                'message'=>'something happened wrong,please try again!',
                'status_code'=>500,
            ],500);
          }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         $user=User::find($id);
        // dd($user->toArray());
         if($user->delete()){
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
     public function updateProfile(Request $request,$id){
      $user=User::where('id',$id)->first();
      $validateData=$request->validate([
        'name'=>'required|string|max:255',
        'father_name'=>'required|string|max:255',
        'gfather_name'=>'required|string|max:255',
        'company'=>'required|string|max:255',
        'country'=>'required|string|max:255',
        'address'=>'required|string|max:255',
        'phone'=>'required|string|max:255',
        'email'=>'required|email',

           ]);  
           $user->name=$request->name;
           $user->father_name=$request->father_name;
           $user->gfather_name=$request->gfather_name; 
           $user->company=$request->company;
           $user->country=$request->country;
           $user->address=$request->address;
           $user->phone=$request->phone;
           $user->email=$request->email;
             if($user->save()){
              return response()->json([
                'message'=>'Your profile updated successfully ',
                'status_code'=>201,
            ],201);
             }else{
              return response()->json([
                'message'=>'something happining wrong please try Again',
                'status_code'=>500,
            ],500);
             }

           
          
     }
     
     public function updatePassword(Request $request,$id){
      $user=User::where('id',$id)->first();
      $validateData=$request->validate([
        'current_password'=>'required|string|max:255',
        'new_password'=>'required|confirmed|min:6',
      ]);
      if (!(Hash::check($request->current_password, $user->password))) {
        // The passwords matches
        return response()->json([
          'message'=>'Your current password does not matches with the password.',
      ],401);
    }
    if(strcmp($request->current_password, $request->new_password) == 0){
      // Current password and new password same
      return response()->json([
        'message'=>'New Password cannot be same as your current password.',
    ],401);
  }
      $user->password = bcrypt($request->new_password);
      $user->save();
      return response()->json([
        'message'=>'Your Password is Updated Successfully',
        'status_code'=>201,
    ],201);
     }
}
 