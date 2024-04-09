<template>
    <section id="why-us" class="why-us mt-3">
        <div class="pagetitle text-center  mybody  ">
            <h1 class="bg-success text-white">Wollo University</h1>
            <h2 class="bg-success text-white">Calendars  </h2>
        </div>
        <div class="container" data-aos="fade-up">
            <div class="card" >
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Calendars</h6>
                </div>
                <div class="table-responsive">
                       <table class="table align-items-center table-flush ">
                                    <thead class="table-light">
                                        <tr>
                                            <th> <a href="#">#</a> </th>
                                            <th> <a href="#">date</a> </th>
                                            <th ><a href="#">activity</a> </th>
                                            <th ><a href="#">Acadamic Year</a> </th>
                                            <th ><a href="#">Addmission Type</a> </th>

                                        </tr>
                                    </thead>
                                    <tbody >

                                        <tr v-for="(calendar,index) in calendars" :key="calendar.id">
                                            <th>{{ index+1 }}</th>
                                            <td>{{ calendar.date }}</td>
                                            <td>{{ calendar.activity }}</td>
                                            <td>{{ calendar.acadmic_year.name }}</td>
                                            <td>{{ calendar.addmission_type.name }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                </div>
                <div class="card-footer"></div>
            </div>

        </div>
    </section><!-- End Why Us Section -->
    </template>

    <script>
    export default {
        data() {
            return {
                calendars: {},

            }
        },
        mounted() {
            let id =this.$route.params.id
            this.axios.get('/api/user/getCalendars')
                .then(({
                    data
                }) => {
                    this.calendars = data
                }).catch()

        },
    }
    </script>
