<template>
<div>
   
    <div>
        <router-view></router-view>
    </div>

   <FlashMessage :position="'right bottom'"></FlashMessage>
</div>
       
</template>
<script>
export default {
    
}
</script>

