<template>
<div>

    <div class="pagetitle">
        <h1>Applicant Details</h1>

    </div><!-- End Page Title -->

    <section class="section profile">
        <div class="row">

            <div class="col-xl-12">

                <div class="card">
                    <div class="card-body pt-3">
                        <!-- Bordered Tabs -->
                        <router-link to="/home/registrar_admission_view" class="btn btn-primary" style="float:right"> Back</router-link>
                        <ul class="nav nav-tabs nav-tabs-bordered">

                            <li class="nav-item">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Personal Information</button>
                            </li>

                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Education Backeground</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#admission-view">
                                    Admission Request
                                </button>
                            </li>

                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Documents</button>
                            </li>

                        </ul>
                        <div class="tab-content pt-2">

                            <div v-for="(applicant,index) in applicants" :key="index" class="tab-pane fade profile-overview active show" id="profile-overview">
                                <h5 class="card-title">Profile Details</h5>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Full Name</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.first_name }} {{ applicant.father_name }}
                                        {{ applicant.grand_father_name }}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Sex</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.sex }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Mobile Number</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.mobile_number }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Email</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.email }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Nationality</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.nationality }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Region</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.region }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Zone/Subcity</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.zone_or_subcity }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Woreda</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.woreda }}
                                    </div>
                                </div>

                            </div>

                            <div v-for="(applicant,index) in applicants" :key="index+1" class="tab-pane fade profile-overview" id="profile-edit">

                                <h5 class="card-title">Education Background</h5>

                                <div class="row">
                                    <b class="text-info">1.UNDERGRADUATE EDUCATION</b>
                                    <div class="col-lg-3 col-md-4 label">
                                        Institution Name
                                    </div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.undergraduate_unversity_name	 }}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">
                                        CGPA
                                    </div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.undergraduate__cgpa }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">
                                        Field Of Study
                                    </div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.undergraduate_field_of_study }}
                                    </div>
                                </div>
                                <b class="text-info">2.POSTGRADUATE EDUCATION</b>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">
                                        Institution Name
                                    </div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.postgraduate_unversity_name	 }}
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">
                                        CGPA
                                    </div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.postgraduate__cgpa }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">
                                        Field Of Study
                                    </div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.postgraduate_field_of_study }}
                                    </div>
                                </div>
                            </div>
                            <div v-for="(applicant,index) in applicants" :key="index+2" class="tab-pane fade profile-overview pt-3" id="admission-view">
                                <h5 class="card-title">Admission Request</h5>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Admmission Title</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.announce.title }}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Study Level</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.study.name }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">College</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.college.name }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Departement</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.departement.name }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">
                                        Year of Admission
                                    </div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.year.name }}
                                    </div>

                                </div>
                            </div>
                            <div v-for="(applicant,index) in applicants" :key="index+3" class="tab-pane fade profile-overview pt-3" id="profile-settings">
                                <h5 class="card-title">Attached Documents</h5>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">
                                        Application Number
                                    </div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.application_number }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Reciept Number</div>
                                    <div class="col-lg-9 col-md-8">
                                        {{ applicant.receipt_number }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Bank Statement</div>
                                    <div class="col-lg-9 col-md-8">

                                        <div v-if="applicant.bank_statement" class="col-lg-9 col-md-8">   <button @click="downladaAdmitionBankStatement(applicant.id,applicant.bank_statement)" class="btn btn-info"><i class="bx bxs-download"></i></button>
                                    </div>
                                    <p v-else>No File </p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">
                                        Student Copy
                                    </div>
                                    <div class="col-lg-9 col-md-8">

                                        <div v-if="applicant.bank_statement" class="col-lg-9 col-md-8">   <button @click="downladAdmissionStudentCopyFile(applicant.id,applicant.bank_statement)" class="btn btn-info"><i class="bx bxs-download"></i></button>
                                    </div>
                                    <p v-else>No File </p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Orginal Degree</div>
                                    <div class="col-lg-9 col-md-8">
                                        <div v-if="applicant.orginal_degree" class="col-lg-9 col-md-8">   <button @click="downladAdmissionOrginalDegree(applicant.id,applicant.orginal_degree)" class="btn btn-info"><i class="bx bxs-download"></i></button>
                                    </div>
                                    <p v-else>No File </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Other Documents</div>
                                    <div class="col-lg-9 col-md-8">
                                        <div v-if="applicant.other_document" class="col-lg-9 col-md-8">   <button @click="downladAdmissionOtherDocuments(applicant.id,applicant.orginal_degree)" class="btn btn-info"><i class="bx bxs-download"></i></button>
                                    </div>
                                    <p v-else>No File </p>
                                    </div>
                                </div>
                            </div>

                        </div><!-- End Bordered Tabs -->

                    </div>
                </div>

            </div>
        </div>
    </section>

</div>
</template>

<script>
export default {
    created() {

        let id = this.$route.params.id;
        this.axios.get('/api/user/getSingleAdmissionApplicant/' + id)
            .then(({
                data
            }) => {

                this.applicants = data
            }).catch()
    },

    data() {
        return {
            applicants: {}
        }
    },
methods:{
    downladaAdmitionBankStatement(id,file){
        this.axios({
                url: '/api/user/admissionBankStatementFile/' + id,
                method: 'GET',
                responseType: 'arraybuffer',
            }).then((response) => {
                let blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = file
                link.click()
            });
    },
    downladAdmissionStudentCopyFile(id,file){
        this.axios({
                url: '/api/user/admissionStudentCopyFile/' + id,
                method: 'GET',
                responseType: 'arraybuffer',
            }).then((response) => {
                let blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = file
                link.click()
            });
    },
    downladAdmissionOrginalDegree(id,file){
        this.axios({
                url: '/api/user/admissionOrginalDegreeFile/' + id,
                method: 'GET',
                responseType: 'arraybuffer',
            }).then((response) => {
                let blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = file
                link.click()
            });
    },
    downladAdmissionOtherDocuments(id,file){
        this.axios({
                url: '/api/user/admissionOrginalDegreeFile/' + id,
                method: 'GET',
                responseType: 'arraybuffer',
            }).then((response) => {
                let blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = file
                link.click()
            });
    }
}
}
</script>
