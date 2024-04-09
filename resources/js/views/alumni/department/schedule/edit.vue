<template>
<div>
    <div class="pagetitle">
        <h1>Edit Exam Schedule</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Edit Exam Schedule</li>
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
                           Edit Exam Schedule
                            <router-link to="/home/exam_schedule_view" class="btn btn-primary" style="float: right">
                                All Schedules</router-link>
                        </h5>
                     <form class="row g-3" @submit.prevent="editExamschedule">
                               <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>Announcement Title</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.announce">
                                    <option selected="" value="" disabled>Select Announcement</option>
                                    <option :value="announce.id" v-for="announce in announcementes" :key="announce.id">
                                        {{ announce.title }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.announce">*{{ errors.announce[0] }}</div>
                            </div>
                            <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>Exam Date</b> </label>
                                <input type="date" class="form-control" v-model="form.exam_date" placeholder="Enter Anouncement Title">
                                <div class="text-danger" v-if="errors.exam_date">*{{ errors.exam_date[0] }}</div>
                            </div>
                          <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>Exam Time</b> </label>
                                <input type="text" class="form-control" v-model="form.exam_time" placeholder="2:00 a.m">
                                <div class="text-danger" v-if="errors.exam_time">*{{ errors.exam_time[0] }}</div>
                            </div>
                        <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>Exam Place</b> </label>
                                <input type="text" class="form-control" v-model="form.exam_place" placeholder="Enter exam place">
                                <div class="text-danger" v-if="errors.exam_place">*{{ errors.exam_place[0] }}</div>
                            </div>
                            <div class="col-md-12">
                                <label for="inputNanme4" class="form-label"> <b>Exam Description</b> </label>
                                <textarea class="form-control" style="height: 100px" v-model="form.description"></textarea>
                                <div class="text-danger" v-if="errors.description">*{{ errors.description[0] }}</div>
                            </div>
                          
                         

                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <button type="reset" class="btn btn-secondary">Reset</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            errors: {},
            form: {
            announce:'',
            user_id:'',
            exam_date:'',
            exam_time:'',
            exam_place:'',
            description:'',    
            },
            announcementes:{},
         
        };
    },
    created() {
        let id = this.$route.params.id;
      this.axios.get('/api/user/getsingleSchedule/' + id)
            .then(({
                data
            }) => {
                this.form = data
                //console.log(response)
            }).catch(error => {
                
                Toast.fire({
                    icon: 'error',
                    title: error.response.data.message
                });
            })

          this.axios.get('/api/user/getAnnouncements/'+this.auth.user.id)
            .then(({
                data
            }) => {
                this.announcementes = data
            }).catch()    
    },

    methods: {
       editExamschedule() {
        let id= this.$route.params.id;
            this.axios.post('/api/user/UpdateExamSchedule/'+id, this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/exam_schedule_view')
                    Toast.fire({
                        icon: 'success',
                        title: 'Exam Schedule Updated successfully!'
                    });
                }).catch(error => {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        case 403:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: 'Something went wrong please contact system admin!',
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Some error occurred, Please try again!',
                                time: 5000
                            });
                            break;
                    }
                })
        }
    },
};
</script>
