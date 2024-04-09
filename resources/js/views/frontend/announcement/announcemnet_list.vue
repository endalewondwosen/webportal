<template>
<section id="why-us" class="why-us mt-3">
   
    <div class="pagetitle text-center    ">
        <h1 class="bg-success text-white"> Active Application Periods/Announcements </h1>
        <h1></h1>
    </div>
    
    <div class="container" data-aos="fade-up">

        <div class="row">
            <div class="col-lg-12 d-flex align-items-stretch " data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-boxes d-flex flex-column justify-content-center">
                    <div class="row ">
                        <div class="col-xl-4 d-flex align-items-stretch mt-3"  v-for="(announce) in anouncements" :key="announce.id">
                            <div class="icon-box mt-4 mt-xl-0">
                                <i class="bx bx-receipt"></i>
                                <h3>{{ announce.title }}</h3>
                                <p>
                                    <strong>Admission Calendar : {{announce.year.name}}</strong>
                                </p>
                                <p>
                                    <strong>Semister : {{announce.semister.name}}</strong>
                                </p>
                                <p class="text-danger">
                                    <strong>Application Date: From {{announce.admission_start_date}} To {{announce.admission_end_date}}</strong>
                                </p>
                                
                                <div class="text-center">
                                    <router-link :to="{name:'AnnouncementDetail',params:{id:announce.id}}" class=" btn btn-primary">See details </router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div><!-- End .content-->

            </div>
            <hr>
        </div>

    </div>
</section><!-- End Why Us Section -->
</template>

<script>
export default {
    data() {
        return {
            anouncements: {},

        }
    },
    mounted() {
        this.axios.get('/api/user/getAnnouncements')
            .then(({
                data
            }) => {
                this.anouncements = data
            }).catch()

    },
}
</script>
