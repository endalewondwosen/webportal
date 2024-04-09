<?php

namespace App\Exports;

use App\Models\ExamResult;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;

class PassedStudentsList implements FromCollection, WithMapping, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ExamResult::with(['student'])->where('status','1')->get();
    }
    public function map($examResult) : array {
        return [
            $examResult->student->first_name,
            $examResult->student->father_name,
            $examResult->student->grand_father_name,
            $examResult->student->sex,
            $examResult->student->mobile_number,
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
           'Exam Result'
        ] ;
    }
}
