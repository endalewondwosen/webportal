<template>
<div>
    <div class="pagetitle">
        <h1>User List</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Users</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add User
                            <router-link to="/home/all-users" class="btn btn-primary" style="float:right"> All Users</router-link>

                        </h5>
                        <form class="row g-3" @submit.prevent="register">
                            <div class="col-md-6">
                                <label for="inputNanme4" class="form-label"> <b>First Name</b> </label>
                                <input type="text" class="form-control" v-model="form.name" placeholder="Enter First Name">
                                <div class="text-danger" v-if="errors.name">*{{ errors.name[0] }}</div>
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label"><strong>Role</strong> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.role">
                                    <option value="" disabled selected>select role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Department">Department</option>
                                    <option value="Registrar">Registrar</option>

                                </select>
                                <div class="text-danger" v-if="errors.role">*{{ errors.role[0] }}</div>
                            </div>
                            <div class="col-md-6" v-if="form.role=='Department'">
                                <label for="inputPassword4" class="form-label"><strong>Department</strong> </label>
                                <select class="form-select" id="floatingSelect" aria-label="State" v-model="form.departement">
                                    <option value="" disabled selected>select Department</option>

                                    <option :value="departement.id" v-for="departement in departements" :key="departement.id">
                                        {{ departement.name }}
                                    </option>

                                </select>
                                <div class="text-danger" v-if="errors.departement">*{{ errors.departement[0] }}</div>
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label"> <strong>Email</strong> </label>
                                <input type="email" class="form-control" v-model="form.email" placeholder="Enter Email Address">
                                <div class="text-danger" v-if="errors.email">*{{ errors.email[0] }}</div>
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
                email: '',
                role: '',
                departement: ''
            },
  
           

        }
    },

    methods: {
        register() {
            this.axios.post('/api/user/users', this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/all-users')
                    Toast.fire({
                        icon: 'success',
                        title: 'User Inserted successfully!'
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

    mounted() {
        this.axios.get('/api/user/departements')
            .then(({
                data
            }) => {
                this.departements = data
            }).catch()
    },
}
</script>
