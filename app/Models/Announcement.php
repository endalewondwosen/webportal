<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
 public function semister(){
    return $this->belongsTo(Semister::class,'semister_id','id');
 }

 public function year(){
    return $this->belongsTo(AcadamicYear::class,'year_id','id');
 }
}
