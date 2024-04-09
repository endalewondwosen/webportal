<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFreshStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fresh_students', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('lastname_name')->nullable();
            $table->string('grand_father_name')->nullable();
            $table->string('sex')->nullable();
            $table->string('unversity_id')->nullable();
            $table->string('password')->nullable();
            $table->string('section')->nullable();
            $table->string('regstration_number')->nullable();
            $table->string('campus')->nullable();
            $table->unsignedBigInteger('college_id')->nullable();
            $table->string('block_number')->nullable();
            $table->string('dorm_number')->nullable();
            $table->unsignedBigInteger('year_id')->nullable();
            $table->foreign('college_id')->references('id')->on('collegues')->onDelete('restrict')->onUpdate('cascade'); 
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
        Schema::dropIfExists('fresh_students');
    }
}
