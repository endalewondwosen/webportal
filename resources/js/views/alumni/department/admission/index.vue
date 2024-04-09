<template>
<div>
    <div class="pagetitle">
        <h1> List of Selected Applicants For Exam</h1>
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
                        <h5 class="card-title">List of Selected Applicants For Exam
                            <button @click.prevent="getExcelData" class="btn btn-danger" style="float:right"><i class="bx bxs-download"></i>download(xlsx)</button>
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
                                           
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Sex</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Mobile Number</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Announcement</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Admission Type </a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Study Level </a></th>
                                             <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Year</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Exam Number </a></th>
                                              <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Exam Result </a></th>
                                              <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Status </a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Actions</a></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(applicant,index) in applicants" :key="applicant.id">
                                            <th scope="row">{{ index+1 }}</th>
                                            <td>{{ applicant.first_name }}</td>
                                            <td>{{ applicant.father_name }}</td>
                                            <td> {{ applicant.sex }} </td>
                                            <td>{{ applicant.mobile_number }}
                                            </td>
                                            <td>{{ applicant.announce.title }}
                                            </td>
                                             <td>{{ applicant.admission.name }}
                                            </td>
                                             <td>{{ applicant.study.name }}
                                            </td>
                                            <td>{{ applicant.year.name }}
                                            </td>
                                             <td>{{ applicant.exam[0].exam_number }}
                                            </td>
                                            <!-- <td></td>
                                            <td></td> -->
                                            <td>{{ applicant.exam[0].exam_result }}
                                            </td> 
                                               <td>
                                               <span v-if="applicant.exam[0].status=='0'" class="badge rounded-pill  bg-warning text-dark">Pending...</span>
                                                <span  v-else-if="applicant.exam[0].status=='1'" class="badge rounded-pill bg-success">Passed</span>
                                                 <span v-else class=" badge rounded-pill bg-danger ">Failed</span>

                                            </td>
                                            <!-- <td></td> -->
                                            <td>

                                                <router-link  :to="{name:'AddExamResult',params:{id:applicant.id}}" class="btn btn-primary"> <i class="ri-add-fill"></i></router-link>

                                                <router-link  :to="{name:'AddExamResult',params:{id:applicant.id}}" class="btn btn-info"><i class="ri-edit-2-fill"></i></router-link>

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
    mounted() {

        let loggedUser = this.auth.user
        // console.log(loggedUser.departement)
        // console.log(loggedUser.role)
        if (loggedUser.role == 'Department' && loggedUser.departement) {

            this.axios.get('/api/user/selectedApplicants/' + loggedUser.departement)
                .then(({
                    data
                }) => {
                  //  console.log(data)
                    this.applicants = data
                }).catch()
        }

    },
    data() {
        return {
            applicants: {},

        }
    },
    methods: {
        getExcelData(){
            let id=this.auth.user.departement;
        this.axios({
                url: '/api/user/dowload_exam_applicants/'+id,
                method: 'GET',
                responseType: 'arraybuffer',
            }).then((response) => {
                let blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = 'seleted_student_for_exam.xlsx'
                link.click()
            });
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
