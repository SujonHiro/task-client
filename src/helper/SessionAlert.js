class SessionAlert{
    setToken(token){
        localStorage.setItem('token',token)
    }
    getToken(){
      return localStorage.getItem('token')
    }

    setUserDetails(UserDetails){
        localStorage.setItem('UserDetails',JSON.stringify(UserDetails))
    }
    getUserDetails(){
       return JSON.parse(localStorage.getItem('UserDetails'))

    }
    sessionRemove=()=>{
        localStorage.clear()
        window.location.href="/"
    }

}

export const {setToken,getToken,setUserDetails,getUserDetails,sessionRemove} = new SessionAlert();