<template>
     <div id="loadingSpinner" v-if=loading>

        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>


<script>
export default{
    props:{
        loading:Boolean
    },
    mounted(){
      console.log("loading spinner mounted")
    },
    unmounted(){
      console.log("login spinner unmounted")
    }
}

</script>

<style>

#loadingSpinner{
  width:100%;
  height:80vh;
  position: absolute;
  z-index:-1;
  display:flex;
}

#loadingSpinner div{
  margin-left:auto;
  margin-right:auto;
  margin-top:15%;
}
</style>