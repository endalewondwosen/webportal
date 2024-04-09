<template>
<main id="main" class="main">
    <div class="pagetitle text-center mybody">
        <h1 class="bg-success text-white">WOLLO UNIVERSITY</h1>
        <h1 class="bg-success text-white">REGISTRAR AND ALUMNI DIRECTORATE</h1>
    </div>
    <!-- End Page Title -->
    <!-- End Page Title -->

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">GRADUATE APPLICATION FORM</h5>

                    <!-- Default Tabs -->
                    <ul class="nav nav-tabs d-flex" id="myTabjustified" role="tablist">
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link w-100" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-justified" type="button" role="tab" aria-controls="home" aria-selected="false">
                                Instruction
                            </button>
                        </li>
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-justified" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                Application Form
                            </button>
                        </li>
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link w-100 active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-justified" type="button" role="tab" aria-controls="contact" aria-selected="true">
                                Upload Document
                            </button>
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
                                            <h5 class="card-title">Add Graduated Student</h5>
                                            <div>
                                                <form class="row g-3" @submit.prevent="submitApplicationRequest">
                                                    <b class="text-info">1.PROGRAM CHOICE</b>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Acadamic Year</b>
                                                        </label>
                                                        <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.year_id">
                                                            <option selected="" value="" disabled>
                                                                Select Acadamic Year
                                                            </option>
                                                            <option :value="year.id" v-for="year in acadamic_years" :key="year.id">
                                                                {{ year.name }}
                                                            </option>
                                                        </select>
                                                        <div class="text-danger" v-if="errors.year_id">
                                                            *{{ errors.year_id[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>College/School</b>
                                                        </label>
                                                        <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.college_id">
                                                            <option selected="" value="" disabled>
                                                                Select college/school
                                                            </option>
                                                            <option :value="college.id" v-for="college in colleges" :key="college.id">
                                                                {{ college.name }}
                                                            </option>
                                                        </select>
                                                        <div class="text-danger" v-if="errors.college_id">
                                                            *{{ errors.college_id[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Departement</b>
                                                        </label>
                                                        <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.departement_id">
                                                            <option selected="" value="" disabled>
                                                                Select department
                                                            </option>
                                                            <option :value="departement.id" v-for="departement in departements" :key="departement.id">
                                                                {{ departement.name }}
                                                            </option>
                                                        </select>
                                                        <div class="text-danger" v-if="errors.departement_id">
                                                            *{{ errors.departement_id[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Admission Type</b>
                                                        </label>
                                                        <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.admission_type">
                                                            <option selected="" value="" disabled>
                                                                Select admission type
                                                            </option>
                                                            <option :value="admission.id" v-for="admission in admission_types" :key="admission.id">
                                                                {{ admission.name }}
                                                            </option>
                                                        </select>
                                                        <div class="text-danger" v-if="errors.admission_type">
                                                            *{{ errors.admission_type[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Study Level</b>
                                                        </label>
                                                        <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.study_level">
                                                            <option selected="" value="" disabled>
                                                                Select study level
                                                            </option>
                                                            <option :value="study.id" v-for="study in study_levels" :key="study.id">
                                                                {{ study.name }}
                                                            </option>
                                                        </select>
                                                        <div class="text-danger" v-if="errors.study_level">
                                                            *{{ errors.study_level[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Semister</b>
                                                        </label>
                                                        <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.study_level">
                                                            <option selected="" value="" disabled>
                                                                Select Semister
                                                            </option>
                                                            <option :value="semister.id" v-for="semister in semisters" :key="semister.id">
                                                                {{ semister.name }}
                                                            </option>
                                                        </select>
                                                        <div class="text-danger" v-if="errors.study_level">
                                                            *{{ errors.study_level[0] }}
                                                        </div>
                                                    </div>
                                                    <b class="text-info">2.UNDERGRADUATE EDUCATION</b>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Unversity Name</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.undergraduate_unversity_name" placeholder="Unversity Name" />
                                                        <div class="text-danger" v-if="errors.undergraduate_unversity_name">
                                                            *{{ errors.undergraduate_unversity_name[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>CGPA</b>
                                                        </label>
                                                        <input type="number" min="0" max="4" step="0.01" class="form-control" v-model="form.undergraduate__cgpa" placeholder="Enter CGPA" />
                                                        <div class="text-danger" v-if="errors.undergraduate__cgpa">
                                                            *{{ errors.undergraduate__cgpa[0] }}
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Field of Study</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.undergraduate_field_of_study" placeholder="Enter Field of Study" />
                                                        <div class="text-danger" v-if="errors.undergraduate_field_of_study">
                                                            *{{ errors.undergraduate_field_of_study[0] }}
                                                        </div>
                                                    </div>
                                                    <b class="text-info">3.POSTGRADUATE EDUCATION</b>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Unversity Name</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.postgraduate_unversity_name" placeholder="Postgraduate unviersity  Name" />
                                                        <div class="text-danger" v-if="errors.postgraduate_unversity_name">
                                                            *{{ errors.postgraduate_unversity_name[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>CGPA</b>
                                                        </label>
                                                        <input type="number" min="0" max="4" step="0.01" class="form-control" v-model="form.postgraduate__cgpa" placeholder="Enter CGPA" />
                                                        <div class="text-danger" v-if="errors.postgraduate__cgpa">
                                                            *{{ errors.postgraduate__cgpa[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Field of Study</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.postgraduate_field_of_study" placeholder="Enter field of study" />
                                                        <div class="text-danger" v-if="errors.postgraduate_field_of_study">
                                                            *{{ errors.postgraduate_field_of_study[0] }}
                                                        </div>
                                                    </div>
                                                    <b class="text-info">4.FINANTIAL SUPPORT</b>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Self</b>
                                                        </label>
                                                        <input class="form-check-input" type="checkbox" id="gridCheck2" value="self" v-model="form.finantial_support" />
                                                    </div>
                                                    <div class="col-md-4"></div>
                                                    <div class="col-md-4"></div>
                                                    <b class="text-info">4.PERSONAL DETAILS</b>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>First Name</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.first_name" placeholder="First Name" />
                                                        <div class="text-danger" v-if="errors.first_name">
                                                            *{{ errors.first_name[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Father Name</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.father_name" placeholder="Enter Father Name" />
                                                        <div class="text-danger" v-if="errors.father_name">
                                                            *{{ errors.father_name[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Grand Father Name</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.grand_father_name" placeholder="Enter Grand Father Name" />
                                                        <div class="text-danger" v-if="errors.grand_father_name">
                                                            *{{ errors.grand_father_name[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Date OF Birth</b>
                                                        </label>
                                                        <input type="date" class="form-control" v-model="form.date_of_birth" />
                                                        <div class="text-danger" v-if="errors.date_of_birth">
                                                            *{{ errors.date_of_birth[0] }}
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Sex</b>
                                                        </label>
                                                        <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.sex">
                                                            <option selected="" value="" disabled>
                                                                Select Sex
                                                            </option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                        <div class="text-danger" v-if="errors.sex">
                                                            *{{ errors.sex[0] }}
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Nationality</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.nationality" placeholder="Enter Nationality" />
                                                        <div class="text-danger" v-if="errors.nationality">
                                                            *{{ errors.nationality[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Region</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.region" placeholder="Enter Region" />
                                                        <div class="text-danger" v-if="errors.region">
                                                            *{{ errors.region[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Zone/subcity</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.zone_or_subcity" placeholder="Enter Zone" />
                                                        <div class="text-danger" v-if="errors.zone_or_subcity">
                                                            *{{ errors.zone_or_subcity[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Woreda</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.woreda" placeholder="Enter wordeda" />
                                                        <div class="text-danger" v-if="errors.woreda">
                                                            *{{ errors.woreda[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Mobile Number</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="form.mobile_number" placeholder="09 10 45 67 23" />
                                                        <div class="text-danger" v-if="errors.mobile_number">
                                                            *{{ errors.mobile_number[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Email</b>
                                                        </label>
                                                        <input type="email" class="form-control" v-model="form.email" placeholder="someone@gmail.com" />
                                                        <div class="text-danger" v-if="errors.email">
                                                            *{{ errors.email[0] }}
                                                        </div>
                                                    </div>

                                                    <div class="text-center">
                                                        <button type="submit" class="btn btn-primary">
                                                            Submit
                                                        </button>
                                                        <button type="reset" class="btn btn-secondary">
                                                            Reset
                                                        </button>
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
                                            <h5 class="card-title">Upload Documents</h5>
                                            <div>
                                                <form class="row g-3" @submit.prevent="uploadDocuments">
                                                    <div class="col-md-6">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b>Application Number</b>
                                                        </label>
                                                        <input type="text" class="form-control" v-model="application_number" placeholder="Application Number" />
                                                        <div class="text-danger" v-if="errors.application_number">
                                                            *{{ errors.application_number[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b class="text-danger">Bank Statement</b>
                                                        </label>
                                                        <input type="file" @change="onBankseleted" class="form-control" />
                                                        <div class="text-danger" v-if="errors.bank_statement">
                                                            *{{ errors.bank_statement[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b class="text-danger">Student Copy</b>
                                                        </label>
                                                        <input type="file" @change="onStudentCopyseleted" class="form-control" />
                                                        <div class="text-danger" v-if="errors.student_copy">
                                                            *{{ errors.student_copy[0] }}
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b class="text-danger">Orginal Degree</b>
                                                        </label>
                                                        <input type="file" class="form-control" @change="onOrginaldegreeseleted" />
                                                        <div class="text-danger" v-if="errors.orginal_degree">
                                                            *{{ errors.orginal_degree[0] }}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="inputNanme4" class="form-label">
                                                            <b class="text-danger">Other Document</b>
                                                        </label>
                                                        <input type="file" @change="onOtherDocumentseleted" class="form-control" />
                                                        <div class="text-danger" v-if="errors.other_document">
                                                            *{{ errors.other_document[0] }}
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <button type="submit" style="margin-top: 30px" class="btn btn-primary">
                                                            Upload
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Default Tabs -->
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
            colleges: {},
            acadamic_years: {},
            admission_types: {},
            study_levels: {},
            departements: {},
            semisters: {},
            errors: {},
            form: {
                undergraduate_unversity_name: "",
                undergraduate__cgpa: "",
                undergraduate_field_of_study: "",
                postgraduate_unversity_name: "",
                postgraduate__cgpa: "",
                postgraduate_field_of_study: "",
                admission_type: "",
                study_level: "",
                college_id: "",
                departement_id: "",
                year_id: "",
                announcement_id: this.$route.params.id,
                finantial_support: "",
                first_name: "",
                father_name: "",
                grand_father_name: "",
                sex: "",
                date_of_birth: "",
                nationality: "",
                region: "",
                zone_or_subcity: "",
                woreda: "",
                mobile_number: "",
                email: "",
            },

            application_number: "",
            bank_statement: null,
            student_copy: null,
            orginal_degree: null,
            other_document: null,
        };
    },

    methods: {
        onBankseleted(e) {
            this.bank_statement = e.target.files[0];
        },
        onStudentCopyseleted(e) {
            this.student_copy = e.target.files[0];
        },
        onOrginaldegreeseleted(e) {
            this.orginal_degree = e.target.files[0];
        },
        onOtherDocumentseleted(e) {
            this.other_document = e.target.files[0];
        },

        uploadDocuments() {
            let formdata = new FormData();
            formdata.append("application_number", this.application_number);
            formdata.append("bank_statement", this.bank_statement);
            formdata.append("orginal_degree", this.orginal_degree);
            formdata.append("student_copy", this.student_copy);
            formdata.append("other_document", this.other_document);

            this.axios
                .post("/api/user/admisionUploadDocuments", formdata)
                .then((data) => {
                    //this.$router.push("/admission_form");
                    Toast.fire({
                        icon: data.data.status,
                        title: data.data.message,
                    });
                    this.errors = ''
                    this.$router.push("/admission_form");
                })

                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        submitApplicationRequest() {
            this.axios
                .post("/api/user/submitApplicationForm", this.form)
                .then(() => {
                    this.$router.push("/");
                    Toast.fire({
                        icon: "success",
                        title: "Your Application Submited Succeefully ",
                    });
                })
                .catch((error) => {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            Toast.fire({
                                icon: "success",
                                title: error.response.data.message,
                            });
                            break;
                        case 403:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000,
                            });
                            break;
                        case 500:
                            Toast.fire({
                                icon: "error",
                                title: "Something went wrong please,Please try again!",
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: "Some error occurred, Please try again!",
                                time: 5000,
                            });
                            break;
                    }
                });
        },
    },
    mounted() {
        this.axios
            .get("/api/user/getAnnouncements")
            .then(({
                data
            }) => {
                this.anouncements = data;
            })
            .catch();

        this.axios
            .get("/api/user/acadamic_years")
            .then(({
                data
            }) => {
                this.acadamic_years = data;
            })
            .catch();
        this.axios
            .get("/api/user/colleges")
            .then(({
                data
            }) => {
                this.colleges = data;
            })
            .catch();
        this.axios
            .get("/api/user/study_levels")
            .then(({
                data
            }) => {
                this.study_levels = data;
            })
            .catch();
        this.axios
            .get("/api/user/admission_types")
            .then(({
                data
            }) => {
                this.admission_types = data;
            })
            .catch();
        this.axios
            .get("/api/user/departements")
            .then(({
                data
            }) => {
                this.departements = data;
            })
            .catch();

        this.axios
            .get("/api/user/semisters")
            .then(({
                data
            }) => {
                this.semisters = data;
            })
            .catch();
    },
};
</script>
