<template>
<div>
    <div class="pagetitle">
        <h1>Add Student Exam Result</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Exam Result</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add Student Exam Result
                            <router-link to="/home/all_selected_applicants" class="btn btn-primary" style="float:right"> Back</router-link>

                        </h5>
                        <form class="row g-3" @submit.prevent="addReciptNumber">
                         
                            <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>Exam Result</b> </label>
                                <input type="number" min="0" class="form-control" v-model="form.exam_result" placeholder="Enter Exam Result">
                                <div class="text-danger" v-if="errors.exam_result">*{{ errors.exam_result[0] }}</div>
                            </div>
                             <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>Status</b> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.status">
                                <option value="" disabled selected>Select Status</option>
                                <option value="1">Pass</option>
                                <option value="2">Fail</option>
                                </select>
                                
                                <div class="text-danger" v-if="errors.status">*{{ errors.status[0] }}</div>
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
               exam_result: '',
               status:''
            },
            applicant:{}

        }
    },
    created() {
        let id=this.$route.params.id;
        this.axios.get('/api/user/getstudentExamResult/'+id)
        .then(({data})=>{
            this.form=data
        }).catch()
    },
    methods: {
      
        addReciptNumber() {
              let id=this.$route.params.id;
            this.axios.post('/api/user/exam_result_add/'+id, this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/all_selected_applicants')
                        Toast.fire({
                                icon: 'success',
                                title: 'Exam Result Inserted successfully!'
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