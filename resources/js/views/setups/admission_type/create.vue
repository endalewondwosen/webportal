<template>
<div>
    <div class="pagetitle">
        <h1>Admission Type Add</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Admission Type</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add Admission Type
                            <router-link to="/home/all-admission_type" class="btn btn-primary" style="float:right"> All Admission Type</router-link>

                        </h5>
                        <form class="row g-3" @submit.prevent="addAdmissionType">
                            <div class="col-md-12">
                                <label for="inputNanme4" class="form-label"> <b>Admission Type  Name</b> </label>
                                <input type="text" class="form-control" v-model="form.name" placeholder="Enter College/School name">
                                <div class="text-danger" v-if="errors.name">*{{ errors.name[0] }}</div>
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
                name: '',
                
            },

        }
    },

    methods: {
        addAdmissionType() {
            this.axios.post('/api/user/admission_types', this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/all-admission_type')
                        Toast.fire({
                                icon: 'success',
                                title: 'Admission Type Inserted successfully!'
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
}
</script>
