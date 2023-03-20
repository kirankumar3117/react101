<template>
    <LoginPage></LoginPage>
</template>

<script>
import LoginPage from "@/components/Login/LoginPage.vue";
import check from "@/mixins/check.js"
export default{
    name:'LoginView',
    components:{
        LoginPage
    },
    mixins:[check]
}

</script>