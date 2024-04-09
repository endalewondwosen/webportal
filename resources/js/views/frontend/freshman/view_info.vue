<template>
<div>
    <main id="main" class="main ">
        <div class="pagetitle text-center  ">
            <h1 class="bg-success text-white">WOLLO UNIVERSITY</h1>
            <h1 class="bg-success text-white">Freshman Students Infromation details</h1>
        </div><!-- End Page Title -->

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Freshman Students </h5>
                        <form class="row g-3" @submit.prevent="getStudentData">
                            <div class="col-md-4">
                                <label for="inputNanme4" class="form-label"> <b>Registration Number</b> </label>
                                <input type="text" class="form-control" v-model="form.regstration_number" placeholder="Registration Number">
                                 <div class="text-danger" v-if="errors.regstration_number">
                                *{{ errors.regstration_number[0] }}
                              </div>
                            </div>
                            <div class="col-md-2" style="padding-top: 30px;">
                                <button type="submit"  class="btn btn-primary">Search</button>
                            </div>

                        </form>
                        <!-- Table with stripped rows -->
                        <div>
                            <div class="table-responsive" v-if="getValue>0">
                                <table class="table align-items-center table-flush">
                                    <thead class="table-light">
                                        <tr>
                                            <th width="5%">#</th>
                                            <th>Student Details</th>
                                            <th>Student Data</th>
                                            <th width="5%">#</th>
                                            <th>Student Details</th>
                                            <th>Student Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <th>First Name</th>
                                            <td>{{ student_data.first_name }}</td>
                                            <th>7</th>
                                            <th>Father Name</th>
                                            <td>{{ student_data.lastname_name }}</td>
                                        </tr>

                                        <tr>
                                            <th>2</th>
                                            <th>Grand Father Name</th>
                                            <td>{{ student_data.grand_father_name }}</td>

                                            <th>8</th>
                                            <th>Sex</th>
                                            <td>{{ student_data.sex }}</td>

                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <th>Unviersty ID</th>
                                            <td>{{ student_data.unversity_id }}</td>

                                            <th>9</th>
                                            <th>University Password</th>
                                            <td>{{ student_data.password }}</td>

                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <th>Campus</th>
                                            <td>{{ student_data.campus }}</td>

                                            <th>10</th>
                                            <th>College</th>
                                            <td>{{ student_data.college.name }}</td>

                                        </tr>
                                        <tr>
                                            <th>5</th>
                                            <th>Block Number</th>
                                            <td>{{ student_data.block_number }}</td>

                                            <th>11</th>
                                            <th>Dorm Number</th>
                                            <td>{{ student_data.dorm_number }}</td>

                                        </tr>
                                        <tr>

                                            <th>12</th>
                                            <th>Section</th>
                                            <td>{{ student_data.section }}</td>
                                            <th>6</th>
                                            <th>Acadamic Year</th>
                                            <td>{{ student_data.year_id }}</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <!-- End Table with stripped rows -->

                    </div>
                </div>

            </div>
        </div>

    </main>

</div>
</template>

<script>
export default {
    data() {
        return {
             form:{
            regstration_number: '',

             },
            student_data: {},
            errors:{}
        }
    },
    computed: {
        getValue() {
            let objectSize = 0;
            for (let k in this.student_data) {
                objectSize++
            }
            // objectSize here holds the size of your object
            return objectSize
        },
    

    },
    methods: {

        getStudentData() {
            this.axios.post('/api/user/getfreshdata', this.form)
                .then(({
                    data
                }) => {
                    this.student_data = data
                    if(this.getValue<=0){
                        Toast.fire({
                                icon: 'error',
                                title: 'We cannot find this Registration number ,try again!'
                            })
                          
                    }
                    this.errors=''
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
        },

    },
}
</script>

<style scoped>
#main,
#footer { 
    margin-left: 0px;
}

.mybody {
    background-color: #e9f1f1;
    background-image: url('https://images.freeimages.com/images/large-previews/da8/rainbow-1369910.jpg');

}
</style>
