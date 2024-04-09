<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GraduatedStudent extends Model
{
   protected $fillable=[
         'first_name',
         'father_name',
         'grand_father_name',
         'sex',
         'unversity_id',
         'mobile_number',
         'email',
         'admission_type',
         'study_level',
         'college_id',
         'departement_id',
         'year_id',
];
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
}
