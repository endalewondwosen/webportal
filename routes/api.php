<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Backend\MailController;
use App\Http\Controllers\Backend\CollegeController;
use App\Http\Controllers\Backend\PaymentController;
use App\Http\Controllers\Backend\SemisterController;
use App\Http\Controllers\Backend\DepartmentController;
use App\Http\Controllers\Backend\StudyLevelController;
use App\Http\Controllers\Frontend\AdmissionController;
use App\Http\Controllers\Backend\AcadamicYearController;
use App\Http\Controllers\Backend\AnnouncementController;
use App\Http\Controllers\Backend\FreshStudentController;
use App\Http\Controllers\Frontend\StudentCopyController;
use App\Http\Controllers\Backend\AdmissionTypeController;
use App\Http\Controllers\Backend\DepartmentRoleController;
use App\Http\Controllers\Frontend\OrginalDegreeController;
use App\Http\Controllers\Backend\GraduatedStudentController;
use App\Http\Controllers\Frontend\OfficialTranscriptController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/forget_password_Request',[AuthController::class,'forgetPasswordRequest']);
Route::post('/reset_password_Request',[AuthController::class,'ResetPasswordRequest']);

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

  Route::group(['prefix'=>'user'],function(){
  Route::get('/users',[UserController::class,'index']);
  Route::get('/colleges',[CollegeController::class,'index']);
  Route::get('/departements',[DepartmentController::class,'index']);
  Route::get('/acadamic_years',[AcadamicYearController::class,'index']);
  Route::get('/semisters',[SemisterController::class,'index']);
  Route::get('/study_levels',[StudyLevelController::class,'index']);
  Route::get('/admission_types',[AdmissionTypeController::class,'index']);
  Route::get('/announcements',[AnnouncementController::class,'index']);
  Route::get('/payments',[PaymentController::class,'index']);
  Route::get('/mails',[MailController::class,'index']);
  Route::get('/getAnnouncmetDetail/{id}',[AnnouncementController::class,'getAnnouncmetDetail']);
  Route::get('/getCalendars',[CalendarController::class,'getCalendars']);

  Route::group(['middleware'=>'auth:api'],function(){

      //dashboard route

      Route::get('/dprograms',[DashboardController::class,'programs']);
      Route::get('/dfresh_Student',[DashboardController::class,'fresh_Student']);
      Route::get('/dgraduatedStudent',[DashboardController::class,'graduatedStudent']);
      Route::get('/dactiveAnnouncemnt',[DashboardController::class,'activeAnnouncemnt']);
      Route::get('/dcolleges',[DashboardController::class,'colleges']);
      Route::get('/dusers',[DashboardController::class,'acitveUsers']);
      
          //users route
  
      Route::post('/users',[UserController::class,'store'])->middleware('scope:Admin');
      Route::get('/users/{id}',[UserController::class,'show'])->middleware('scope:Admin');
      Route::patch('/users/{id}',[UserController::class,'update'])->middleware('scope:Admin');
      Route::delete('/users/{id}',[UserController::class,'destroy'])->middleware('scope:Admin');
      //Route::apiResource('/users',UserController::class)->middleware('scope:Admin');
      Route::patch('/updateProfile/{id}',[UserController::class,'updateProfile']);
      Route::patch('/updatePassword/{id}',[UserController::class,'updatePassword']);


      // college routes

      Route::post('/colleges',[CollegeController::class,'store'])->middleware('scope:Admin,Registrar');
      Route::get('/colleges/{id}',[CollegeController::class,'show'])->middleware('scope:Admin,Registrar');
      Route::patch('/colleges/{id}',[CollegeController::class,'update'])->middleware('scope:Admin,Registrar');
      Route::delete('/colleges/{id}',[CollegeController::class,'destroy'])->middleware('scope:Admin,Registrar');
     // Route::apiResource('/colleges',CollegeController::class)->middleware('scope:Admin');

     Route::post('/departements',[DepartmentController::class,'store'])->middleware('scope:Admin,Registrar');
     Route::get('/departements/{id}',[DepartmentController::class,'show'])->middleware('scope:Admin,Registrar');
     Route::patch('/departements/{id}',[DepartmentController::class,'update'])->middleware('scope:Admin,Registrar');
     Route::delete('/departements/{id}',[DepartmentController::class,'destroy'])->middleware('scope:Admin,Registrar');
     //Route::apiResource('/departements',DepartmentController::class)->middleware('scope:Admin');
    //  Route::post('/acadamic_year',[AcadamicYearController::class,'index'])->middleware('scope:Admin,Registrar');
     Route::post('/acadamic_years',[AcadamicYearController::class,'store'])->middleware('scope:Admin,Registrar');
     Route::get('/acadamic_years/{id}',[AcadamicYearController::class,'show'])->middleware('scope:Admin,Registrar');
     Route::patch('/acadamic_years/{id}',[AcadamicYearController::class,'update'])->middleware('scope:Admin,Registrar');
     Route::delete('/acadamic_years/{id}',[AcadamicYearController::class,'destroy'])->middleware('scope:Admin,Registrar');
     //     Route::apiResource('/acadamic_years',AcadamicYearController::class)->middleware('scope:Admin');

     Route::post('/semisters',[SemisterController::class,'store'])->middleware('scope:Admin,Registrar');
     Route::get('/semisters/{id}',[SemisterController::class,'show'])->middleware('scope:Admin,Registrar');
     Route::patch('/semisters/{id}',[SemisterController::class,'update'])->middleware('scope:Admin,Registrar');
     Route::delete('/semisters/{id}',[SemisterController::class,'destroy'])->middleware('scope:Admin,Registrar');
     // Route::apiResource('/semisters',SemisterController::class)->middleware('scope:Admin');

     Route::post('/study_levels',[StudyLevelController::class,'store'])->middleware('scope:Admin,Registrar');
     Route::get('/study_levels/{id}',[StudyLevelController::class,'show'])->middleware('scope:Admin,Registrar');
     Route::patch('/study_levels/{id}',[StudyLevelController::class,'update'])->middleware('scope:Admin,Registrar');
     Route::delete('/study_levels/{id}',[StudyLevelController::class,'destroy'])->middleware('scope:Admin,Registrar');
   // Route::apiResource('/study_levels',StudyLevelController::class)->middleware('scope:Admin');

   Route::post('/admission_types',[AdmissionTypeController::class,'store'])->middleware('scope:Admin,Registrar');
   Route::get('/admission_types/{id}',[AdmissionTypeController::class,'show'])->middleware('scope:Admin,Registrar');
   Route::patch('/admission_types/{id}',[AdmissionTypeController::class,'update'])->middleware('scope:Admin,Registrar');
   Route::delete('/admission_types/{id}',[AdmissionTypeController::class,'destroy'])->middleware('scope:Admin,Registrar');
      //Route::apiResource('/admission_types',AdmissionTypeController::class)->middleware('scope:Admin');
      Route::post('/announcements/{id}',[AnnouncementController::class,'store'])->middleware('scope:Admin,Registrar,Department');
      Route::get('/announcements/{id}',[AnnouncementController::class,'show'])->middleware('scope:Admin,Registrar,Department');
      Route::patch('/announcements/{id}',[AnnouncementController::class,'update'])->middleware('scope:Admin,Registrar,Department');
      Route::delete('/announcements/{id}',[AnnouncementController::class,'destroy'])->middleware('scope:Admin,Registrar,Department');
      Route::get('/getAnnouncements/{user_id}',[AnnouncementController::class,'getAnnouncements'])->middleware('scope:Admin,Registrar,Department');
      //Route::apiResource('/announcements',AnnouncementController::class)->middleware('scope:Admin');
      Route::get('/announcementStatus/{id}',[AnnouncementController::class,'statusDeactivate'])->middleware('scope:Admin,Registrar,Department');
     // student

     Route::apiResource('/fresh_students',FreshStudentController::class)->middleware('scope:Registrar');
     Route::apiResource('/graduate_students',GraduatedStudentController::class)->middleware('scope:Registrar');
     Route::post('/importFreshStudents',[FreshStudentController::class,'importFreshStudents'])->middleware('scope:Registrar');
     Route::post('/importGraduateStudents',[GraduatedStudentController::class,'importGraduateStudents'])->middleware('scope:Registrar');
      //payments

      Route::post('/payments',[PaymentController::class,'store'])->middleware('scope:Admin,Registrar,Finance');
      Route::get('/payments/{id}',[PaymentController::class,'show'])->middleware('scope:Admin,Registrar,Finance');
      Route::patch('/payments/{id}',[PaymentController::class,'update'])->middleware('scope:Admin,Registrar,Finance');
      Route::delete('/payments/{id}',[PaymentController::class,'destroy'])->middleware('scope:Admin,Registrar,Finance');
    // Route::apiResource('/payments',PaymentController::class)->middleware('scope:Admin');
      // mails

      Route::post('/mails',[MailController::class,'store'])->middleware('scope:Admin,Registrar');
      Route::get('/mails/{id}',[MailController::class,'show'])->middleware('scope:Admin,Registrar');
      Route::patch('/mails/{id}',[MailController::class,'update'])->middleware('scope:Admin,Registrar');
      Route::delete('/mails/{id}',[MailController::class,'destroy'])->middleware('scope:Admin,Registrar');
       // Route::apiResource('/mails',MailController::class)->middleware('scope:Admin');

 //official for finance
 Route::get('/officialApplicants',[OfficialTranscriptController::class,'getofficialApplicants'])->middleware('scope:Finance');
 Route::post('/offcial_reciept_add/{id}',[OfficialTranscriptController::class,'officialRecieptAdd'])->middleware('scope:Finance');
 Route::get('/getOffiialApplicant/{id}',[OfficialTranscriptController::class,'getOffiialApplicant'])->middleware('scope:Finance');
 Route::get('/financeOfficialFile/{id}',[OfficialTranscriptController::class,'financeOfficialFile'])->middleware('scope:Finance');

 //offficial for registral
 Route::get('/all_official_applicants',[OfficialTranscriptController::class,'index'])->middleware('scope:Registrar');
 Route::get('/getSingleApplicant/{id}',[OfficialTranscriptController::class,'show'])->middleware('scope:Registrar');
 Route::get('/approveAplicant/{id}',[OfficialTranscriptController::class,'approveApplicant'])->middleware('scope:Registrar');
 Route::get('/rejectAplicant/{id}',[OfficialTranscriptController::class,'rejectApplicant'])->middleware('scope:Registrar');
 Route::get('/registerarBankStatementFile/{id}',[OfficialTranscriptController::class,'registerarBankStatementFile'])->middleware('scope:Registrar');
 Route::get('/registerarCostSharingFile/{id}',[OfficialTranscriptController::class,'registerarCostSharingFile'])->middleware('scope:Registrar');
 Route::get('/registerarOtherDocuments/{id}',[OfficialTranscriptController::class,'registerarOtherDocuments'])->middleware('scope:Registrar');
 //    calendar
 Route::get('/all-calendar',[CalendarController::class,'index'])->middleware('scope:Registrar');
 Route::post('/create-calendar',[CalendarController::class,'create'])->middleware('scope:Registrar');
 Route::get('/show-calendar/{id}',[CalendarController::class,'show'])->middleware('scope:Registrar');
 Route::post('/update-calendar/{id}',[CalendarController::class,'update'])->middleware('scope:Registrar');
 Route::delete('/delete-calendar/{id}',[CalendarController::class,'destroy'])->middleware('scope:Registrar');
 
 // admission for finance

 Route::get('/admissionApplicants',[AdmissionController::class,'getAdmissionApplicants'])->middleware('scope:Finance');
 Route::post('/admisson_reciept_add/{id}',[AdmissionController::class,'admissionRecieptAdd'])->middleware('scope:Finance');
 Route::get('/getAdmissionApplicant/{id}',[AdmissionController::class,'getAdmissionApplicant'])->middleware('scope:Finance');
 Route::get('/financeApplicantFile/{id}',[AdmissionController::class,'getAdmissionApplicantFile'])->middleware('scope:Finance');
 Route::get('/viewFinanceApplicant/{id}',[AdmissionController::class,'viewFinanceApplicant'])->middleware('scope:Finance');
 Route::get('/admitStudentFile/{id}',[AdmissionController::class,'admitStudentFile'])->middleware('scope:Finance');

 

 //admisson for registrar
   Route::get('/all_admission_applicants',[AdmissionController::class,'index'])->middleware('scope:Registrar');
   Route::get('/getSingleAdmissionApplicant/{id}',[AdmissionController::class,'show'])->middleware('scope:Registrar');
   Route::get('/approveAdmissionAplicant/{id}',[AdmissionController::class,'approveApplicant'])->middleware('scope:Registrar');
   Route::get('/rejectAdmissionAplicant/{id}',[AdmissionController::class,'rejectApplicant'])->middleware('scope:Registrar');
   Route::get('/admissionBankStatementFile/{id}',[AdmissionController::class,'admissionBankStatementFile'])->middleware('scope:Registrar');
   Route::get('/admissionStudentCopyFile/{id}',[AdmissionController::class,'admissionStudentCopyFile'])->middleware('scope:Registrar');
   Route::get('/admissionOrginalDegreeFile/{id}',[AdmissionController::class,'admissionOrginalDegreeFile'])->middleware('scope:Registrar');
   Route::get('/admissionOtherFile/{id}',[AdmissionController::class,'admissionOtherFile'])->middleware('scope:Registrar');
   Route::get('/all_passed_applicants',[DepartmentRoleController::class,'allPassedStudents'])->middleware('scope:Registrar');
   Route::get('/dowload_passed_applicants',[AdmissionController::class,'downloadAllPassedStudents'])->middleware('scope:Registrar');

  // department

  Route::get('/selectedApplicants/{id}',[DepartmentRoleController::class,'getselectedApplicants'])->middleware('scope:Department');
  //exam
  Route::get('/getstudentExamResult/{id}',[DepartmentRoleController::class,'getstudentExamResult'])->middleware('scope:Department');
  Route::post('/exam_result_add/{id}',[DepartmentRoleController::class,'addExamResult'])->middleware('scope:Department');
  Route::get('/dowload_exam_applicants/{id}',[DepartmentRoleController::class,'downloadAllExamApplicants'])->middleware('scope:Department');
  
  //schedule
  Route::get('/schedules/{id}',[DepartmentRoleController::class,'getSchedules'])->middleware('scope:Department');
  Route::delete('/deleteSchedule/{id}',[DepartmentRoleController::class,'deleteSchedule'])->middleware('scope:Department');
  Route::post('/addExamSchedule',[DepartmentRoleController::class,'addExamSchedule'])->middleware('scope:Department');
  Route::get('/getsingleSchedule/{id}',[DepartmentRoleController::class,'getsingleSchedule'])->middleware('scope:Department');
  Route::post('/UpdateExamSchedule/{id}',[DepartmentRoleController::class,'UpdateExamSchedule'])->middleware('scope:Department');



    // orginal for registral
    Route::get('/all_orginal_applicants',[OrginalDegreeController::class,'index'])->middleware('scope:Registrar');
    Route::get('/approveOrginalDegreeAplicant/{id}',[OrginalDegreeController::class,'approveApplicant'])->middleware('scope:Registrar');
    Route::get('/rejectOrginalDegreeAplicant/{id}',[OrginalDegreeController::class,'rejectApplicant'])->middleware('scope:Registrar');
    Route::get('/getSingleOrginalApplicant/{id}',[OrginalDegreeController::class,'show'])->middleware('scope:Registrar');
    Route::get('/orginalBankStatementFile/{id}',[OrginalDegreeController::class,'orginalBankStatementFile'])->middleware('scope:Registrar');
    Route::get('/registerarCostSharingFile/{id}',[OrginalDegreeController::class,'registerarCostSharingFile'])->middleware('scope:Registrar');
    Route::get('/registerarOtherDocumentsFile/{id}',[OrginalDegreeController::class,'registerarOtherDocumentsFile'])->middleware('scope:Registrar');

    // orginal for finance
    Route::get('/orginalDegreeApplicants',[OrginalDegreeController::class,'OrginalDegreeApplicants'])->middleware('scope:Finance');
    Route::get('/getOrginalDegreeApplicant/{id}',[OrginalDegreeController::class, 'getOrginalDegreeApplicant'])->middleware('scope:Finance');
   Route::post('/orginal_reciept_add/{id}',[OrginalDegreeController::class,'OrginalDegreeRecieptAdd'])->middleware('scope:Finance');
   Route::get('/orginalDegreeFile/{id}',[OrginalDegreeController::class,'orginalDegreeFile'])->middleware('scope:Finance');

  // student copy for registrar
  Route::get('/all_studentcopy_applicants',[StudentCopyController::class,'index'])->middleware('scope:Registrar');
  Route::get('/getSingleStudentCopyApplicant/{id}',[StudentCopyController::class,'show'])->middleware('scope:Registrar');
  Route::get('/approveStudentCopyAplicant/{id}',[StudentCopyController::class,'approveApplicant'])->middleware('scope:Registrar');
  Route::get('/rejectStudentCopyAplicant/{id}',[StudentCopyController::class,'rejectApplicant'])->middleware('scope:Registrar');
  Route::get('/registerarBankRecieptFile/{id}',[StudentCopyController::class,'registerarBankRecieptFile'])->middleware('scope:Registrar');
  Route::get('/registerarStudentCopyOtherDocumentsFile/{id}',[StudentCopyController::class,'registerarStudentCopyOtherDocumentsFile'])->middleware('scope:Registrar');
  Route::get('/registerarStudentCopyCostSharingFile/{id}',[StudentCopyController::class,'registerarStudentCopyCostSharingFile'])->middleware('scope:Registrar');


 // student copy for finance
 Route::get('/StudentCopyApplicants',[StudentCopyController::class,'StudentCopyApplicants'])->middleware('scope:Finance')->middleware('scope:Finance');
 Route::get('/getStudentCopyApplicant/{id}',[StudentCopyController::class, 'getStudentCopyApplicant'])->middleware('scope:Finance')->middleware('scope:Finance');
 Route::post('/student_copy_reciept_add/{id}',[StudentCopyController::class,'StudentCopyRecieptAdd'])->middleware('scope:Finance')->middleware('scope:Finance');
 Route::get('/studentCopyFile/{id}',[StudentCopyController::class,'studentCopyFile'])->middleware('scope:Finance')->middleware('scope:Finance');

    });
    //frontend
   Route::post('/getfreshdata',[FreshStudentController::class,'getStudentData']);
   Route::get('/getAnnouncements',[AnnouncementController::class,'getAnnouncemts']);
   Route::get('/getAnnouncements/{id}',[AnnouncementController::class,'getAnnouncemtDetail']);
   Route::get('/programs',[DepartmentController::class,'getPrograms']);
   // admission
   Route::get('/addmission_types',[GraduatedStudentController::class,'getStudentId']);
   Route::get('/getStudentId/{unversity_id}',[GraduatedStudentController::class,'getStudentId']);
   Route::post('/submitApplicationForm',[AdmissionController::class,'sendApplicationFormRequest']);
   Route::post('/admisionUploadDocuments',[AdmissionController::class,'admisionUploadDocuments']);
   Route::post('/checkAdmissionStatus',[AdmissionController::class,'checkAdmissionStatus']);
         // official transcript
   Route::post('/officialtranscript',[OfficialTranscriptController::class,'sendOfficialRequest']);
   Route::post('/checkStatus',[OfficialTranscriptController::class,'checkStatus']);
   //orginal_degree
   Route::post('/orginal_degree',[OrginalDegreeController::class,'sendOrginalDegreeRequest']);
   Route::post('/checkOrginalStatus',[OrginalDegreeController::class,'checkStatus']);

   //student copy
   Route::post('/student_copy',[StudentCopyController::class,'sendStudentCopyRequest']);
   Route::post('/checkStudentCopyStatus',[StudentCopyController::class,'checkStatus']);
     // exam
  Route::post('/getExamNumber',[AdmissionController::class,'getExamNumber']);
  Route::post('/getExamResult',[AdmissionController::class,'getExamResult']);

     //schedule
     Route::get('/frontschedules',[DepartmentRoleController::class,'frontschedules']);
     Route::get('/getScheduleDetail/{id}',[DepartmentRoleController::class,'getScheduleDetail']);




});

