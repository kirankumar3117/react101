<template>
    <h1>congrats ! you have scuucesssfully signed in</h1>
    <button class="btn btn-primary" @click="goBackToLogin">
        Signout
    </button>
</template>
<script>
import router from '@/router';

export default{
    methods:{

       goBackToLogin(){
        let token=localStorage.getItem("authToken");

        if(token){



            localStorage.removeItem('authToken')
        }
        else{

            sessionStorage.removeItem('authToken');
        }


            router.push({path:'/login'})
        }
    }
}
</script>


