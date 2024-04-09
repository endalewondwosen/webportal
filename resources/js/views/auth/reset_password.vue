<template>
<div>
    <main class="mybody">
        <div class="container">

            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div class="d-flex justify-content-center py-4">
                                <router-link to="/" class="logo d-flex align-items-center w-auto">
                                    <img :src="'static/wollo.png'" class="bg-success" alt="">
                                    <span class="d-none d-lg-block">Wollo University</span>
                                </router-link>
                            </div><!-- End Logo -->

                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Reset Password</h5>
                                    </div>
                                    <form class="row g-3 " @submit.prevent="onSubmit">
                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Email</label>
                                            <input type="email" class="form-control" placeholder="Enter your email to reset Your password" v-model="user.email">
                                            <div class="text-danger" v-if="errors.email"> *{{ errors.email[0] }}</div>

                                        </div>
                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Verfication Code</label>
                                            <input type="text" class="form-control" placeholder="Verfication Code" v-model="user.verification_code">
                                            <div class="text-danger" v-if="errors.verification_code"> *{{ errors.verification_code[0] }}</div>

                                        </div>
                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Password</label>
                                            <input type="password" class="form-control" placeholder="Password" v-model="user.password">
                                            <div class="text-danger" v-if="errors.password"> *{{ errors.password[0] }}</div>

                                        </div>
                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Confirm Password</label>
                                            <input type="password" class="form-control" placeholder="Confirm Password" v-model="user.password_confirmation">
                                            <div class="text-danger" v-if="errors.password_confirmation"> *{{ errors.password_confirmation[0] }}</div>

                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit" ref="btnSubmit">Reset Password</button>
                                        </div>
                                        <div class="col-12">

                                            <p>Already have Acount? <router-link to="/login">Login</router-link>
                                            </p>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    </main><!-- End #main -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                verification_code: '',
                password: '',
                password_confirmation: '',
            },

            btnOldHtml: '',
            errors: {}
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.user.email = to.params.email
        });
    },

    methods: {
            onSubmit: async function() {
                try {
                    this.disableSubmission(this.$refs.btnSubmit);
                    this.errors = {};
                    const response = await this.axios.post('/api/reset_password_Request',this.user);
                     Toast.fire({
                            icon: 'success',
                            title: 'Password Reseted successfully!'
                        });
                    this.$router.push('/login');
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.errors = error.response.data.errors;
                            break;
                        default:
                        Toast.fire({
                            icon: 'success',
                            title: 'Some error occurred, Please try again!'
                        });
                           
                            break;
                    }

                    this.enableSubmission(this.$refs.btnSubmit);
                }
            },
            disableSubmission(btn) {
                btn.setAttribute('disabled', 'disabled');
                this.btnOldHtml = btn.innerHTML;
                btn.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait...';
            },
            enableSubmission(btn) {
                btn.removeAttribute('disabled');
                btn.innerHTML = this.btnOldHtml;
            }
        }
}
</script>

<style scoped>
.mybody {
    background-color: aqua;
    background-image: url('https://images.freeimages.com/images/large-previews/da8/rainbow-1369910.jpg');
}
</style>
