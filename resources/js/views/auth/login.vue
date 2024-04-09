<template>
    <div>
        <main class="mybody">
            <div class="container">
                <section
                    class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
                >
                    <div class="container">
                        <div class="row justify-content-center">
                            <div
                                class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
                            >
                                <div class="d-flex justify-content-center py-4">
                                    <router-link
                                        to="/"
                                        class="logo d-flex align-items-center w-auto"
                                    >
                                        <img
                                            :src="`static/wollo.png`"
                                            alt=""
                                            class="bg-success"
                                        />
                                        <span class="d-none d-lg-block"
                                            >Wollo University</span
                                        >
                                    </router-link>
                                </div>
                                <!-- End Logo -->
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="pt-4 pb-2">
                                            <h5
                                                class="card-title text-center pb-0 fs-4"
                                            >
                                                Login to Your Account
                                            </h5>
                                            <p class="text-center small">
                                                Enter your username & password
                                                to login
                                            </p>
                                        </div>
                                        <form
                                            class="row g-3"
                                            @submit.prevent="login"
                                        >
                                            <div class="col-12">
                                                <label
                                                    for="yourUsername"
                                                    class="form-label"
                                                    >Email</label
                                                >
                                                <input
                                                    type="email"
                                                    v-model="user.email"
                                                    class="form-control"
                                                    placeholder="Enter your email"
                                                />
                                                <div
                                                    class="text-danger"
                                                    v-if="errors.email"
                                                >
                                                    *{{ errors.email[0] }}
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label
                                                    for="yourPassword"
                                                    class="form-label"
                                                    >Password</label
                                                >
                                                <input
                                                    type="password"
                                                    v-model="user.password"
                                                    class="form-control"
                                                    placeholder="Enter your password"
                                                />
                                                <div
                                                    class="text-danger"
                                                    v-if="errors.password"
                                                >
                                                    *{{ errors.password[0] }}
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        v-model="
                                                            user.remember_me
                                                        "
                                                        value="true"
                                                        id="rememberMe"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        for="rememberMe"
                                                        >Remember me</label
                                                    >
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button
                                                    class="btn btn-primary w-100"
                                                    type="submit"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            <div class="col-12">
                                                <router-link to="/forget"
                                                    >Forget
                                                    Password?</router-link
                                                >
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <!-- End #main -->
        <a
            href="#"
            class="back-to-top d-flex align-items-center justify-content-center"
            ><i class="bi bi-arrow-up-short"></i
        ></a>
    </div>
</template>

<script>
import Auth from "../../Auth.js";
export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
                remember_me: true,
            },
            errors: {},
        };
    },
    methods: {
        login() {
            this.axios
                .post("/api/login", this.user)
                .then(({}) => {
                    Auth.login(data.access_token, data.user);
                    this.$router.push("/home");
                    Toast.fire({
                        icon: "success",
                        title: "Logged In successfully!",
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
                        case 500:
                            this.flashMessage.error({
                                message:
                                    "Something went wrong please contact system admin!",
                                time: 5000,
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message:
                                    "Some error occurred, Please try again!",
                                time: 5000,
                            });
                            break;
                    }
                });
        },
    },
};
</script>
<style scoped>
.mybody {
    background-color: aqua;
    background-image: url("https://images.freeimages.com/images/large-previews/da8/rainbow-1369910.jpg");
}
</style>
