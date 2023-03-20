<template >
  <div>

    <LoadingSpinner :loading="loading"/>

    <div :id="loading ? 'disable' : ''">
    <div class="container d-flex flex-row justify-content-center mt-5 ml-auto mr-auto" >
      
      <form class="form" @submit="getDetails">
          <LoginSignUpError text="SignUp" :error="error"/>
        <div class="mb-3">
          <label  class="form-label">Email address</label>
          <input type="email" class="form-control"  aria-describedby="emailHelp" v-model='email' placeholder="name@gmail.com" required="true"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label  class="form-label">Password</label>
          <input type="password" class="form-control" v-model='password' placeholder="enter password here" required=true/>
        </div>
        <div class="mb-3">
          <label  class="form-label">Re-enter Password</label>
          <input type="password" class="form-control" v-model='repassword' placeholder="re-enter password here" required="true">
        </div>
        <input type="submit" class="btn btn-primary"  value="submit">
      </form>
    </div>
    <br/>
    <br/>
    <LoginSignUpRoute text='Already a user' path="login" button='Login'/>
</div>



</div>


</template>


<script>
import LoginSignUpRoute from '../ReusableComponets/LoginSignUpRoute.vue';
import LoginSignUpError from '../ReusableComponets/LoginSignUError.vue';
import LoadingSpinner from "../ReusableComponets/LoadingSpinner.vue"
import router  from '@/router/index.js';
import axios from 'axios';
export default {



    name:'SignUpPage',
    components: {
         LoginSignUpRoute,
         LoginSignUpError,
         LoadingSpinner
     },
    data(){
        return {
            email:'',
            password:'',
            repassword:'',
            error:false ,
            loading:false,
            api:import.meta.env.VITE_AUTH_BASE_URL
        }
        
    },
    methods:{
       async getDetails(e){
          

        e.preventDefault()

       

        if(this.password != this.repassword){
            this.error=true;
            this.password='';
            this.repassword='';
            return;
        }

        this.loading=true;
        this.error=false;

        try{
          const res=await axios.post(`${this.api}/register`,{
            email:this.email,
            password:this.password
          })
          console.log(res.data);
                   this.loading=false;
                  router.push({ path: '/login' })
        }catch(err){
          console.log({message:err.message});
                    this.error=true;
                    this.password='';
                    this.repassword='';
                    this.loading=false;
        }

            }
    }

    
}


</script>


<style >

#disable{
    pointer-events: none;
    opacity: 0.4;
}


</style>