<template >
    <div class="homeContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
        <path fill="#0099ffe1" fill-opacity="1" d="M0,160L30,149.3C60,139,120,117,180,133.3C240,149,300,203,360,224C420,245,480,235,540,208C600,181,660,139,720,138.7C780,139,840,181,900,192C960,203,1020,181,1080,181.3C1140,181,1200,203,1260,224C1320,245,1380,267,1410,277.3L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
        
        <div>
            
            <NavBar/>
            <DynamicImage/>
            <HomeCategory/>
            
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave2"><path fill="#0099ff" fill-opacity="1" d="M0,320L30,277.3C60,235,120,149,180,101.3C240,53,300,43,360,85.3C420,128,480,224,540,250.7C600,277,660,235,720,208C780,181,840,171,900,176C960,181,1020,203,1080,186.7C1140,171,1200,117,1260,112C1320,107,1380,149,1410,170.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
    </div>
</template>
<script>
import NavBar from "../NavBar.vue"
import DynamicImage from "./DynamicImage.vue";
import HomeCategory from "./HomeCategory.vue";
export default {
    name:'HomePage',
    components:{
    NavBar,
    DynamicImage,
    HomeCategory
},
    props:{
        auth:Boolean
    },
    beforeUpdate(){
        console.log("beforeUpdate",this.auth)
    },
    updated(){
        console.log("updated", this.auth)
    }
}
</script>
<style >
  
    .wave{
        position: absolute; 
       
    }
    .wave2{
       transform: rotate(180deg);
       margin-bottom:0px;
       backdrop-filter: blur(15px);
       position: absolute;
    }
</style>