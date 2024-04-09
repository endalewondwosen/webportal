<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmitStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admit_students', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('father_name')->nullable();
            $table->string('grand_father_name')->nullable();
            $table->string('sex')->nullable();
            $table->string('date_of_birth')->nullable();
            $table->string('nationality')->nullable();
            $table->string('region')->nullable();
            $table->string('zone_or_subcity')->nullable();
            $table->string('woreda')->nullable();
            $table->string('mobile_number')->nullable();
            $table->string('email')->nullable();
            $table->string('undergraduate_unversity_name')->nullable();
            $table->string('undergraduate__cgpa')->nullable();
            $table->string('undergraduate_field_of_study')->nullable();
            $table->string('postgraduate_unversity_name')->nullable();
            $table->string('postgraduate__cgpa')->nullable();
            $table->string('postgraduate_field_of_study')->nullable();
            $table->unsignedBigInteger('admission_type')->nullable();
            $table->unsignedBigInteger('study_level')->nullable();
            $table->unsignedBigInteger('college_id')->nullable();
            $table->unsignedBigInteger('departement_id')->nullable();
            $table->unsignedBigInteger('year_id')->nullable();
            $table->unsignedBigInteger('announcement_id')->nullable();
            $table->string('application_number')->nullable();
            $table->string('receipt_number')->nullable();
            $table->string('bank_statement')->nullable();
            $table->string('student_copy')->nullable();
            $table->string('orginal_degree')->nullable();
            $table->string('other_document')->nullable();
            $table->string('finantial_support')->nullable();
            $table->tinyInteger('status')->default('0');
            $table->foreign('college_id')->references('id')->on('collegues')->onDelete('restrict')->onUpdate('cascade'); 
            $table->foreign('announcement_id')->references('id')->on('announcements')->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('study_level')->references('id')->on('study_levels')->onDelete('restrict')->onUpdate('cascade'); 
            $table->foreign('admission_type')->references('id')->on('admission_types')->onDelete('restrict')->onUpdate('cascade'); 
            $table->foreign('departement_id')->references('id')->on('departements')->onDelete('restrict')->onUpdate('cascade'); 
            $table->foreign('year_id')->references('id')->on('acadamic_years')->onDelete('restrict')->onUpdate('cascade'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admit_students');
    }
}
