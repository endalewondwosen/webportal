<template>
<div>
    <div class="pagetitle">
        <h1>Study Level Edit</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Study Level </li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Edit Study Level 
                            <router-link to="/home/all-study_level" class="btn btn-primary" style="float:right"> All Study Level </router-link>

                        </h5>
                        <form class="row g-3" @submit.prevent="Update">
                            <div class="col-md-12">
                                <label for="inputNanme4" class="form-label"> <b>Study Level Name</b> </label>
                                <input type="text" class="form-control" v-model="form.name" placeholder="Enter Semister name">
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
    created() {
        let id = this.$route.params.id;
        this.axios.get('/api/user/study_levels/' + id)
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
    },

    methods: {
        Update() {
            let id=this.$route.params.id;
            this.axios.patch('/api/user/study_levels/'+id, this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/all-study_level')
                    Toast.fire({
                        icon: 'info',
                        title: 'Study Level Updated successfully!'
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
