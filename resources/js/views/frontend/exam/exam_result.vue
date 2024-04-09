<template>
  <div>
    <main id="main" class="main">
      <div class="pagetitle text-center">
        <h1 class="bg-success text-white">WOLLO UNIVERSITY</h1>
        <h1 class="bg-success text-white">REGISTRAR AND ALUMNI DIRECTORATE</h1>
      </div>
      <!-- End Page Title -->

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Exam Result</h5>
              <form class="row g-3" @submit.prevent="getStudentData">
            
                <div class="col-md-4">
                  <label for="inputNanme4" class="form-label">
                    <b>Exam Number</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.exam_number"
                    placeholder="Application Number"
                  />
                  <div class="text-danger" v-if="errors.exam_number">
                    *{{ errors.exam_number[0] }}
                  </div>
                </div>
                <div class="col-md-2" style="padding-top: 30px">
                  <button type="submit" class="btn btn-primary">Search</button>
                </div>
              </form>
              <!-- Table with stripped rows -->
              <br /><br />
              <div v-if="getValue > 0">
                <div
                  v-if="student_data[0].status == '0'"
                  class="
                    alert alert-warning
                    bg-warning
                    border-0
                    alert-dismissible
                    fade
                    show
                  "
                  role="alert"
                >
                  Your Exam Result Doesn't reached yet.,please Wait us! Thank
                  You!
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              
                <div
                  v-else
                  class="
                    alert alert-success
                    bg-success
                    text-light
                    border-0
                    alert-dismissible
                    fade
                    show
                  "
                  role="alert"
                >
                  exam Result
                  <div class="card" >
                    <div class="card-body">
                      <h5 class="card-title">{{ student_data[0].student.first_name }} {{ student_data[0].student.father_name }}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Exam Result:<b class="text-danger">{{ student_data[0].exam_result}}</b> <br>
                        Status:<b class="text-danger" v-if="student_data[0].status=='1'">Promoted</b>
                        <b class="text-danger" v-if="student_data[0].status=='2'">Failed</b>
                      </h6>
                      <p class="card-text text-dark">
                        <em  v-if="student_data[0].status=='1'"> Congratulations! you promoted for the main admission </em>
                        <em  v-if="student_data[0].status=='2'"> Sorry! You didn't pass our examination,Thank you for your paticipation </em>
                      </p>
                      <a href="#" class="card-link">print</a>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
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
      form: {
        exam_number: "",
      },
      student_data: {},
      errors: {},
    };
  },
  computed: {
    getValue() {
      let objectSize = 0;
      for (let k in this.student_data) {
        objectSize++;
      }
      // objectSize here holds the size of your object
      return objectSize;
    },
  },
  methods: {
    getStudentData() {
      this.axios
        .post("/api/user/getExamResult", this.form)
        .then(({ data }) => {
          this.student_data = data;
          if (this.getValue <= 0) {
            Toast.fire({
              icon: "error",
              title:
                "Incorrect Exam Number ,try again!",
            });
          }
          this.errors = "";
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

<style scoped>
#main,
#footer {
  margin-left: 0px;
}


</style>
