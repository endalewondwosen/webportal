<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficialTranscript extends Model
{
    public function college(){
        return $this->belongsTo(Collegue::class,'college_id','id');
     }
     public function year(){
        return $this->belongsTo(AcadamicYear::class,'year_of_graduation','id');
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
