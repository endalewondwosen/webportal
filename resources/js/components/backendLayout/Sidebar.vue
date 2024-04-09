<template>
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/home">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </router-link>
      </li>
      <!-- End Dashboard Nav -->
      <li class="nav-item" v-if="loggedUser.role=='Admin'" >
        <a
          class="nav-link collapsed"
          data-bs-target="#components-nav"
          data-bs-toggle="collapse"
          href="#"
        >
        <i class="bx bxs-user"></i><span>Users</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="components-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li v-if="loggedUser.role=='Admin'">
            <router-link to="/home/all-users">
              <i class="bi bi-circle"></i><span>All Users</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Admin'">
            <router-link to="/home/add-user">
              <i class="bi bi-circle"></i><span>Add New User</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- End Components Nav -->

      <li class="nav-item" v-if="loggedUser.role=='Admin'" >
        <a
          class="nav-link collapsed"
          data-bs-target="#components-nav1"
          data-bs-toggle="collapse"
          href="#"
        >
        <i class="ri-community-fill"></i><span>Accadamics</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="components-nav1"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li v-if="loggedUser.role=='Admin'" >
            <router-link to="/home/all-colleges">
              <i class="bi bi-circle"></i><span>All Collegues/Schools</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Admin'" >
            <router-link to="/home/all-departements">
              <i class="bi bi-circle"></i><span>All Programs</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- End Components Nav -->
      <li class="nav-item" v-if="loggedUser.role=='Admin'" >
        <a
          class="nav-link collapsed"
          data-bs-target="#components-nav2"
          data-bs-toggle="collapse"
          href="#"
        >
        <i class="ri-chat-settings-fill"></i><span>Setups</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="components-nav2"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li v-if="loggedUser.role=='Admin'" >
            <router-link to="/home/all-acadamic_year">
              <i class="bi bi-circle"></i><span>All Acadamic Year</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Admin'" >
            <router-link to="/home/all-semister">
              <i class="bi bi-circle"></i><span>All Semisters</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Admin'" >
            <router-link to="/home/all-study_level">
              <i class="bi bi-circle"></i><span>All Study Levels</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Admin'" >
            <router-link to="/home/all-admission_type">
              <i class="bi bi-circle"></i><span>All Admmission Types</span>
            </router-link>
          </li>
         
         
        </ul>
      </li>
      <!-- End Components Nav -->

      <li class="nav-item" v-if="loggedUser.role=='Registrar'">
        <a
          class="nav-link collapsed"
          data-bs-target="#components-nav4"
          data-bs-toggle="collapse"
          href="#"
        >
        <i class="bx bxs-graduation"></i><span>Students</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="components-nav4"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li v-if="loggedUser.role=='Registrar'">
            <router-link to="/home/all-fresh_students">
              <i class="bi bi-circle"></i><span>All Fresh Student</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Registrar'">
            <router-link to="/home/all-graduated_students">
              <i class="bi bi-circle"></i><span>All Graduated Students</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item" v-if="loggedUser.role=='Finance'">
        <a
          class="nav-link collapsed"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href="#"
        >
        <i class="ri-money-dollar-circle-fill"></i><span>Payments</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="forms-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li v-if="loggedUser.role=='Finance'">
            <router-link to="/home/finance_official_transcript">
              <i class="bi bi-circle"></i><span>Official Transcript</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Finance'">
            <router-link to="/home/finance_view_admission">
              <i class="bi bi-circle"></i><span>Admission</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Finance'">
            <router-link to="/home/finance_orginal_degree">
              <i class="bi bi-circle"></i><span>Orginal Degree</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Finance'">
            <router-link to="/home/finance_student_copy_view">
              <i class="bi bi-circle"></i><span>Student Copy</span>
            </router-link>
          </li >
          <li v-if="loggedUser.role=='Finance'">
            <router-link to="/home/all-payments">
              <i class="bi bi-circle"></i><span>All Payments</span>
            </router-link>
          </li>
          
        </ul>
      </li>
      <!-- End Forms Nav -->
      <li class="nav-item" v-if="loggedUser.role=='Registrar'">
        <a
          class="nav-link collapsed"
          data-bs-target="#forms-nav1"
          data-bs-toggle="collapse"
          href="#"
        >
        <i class="ri-database-2-fill"></i><span>Almuni Services</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="forms-nav1"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li v-if="loggedUser.role=='Registrar'">
            <router-link to="/home/registrar_official_transcript">
              <i class="bi bi-circle"></i><span>Official Transcript</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Registrar'">
            <router-link to="/home/registrar_admission_view">
              <i class="bi bi-circle"></i><span>Admission Request</span>
            </router-link>
          </li>

          <li v-if="loggedUser.role=='Registrar'">
            <router-link to="/home/registrar_orginal_degree_view">
              <i class="bi bi-circle"></i><span>Orginal Degree </span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Registrar'">
            <router-link to="/home/registrar_student_copy_view">
              <i class="bi bi-circle"></i><span>Student Copy</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Registrar'">
            <router-link to="/home/all-announcement">
              <i class="bi bi-circle"></i><span>All Announcements</span>
            </router-link>
          </li>
            <li v-if="loggedUser.role=='Registrar'">
            <router-link to="/home/all-calendar">
              <i class="bi bi-circle"></i><span>Calendar</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Registrar'">
            <router-link to="/home/all-mails">
              <i class="bi bi-circle"></i><span>Mailings</span>
            </router-link>
          </li>

        </ul>
      </li>
      <!-- End Forms Nav -->

      <li class="nav-item" v-if="loggedUser.role=='Department'"> 

        <a
          class="nav-link collapsed"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-layout-text-window-reverse"></i
          ><span>Admissions</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="tables-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li v-if="loggedUser.role=='Department'">
            <router-link to="/home/all_selected_applicants">
              <i class="bi bi-circle"></i><span>Applicants</span>
            </router-link>
          </li>
          <li v-if="loggedUser.role=='Department'">
            <router-link to="/home/all-announcement">
            <i class="bi bi-circle"></i><span>Announcements</span>
          </router-link>
          </li>
         <li v-if="loggedUser.role=='Department'">
            <router-link to="/home/exam_schedule_view">
            <i class="bi bi-circle"></i><span>Exam Schedule</span>
          </router-link>
          </li>

        </ul>
      </li>
      <!-- End Tables Nav -->

      <li class="nav-item">
        <router-link class="nav-link collapsed" to="/">
          <i class="bi bi-file-earmark"></i>
          <span>Landing Page</span>
        </router-link>
      </li>
      <!-- End Blank Page Nav -->
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      loggedUser: this.auth.user,
    };
  },
};
</script>
 