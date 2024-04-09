<template>
<div>
    <div class="pagetitle">
        <h1>Departement Add</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Departement</li>
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
                            Add Departement
                            <router-link to="/home/all-announcement" class="btn btn-primary" style="float: right">
                                All Departements</router-link>
                        </h5>
                        <form class="row g-3" @submit.prevent="editAnnouncements">
                            <div class="col-md-8">
                                <label for="inputNanme4" class="form-label"> <b>Announcement Title</b> </label>
                                <input type="text" class="form-control" v-model="form.title" placeholder="Enter Anouncement Title">
                                <div class="text-danger" v-if="errors.title">*{{ errors.title[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Announcement Year</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.year_id">
                                    <option selected="" value="" disabled>Select Acadamic Year</option>
                                    <option :value="year.id" v-for="year in acadamic_years" :key="year.id">
                                        {{ year.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.year_id">*{{ errors.year_id[0] }}</div>
                            </div>
                            <div class="col-md-12">
                                <label for="inputNanme4" class="form-label"> <b>Announcement Content</b> </label>
                                <textarea class="form-control" style="height: 100px" v-model="form.content"></textarea>
                                <div class="text-danger" v-if="errors.content">*{{ errors.content[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Announcement Semister</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.semister_id">
                                    <option selected="" value="" disabled>Select Acadamic Year</option>
                                    <option :value="semister.id" v-for="semister in semisters" :key="semister.id">
                                        {{ semister.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.semister_id">*{{ errors.semister_id[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Addmision Start Date</b> </label>
                                <input type="date" class="form-control" v-model="form.admission_start_date" placeholder="Enter College/School name">
                                <div class="text-danger" v-if="errors.admission_start_date">*{{ errors.admission_start_date[0] }}</div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Addmision End Date</b> </label>
                                <input type="date" class="form-control" v-model="form.admission_end_date" placeholder="Enter College/School name">
                                <div class="text-danger" v-if="errors.admission_end_date">*{{ errors.admission_end_date[0] }}</div>
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">
                                    Submit
                                </button>
                                <button type="reset" class="btn btn-secondary">
                                    Reset
                                </button>
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
                title: '',
                content: '',
                year_id: '',
                semister_id: '',
                admission_start_date: '',
                admission_end_date: '',
            },
            acadamic_years: {},
            semisters: {},
        };
    },
    created() {
        let id = this.$route.params.id;
        this.axios
            .get("/api/user/announcements/" + id)
            .then(({
                data
            }) => {
                this.form = data;
                //console.log(data)
            })
            .catch((error) => {
                Toast.fire({
                    icon: "success",
                    title: error.response.data.message,
                });
            });

        this.axios.get('/api/user/acadamic_years')
            .then(({
                data
            }) => {
                this.acadamic_years = data
            }).catch()
        this.axios.get('/api/user/semisters')
            .then(({
                data
            }) => {
                this.semisters = data
            }).catch()

    },

    methods: {
        editAnnouncements() {
            let id = this.$route.params.id;
            this.axios
                .patch("/api/user/announcements/" + id, this.form)
                .then(({
                    data
                }) => {
                    this.$router.push("/home/all-announcement");
                    Toast.fire({
                        icon: "success",
                        title: "Announcement Updated successfully!",
                    });
                })
                .catch((error) => {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000,
                            });
                            break;
                        case 403:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000,
                            });
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: "Something went wrong please contact system admin!",
                                time: 5000,
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: "Some error occurred, Please try again!",
                                time: 5000,
                            });
                            break;
                    }
                });
        },
    },
};
</script>
