<template>
<section id="why-us" class="why-us mt-3">
    <div class="pagetitle text-center  mybody  ">
        <h1 class="bg-success text-white">Wollo University</h1>
        <h2 class="bg-success text-white">Registral</h2>
    </div>
    <div class="container" data-aos="fade-up">

        <div class="row" v-if="anouncements">
            <div class="col-lg-12  " data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-boxes d-flex flex-column ">
                    <div class="row ">
                        <div class="col-xl-12 d-flex align-items-stretch mt-3" v-for="(announce) in anouncements" :key="announce.id">
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
                                    <strong>Application Date: From {{announce.admission_end_date}} To {{announce.admission_start_date}}</strong>
                                </p>
                                <p>
                                    <strong>Content</strong> <br>
                                    {{ announce.content }}
                                </p>
                                  <div class="text-center">
                            <router-link to="/admission_form" class=" btn btn-primary">APPLY NOW </router-link>
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
            anouncements: {},

        }
    },
    mounted() {
        let id =this.$route.params.id
        this.axios.get('/api/user/getAnnouncmetDetail/'+id)
            .then(({
                data
            }) => {
                this.anouncements = data
            }).catch()

    },
}
</script>
