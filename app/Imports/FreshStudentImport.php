<?php

namespace App\Imports;

use App\Models\Collegue;
use App\Models\AcadamicYear;
use App\Models\FreshStudent;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\concerns\WithHeadingRow;

class FreshStudentImport implements ToModel,WithHeadingRow
{
    private $years,$collegues;
    public function __construct(){
        $this->years=AcadamicYear::select('id','name')->get();
        $this->collegues=Collegue::select('id','name')->get();
    }
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        // dd($this->years);
        $year=$this->years->where('name',$row['acadamic_year'])->first();
        $collegue=$this->collegues->where('name',$row['collegue'])->first();

        return new FreshStudent([
            'college_id'=>$collegue->id ?? null,
            'year_id'=>$year->id ?? null,
            'first_name'=>$row['first_name'],
            'lastname_name'=>$row['lastname_name'],
            'grand_father_name'=>$row['grand_father_name'],
            'sex'=>$row['sex'],
            'unversity_id'=>$row['unversity_id'],
            'password'=>$row['password'],
            'section'=>$row['section'],
            'regstration_number'=>$row['regstration_number'],
            'campus'=>$row['campus'],
            'block_number'=>$row['block_number'],
            'dorm_number'=>$row['dorm_number'],

        ]);
    }
}
