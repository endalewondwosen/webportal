<template>
<main id="main" class="main">
    <div class="pagetitle text-center  mybody  ">
        <h1 class="bg-success text-white"> Wollo University </h1>
        <h1 class="bg-success text-white">Exam Schedule </h1>
    </div><!-- End Page Title -->
    <!-- End Page Title -->
    <div class="row">
        <div class="col-lg-12 mb-4">
            <!-- Simple Tables -->
            <div class="card" >
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Schedules</h6>
                </div>
                <div class="table-responsive">
                       <table class="table align-items-center table-flush ">
                                    <thead class="table-light">
                                        <tr>
                                            <th> <a href="#">#</a> </th>
                                            <th> <a href="#">Announcement</a> </th>
                                            <th ><a href="#">Exam Date</a> </th>
                                            <th><a href="#">Exam Time</a> </th>
                                            <th><a href="#">Exam Place</a> </th>
                                             <th>Action </th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                    
                                        <tr v-for="(schedule,index) in schedules" :key="schedule.id">
                                            <th>{{ index+1 }}</th>
                                            <td>{{ schedule.announce.title }}</td>
                                            <td>{{ schedule.exam_date }}</td>
                                            <td>{{ schedule.exam_time }}</td>
                                            <td >{{ schedule.exam_place }}</td>
                                           
                                        
                                            <td >
                                                <router-link :to="{name:'ScheduleDetail',params:{id:schedule.id}}" class="btn btn-primary">details</router-link>
                                          
                                            </td>  
                                       
                                           
                                        </tr>

                                    </tbody>
                                </table>
                </div>
                <div class="card-footer"></div>
            </div>
        </div>
    </div>

</main>
</template>


<script>
export default {
    mounted() {
        this.allAnnouncements();
           },
    data() {
        return {
            schedules: [],
           
        }
    },
  
    methods: {
        allAnnouncements() {
            this.axios.get('/api/user/frontschedules')
                .then(({
                    data
                }) => {
                    this.schedules = data
               }).catch()
        },
      
      
    },

   

}
</script>
