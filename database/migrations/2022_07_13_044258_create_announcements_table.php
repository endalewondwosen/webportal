<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnnouncementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->unsignedBigInteger('year_id');
            $table->unsignedBigInteger('semister_id');
            $table->string('admission_start_date');
            $table->string('admission_end_date');
            $table->string('status')->default('Active');
            $table->foreign('year_id')->references('id')->on('acadamic_years')->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('semister_id')->references('id')->on('semisters')->onDelete('restrict')->onUpdate('cascade');
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
        Schema::dropIfExists('announcements');
    }
}
