<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AdmitStudent extends Model
{
   
    public function college(){
        return $this->belongsTo(Collegue::class,'college_id','id');
     }
     public function year(){
        return $this->belongsTo(AcadamicYear::class,'year_id','id');
     }
     public function admission(){
        return $this->belongsTo(AdmissionType::class,'admission_type','id');
     } 
     public function study(){
        return $this->belongsTo(StudyLevel::class,'study_level','id');
     }
     public function departement(){
        return $this->belongsTo(Departement::class,'departement_id','id');
     }
     public function announce(){
        return $this->belongsTo(Announcement::class,'announcement_id','id');
     }

     public function exam(){
      return $this->hasMany(ExamResult::class,'student_id','id');
     }
}
