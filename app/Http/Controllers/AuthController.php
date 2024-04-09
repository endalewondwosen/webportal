<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Mail\VerficationMail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
   public function register(Request $request){
      $vliadateData=$request->validate([
        'name'=>'required|string|max:255',
        'email'=>'required|email|unique:users',
        'password'=>'required|confirmed|min:6',
      ]);
      
      $user=new User(); 
      $user->name=$request->name;
      $user->email=$request->email;
      $user->password=bcrypt($request->password);
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

   public function login(Request $request){
    // echo "successufully logged";
    $request->validate([
        'email' => 'required|string|email',
        'password' => 'required',
        'remember_me' => 'boolean'
    ]);

    if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
        return response()->json([
            'message' => 'Invalid username/password',
            'status_code' => 401
        ], 401);

    }

    $user = $request->user();

    if ($user->role == 'Admin') {
        $tokenData= $user->createToken('Personal Access Token', ['Admin']);
    }else if($user->role == 'Finance') {
        $tokenData = $user->createToken('Personal Access Token', ['Finance']);
    }
    else if($user->role == 'Department') {
        $tokenData = $user->createToken('Personal Access Token', ['Department']);
    }
    else if($user->role == 'Registrar') {
        $tokenData = $user->createToken('Personal Access Token', ['Registrar']);
    }
    else  {
        $tokenData = $user->createToken('Personal Access Token', ['User']);
    }

    $token = $tokenData->token;

    if ($request->remember_me) {
        $token->expires_at = Carbon::now()->addWeeks(1);
    }

    if ($token->save()) {
        return response()->json([
            'user' => $user,
            'access_token' => $tokenData->accessToken,
            'token_type' => 'Bearer',
            'token_scope' => $tokenData->token->scopes[0],
            'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
            'status_code' => 200
        ], 200);
    } else {
        return response()->json([
            'message' => 'Some error occurred, Please try again',
            'status_code' => 500
        ], 500);
    }
   }

   public function logout(Request $request){
    $request->user()->token()->revoke();
    return response()->json([
        'message'=>'logout successfully',
        'status_code'=>200
    ],200);
   }
   public function forgetPasswordRequest(Request $request){
    $request->validate([
        'email' => 'required|email'
    ]);

    $user = User::where('email', $request->email)->first();
    if (!$user) {
        return response()->json([
            'message' => 'We can not find this email address,please try again!',
            'status_code' => 405
        ], 405);
    } else {
        $random = rand(111111, 999999);

        $user->verification_code = $random;
        if ($user->save()) {
            $userData = [
                'email' => $user->email,
                'full_name' => $user->name,
                'random' => $random,
                'title'=>'MAIL FROM WOLLO UNIVERSITY PORTAL',
                'body'=>"This Is Your verfication code to reset your password",
            ];
            Mail::to($userData['email'])->send(new VerficationMail($userData));

            if (Mail::failures()) {
                return response()->json([
                    'message' => 'Some error occurred, Please try again',
                    'status_code' => 500
                ], 500);
            } else {
                return response()->json([
                    'message' => 'We have sent a verification code to your email address',
                    'status_code' => 200
                ], 200);
            }
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
}

public function ResetPasswordRequest(Request $request){
    $request->validate([
        'email' => 'required|email',
        'verification_code' => 'required|integer',
        'password' => 'required|confirmed|min:6',
    ]);

    $user = User::where('email', $request->email)->where('verification_code', $request->verification_code)->first();
    if (!$user) {
        return response()->json([
            'message' => 'User not found/Invalid code',
            'status_code' => 401
        ], 401);
    } else {
        $user->password = bcrypt(trim($request->password));
        $user->verification_code = Null;

        if ($user->save()) {
            return response()->json([
                'message' => 'Password updated successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
}
}
