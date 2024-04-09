<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreshStudent extends Model
{
   protected $fillable=[
              'college_id',
               'year_id',
               'first_name',
               'lastname_name',
               'grand_father_name',
               'sex',
               'unversity_id',
               'password','section',
               'regstration_number',
               'campus',
               'block_number',
               'dorm_number'];
    public function college(){
        return $this->belongsTo(Collegue::class,'college_id','id');
     }
     public function year(){
        return $this->belongsTo(AcadamicYear::class,'year_id','id');
     }
}
