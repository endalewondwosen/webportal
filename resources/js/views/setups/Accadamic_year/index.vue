<template>
<div>
    <div class="pagetitle">
        <h1>Acadamic Year List</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Acadamic Year</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Acadamic Year List
                            <router-link to="/home/create-acadamic_year" class="btn btn-primary" style="float:right"> Add Acadamic Year</router-link>

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
                            <div class="dataTable-container">
                                <table class="table datatable dataTable-table">
                                    <thead>
                                        <tr>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">#</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Name</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Created_At</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Updated_At</a></th>
                                            <th width="5%">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(acadamic,index) in acadamic_years" :key="acadamic.id">
                                            <th scope="row">{{ index+1 }}</th>
                                            <td>{{ acadamic.name }}</td>
                                            <td>{{ acadamic.created_at }}</td>
                                            <td>{{ acadamic.updated_at }}</td>
                                            <td>
                                                <router-link :to="{name:'EditAcadamicYear',params:{id:acadamic.id}}" class="btn btn-primary"><i class="ri-edit-2-fill"></i></router-link>
                                                <button class="btn btn-danger" @click.prevent="deleteAcadamicYear(acadamic.id)"><i class="bi bi-trash-fill"></i></button>
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
        this.allAcadamicYears();
    },
    data() {
        return {
            acadamic_years: {}
        }
    },
    methods: {
        allAcadamicYears() {
            this.axios.get('/api/user/acadamic_years')
                .then(({
                    data
                }) => {
                    this.acadamic_years = data
                }).catch()
        },
        deleteAcadamicYear(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.delete('/api/user/acadamic_years/' + id)
                        .then(() => {
                            this.acadamic_years = this.acadamic_years.filter(acadamic => {
                                return acadamic.id != id

                            })
                            //Notification.success(); 
                            Toast.fire({
                                icon: 'error',
                                title: 'Data deleted successfully!'
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
table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
}

table tbody {
    display: table;
    width: 100%;
}
</style>
