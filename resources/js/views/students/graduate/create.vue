<template>
<div>
    <div class="pagetitle">
        <h1> Graduated Student Add</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Graduated Student</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add Graduated Student
                            <router-link to="/home/all-graduated_students" class="btn btn-primary" style="float:right"> All Graduated Student</router-link>
                        </h5>





    <!-- import from excel start -->
  <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-md-6 border ">
                                <h3 class="text-primary italic">Import From Excel</h3>
                                      <form  @submit.prevent="ImportExcel">
                                        <div class="form-gruop">
                                            <input type="file" @change="selectedFile" name="file" class="form-control text-success">
                                        </div><br>
                                <div class="text-danger" v-if="errors.excelFile">*{{ errors.excelFile[0] }}</div>

                                          <div class="form-gruop">
                                            <input type="submit" class="btn btn-success" value="add">
                                        </div><br>
                                      </form>
                            </div>
                        </div>
                    </div>
       <!-- import from excel end -->



                        <form class="row g-3" @submit.prevent="addGraduatedStudents">
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Acadamic Year</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.year_id">
                                    <option selected="" value="" disabled>Select Acadamic Year</option>
                                    <option :value="year.id" v-for="year in acadamic_years" :key="year.id">
                                        {{ year.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.year_id">*{{ errors.year_id[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>College/School</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.college_id">
                                    <option selected="" value="" disabled>Select college/school</option>
                                    <option :value="college.id" v-for="college in colleges" :key="college.id">
                                        {{ college.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.college_id">*{{ errors.college_id[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Departement</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.departement_id">
                                    <option selected="" value="" disabled>Select department</option>
                                    <option :value="departement.id" v-for="departement in departements" :key="departement.id">
                                        {{ departement.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.departement_id">*{{ errors.departement_id[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Admission Type</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.admission_type">
                                    <option selected="" value="" disabled>Select admission type</option>
                                    <option :value="admission.id" v-for="admission in admission_types" :key="admission.id">
                                        {{ admission.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.admission_type">*{{ errors.admission_type[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Study Level</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.study_level">
                                    <option selected="" value="" disabled>Select study level</option>
                                    <option :value="study.id" v-for="study in study_levels" :key="study.id">
                                        {{ study.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.study_level">*{{ errors.study_level[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>First Name</b> </label>
                                <input type="text" class="form-control" v-model="form.first_name" placeholder="First Name">
                                <div class="text-danger" v-if="errors.first_name">*{{ errors.first_name[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Father Name</b> </label>
                                <input type="text" class="form-control" v-model="form.father_name" placeholder="Enter Father Name">
                                <div class="text-danger" v-if="errors.father_name">*{{ errors.father_name[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Grand Father Name</b> </label>
                                <input type="text" class="form-control" v-model="form.grand_father_name" placeholder="Enter Grand Father Name">
                                <div class="text-danger" v-if="errors.grand_father_name">*{{ errors.grand_father_name[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Sex</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.sex">
                                    <option selected="" value="" disabled>Select Sex</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <div class="text-danger" v-if="errors.sex">*{{ errors.sex[0] }}</div>
                            </div>

                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>University ID</b> </label>
                                <input type="text" class="form-control" v-model="form.unversity_id" placeholder="Enter University ID">
                                <div class="text-danger" v-if="errors.unversity_id">*{{ errors.unversity_id[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Mobile Number</b> </label>
                                <input type="text" class="form-control" v-model="form.mobile_number" placeholder="09 10 45 67 23">
                                <div class="text-danger" v-if="errors.mobile_number">*{{ errors.mobile_number[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Email</b> </label>
                                <input type="email" class="form-control" v-model="form.email" placeholder="someone@gmail.com">
                                <div class="text-danger" v-if="errors.email">*{{ errors.email[0] }}</div>
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <button type="reset" class="btn btn-secondary">Reset</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            errors: {},
            form: {
                first_name: '',
                father_name: '',
                grand_father_name: '',
                sex: '',
                unversity_id: '',
                mobile_number: '',
                email: '',
                admission_type: '',
                study_level: '',
                college_id: '',
                departement_id: '',
                year_id: '',
            },
            colleges: {},
            acadamic_years: {},
            admission_types: {},
            study_levels: {},
            departements: {},
            excelFile:'',

        }
    },

    methods: {
        addGraduatedStudents() {
            this.axios.post('/api/user/graduate_students', this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/all-graduated_students')
                    Toast.fire({
                        icon: 'success',
                        title: 'Student  Inserted successfully!'
                    });
                }).catch(error => {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        case 403:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: 'Something went wrong please contact system admin!',
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Some error occurred, Please try again!',
                                time: 5000
                            });
                            break;
                    }
                })
        },
        selectedFile(e){
    this.excelFile = e.target.files[0];
            console.log(this.excelFile);
},
ImportExcel(){
    let formData = new FormData();
    formData.append("excelFile", this.excelFile);
    this.axios.post("/api/user/importGraduateStudents",formData).then(res=>{
            if(res.status==200){
                this.$router.push('/home/all-graduated_students');
                    Toast.fire({
                        icon: 'success',
                        title: 'Student  Inserted successfully!'
                    });
            }
    }).catch(error=>{
    this.errors = error.response.data.errors;

    })
}
    },
    mounted() {
        this.axios.get('/api/user/colleges')
            .then(({
                data

            }) => {
                this.colleges = data
            }).catch()
        this.axios.get('/api/user/acadamic_years')
            .then(({
                data
            }) => {
                this.acadamic_years = data
            }).catch()
        this.axios.get('/api/user/study_levels')
            .then(({
                data
            }) => {
                this.study_levels = data
            }).catch()
        this.axios.get('/api/user/admission_types')
            .then(({
                data
            }) => {
                this.admission_types = data
            }).catch()
        this.axios.get('/api/user/departements')
            .then(({
                data
            }) => {
                this.departements = data
            }).catch()
    },
}
</script>
