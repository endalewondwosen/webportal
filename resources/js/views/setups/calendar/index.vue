<template>
    <div>
        <div class="pagetitle">
            <h1>Calendares List</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">Calendars</li>
                    <li class="breadcrumb-item active">Data</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Calendares List
                                <router-link to="/home/create-calendar" class="btn btn-primary" style="float:right"> Add Calendar</router-link>

                            </h5>
                            <!-- Table with stripped rows -->
                            <div>
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
                                <div class="table-responsive ">
                                    <table class="table align-items-center table-flush ">
                                        <thead class="table-light">
                                            <tr>
                                                <th><a href="#">#</a></th>
                                                <th> <a href="#">Date</a> </th>
                                                <th><a href="#">Activity</a> </th>
                                                <th><a href="#">Acadamic Year</a> </th>
                                                <th><a href="#">Admission Type</a> </th>
                                                <th><a href="#">Action</a> </th>
                                            </tr>
                                        </thead>
                                        <tbody >

                                            <tr v-for="(calendar,index) in calendars" :key="calendar.id">
                                                 <th>{{ index+1  }}</th>
                                                <td >{{ calendar.date }}</td>
                                                <td >{{ calendar.activity }}</td>
                                                <td >{{ calendar.acadmic_year.name }}</td>
                                                <td >{{ calendar.addmission_type.name }}</td>
                                                <td>
                                                <router-link :to="{name:'EditCalendar',params:{id:calendar.id}}" class="btn btn-primary"><i class="ri-edit-2-fill"></i></router-link>
                                                <button class="btn btn-danger" @click.prevent="calendarDestroy(calendar.id)"><i class="bi bi-trash-fill"></i></button>
                                            </td>


                                            </tr>

                                        </tbody>
                                    </table>
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
            this.allCalendares();



               },
        data() {
            return {
                calendars: [],

                id:this.auth.user.id,

            }
        },
        
        methods: {

            allCalendares() {
                this.axios.get('/api/user/all-calendar')
                    .then(({
                        data
                    }) => {
                        this.calendars = data


                    }).catch()
            },
      calendarDestroy(id) {
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
                    this.axios.delete('/api/user/delete-calendar/' + id)
                        .then(() => {
                            this.calendars = this.calendars.filter(calendar => {
                                return calendar.id != id

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
        }



    }
    </script>
