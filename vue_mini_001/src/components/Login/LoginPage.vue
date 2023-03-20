<template>
    <LoadingSpinner :loading="loading"/>
    <div :id="loading ? 'disable' : ''">
    <div class="container d-flex flex-row justify-content-center mt-5">
        <form class="form"  @submit="getDetails">
            <LoginSignUpError text="Login" :error="error"/>
          <div class="mb-3">
            <label  class="form-label">Email address</label>
            <input type="email" class="form-control"  aria-describedby="emailHelp" v-model='email' required=true/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label  class="form-label">Password</label>
            <input type="password" class="form-control" v-model='password' required=true/>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="checkBox"  checked/>
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <input type="submit" class="w-80 btn btn-primary" value="Submit"/>
        </form>
    </div>
  <br/>
  <br/>
  <LoginSignUpRoute text="New user" path='signup' button="Signup"/>

</div>
 </template>

<!-- Scripting  -->

<script>
import LoginSignUpRoute from '../ReusableComponets/LoginSignUpRoute.vue';
import LoginSignUpError from "../ReusableComponets/LoginSignUError.vue";
import LoadingSpinner from "../ReusableComponets/LoadingSpinner.vue"
import router  from '@/router/index.js';
import axios from 'axios';
export default { 
    


    components:{
    LoginSignUpRoute,
    LoginSignUpError,
    LoadingSpinner
},
    data(){
        return {
            email:'',
            password:'',
            error:false,
            loading:false,
            api:import.meta.env.VITE_AUTH_BASE_URL
        }
    },
    methods:{
        async getDetails(e){
           e.preventDefault();

           this.loading=true;

           try {
            console.log("wait")
                const response = await axios.post(`${this.api}/login`, {
                    email:this.email,
                    password:this.password
                });
                const token = response.data.token;
                // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                let check=document.getElementById('checkBox')
                console.log("check",check.checked)
                if(check.checked){
                    localStorage.setItem('authToken',token);
                }else{
                    sessionStorage.setItem('authToken', token);
                }

                console.log(response.data); // handle response data
                this.loading=false;
                router.push({path:'/'})
            } catch (error) {
                console.error(error); 
                this.error=true;
                this.password=''
                this.loading=false;
            }

            
        }
    }
 };
</script>

<!-- Styling -->

<style>
.form{
    width:400px;
    margin-top:50px;
}
#disable{
    pointer-events: none;
    opacity: 0.4;
}


</style>