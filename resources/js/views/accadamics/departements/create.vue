<template>
<div>
    <div class="pagetitle">
        <h1>Programs Add</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Programs</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add Programs
                            <router-link to="/home/all-departements" class="btn btn-primary" style="float:right"> All Programs</router-link>

                        </h5>
                        <form class="row g-3" @submit.prevent="addDepartements">
                            <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>Program Name</b> </label>
                                <input type="text" class="form-control" v-model="form.name" placeholder="Enter College/School name">
                                <div class="text-danger" v-if="errors.name">*{{ errors.name[0] }}</div>
                            </div>
                            <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>College/School Name</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.collegue_id">
                                    <option selected="" value="" disabled>Select College/Schools</option>
                                    <option :value="college.id" v-for="college in colleges" :key="college.id">
                                        {{ college.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.collegue_id">*{{ errors.collegue_id[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Admission Type</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.admissionType_id">
                                    <option selected="" value="" disabled>Select Admission Type</option>
                                    <option :value="admission.id" v-for="admission in addmision_types" :key="admission.id">
                                        {{ admission.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.studyLevel_id">*{{ errors.studyLevel_id[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Study Level</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.studyLevel_id">
                                    <option selected="" value="" disabled>Select Study Level</option>
                                    <option :value="studyLevel.id" v-for="studyLevel in study_levels" :key="studyLevel.id">
                                        {{ studyLevel.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.admissionType_id">*{{ errors.admissionType_id[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Duration</b> </label>
                                <input type="number" min="1" class="form-control" v-model="form.duration" >
                                <div class="text-danger" v-if="errors.duration">*{{ errors.duration[0] }}</div>
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
                name: '',
                collegue_id: '',
                studyLevel_id:'',
                admissionType_id:'',
                duration:''
            },
            colleges: {},
            study_levels:{},
            addmision_types:{} 
        }
    },

    methods: {
        addDepartements() {
            this.axios.post('/api/user/departements', this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/all-departements')
                    Toast.fire({
                        icon: 'success',
                        title: 'Departement Inserted successfully!'
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
        }
    },
    mounted() {
        this.axios.get('/api/user/colleges')
            .then(({
                data
                

            }) => {
                this.colleges = data
            }).catch()
       this.axios.get('/api/user/admission_types')
            .then(({
                data
            }) => {
                this.addmision_types = data
            }).catch()
       this.axios.get('/api/user/study_levels')
            .then(({
                data
            }) => {
                this.study_levels = data
            }).catch()
    },
}
</script>
