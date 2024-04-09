<template>
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><router-link to="/"><img :src="'static/wollo.png'" class="navbar-brand bg-success " alt="WOLLO UNIVERSTIY"></router-link></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      <nav id="navbar" class="navbar order-last order-lg-0 ">
        <ul>
          <li><router-link class="active" to="/" exact="" active-class="">Home</router-link></li>
          <li><router-link to="/announcemnet_list">Announcement</router-link></li>
          <li><router-link to="/programs">Programs</router-link></li>
          <li class="dropdown">
            <a href="#"><span>Admission</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><router-link to="/admission_form">Apply For Admission</router-link></li>
              <li><router-link to="/admission_form">Admission Status</router-link></li>
              <li><router-link to="/application_form/1">Upload Documents</router-link></li>

            </ul>
          </li>
          <li class="dropdown">
            <a href="#"><span>Exams</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><router-link to="/get_exam_number">Get Exam Number</router-link></li>
              <li><router-link to="/get_exam_result">Exam Result</router-link></li>
              <li><router-link to="/schedules">Exam Schedule</router-link></li>

            </ul>
          </li>
          <li class="dropdown">
            <a href="#"
              ><span>Alumni Services</span> <i class="bi bi-chevron-down"></i
            ></a>
            <ul>
              <li>
                <router-link to="/official_transcript_form"
                  >Official Transcript</router-link>
              </li>
              <li>
                <router-link to="/orginal_degree_form">Orginal Degree</router-link>
              </li>
              <li><router-link to="/student_copy_form">Student Copy</router-link></li>
              <li><a href="#">Temporary Certeficate</a></li>
            </ul>
          </li>
          <li><router-link to="/getCalendars">Calendars</router-link></li>

          <li class="dropdown">
            <a href="#"><span>Freshman</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <router-link to="/fresh_man_info">My Username and Password</router-link>
              </li>
              <li><router-link to="/fresh_man_info">My Dormitary</router-link></li>
              <li><router-link to="/fresh_man_info">My Section</router-link></li>
              <li>
                <router-link to="/fresh_man_info">Registration Procedure</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="/contacts">Contact</router-link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->

      <router-link v-if="loggedUser" to="/home" class="get-started-btn">Dashboard</router-link>
      <router-link v-else to="/login" class="get-started-btn">Sign In</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      loggedUser:this.auth.user
    }
  },
};
</script>
<style scoped>
/* .wollo{
  background-color: rgb(0, 255, 179);

} */

</style>
