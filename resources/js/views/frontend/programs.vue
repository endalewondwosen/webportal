<template>
<main id="main" class="main">
    <div class="pagetitle text-center  mybody  ">
        <h1 class="bg-success text-white"> Wollo University </h1>
        <h1 class="bg-success text-white">Available Programs</h1>
    </div><!-- End Page Title -->
    <!-- End Page Title -->
    <div class="row">
        <div class="col-lg-12 mb-4">
            <!-- Simple Tables -->
            <div class="card" >
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Programs</h6>
                </div>
                <div class="table-responsive">
                    <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                            <tr class="text-center">
                                <th><a href="#">No</a></th>
                                <th><a href="#">Name</a></th>
                                <th><a href="#">College</a></th>
                                <th><a href="#">Admission Type</a></th>
                                <th><a href="#">Study Level</a></th>
                                <th><a href="#">Duration</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  class="text-center" v-for="(program,index) in programs" :key="program.id">
                                <td><a href="#">{{ index+1 }}</a></td>
                                <td>{{ program.name }}</td>
                                <td>{{ program.college.name }}</td>
                                <td>{{ program.admission.name }}</td>
                                <td>{{ program.study_level.name }}</td>
                                <td>{{ program.duration }}</td>
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
    data() {
        return {
            programs:{}
        }
    },

    mounted() {
        this.axios.get('/api/user/programs')
        .then(({data})=>{
            this.programs=data
        }).catch()
    },
}
</script>
