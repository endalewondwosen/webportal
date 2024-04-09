<?php

namespace App\Models;

use App\Models\AcadamicYear;
use App\Models\AdmissionType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Calendar extends Model
{
    use HasFactory;
    public function acadmic_year(){
        return $this->BelongsTo(AcadamicYear::class,'acadamic_year','id');
     }
         public function addmission_type(){
            return $this->BelongsTo(AdmissionType::class,'addmission_type','id');
         }
}
