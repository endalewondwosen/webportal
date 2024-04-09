<template>
<div>
    <div class="pagetitle">
        <h1>Colleges/Schools List</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Colleges/schools</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div>
    <!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            Colleges/Schools List
                            <router-link to="/home/create-departement" class="btn btn-primary" style="float: right">
                                Add Departement</router-link>
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
                                    <thead class="table-light" >
                                        <tr>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">#</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Name</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Collegue/School</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Admission Type</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Study Level</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Duration</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Created_At</a></th>

                                            <th width="10%">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(department,index) in departements" :key="department.id">
                                            <th scope="row">{{ index+1 }}</th>
                                            <td>{{ department.name }}</td>
                                             <td>{{ department.college.name }}</td>
                                            <td>{{ department.admission.name }}</td>
                                            <td>{{ department.study_level.name }}</td>
                                             <td>{{ department.duration }}</td>
                                            <td>{{ department.created_at }}</td>
                                            <td>
                                                <router-link :to="{name:'EditDepartment',params:{id:department.id}}" class="btn btn-primary"><i class="ri-edit-2-fill"></i></router-link>
                                                <button class="btn btn-danger" @click.prevent="deleteDepartement(department.id)"><i class="bi bi-trash-fill"></i></button>
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
                        <!-- <div class="dataTable-top">
                            <div class="dataTable-dropdown">
                                <select class="form-select" v-model="perPage">
                                    <option value=5 selected="">5</option>
                                    <option value=10>10</option>
                                    <option value=15>15</option>
                                    <option value=20>20</option>
                                    <option value=25>25</option>
                                </select>
                                select per page
                            </div>
                            <div class="dataTable-search">
                                <input class="form-control" placeholder="Search..." type="text" v-model="filter" />
                            </div>
                        </div>
                        <bootstrap-4-datatable :columns="columns" :data="rows" :filter="filter" :per-page="perPage"></bootstrap-4-datatable>

                        <div class="dataTable-bottom">
                            <nav class="dataTable-pagination">
                                <ul class="dataTable-pagination-list">
                                    <bootstrap-4-datatable-pager v-model="page" type="abbreviated"></bootstrap-4-datatable-pager>
                                </ul>
                            </nav>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import axios from "axios";
import buttons from '../../../components/buttons.vue'
export default {
    created() {
        this.allDepartements();
    },
    data() {
        return {
            // columns: [
            //     { 
            //         label: "Name",
            //         field: "name"
            //     },
            
            //     {
            //         label: "Collegue",
            //         field: "college.name"
            //     },
            //     {
            //         label: "Admission Type",
            //         field: "admission.name"
            //     },
            //     {
            //         label: "Study Level",
            //         field: "study_level.name"
            //     },
            //     {
            //         label: "Duration",
            //         field: "duration"
            //     },
            //     {
            //         label: "Actions",
            //         field: "id",
            //         component: buttons
            //     },
            // ],
            // rows: [],
            // page: 1,
            // filter: "",
            // perPage: 5,

             departements: {}
        };
    },
    methods: {
        allDepartements() {
            this.axios.get('/api/user/departements')
                .then(({
                    data
                }) => {
                    this.departements = data
                }).catch()

        },

        // allDepartements: function () {
        //     axios.get("/api/user/departements").then(
        //         function (response) {
        //             this.rows = response.data;
        //         }.bind(this)
        //     );
        // },
        deleteDepartement(id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "error",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios
                        .delete("/api/user/departements/" + id)
                        .then(() => {
                            this.departements = this.departements.filter((department) => {
                                return department.id != id;
                            });
                            //Notification.success();
                            Toast.fire({
                                icon: "error",
                                title: "Departement deleted successfully!",
                            });
                        })
                        .catch((error) => {
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000,
                            });
                        });
                }
            });
        },
    },
};
</script>
