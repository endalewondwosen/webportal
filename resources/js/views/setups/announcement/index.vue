<template>
<div>
    <div class="pagetitle">
        <h1>Announcements List</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Announcements</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Announcements List
                            <router-link to="/home/create-announcement" class="btn btn-primary" style="float:right"> Add Announcement</router-link>

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
                                            <th> <a href="#">Title</a> </th>
                                            <th width="100%"><a href="#">Content</a> </th>
                                            <th><a href="#">Year</a> </th>
                                            <th><a href="#">Semister</a> </th>
                                            <th><a href="#">Addmision Start Date</a> </th>
                                            <th><a href="#">Admission End Date</a> </th>
                                            <th><a href="#">created_At</a> </th>
                                            <th><a href="#">Status</a> </th>
                                            <th>Actions </th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                    
                                        <tr v-for="(announcement,index) in anouncements" :key="announcement.id">
                                             <th>{{ index+1  }}</th>
                                            <td >{{ announcement.title }}</td>
                                            <td >{{ announcement.content }}</td>
                                            <td >{{ announcement.year.name }}</td>
                                            <td >{{ announcement.semister.name }}</td>
                                            <td >{{ announcement.admission_start_date }}</td>
                                            <td >{{ announcement.admission_end_date }}</td>
                                            <td >{{announcement.created_at }}</td>
                                            <td v-if="announcement.status=='Active' "> <button @click.prevent="deactivate(announcement.id)" class="badge rounded-pill bg-success">{{ announcement.status }}</button> </td>
                                            <td v-if="announcement.status=='Deactive' "> <button class="badge rounded-pill bg-danger" @click.prevent="deactivate(announcement.id)">{{ announcement.status }}</button> </td>
                                            <td v-if="announcement.user_id==id">
                                                <router-link :to="{name:'EditAnnouncement',params:{id:announcement.id}}" class="btn btn-primary"><i class="ri-edit-2-fill"></i></router-link>
                                                <button class="btn btn-danger" @click.prevent="deleteAnnouncement(announcement.id)"><i class="bi bi-trash-fill"></i></button>
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
            anouncements: [],
            id:this.auth.user.id,
           
        }
    },
  
    methods: {
        allAnnouncements() {
            this.axios.get('/api/user/getAnnouncements/'+this.id)
                .then(({
                    data
                }) => {
                    this.anouncements = data
                  
                    
                }).catch()
        },
        deleteAnnouncement(id) {
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
                    this.axios.delete('/api/user/announcements/' + id)
                        .then(() => {
                            this.anouncements = this.anouncements.filter(announcement => {
                                return announcement.id != id

                            })
                            //Notification.success(); 
                            Toast.fire({
                                icon: 'error',
                                title: 'Announcement deleted successfully!'
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
        deactivate(id) {
            this.axios.get('/api/user/announcementStatus/' + id)
                .then(() => {
                
                    //Notification.success(); 
                    this.allAnnouncements()
                    Toast.fire({
                        icon: 'success',
                        title: 'Status Updated successfully!'
                    })

                }).catch(error => {

                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });

                })
        }
    },

   

}
</script>
