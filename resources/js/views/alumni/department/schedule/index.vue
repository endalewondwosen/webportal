<template>
<div>
    <div class="pagetitle">
        <h1>Exam Schedule List </h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Exam Schedules</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Exam Schedules List
                            <router-link to="/home/exam_schedule_add" class="btn btn-primary" style="float:right"> Add Exam Schedule</router-link>

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
                                            <th> <a href="#">#</a> </th>
                                            <th> <a href="#">Announcement</a> </th>
                                            <th ><a href="#">Exam Date</a> </th>
                                            <th><a href="#">Exam Time</a> </th>
                                            <th><a href="#">Exam Place</a> </th>
                                            <th width="20%"><a href="#">Exam Description</a> </th>
                                             <th>Actions </th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                    
                                        <tr v-for="(schedule,index) in schedules" :key="schedule.id">
                                            <th>{{ index+1 }}</th>
                                            <td>{{ schedule.announce.title }}</td>
                                            <td>{{ schedule.exam_date }}</td>
                                            <td>{{ schedule.exam_time }}</td>
                                            <td >{{ schedule.exam_place }}</td>
                                            <td >{{ schedule.description.substring(0,50)+".." }}</td>
                                           
                                        
                                            <td >
                                                <router-link :to="{name:'EditExamSchedule',params:{id:schedule.id}}" class="btn btn-primary"><i class="ri-edit-2-fill"></i></router-link>
                                                <button class="btn btn-danger" @click.prevent="deleteSchedule(schedule.id)"><i class="bi bi-trash-fill"></i></button>
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
        this.allAnnouncements();
           },
    data() {
        return {
            schedules: [],
            id:this.auth.user.id,
           
        }
    },
  
    methods: {
        allAnnouncements() {
            this.axios.get('/api/user/schedules/'+this.id)
                .then(({
                    data
                }) => {
                    this.schedules = data
               }).catch()
        },
        deleteSchedule(id) {
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
                    this.axios.delete('/api/user/deleteSchedule/' + id)
                        .then(() => {
                            this.schedules = this.schedules.filter(schedule => {
                                return schedule.id != id

                            })
                            //Notification.success(); 
                            Toast.fire({
                                icon: 'error',
                                title: 'Schedule deleted successfully!'
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
      
    },

   

}
</script>
