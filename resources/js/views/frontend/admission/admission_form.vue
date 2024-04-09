<template>
<main id="main" class="main">
    <div class="pagetitle text-center  mybody  ">
        <h1 class="bg-success text-white"> WOLLO UNIVERSITY </h1>
        <h1 class="bg-success text-white">REGISTRAR AND ALUMNI DIRECTORATE</h1>
    </div><!-- End Page Title -->
    <!-- End Page Title -->

    <div class="row">
        <div class="col-lg-12">

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Application Information</h5>

                    <!-- Default Tabs -->
                    <ul class="nav nav-tabs d-flex" id="myTabjustified" role="tablist">
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link w-100" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-justified" type="button" role="tab" aria-controls="home" aria-selected="true">Undergraduate Application</button>
                        </li>
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-justified" type="button" role="tab" aria-controls="profile" aria-selected="false">Graduate Application</button>
                        </li>
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link w-100 active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-justified" type="button" role="tab" aria-controls="contact" aria-selected="false">Admission Status</button>
                        </li>
                    </ul>
                    <div class="tab-content pt-2" id="myTabjustifiedContent">
                        <div class="tab-pane fade" id="home-justified" role="tabpanel" aria-labelledby="home-tab">
                            <strong class="text-danger">There are no active application periods!!</strong>
                        </div>
                        <div class="tab-pane fade" id="profile-justified" role="tabpanel" aria-labelledby="profile-tab">

                            <div class="row">
                                <div class="col-md-6" v-for="(announce) in anouncements" :key="announce.id">
                                    <p><strong> {{ announce.title }} </strong></p>
                                    <p> <strong>Addmission Calander :{{announce.year.name}} Semister:{{announce.semister.name}}</strong></p>
                                    <p class="text-danger"><em>Application Date: From {{ announce.admission_start_date }} To {{ announce.admission_end_date }}</em></p>
                                    <p>
                                        <router-link :to="{name:'ApplicationForm',params:{id:announce.id}}" class="btn btn-primary">Apply Now</router-link>
                                        <a href="#" class="btn btn-primary">Upload Document</a>
                                    </p>
                                    <hr>
                                </div>

                            </div>

                        </div>
                        <div class="tab-pane fade active show" id="contact-justified" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Admission Status </h5>
                                            <form class="row g-3" @submit.prevent="checkStatus">
                                                <div class="col-md-4">
                                                    <label for="inputNanme4" class="form-label"> <b>Year of Application</b> </label>
                                                    <select class="form-select" id="floatingSelect" aria-label="State" v-model="status.year_id">
                                                        <option selected="" value="" disabled>Select Acadamic Year</option>
                                                        <option :value="year.id" v-for="year in acadamic_years" :key="year.id">
                                                            {{ year.name }}
                                                        </option>
                                                    </select>
                                                    <div class="text-danger" v-if="errors.year_id">*{{ errors.year_id[0] }}</div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="inputNanme4" class="form-label"> <b>Application Number</b> </label>
                                                    <input type="text" v-model="status.application_number" class="form-control" placeholder="Application Number">
                                                    <div class="text-danger" v-if="errors.application_number">*{{ errors.application_number[0] }}</div>
                                                </div>
                                                <div class="col-md-2" style="padding-top: 30px;">
                                                    <button type="submit" class="btn btn-primary">Search</button>
                                                </div>

                                            </form>
                                            <br><br>
                                            <div v-if="statusResult=='0'" class="alert alert-warning bg-warning border-0 alert-dismissible fade show" role="alert">
                                                Your Admission  Request is on Progress,please Wait us!
                                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div>
                                            <div v-if="statusResult=='2'" class="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
                                                Your Admission Request is Rejected,please Contact The Registrar Office!
                                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div>
                                            <div v-if="statusResult=='1'" class="alert alert-success bg-success text-light border-0 alert-dismissible fade show" role="alert">
                                                Your Admission Request is  Accepted.You Can Get Your Examination Number
                                          <router-link class="btn btn-outline-primary btn-sm" to="/get_exam_number">Get Exam No</router-link>
                           


                                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div>
                                            
                                            <!-- End Table with stripped rows -->

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div><!-- End Default Tabs -->

                </div>
            </div>

        </div>

    </div>

</main>
</template>

<script>
export default {
    data() {
        return {
            anouncements: {},
            acadamic_years: {},
            errors: {},
              status: {
                year_id: '',
                application_number: ''
            },
            statusResult: ''
        }
    },

    methods: {
         checkStatus() {
            this.axios.post('/api/user/checkAdmissionStatus', this.status)
                .then(({
                    data
                }) => {
                    if (data == 2) {
                        this.statusResult = data
                    } else if (data == 1) {
                        this.statusResult = data
                    } else if (data == 0) {
                        this.statusResult = data
                    } else {
                        Toast.fire({
                            icon: 'error',
                            title: data.message
                        });
                    }
                    this.errors = ''

                }).catch(error => {
                    this.errors = error.response.data.errors
                })
        },
    },
    mounted() {
        this.axios.get('/api/user/getAnnouncements')
            .then(({
                data
            }) => {
                this.anouncements = data
            }).catch()

        this.axios.get('/api/user/acadamic_years')
            .then(({
                data
            }) => {
                this.acadamic_years = data
            }).catch()

    }
}
</script>
