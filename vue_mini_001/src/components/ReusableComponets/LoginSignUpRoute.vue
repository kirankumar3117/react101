<template >
    <div style="width:400px;margin-left: auto;margin-right:auto;">
        <div class="w-100 container d-flex flex-row justify-content-around"><p>{{ text }} </p><button class="btn btn-primary"><router-link class="text-white" :to=path>{{ button }}</router-link></button></div>
    </div>
</template>
<script>
export default {
    name:'LoginSignUpRoute',
    props:{
        text:String,
        path:`/${String}`,
        button:String
    }
}
</script>

<style>

</style>