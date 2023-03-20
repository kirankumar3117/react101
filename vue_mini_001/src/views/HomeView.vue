<script >
// import HomePage from '../components/Home/HomePage.vue';
import HomePage from '../components/SampleHomePage.vue';
import router from "@/router/index.js";
import axios from 'axios'
export default{
  components:{
    HomePage
  },
  data(){
    return{
      auth:false,
      
    }
  },
 
    async beforeCreate(){
     
      const api=import.meta.env.VITE_AUTH_BASE_URL
      

      

      let token=localStorage.getItem("authToken") || sessionStorage.getItem('authToken');
    if(!token){
     router.push({path:'/login'})
     return
    }

    const headers = {
      Authorization: `Bearer ${token}`
    };
    
    try {
      const response = await axios.get(`${api}/protected`, { headers });
      console.log(response.data); // handle response data
     
    } catch (error) {
      console.error(error); // handle error
      router.push({path:'/login'})
    }
    },


     created(){
      
    }
    
}

</script>

<template>
  <HomePage :auth="auth"/>
</template>
