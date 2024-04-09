<template>
<div>
    <div class="pagetitle">
        <h1> List of Official Transcript Applicants</h1>
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
                        <h5 class="card-title">List of Official Transcript Applicants

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
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Bank Statement</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Reciept Number </a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Actions</a></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(official,index) in applicants" :key="official.id">
                                            <th scope="row">{{ index+1 }}</th>
                                            <td>{{ official.first_name }}</td>
                                            <td>{{ official.father_name }}</td>
                                            <td v-if="official.bank_receipt"> <button @click="onClick(official.id,official.bank_receipt)" class="btn btn-info"><i class="bx bxs-download"></i></button> </td>
                                            <td v-else>No File </td>
                                            <td>{{ official.reciept_number }}
                                            </td>

                                            <td>

                                                <router-link v-if="!official.reciept_number" :to="{name:'OfficailTranscriptRecieptAdd',params:{id:official.id,bank_receipt:official.bank_receipt}}" class="btn btn-primary"> <i class="ri-add-fill"></i></router-link>

                                                <router-link v-if="official.reciept_number" :to="{name:'OfficailTranscriptRecieptAdd',params:{id:official.id,bank_receipt:official.bank_receipt}}" class="btn btn-info"><i class="ri-edit-2-fill"></i></router-link>

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
            disabled: false,

        }
    },
    methods: {
        allApplicants() {
            this.axios.get('/api/user/officialApplicants')
                .then(({
                    data
                }) => {
                    this.applicants = data
                }).catch()
        },
        // onClick(id) {
        //     this.axios.get('/api/user/financeOfficialFile/' + id)
        //         .then(() => {
        //             Toast.fire({
        //                 icon: 'success',
        //                 title: 'file dowoaded successfully!'
        //             });
        //         }).catch(error=>{
        //             Toast.fire({
        //                 icon: 'error',
        //                 title: 'something happining wrong'
        //             });
        //         })
        // },
        onClick(id, file) {
            this.axios({
                url: '/api/user/financeOfficialFile/' + id,
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
    },

}
</script>

<style scoped>
#emp_photo {
    width: 40px;
    height: 40px;
}
</style>
