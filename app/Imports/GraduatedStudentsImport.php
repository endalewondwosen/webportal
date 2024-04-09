<?php

namespace App\Imports;

use App\Models\Collegue;
use App\Models\StudyLevel;
use App\Models\Departement;
use App\Models\AcadamicYear;
use App\Models\AdmissionType;
use App\Models\GraduatedStudent;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\concerns\WithHeadingRow;
class GraduatedStudentsImport implements ToModel,WithHeadingRow
{
    private $collegues,$years,$departments,$admition_types,$study_levels;
    public function __construct(){
        // dd('hello');
        $this->years=AcadamicYear::select('id','name')->get();
        $this->collegues=Collegue::select('id','name')->get();
        $this->departments=Departement::select('id','name')->get();
        $this->admition_types=AdmissionType::select('id','name')->get();
        $this->study_levels=StudyLevel::select('id','name')->get();
    }
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        //  dd($this->years);
         $collegue=$this->collegues->where('name',$row['college'])->first();
         $year=$this->years->where('name',$row['acadamic_year'])->first();
         $department=$this->departments->where('name',$row['departement'])->first();
         $admition_type=$this->admition_types->where('name',$row['admission_type'])->first();
         $study_level=$this->study_levels->where('name',$row['study_level'])->first();


        return new GraduatedStudent([
        'first_name'=>$row['first_name'],
        'father_name'=>$row['father_name'],
        'grand_father_name'=>$row['grand_father_name'],
        'sex'=>$row['sex'],
        'unversity_id'=>$row['unversity_id'],
        'mobile_number'=>$row['mobile_number'],
        'email'=>$row['email'],
        'admission_type'=>$admition_type->id ?? null,
        'study_level'=>$study_level->id ?? null,
        'college_id'=>$collegue->id ?? null,
        'departement_id'=>$department->id ?? null,
        'year_id'=>$year->id ?? null,











        ]);
    }
}
