<template>
<div>
    <div class="pagetitle">
        <h1>Dashboard</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/home">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
        <div class="row">

            <!-- Left side columns -->
            <div class="col-lg-12">
                <div class="row">
                  <div class="col-xxl-6 col-md-6">
                        <div class="card info-card sales-card">

                            <div class="card-body">
                                <h5 class="card-title">Number of Colleges </h5>

                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i class="bi bi-cart"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h6>{{ colleges }}</h6>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div><!-- End Sales Card -->
                    <!-- Sales Card -->
                    <div class="col-xxl-6 col-md-6">
                        <div class="card info-card sales-card">

                            <div class="card-body">
                                <h5 class="card-title">Number of Programs Avilable </h5>

                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i class="bi bi-cart"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h6>{{ programs }}</h6>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div><!-- End Sales Card -->
                    <div class="col-xxl-6 col-md-6">
                        <div class="card info-card sales-card">

                            <div class="card-body">
                                <h5 class="card-title">Number of Fresh Students</h5>

                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                      <i class="bi bi-people"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h6>{{ fresh_student }}</h6>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div><!-- End Sales Card -->

                    <div class="col-xxl-6 col-md-6">
                        <div class="card info-card sales-card">

                            <div class="card-body">
                                <h5 class="card-title">Number of Graguated Students </h5>

                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                      <i class="bi bi-people"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h6>{{ graduate_student }}</h6>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div><!-- End Sales Card -->
                    <div class="col-xxl-6 col-md-6">
                        <div class="card info-card sales-card">

                            <div class="card-body">
                                <h5 class="card-title">Active Announcements </h5>

                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i class="bi bi-cart"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h6>{{ active_announcemnet }}</h6>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div><!-- End Sales Card -->

                    <!-- Recent Sales -->
                    <div class="col-12">
                        <div class="card recent-sales overflow-auto">

                            <div class="card-body">
                                <h5 class="card-title">Active Users </h5>

                                <table class="table table-borderless ">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Father Name</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">Role</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(user,index) in users" :key="user.id">
                                          <th scope="row"><a href="#">{{ index }}</a></th>
                                          <td><a href="#" class="text-primary">{{ user.name }}</a></td>
                                          <td><a href="#" class="text-primary">{{ user.father_name }}</a></td>
                                            <td>{{ user.phone }}</td>
                                            <td v-if="user.role=='Department'"><span class="badge bg-success">{{ user.departement.name }}</span></td>
                                            <td v-else><span class="badge bg-success">{{ user.role }}</span></td>
                                        </tr>
                                  
                                   
                                       
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div><!-- End Recent Sales -->

                </div>
            </div><!-- End Left side columns -->

        
        </div>
    </section>

</div>
</template>

<script>
export default {
    mounted() {
        this.axios.get('/api/user/dprograms')
            .then(({
                data
            }) => {
                this.programs = data
            }).catch()
        this.axios.get('/api/user/dfresh_Student')
            .then(({
                data
            }) => {
                this.fresh_student = data
            }).catch()
        this.axios.get('/api/user/dgraduatedStudent')
            .then(({
                data
            }) => {
                this.graduate_student = data
            }).catch()
        this.axios.get('/api/user/dactiveAnnouncemnt')
            .then(({
                data
            }) => {
                this.active_announcemnet = data
            }).catch()
        this.axios.get('/api/user/dcolleges')
            .then(({
                data
            }) => {
                this.colleges = data
            }).catch()
        this.axios.get('/api/user/dusers')
            .then(({
                data
            }) => {
                this.users = data
            }).catch()
    },
    data() {
        return {
            programs: '',
            fresh_student: '',
            graduate_student: '',
            active_announcemnet: '',
            users: {},
            colleges: ''
        }
    },
}
</script>
