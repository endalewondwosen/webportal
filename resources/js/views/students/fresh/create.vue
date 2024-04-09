<template>
<div>
    <div class="pagetitle">
        <h1>Fresh Student Add</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Fresh Student</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                  
                    <div class="card-body">
                        <h5 class="card-title">Add Fresh Student
                            <router-link to="/home/all-fresh_students" class="btn btn-primary" style="float:right"> All Fresh Student</router-link>

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


                        <form class="row g-3" @submit.prevent="addFreshStudents">
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
                                <label for="inputNanme4" class="form-label"> <b>Campus Name</b> </label>
                                <input type="text" class="form-control" v-model="form.campus" placeholder="Enter Campus Name">
                                <div class="text-danger" v-if="errors.campus">*{{ errors.campus[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>First Name</b> </label>
                                <input type="text" class="form-control" v-model="form.first_name" placeholder="First Name">
                                <div class="text-danger" v-if="errors.first_name">*{{ errors.first_name[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Father Name</b> </label>
                                <input type="text" class="form-control" v-model="form.lastname_name" placeholder="Enter Father Name">
                                <div class="text-danger" v-if="errors.lastname_name">*{{ errors.lastname_name[0] }}</div>
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
                                <label for="inputNanme4" class="form-label"> <b>University Password</b> </label>
                                <input type="text" class="form-control" v-model="form.password" placeholder="Enter University Password">
                                <div class="text-danger" v-if="errors.password">*{{ errors.password[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Registration Number</b> </label>
                                <input type="text" class="form-control" v-model="form.regstration_number" placeholder="Enter Registration Number">
                                <div class="text-danger" v-if="errors.regstration_number">*{{ errors.regstration_number[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Block Number</b> </label>
                                <input type="text" class="form-control" v-model="form.block_number" placeholder="Enter Block Number">
                                <div class="text-danger" v-if="errors.block_number">*{{ errors.block_number[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Dorm Number</b> </label>
                                <input type="text" class="form-control" v-model="form.dorm_number" placeholder="Enter Dorm Number">
                                <div class="text-danger" v-if="errors.dorm_number">*{{ errors.dorm_number[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Section</b> </label>
                                <input type="text" class="form-control" v-model="form.section" placeholder="Enter Section">
                                <div class="text-danger" v-if="errors.section">*{{ errors.section[0] }}</div>
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
                lastname_name: '',
                grand_father_name: '',
                sex: '',
                unversity_id: '',
                password: '',
                section: '',
                regstration_number: '',
                campus: '',
                college_id: '',
                block_number: '',
                dorm_number: '',
                year_id: '',
            },
            colleges: {},
            acadamic_years: {},
            excelFile:null,

        }
    },

    methods: {
        addFreshStudents() {
            this.axios.post('/api/user/fresh_students', this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/all-fresh_students')
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
    this.axios.post("/api/user/importFreshStudents",formData).then(res=>{
            if(res.status==200){
                this.$router.push('/home/all-fresh_students');
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

    },
}
</script>
