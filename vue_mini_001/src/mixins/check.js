import router from "@/router"

export default{
    beforeCreate(){
        let token=localStorage.getItem("authToken") || sessionStorage.getItem('authToken');

        if(token){
            router.push({path:'/'})
        }
    }

}