<template>
<div>
    <footer id="footer1" class="bg-dark">

        <div class="footer-top " id="wol-footer">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h3><img :src="'static/wollo.png'" class="wollo" alt="WOLLO UNIVERSTIY"></h3>
                        <p>

                            Dessie, Ethiopia<br><br>
                            <strong>Phone:</strong> 033-311-52-47<br>
                            <strong>Email:</strong> admin@wu.edu.et<br>
                        </p>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links ">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/"><i class="ri-home-4-fill"></i>Home</router-link>
                            </li>

                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/announcemnet_list"> <i class="ri-speaker-2-line"></i>Announcements</router-link>
                            </li>
                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/admission_form"><i class="ri-edit-2-fill"></i>Admission</router-link>
                            </li>
                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/programs">Programs</router-link>
                            </li>
                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/fresh_man_info">Fresh Student</router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/official_transcript_form">Official Transcript</router-link>
                            </li>
                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/orginal_degree_form">Original Degree</router-link>
                            </li>
                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/student_copy_form">Student Copy</router-link>
                            </li>
                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/get_exam_number">Exams</router-link>
                            </li>
                            <li><i class="bx bx-chevron-right"></i>
                                <router-link to="/admission_form">Admission Status</router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Join Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form action="" method="post">
                            <input type="email" name="email"><input type="submit" value="Subscribe">
                        </form>
                    </div>
                    <div class="container d-md-flex py-4">

                        <div class="me-md-auto text-center text-md-start">
                            <div class="copyright">
                                &copy; Copyright <strong><span>Wollo University</span></strong>. All Rights Reserved
                            </div>
                            <div class="credits">

                                Developed by <a href="#">Software Engineering Department Student</a>
                            </div>
                        </div>
                        <div class="social-links text-center text-md-right pt-3 pt-md-0">
                            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer><!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>


#wol-footer {
    background-color: black;
    padding-left: 0px;

}
</style>
