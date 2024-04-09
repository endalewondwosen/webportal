<template>
 <div>
 
  <!-- ======= Header ======= -->
         <Header/>
  <!-- End Header -->
    
  <div>
     <router-view></router-view>
  </div>
     

 <!-- End #main -->

  <!-- ======= Footer ======= -->
     <Footer/>
 </div>
</template>

<script>
import Header from '../components/frontlayout/Header'
import Footer from '../components/frontlayout/Footer'
import Auth from '../Auth.js';
export default {
     components: {
        Header,
        Footer
    },
  

}
</script>

<style scoped>
#main, #footer {
    margin-left: 0px;
}
</style>