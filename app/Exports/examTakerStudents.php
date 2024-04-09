<?php

namespace App\Exports;

use App\Models\ExamResult;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;

class examTakerStudents implements FromCollection, WithMapping, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */

    protected $id;

 function __construct($id) {
        $this->id = $id;
 }
    public function collection()
    {
        return ExamResult::with(['student','departement'])->where('departement_id',$this->id)->get();
    }
    public function map($examResult) : array {
        return [
            $examResult->student->first_name,
            $examResult->student->father_name,
            $examResult->student->grand_father_name,
            $examResult->student->sex,
            $examResult->student->mobile_number,
            $examResult->departement->name,
            $examResult->exam_number,
            $examResult->exam_result
            
        ] ;
 
 
    }
    public function headings() : array {
        return [
           'Name',
           'Middle Name',
           'Last Name',
           'Sex',
           'Mobile Nmber',
           'Departement',
           'Exam Number',
           'Exam Result'
        ] ;
    }
}
