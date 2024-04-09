<template>
<div>
    <div class="pagetitle">
        <h1> List of Orginal Degree Request Applicants</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Applicants</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">List of Orginal Degree Request Applicants
                           

                        </h5>
                        <!-- Table with stripped rows -->
                        <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                            <div class="dataTable-top">
                                <div class="dataTable-dropdown"><label><select class="dataTable-selector">
                                            <option value="5">5</option>
                                            <option value="10" selected="">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="25">25</option>
                                        </select> entries per page</label></div>
                                <div class="dataTable-search"><input class="dataTable-input" placeholder="Search..." type="text"></div>
                            </div>
                            <div class="table-responsive">
                                <table class="table align-items-center table-flush ">
                                    <thead class="table-light">
                                        <tr>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">#</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">First Name</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Last Name</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Year Of Graduation</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Departement </a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Status </a></th>
                                            <th width="30%" scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Actions</a></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(orginal,index) in applicants" :key="orginal.id">
                                            <th scope="row">{{ index+1 }}</th>
                                            <td>{{ orginal.first_name }}</td>
                                            <td>{{ orginal.father_name }}</td>
                                            <td> {{ orginal.year.name }} </td>
                                            <!-- <td><a :href="official.bank_receipt">{{ official.bank_receipt }}</a></td> -->
                                            <td>{{ orginal.departement.name }}

                                            </td>
                                            <td>
                                                <span v-if="orginal.status=='0'" class="badge rounded-pill  bg-warning text-dark">Pending...</span>
                                                <span v-else-if="orginal.status=='1'" class="badge rounded-pill bg-success">Approved</span>
                                                <span v-else class=" badge rounded-pill bg-danger ">Rejected</span>
                                            </td>

                                            <td>
                                                <button v-if="orginal.status=='0'||orginal.status=='2'" class="btn btn-primary rounded-pill " @click.prevent="approveApplicant(orginal.id)">Approve</button>
                                                <button v-if="orginal.status=='0'||orginal.status=='1'" class="btn btn-danger rounded-pill " @click.prevent="rejectAplicant(orginal.id)">Reject</button>

                                                <router-link :to="{name:'OrginalDegreeRequestDetail',params:{id:orginal.id}}" class="btn btn-info rounded-pill"><i class="ri-edit-2-fill"></i> details</router-link>

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="dataTable-bottom">
                                <div class="dataTable-info">Showing 1 to 5 of 5 entries</div>
                                <nav class="dataTable-pagination">
                                    <ul class="dataTable-pagination-list"></ul>
                                </nav>
                            </div>
                        </div>
                        <!-- End Table with stripped rows -->

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
        this.allApplicants();
    },
    data() {
        return {
            applicants: {},

        }
    },
    methods: {
        allApplicants() {
            this.axios.get('/api/user/all_orginal_applicants')
                .then(({
                    data
                }) => {
                    this.applicants = data
                }).catch()
        },

        approveApplicant(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You are going to approve this applicant!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.get('/api/user/approveOrginalDegreeAplicant/' + id)
                        .then(() => {
                            this.allApplicants();
                            //Notification.success(); 
                            Toast.fire({
                                icon: 'success',
                                title: 'Applicant Approved successfully!'
                            })

                        }).catch(error => {

                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });

                        })
                }

            })
        },
        rejectAplicant(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You are going to Reject this applicant!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.get('/api/user/rejectOrginalDegreeAplicant/' + id)
                        .then(() => {
                            this.allApplicants();
                            //Notification.success(); 
                            Toast.fire({
                                icon: 'error',
                                title: 'Applicant Rejected successfully!'
                            })

                        }).catch(error => {

                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });

                        })
                }

            })
        }

    },

}
</script>

<style scoped>
#emp_photo {
    width: 40px;
    height: 40px;
}
</style>
