<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalendarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calendars', function (Blueprint $table) {
            $table->id();
            $table->string("date")->nullable();
            $table->string("activity")->nullable();
            $table->unsignedBigInteger('acadamic_year')->nullable();
            
            $table->unsignedBigInteger('addmission_type')->nullable();
            $table->foreign('acadamic_year')->references('id')->on('acadamic_years')->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('addmission_type')->references('id')->on('admission_types')->onDelete('restrict')->onUpdate('cascade');
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
        Schema::dropIfExists('calendars');
    }
}
