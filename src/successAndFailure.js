import {toast} from "react-toastify"


export var onLoginSuccess=(res)=>{
    toast.success("It Works")
    window.location.reload();
  }
export var onLoginFailure=(res)=>{
    toast.error("No Good")
  }
export var onRegisterSuccess=(res)=>{
    toast.success("It Works")
  }
export var onRegisterFailure=(res)=>{
    console.log(res)
    toast.error("No Good")
  }
export var onFriendFormSuccess=(res)=>{
  toast.success("It Works")
  window.location.reload();
}

