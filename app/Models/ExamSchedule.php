<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamSchedule extends Model
{
    public function announce(){
        return $this->belongsTo(Announcement::class,'announce','id');
    }
}
