<template>
<div>
    <div class="pagetitle">
        <h1>Graduated Students List</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Graduated Students</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Graduated Students List
                            <router-link to="/home/create-graduated_students" class="btn btn-primary" style="float:right"> Add Graduated Students</router-link>

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
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter"> Grand Father Name</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Sex</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">College</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Departement</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Admission Type</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Study Type</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Unversity ID</a></th>

                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Phone Number</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Email</a></th>

                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Year of Graduation</a></th>
                                            <th width="10%">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(student,index) in graduateStudents" :key="student.id">
                                            <th scope="row">{{ index+1 }}</th>
                                            <td>{{ student.first_name }}</td>
                                            <td>{{ student.father_name }}</td>
                                            <td>{{ student.grand_father_name }}</td>
                                            <td>{{ student.sex }}</td>
                                            <td>{{ student.college.name }}</td>
                                            <td>{{ student.departement.name }}</td>
                                            <td>{{ student.admission.name }}</td>
                                            <td>{{ student.study.name }}</td>
                                            <td>{{ student.unversity_id }}</td>
                                            <td>{{ student.mobile_number }}</td>
                                            <td>{{ student.email }}</td>
                                            <td>{{ student.year.name }}</td>
                                            <td>
                                                <router-link :to="{name:'EditGraduateStudent',params:{id:student.id}}" class="btn btn-primary"><i class="ri-edit-2-fill"></i></router-link>
                                                <button class="btn btn-danger" @click.prevent="deleteGratuateStudent(student.id)"><i class="bi bi-trash-fill"></i></button>
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
        this.allGraduateStudents();
    },
    data() {
        return {
            graduateStudents: {}
        }
    },
    methods: {
        allGraduateStudents() {
            this.axios.get('/api/user/graduate_students')
                .then(({
                    data
                }) => {
                    this.graduateStudents = data
                }).catch()
        },
        deleteGratuateStudent(id) {
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
                    this.axios.delete('/api/user/graduate_students/' + id)
                        .then(() => {
                            this.graduateStudents = this.graduateStudents.filter(student => {
                                return student.id != id

                            })
                            //Notification.success(); 
                            Toast.fire({
                                icon: 'error',
                                title: 'Student deleted successfully!'
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
