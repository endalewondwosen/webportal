<template>
<div>
    <div class="pagetitle">
        <h1>Add Reciept Number</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Recipt Number</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add Reciept Number
                            <router-link to="/home/finance_view_admission" class="btn btn-primary" style="float:right"> Back</router-link>

                        </h5>
                        <form class="row g-3" @submit.prevent="addReciptNumber">


                            <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>Receipt Number</b> </label>
                                <input type="text" class="form-control" v-model="form.receipt_number" placeholder="Enter Reciept Number">
                                <div class="text-danger" v-if="errors.receipt_number">*{{ errors.receipt_number[0] }}</div>
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
               receipt_number: ''
            },
            applicant:{}

        }
    },
    created() {
        let id=this.$route.params.id;
        this.axios.get('/api/user/getAdmissionApplicant/'+id)
        .then(({data})=>{
            this.form=data
        }).catch()
    },
    methods: {

        addReciptNumber() {
              let id=this.$route.params.id;
            this.axios.post('/api/user/admisson_reciept_add/'+id, this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/finance_view_admission')
                        Toast.fire({
                                icon: 'success',
                                title: 'Receipt Number Inserted successfully!'
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
<style scoped>
#emp_photo {
    width: 400px;
    height: 400px;
}
</style>
