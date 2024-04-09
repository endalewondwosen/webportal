 <?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGraduatedStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('graduated_students', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('father_name')->nullable();
            $table->string('grand_father_name')->nullable();
            $table->string('sex')->nullable();
            $table->string('unversity_id')->nullable();
            $table->string('mobile_number')->nullable();
            $table->string('email')->nullable();
            $table->unsignedBigInteger('admission_type')->nullable();
            $table->unsignedBigInteger('study_level')->nullable();
            $table->unsignedBigInteger('college_id')->nullable();
            $table->unsignedBigInteger('departement_id')->nullable();
            $table->unsignedBigInteger('year_id')->nullable();
            $table->foreign('college_id')->references('id')->on('collegues')->onDelete('restrict')->onUpdate('cascade'); 
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
        Schema::dropIfExists('graduated_students');
    }
}
