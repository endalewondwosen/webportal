<?php

namespace App\Http\Controllers\Backend;

use Auth;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AnnouncementController extends Controller
{
    public function index()
    {
     
        $anouncement=Announcement::with(['semister','year'])->latest();
        return response()->json($anouncement);
    }

    public function getAnnouncements($user_id){
        $anouncement=Announcement::with(['semister','year'])->where('user_id','=',$user_id)->orderBy('id', 'desc')
        ->get(); 

        return response()->json($anouncement);  
    }

  
    public function store(Request $request,$id)
    {
        $validateData=$request->validate([
            'title'=>'required|string|max:255',
            'content'=>'required',
            'year_id'=>'required',
            'semister_id'=>'required',
            'admission_start_date'=>'required',
            'admission_end_date'=>'required',

          ]);
          $anouncement=new Announcement();
          $anouncement->title=$request->title;
          $anouncement->content=$request->content; 
          $anouncement->year_id=$request->year_id; 
          $anouncement->semister_id=$request->semister_id;
          $anouncement->admission_start_date=$request->admission_start_date;
          $anouncement->admission_end_date=$request->admission_end_date;
          $anouncement->user_id=$id;
          if($anouncement->save()){
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
        $data=Announcement::find($id);
        return response()->json($data);
    }

  
    public function update(Request $request, $id)
    {
        $anouncement=Announcement::where('id',$id)->first();
        $validateData=$request->validate([
        'title'=>'required|string|max:255',
        'content'=>'required',
        'year_id'=>'required',
        'semister_id'=>'required',
        'admission_start_date'=>'required',
        'admission_end_date'=>'required',

      ]);
      $anouncement->title=$request->title;
      $anouncement->content=$request->content; 
      $anouncement->year_id=$request->year_id; 
      $anouncement->semister_id=$request->semister_id;
      $anouncement->admission_start_date=$request->admission_start_date;
      $anouncement->admission_end_date=$request->admission_end_date;
      if($anouncement->save()){
        return response()->json([
            'message'=>'Announcement is Updated Successfully',
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
        $dept=Announcement::find($id);
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

    public function statusDeactivate(Request $request, $id){
        $statusData=Announcement::where('id',$id)->first();
            if( $statusData->status=='Active'){
                $statusData->status='Deactive';
            }else{
             $statusData->status='Active'; 
            }
        
        if($statusData->save()){
            return response()->json([
                'message'=>'Announcement Satatus updated Successfully',
                'status_code'=>201,
            ],201);
          }else{
            return response()->json([
                'message'=>'something happened wrong,please try again!',
                'status_code'=>500,
            ],500);
          }
    }

    public function getAnnouncemts(){
        $anouncement=Announcement::with(['semister','year'])->where('status','Active')->get();
       return response()->json($anouncement);
    }
   public function getAnnouncemtDetail($id){
    $anouncement=Announcement::with(['semister','year'])->where('status','Active')->where('id',$id)->get();
      return response()->json($anouncement,);
   }  

   public function getAnnouncmetDetail($id){
    $anouncement=Announcement::with(['semister','year'])->where('id',$id)
    ->get(); 
    return response()->json($anouncement);  

   }
}
