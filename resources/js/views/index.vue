<template>
<div>
    <main id="main" class="mymain">
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex justify-content-center align-items-center">
        <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
            <h1>Learning Today,<br>Leading Tomorrow</h1>
            <h2>Wollo universtiy, love,peace and wisdom universtiy</h2>
            <router-link to="/admission_form" class="btn-get-started">Get Started</router-link>
        </div>
    </section><!-- End Hero -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">

            <div class="row">
                <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                    <img :src="'static/award.jpg'" class="img-fluid" alt="">
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3>Wollo University at a Glance</h3>
                    <p class="fst-italic">
                        Wollo University is located at Dessie in the Amhara region of South Wollo, Ethiopia, and is one of the recently founded universities in 2005. The University has two campuses, one at Dessie and the other at Kombolcha towns.
                    </p>
                    <ul>
                        <li><i class="bi bi-check-circle"></i> The Dessie campus consists of College of Natural Sciences, College of Agriculture, College of Medicine and Health Sciences, College of Business and Economics, College of Social Science and Humanities, School of Veterinary Medicine, School of Law and Institute of Teacher Education and Pedagogical Science. </li>
                        <li><i class="bi bi-check-circle"></i> The Kombolcha campus is named as Kombolcha Institute of Technology (KIOT) for engineering and informatics. </li>
                        <li><i class="bi bi-check-circle"></i> The University was established with a vision to impart quality education to the Ethiopian community to cater to their up-liftment and to accelerate the industrial and social development of the country. </li>
                    </ul>
                    <p>
                        Wollo University is a fast growing institute that envisioned to be one of the top leading University in Ethiopia and in East Africa at large in the following decade. Thus, it strives for quality education, research and community service. The University is now expanding its scope to Knowledge dissemination through research outputs by establishing online journals. The university has finalized all necessary preconditions to launch two online Journals, namely Abyssinia Journal of Science and Technology (AJST) & Abyssinia Journal of Business and Social Sciences (AJBS).
                    </p>

                </div>
            </div>

        </div>
    </section><!-- End About Section -->

    <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts section-bg">
        <div class="container">

            <div class="row counters">

                <div class="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Students</p>
                </div>

                <div class="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Programs</p>
                </div>

                <div class="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Events</p>
                </div>

                <div class="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Instructors</p>
                </div>

            </div>

        </div>
    </section><!-- End Counts Section -->

    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us">
        <div class="container" data-aos="fade-up">

            <div class="row">
                <div class="col-lg-4 d-flex align-items-stretch">
                    <div class="content">
                        <h3>Why Choose Wollo Universtiy?</h3>
                        <p>
                            Wollo University, envisions being one of the top five universities in terms of outstanding quality education, research, technology transfer, and community development services in Ethiopia by 2025 G.C /2017 E.C.
                        </p>
                        <div class="text-center">
                            <a target="_blank" href="https://wu.edu.et/wu-at-a-glance/" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-boxes d-flex flex-column justify-content-center">
                        <div class="row">
                            <div class="col-xl-4 d-flex align-items-stretch">
                                <div class="icon-box mt-4 mt-xl-0">
                                    <i class="bx bx-receipt"></i>
                                    <h4>Corporis voluptates sit</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                            </div>
                            <div class="col-xl-4 d-flex align-items-stretch">
                                <div class="icon-box mt-4 mt-xl-0">
                                    <i class="bx bx-cube-alt"></i>
                                    <h4>Ullamco laboris ladore pan</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                </div>
                            </div>
                            <div class="col-xl-4 d-flex align-items-stretch">
                                <div class="icon-box mt-4 mt-xl-0">
                                    <i class="bx bx-images"></i>
                                    <h4>Labore consequatur</h4>
                                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                </div>
                            </div>
                        </div>
                    </div><!-- End .content-->
                </div>
            </div>

        </div>
    </section><!-- End Why Us Section -->

    <!-- ======= Features Section ======= -->
   
    <!-- ======= Popular Courses Section ======= -->
    <section id="popular-courses" class="courses">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Programs</h2>
                <p>Popular Programs</p>
            </div>

            <div class="row" data-aos="zoom-in" data-aos-delay="100">

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="course-item">
                        <img :src="'static/soft.avif'" class="img-fluid" alt="...">
                        <div class="course-content">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4>Software Engineering</h4>
                            </div>

                            <h3><a href="#">Software Engineering</a></h3>
                            <p> Software engineering is a detailed study of engineering to the design, development and maintenance of software. Software engineering was introduced to address the issues of low-quality software projects. Problems arise when a software generally exceeds timelines, budgets, and reduced levels of quality. It ensures that the application is built consistently, correctly, on time and on budget and within requirements. The demand of software engineering also emerged to cater to the immense rate of change in user requirements and environment on which application is supposed to be working.</p>
                           
                        </div>
                    </div>
                </div> <!-- End Course Item-->

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div class="course-item">
                        <img :src="'static/law.jpg'" class="img-fluid" alt="...">
                        <div class="course-content">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4>Law</h4>
                            </div>

                            <h3><a href="#">Law</a></h3>
                            <p>law, the discipline and profession concerned with the customs, practices, and rules of conduct of a community that are recognized as binding by the community. Enforcement of the body of rules is through a controlling authority.</p>
                           
                        </div>
                    </div>
                </div> <!-- End Course Item-->

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div class="course-item">
                        <img :src="'static/health.jfif'" class="img-fluid" alt="...">
                        <div class="course-content">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4>Health</h4>
                              
                            </div>

                            <h3><a href="course-details.html">Health</a></h3>
                            <p>Due to globalization, infectious diseases can move across borders and rapidly spread throughout the world.  ZIKA, Ebola, and, more recently, SARS-CoV-2 (which causes COVID-19) have emerged in one region in the world, have spread across national borders and caused illness and death across the globe, Efforts are now focused on how to identify, contain, prevent, treat and, eventually, eradicate serious and widespread threats to global health.</p>
                        
                        </div>
                    </div>
                </div> <!-- End Course Item-->

            </div>

        </div>
    </section><!-- End Popular Courses Section -->

    <!-- ======= Trainers Section ======= -->
    <section id="trainers" class="trainers">
        <div class="container" data-aos="fade-up">

            <div class="row" data-aos="zoom-in" data-aos-delay="100">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="member">
                        <img :src="'static/Dr-min.jpg'" class="img-fluid" alt="">
                        <div class="member-content">
                            <h4>Mengesha Ayana Ejigu | PhD</h4>
                            <span>Wollo University President</span>
                            <p>
                                Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                            </p>
                            <div class="social">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="member">
                        <img :src="'static/abate-1.jpg'" class="img-fluid" alt="">
                        <div class="member-content">
                            <h4>Abate Getahun Ayele | PhD</h4>
                            <p>
                                Dr. Abate Getahun Ayele was the fifth president of Wollo University.
                            </p>
                            <div class="social">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="member">
                        <img :src="'static/No-Photo-min.jpg'" class="img-fluid" alt="">
                        <div class="member-content">
                            <h4>Asefa Balecha Negew | PhD</h4>
                            <p>
                                Dr. Asefa Balecha Negew, 24/04/2004 E.C - 08/06/2007 E.C Dr. Assefa Balecha In his duration as the president of Wollo University Dr. Assafa Balecha has a lot of impacts and footprints in the university.
                            </p>
                            <div class="social">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section><!-- End Trainers Section -->
    </main>
   
</div>
</template>

<script>
export default {

}
</script>
<style scoped>
#main, #footer {
    margin-left: 0px;
}
</style>