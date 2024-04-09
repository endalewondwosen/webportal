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
                          <router-link to="/home/registrar_official_transcript" class="btn btn-primary" style="float:right"> Back</router-link>
                        <ul class="nav nav-tabs nav-tabs-bordered">

                            <li class="nav-item">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Personal Information</button>
                            </li>

                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Officail Transcript Sent To</button>
                            </li>

                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Documents</button>
                            </li>

                        </ul>
                        <div class="tab-content pt-2">

                            <div v-for="(applicant,index) in applicants" :key="index" class="tab-pane fade profile-overview active show" id="profile-overview">

                                <h5 class="card-title">Profile Details</h5>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label ">Full Name</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.first_name }} {{ applicant.father_name }} {{ applicant.grand_father_name }}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Sex</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.sex }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Mobile Number</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.mobile_number }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Email</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.email }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">University ID</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.university_id }}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Admmission Type</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.admission.name }}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Study Level</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.study.name }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">College</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.college.name }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Departement</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.departement.name }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Year of Graduation</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.year.name }}</div>
                                </div>

                            </div>

                            <div v-for="(applicant,index) in applicants"  :key="index+1" class="tab-pane fade profile-overview" id="profile-edit">

                                <h5 class="card-title">Official Transcript Sent To</h5>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label ">Name of Institution</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.name_of_institution }}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Destination Country</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.destination_country }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Address Of Institution</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.address_of_institution }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Mailing System</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.mailing_agent }}</div>
                                </div>

                            </div>

                            <div v-for="(applicant,index) in applicants"  :key="index+2" class="tab-pane fade profile-overview pt-3" id="profile-settings">
                                <h5 class="card-title">Attached Documents</h5>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label ">Bank Statement</div>
                                <div v-if="applicant.bank_receipt" class="col-lg-9 col-md-8">   <button @click="downladBankStatement(applicant.id,applicant.bank_receipt)" class="btn btn-info"><i class="bx bxs-download"></i></button>
                                </div>
                                <p v-else>No File </p>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Cost Sharing Letter</div>
                                    <div class="col-lg-9 col-md-8">

                                        <div v-if="applicant.cost_sharing_letter" class="col-lg-9 col-md-8">   <button @click="downladCostSharing(applicant.id,applicant.cost_sharing_letter)" class="btn btn-info"><i class="bx bxs-download"></i></button>
                                    </div>
                                    <p v-else>No File </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Application Number</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.application_number }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Reciept Number</div>
                                    <div class="col-lg-9 col-md-8">{{ applicant.reciept_number }}</div>
                                </div>
                                  <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Other Documents</div>
                                    <div class="col-lg-9 col-md-8">
                                        <div v-if="applicant.other_documents" class="col-lg-9 col-md-8">   <button @click="downladOtherDocuments(applicant.id,applicant.other_documents)" class="btn btn-info"><i class="bx bxs-download"></i></button>
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
        this.axios.get('/api/user/getSingleApplicant/' + id)
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
    downladBankStatement(id,file) {
            this.axios({
                url: '/api/user/registerarBankStatementFile/' + id,
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
        downladCostSharing(id,file) {
            this.axios({
                url: '/api/user/registerarBankStatementFile/' + id,
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
        downladOtherDocuments(id,file) {
            this.axios({
                url: '/api/user/registerarOtherDocuments/' + id,
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
}
}
</script>
