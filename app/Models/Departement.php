<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departement extends Model
{
   
 public function college(){
    return $this->belongsTo(Collegue::class,'collegue_id','id');
 }
 
 public function admission(){
   return $this->belongsTo(AdmissionType::class,'admissionType_id','id');
}
public function studyLevel(){
   return $this->belongsTo(StudyLevel::class,'studyLevel_id','id');
}
public function studDep(){

       return $this->hasMany(Student::class, 'departement_id', 'id');
   
}
}
