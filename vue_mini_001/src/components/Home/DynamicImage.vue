<template>
  <div class="container">
    <div class="d-flex">

        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide imageSlider"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div :class="count==0 ? 'carousel-item active' : 'carousel-item' ">
              <img  src="https://assets.ajio.com/cms/AJIO/WEB/06032023-UHP-D-Main-HiFashion-AXSuperdry-Min40Extra35.jpg" class="d-block w-100 scalUpCenter" alt="..." />
            </div>
            <div :class="count==1 ? 'carousel-item active' : 'carousel-item' ">
              <img src="https://assets.ajio.com/cms/AJIO/WEB/06032023-UHP-D-Main-P5-AroundTheWorld-KennethColeMavi-Min50(1).jpg" class="d-block w-100 scalUpCenter" alt="..." />
            </div>
            <div :class="count==2 ? 'carousel-item active' : 'carousel-item' ">
              <img src="https://assets.ajio.com/cms/AJIO/WEB/06032023-UHP-D-Main-P7-StyliTruebrowns-upo50.jpg" class="d-block w-100 scalUpCenter" alt="..." />
            </div>
          </div>
        </div>

        <div class="hurry">
            <!-- <span><h1>H</h1></span>
            <span><h1>u</h1></span>
            <span><h1>r</h1></span>
            <span><h1>r</h1></span>
            <span><h1>y </h1><pre> </pre> </span>
            <span><h1>U</h1></span>
            <span><h1>p</h1></span>
            <span><h1>&nbsp; !</h1></span> -->
                Hurry Up !
            <!-- <h1>Hurry UP !</h1> -->
        </div>
    </div>
  </div>
  <div class="hr">

  </div>
</template>
<script>
export default {
  name: "DyanamicImage",
  data(){
    return {
        count:0
    }
  },
  methods:{

    slideImage(){
        
        let time=setTimeout(() => {
        // if(state==false){
            if(this.count==2){
                this.count=0;
            }else{
                this.count+=1
            }
           this.slideImage()
        // }
        // else if(state==true){
        //     clearTimeout(time)
        // }
    }, 2500);
    }


  
  
  },
  created(){
    this.slideImage();
  }
};
</script>
<style scoped>
.container {
  position: relative;
  z-index: 1;
  top: 70px;
  /* border: 1px solid red; */
 
  /* height:300px; */
}

.scalUpCenter {
	-webkit-animation: scalUpCenter 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both;
	        animation: scalUpCenter 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both;
}
@-webkit-keyframes scalUpCenter {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
  }
}
@keyframes scalUpCenter {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
  }
}

.hurry{
    position:absolute;
    z-index:1;
    width:5%;
    text-align: center;
    margin-left:90%;
    height:100%;
    /* border: 1px solid black; */
    /* display:flex; */
    font-weight:bold;
    font-size:26px;

    
}

.imageSlider{
    width:100%;
    position:relative;
    z-index:2;
}

.hr{
    width:80%;
    height:5px;
    background-color:#0099ff83;
    position:relative;
    z-index:3;
    margin-left:10%;
    margin-top:150px;
}

@media screen and(max-width:720px) {
    .hurry{
    width:20%;
    margin-left:78%;
}
}
</style>
