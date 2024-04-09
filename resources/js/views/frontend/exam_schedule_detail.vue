<template>
<section id="why-us" class="why-us mt-3">
    <div class="pagetitle text-center  mybody  ">
        <h1 class="bg-success text-white">Wollo University</h1>
        <h2 class="bg-success text-white">Exam Details</h2>
    </div>
    <div class="container" data-aos="fade-up">

        <div class="row" v-if="schedules">
            <div class="col-lg-12 ">
                <div class="icon-boxes d-flex flex-column ">
                    <div class="row ">
                        <div class="col-lg-12 d-flex align-items-stretch mt-3" v-for="(schedule) in schedules" :key="schedule.id">
                            <div class="icon-box mt-4 mt-xl-0 " >
                                <i class="bx bx-receipt"></i>
                               
                                 <p class="text-dark"> 
                                    <strong>Announcemnet Title :  <h3>{{ schedule.announce.title }}</h3></strong>
                                </p>
                                <p class="text-dark">
                                    <strong>Exam Date : {{schedule.exam_date}}</strong>
                                </p>
                                <p class="text-dark">
                                    <strong>Exam Time : {{schedule.exam_time}}</strong>
                                </p>
                                <p  class="text-dark">
                                    <strong>Exam Place:  {{schedule.exam_place}} </strong>
                                </p>
                                <p class="text-dark">
                                    <strong>Description</strong> <br>
                                    {{ schedule.description }}
                                </p>
                                  <div class="text-center">
                            <router-link to="/schedules" class=" btn btn-primary">Back </router-link>
                        </div>
                            </div>
                        </div>

                    </div>
                </div><!-- End .content-->
            </div>
        </div>

    </div>
</section><!-- End Why Us Section -->
</template>

<script>
export default {
    data() {
        return {
            schedules: {},

        }
    },
    mounted() {
        let id =this.$route.params.id
        this.axios.get('/api/user/getScheduleDetail/'+id)
            .then(({
                data
            }) => {
                this.schedules = data
            }).catch()

    },
}
</script>
