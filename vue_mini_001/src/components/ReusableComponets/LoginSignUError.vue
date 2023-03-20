<template>
   <div class="d-flex flex-row ">
                <h1>{{text}}</h1>
                <p class="mx-4 mt-3 text-danger" v-if="error">Please enter correct data!</p>
            </div>
</template>

<script>
export default{
    props:{
        error:Boolean,
        text:String
    }
}
</script>