<template>
<div>
    <div class="pagetitle">
        <h1>Calendar Update</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/home">Home</router-link>
                </li>
                <li class="breadcrumb-item">Calendar</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Update Calender
                            <router-link to="/home/all-calendar" class="btn btn-primary" style="float:right"> All Calendar</router-link>

                        </h5>
                        <form class="row g-3 justify-content-center" @submit.prevent="updateCalendar">
                            <div class="col-md-8">
                                <label for="inputNanme4" class="form-label"> <b>Date</b> </label>
                                <input type="date" class="form-control" v-model="form.date" placeholder="Enter Date">
                                <div class="text-danger" v-if="errors.date">*{{ errors.date[0] }}</div>
                            </div>
                            <div class="col-md-8">
                                <label for="inputNanme4" class="form-label"> <b>Activity</b> </label>
                                <textarea class="form-control" v-model="form.activity" cols="30" rows="5"></textarea>

                                <div class="text-danger" v-if="errors.activity">*{{ errors.activity[0] }}</div>
                            </div>
                            <div class="col-md-8">
                                <label for="inputNanme4" class="form-label"> <b>Acadamic Year</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.acadamic_year">
                                    <option selected="" value="" disabled>Select Acadamic Year</option>
                                    <option :value="year.id" v-for="year in acadamic_years" :key="year.id">
                                        {{ year.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.acadamic_year">*{{ errors.acadamic_year[0] }}</div>
                            </div>

                            <div class="col-md-8">
                                <label for="inputNanme4" class="form-label"> <b>Addmision Type</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.addmission_type">
                                    <option selected="" value="" disabled>Select Addmision Type</option>
                                    <option :value="admission.id" v-for="admission in admission_types" :key="admission.id">
                                        {{ admission.name }}
                                    </option>
                                </select>
                                <div class="text-danger" v-if="errors.addmission_type">*{{ errors.addmission_type[0] }}</div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Update</button>
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
    created() {
        let id = this.$route.params.id;
        this.axios.get('/api/user/show-calendar/' + id)
            .then(({
                data
            }) => {
                this.form = data
            }).catch(error => {

                Toast.fire({
                    icon: 'success',
                    title: error.response.data.message
                });
            })
            this.axios.get('/api/user/acadamic_years')
            .then(({
                data
            }) => {
                this.acadamic_years = data
            }).catch()
          this.axios.get('/api/user/admission_types')
            .then(({
                data
            }) => {
                this.admission_types = data
            }).catch()

    },
    data() {
        return {
            acadamic_years: {},
            admission_types: {},
            errors: {},
            form: {
                date: '',
                activity: '',
                acadamic_year: '',
                addmission_type: '',
            },

        }
    },

    methods: {
        updateCalendar() {
            let id = this.$route.params.id;
            this.axios.post('/api/user/update-calendar/'+id, this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/all-calendar')
                    Toast.fire({
                        icon: 'success',
                        title: 'calendars Updated successfully!'
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
    // mounted() {
       
    // },
}
</script>
