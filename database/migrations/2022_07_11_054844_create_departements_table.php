<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departements', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('collegue_id');
            $table->unsignedBigInteger('studyLevel_id');
            $table->unsignedBigInteger('admissionType_id');
            $table->Integer('duration');
            $table->foreign('collegue_id')->references('id')->on('collegues')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign('studyLevel_id')->references('id')->on('study_levels')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign('admissionType_id')->references('id')->on('admission_types')->onUpdate('cascade')->onDelete('restrict');
            
            
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
        Schema::dropIfExists('departements');
    }
}
