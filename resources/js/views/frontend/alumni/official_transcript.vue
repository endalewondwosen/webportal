<template>
<div>
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
                        <h5 class="card-title text-center">OFFICIAL TRANSCRIPT REQUEST FORM</h5>
                        <ul class="nav nav-tabs d-flex" id="myTabjustified" role="tablist">
                            <li class="nav-item flex-fill" role="presentation">
                                <button class="nav-link w-100" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-justified" type="button" role="tab" aria-controls="home" aria-selected="false">Instruction</button>
                            </li>
                            <li class="nav-item flex-fill" role="presentation">
                                <button class="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-justified" type="button" role="tab" aria-controls="profile" aria-selected="true">Application Form</button>
                            </li>
                            <li class="nav-item flex-fill" role="presentation">
                                <button class="nav-link w-100 active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-justified" type="button" role="tab" aria-controls="contact" aria-selected="false">Official Transcript Status</button>
                            </li>

                        </ul>
                        <div class="tab-content pt-2" id="myTabjustifiedContent">
                            <div class="tab-pane fade" id="home-justified" role="tabpanel" aria-labelledby="home-tab">
                                <strong class="text-danger">Fill The forms as mentioned!!</strong>
                            </div>

                            <div class="tab-pane fade" id="profile-justified" role="tabpanel" aria-labelledby="profile-tab">

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Official Transcript

                                                </h5>
                                                <!-- <form class="row g-3" @submit.prevent="getStudentId">

                                                <div class="col-md-2" style="padding-top: 30px;">
                                                    <button type="submit" v-if="form.university_id" class="btn btn-primary">Search</button>
                                                </div>
                                            </form> -->
                                                <hr>
                                                <div>
                                                    <form class="row g-3" @submit.prevent="sendOfficialTranscript" enctype="multipart/form-data">
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>ID No. </b> </label>
                                                            <input type="text" class="form-control" v-model="university_id" placeholder="Enter your University Id">
                                                            <div class="text-danger" v-if="errors.university_id">*{{ errors.university_id[0] }}</div>

                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>First Name</b> </label>
                                                            <input type="text" class="form-control" v-model="first_name" placeholder="First Name">
                                                            <div class="text-danger" v-if="errors.first_name">*{{ errors.first_name[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Father Name</b> </label>
                                                            <input type="text" class="form-control" v-model="father_name" placeholder="Enter Father Name">
                                                            <div class="text-danger" v-if="errors.father_name">*{{ errors.father_name[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Grand Father Name</b> </label>
                                                            <input type="text" class="form-control" v-model="grand_father_name" placeholder="Enter Grand Father Name">
                                                            <div class="text-danger" v-if="errors.grand_father_name">*{{ errors.grand_father_name[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Sex</b> </label>
                                                            <select class="form-select" id="floatingSelect" aria-label="State" v-model="sex">
                                                                <option selected="" value="" disabled>Select Sex</option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </select>
                                                            <div class="text-danger" v-if="errors.sex">*{{ errors.sex[0] }}</div>
                                                        </div>

                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Mobile Number</b> </label>
                                                            <input type="text" class="form-control" v-model="mobile_number" placeholder="09 10 45 67 23">
                                                            <div class="text-danger" v-if="errors.mobile_number">*{{ errors.mobile_number[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Email</b> </label>
                                                            <input type="email" class="form-control" v-model="email" placeholder="someone@gmail.com">
                                                            <div class="text-danger" v-if="errors.email">*{{ errors.email[0] }}</div>
                                                        </div>

                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Year of Graduation</b> </label>
                                                            <select class="form-select" id="floatingSelect" aria-label="State" v-model="year_of_graduation">
                                                                <option selected="" value="" disabled>Select year of graduation</option>
                                                                <option :value="year.id" v-for="year in acadamic_years" :key="year.id">
                                                                    {{ year.name }}
                                                                </option>
                                                            </select>
                                                            <div class="text-danger" v-if="errors.year_of_graduation">*{{ errors.year_of_graduation[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>College/School</b> </label>
                                                            <select class="form-select" id="floatingSelect" aria-label="State" v-model="college_id">
                                                                <option selected="" value="" disabled>Select college/school</option>
                                                                <option :value="college.id" v-for="college in colleges" :key="college.id">
                                                                    {{ college.name }}
                                                                </option>
                                                            </select>
                                                            <div class="text-danger" v-if="errors.college_id">*{{ errors.college_id[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Departement</b> </label>
                                                            <select class="form-select" id="floatingSelect" aria-label="State" v-model="departement_id">
                                                                <option selected="" value="" disabled>Select department</option>
                                                                <option :value="departement.id" v-for="departement in departements" :key="departement.id">
                                                                    {{ departement.name }}
                                                                </option>
                                                            </select>
                                                            <div class="text-danger" v-if="errors.departement_id">*{{ errors.departement_id[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Admission Type</b> </label>
                                                            <select class="form-select" id="floatingSelect" aria-label="State" v-model="admission_type">
                                                                <option selected="" value="" disabled>Select admission type</option>
                                                                <option :value="admission.id" v-for="admission in admission_types" :key="admission.id">
                                                                    {{ admission.name }}
                                                                </option>1
                                                            </select>
                                                            <div class="text-danger" v-if="errors.admission_type">*{{ errors.admission_type[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Study Level</b> </label>
                                                            <select class="form-select" id="floatingSelect" aria-label="State" v-model="study_level">
                                                                <option selected="" value="" disabled>Select study level</option>
                                                                <option :value="study.id" v-for="study in study_levels" :key="study.id">
                                                                    {{ study.name }}
                                                                </option>
                                                            </select>
                                                            <div class="text-danger" v-if="errors.study_level">*{{ errors.study_level[0] }}</div>
                                                        </div>

                                                        <b class="text-info">Official Transcript to be sent </b>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Name of Institution</b> </label>
                                                            <input type="text" class="form-control" v-model="name_of_institution" placeholder="Name of Institution">
                                                            <div class="text-danger" v-if="errors.name_of_institution">*{{ errors.name_of_institution[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Country</b> </label>
                                                            <input type="text" class="form-control" v-model="destination_country" placeholder="Destination Country">
                                                            <div class="text-danger" v-if="errors.destination_country">*{{ errors.destination_country[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Address of Institution</b> </label>
                                                            <input type="text" class="form-control" v-model="address_of_institution" placeholder="First Name">
                                                            <div class="text-danger" v-if="errors.address_of_institution">*{{ errors.address_of_institution[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label"> <b>Mailing Agent</b> </label>
                                                            <select class="form-select" id="floatingSelect" aria-label="State" v-model="mailing_agent">
                                                                <option selected="" value="" disabled>Select mailing agent</option>
                                                                <option value="postal">Normal postal</option>
                                                                <option value="DHL">DHL</option>
                                                                <option value="EMS">EMS</option>
                                                            </select>
                                                            <div class="text-danger" v-if="errors.mailing_agent">*{{ errors.mailing_agent[0] }}</div>
                                                        </div>

                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label text-danger"> <b>Attach Receipt of Bank Deposit</b> </label>
                                                            <input type="file" class="form-control" @change="onbankRecietFileChange">
                                                            <div class="text-danger" v-if="errors.bank_receipt">*{{ errors.bank_receipt[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label text-danger"> <b>Attach Cost sharing letter</b> </label>
                                                            <input type="file" @change="costsharingDocument" class="form-control">
                                                            <div class="text-danger" v-if="errors.cost_sharing_letter">*{{ errors.cost_sharing_letter[0] }}</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label for="inputNanme4" class="form-label text-danger"> <b>Attach Other Documents</b> </label>
                                                            <input type="file" @change="otherDocumnet" class="form-control">
                                                            <div class="text-danger" v-if="errors.other_documents">*{{ errors.other_documents[0] }}</div>
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
                                                    Your Official Transcript Request is on Progress,please Wait us! 
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                </div>
                                                <div v-if="statusResult=='2'" class="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
                                                    Your Official Transcript Request is Rejected,please Contact The Registrar Office!
                                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                                </div>
                                                <div v-if="statusResult=='1'" class="alert alert-success bg-success text-light border-0 alert-dismissible fade show" role="alert">
                                                   Your Official Transcript Request is on Accepted.We Will send to Your orginization Soon
                                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                                </div>
                                                <div>

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

</div>
</template>

<script>
export default {
    data() {
        return {
            anouncements: {},
            colleges: {},
            acadamic_years: {},
            admission_types: {},
            study_levels: {},
            departements: {},
            semisters: {},
            errors: {},
            first_name: '',
            father_name: '',
            grand_father_name: '',
            sex: '',
            university_id: '',
            mobile_number: '',
            email: '',
            admission_type: '',
            study_level: '',
            college_id: '',
            departement_id: '',
            year_of_graduation: '',
            name_of_institution: '',
            destination_country: '',
            address_of_institution: '',
            mailing_agent: '',
            bank_receipt: null,
            cost_sharing_letter: null,
            other_documents: null,

            getstudentIdData: {},
            status: {
                year_id: '',
                application_number: ''
            },
            statusResult: ''
        }

    },

    computed: {
        getValue() {
            let objectSize = 0;
            for (let k in this.getstudentIdData) {
                objectSize++
            }
            // objectSize here holds the size of your object
            return objectSize
        }
    },
    methods: {
        checkStatus() {
            this.axios.post('/api/user/checkStatus', this.status)
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

        onbankRecietFileChange(e) {
            // console.log('selcted file', e.target.files[0])
            this.bank_receipt = e.target.files[0];

        },
        otherDocumnet(e) {
            //  console.log('other documet', e.target.files[0]);
            this.other_documents = e.target.files[0];

        },
        costsharingDocument(e) {
            // console.log('costsahring', e.target.files[0]);
            this.cost_sharing_letter = e.target.files[0];

        },
        getStudentId() {

            this.axios.get('/api/user/getStudentId/' + this.form.university_id)
                .then(({
                    data
                }) => {
                    this.getstudentIdData = data

                    if (this.getValue <= 0) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Sorry! We cannot find this University Id ,try again!'
                        })

                    }

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

        sendOfficialTranscript() {

            let fd = new FormData();
            fd.append('bank_reciept', this.bank_receipt)
            fd.append('other_document', this.other_documents)
            fd.append('cost_sharing', this.cost_sharing_letter)
            fd.append('first_name', this.first_name)
            fd.append('father_name', this.father_name)
            fd.append('grand_father_name', this.grand_father_name)
            fd.append('sex', this.sex)
            fd.append('university_id', this.university_id)
            fd.append('mobile_number', this.mobile_number)
            fd.append('email', this.email)
            fd.append('admission_type', this.admission_type)
            fd.append('study_level', this.study_level)
            fd.append('college_id', this.college_id)
            fd.append('departement_id', this.departement_id)
            fd.append('year_of_graduation', this.year_of_graduation)
            fd.append('name_of_institution', this.name_of_institution)
            fd.append('destination_country', this.destination_country)
            fd.append('address_of_institution', this.address_of_institution)
            fd.append('mailing_agent', this.mailing_agent)
            this.axios.post('/api/user/officialtranscript', fd)
                .then(() => {
                    this.$router.push('/')
                    Toast.fire({
                        icon: 'success',
                        title: 'Your Request Submited Succeefully '
                    });
                }).catch(error => {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            Toast.fire({
                                icon: 'success',
                                title: error.response.data.message
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
        this.axios.get('/api/user/colleges')
            .then(({
                data

            }) => {
                this.colleges = data
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

        this.axios.get('/api/user/semisters')
            .then(({
                data
            }) => {
                this.semisters = data
            }).catch()

    }
}
</script>

<style scoped>
#main,
#footer {
    margin-left: 0px;
}
</style>
