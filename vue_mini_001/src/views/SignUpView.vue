<template>
    <SignUpPage></SignUpPage>
</template>

<script>
import SignUpPage from "@/components/SignUp/SignUpPage.vue";
import check from "@/mixins/check.js"
export default{
    name:'SignUpView',
    components:{
        SignUpPage
    },
    mixins:[check]
}

</script>