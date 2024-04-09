<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamResult extends Model
{
   public function student(){
    return $this->belongsTo(AdmitStudent::class,'student_id','id');
   }
   public function departement(){
      return $this->belongsTo(Departement::class,'departement_id','id');
   }
}
