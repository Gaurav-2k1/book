

export const isLoggedIn = function(){
    let data = localStorage.getItem('user');

    console.log("userdata",data);
    if(data)    
        return true;
    else
        return false;    
}