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
              <h5 class="card-title">Get Exam Number</h5>
              <form class="row g-3" @submit.prevent="getStudentData">
                <div class="col-md-4">
                  <label for="inputNanme4" class="form-label">
                    <b>Year of Application</b>
                  </label>
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="State"
                    v-model="form.year_id"
                  >
                    <option selected="" value="" disabled>
                      Select Acadamic Year
                    </option>
                    <option
                      :value="year.id"
                      v-for="year in acadamic_years"
                      :key="year.id"
                    >
                      {{ year.name }}
                    </option>
                  </select>
                  <div class="text-danger" v-if="errors.year_id">
                    *{{ errors.year_id[0] }}
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="inputNanme4" class="form-label">
                    <b>Application Number</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.application_number"
                    placeholder="Application Number"
                  />
                  <div class="text-danger" v-if="errors.application_number">
                    *{{ errors.application_number[0] }}
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
                  Your Exam Degree Request is on Progress,please Wait us! Thank
                  You!
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  v-if="student_data[0].status == '2'"
                  class="
                    alert alert-danger
                    bg-danger
                    text-light
                    border-0
                    alert-dismissible
                    fade
                    show
                  "
                  role="alert"
                >
                  Your Are Not selected for exam.Check Your amission status
                  Contact The Registrar Office! Thank You!
                  <router-link
                    class="btn btn-outline-primary btn-sm"
                    to="/admission_form"
                    >Admission Status</router-link
                  >
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  v-if="student_data[0].status == '1'"
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
                  Your are Selected For Exam
                  <div class="card" >
                    <div class="card-body">
                      <h5 class="card-title">{{ student_data[0].first_name }} {{ student_data[0].father_name }}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Exam Number:<b class="text-danger">{{ student_data[0].exam[0].exam_number}}</b>
                      </h6>
                      <p class="card-text text-dark">
                        The Examination Schedule will be Annouced.
                        Keep Follow Up
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
        application_number: "",
        year_id: "",
      },
      student_data: {},
      errors: {},
      acadamic_years: {},
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
        .post("/api/user/getExamNumber", this.form)
        .then(({ data }) => {
          this.student_data = data;
          if (this.getValue <= 0) {
            Toast.fire({
              icon: "error",
              title:
                "Incorrect Application Number or Year of Application ,try again!",
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
  mounted() {
    this.axios
      .get("/api/user/acadamic_years")
      .then(({ data }) => {
        this.acadamic_years = data;
      })
      .catch();
  },
};
</script>

<style scoped>
#main,
#footer {
  margin-left: 0px;
}

</style>
