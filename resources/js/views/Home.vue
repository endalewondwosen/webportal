<template>
        <div>
         
 <!-- ======= Header ======= -->
          <Header/>
<!-- End Header -->

  <!-- ======= Sidebar ======= -->
          <Sidebar/>
<!-- End Sidebar-->

  <main id="main" class="main">
      <router-view></router-view>
   
  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
         <Footer/>


        </div>

  
</template>

<script>
 import Header from '../components/backendLayout/Header.vue'
  import Sidebar from '../components/backendLayout/Sidebar.vue'
  import Footer from '../components/backendLayout/footer.vue'
//  import Auth from '../Auth'
export default {
         components:{
        Header,
       Sidebar,
       Footer
   },
}
</script>