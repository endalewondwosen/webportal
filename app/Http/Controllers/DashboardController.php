<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Collegue;
use App\Models\Departement;
use App\Models\Announcement;
use App\Models\FreshStudent;
use Illuminate\Http\Request;
use App\Models\GraduatedStudent;

class DashboardController extends Controller
{
    public function programs(){
    $programs=Departement::count();
    return response()->json($programs);
    }
    public function fresh_Student(){
        $fstudent=FreshStudent::count();
        return response()->json($fstudent);
    }
    public function graduatedStudent(){
        $gstudent=GraduatedStudent::count();
        return response()->json($gstudent);
    }
    public function activeAnnouncemnt(){
        $announce=Announcement::where('status','Active')->count();
        return response()->json($announce);
    }
    public function colleges(){
        $colloge = Collegue::count();
        return response()->json($colloge);
    }
    public function acitveUsers(){
        $users = User::with(['departement'])->get();
        return response()->json($users);
    }
}
