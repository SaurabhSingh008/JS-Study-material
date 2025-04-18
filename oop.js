const user = {
    username:"Saurabh",
    loginCount: 9,
    signedIn:true,

    getUserDetails:function(){
        console.log(`username:${this.username}`);
}
}
console.log(user.username)
console.log(user.getUserDetails());