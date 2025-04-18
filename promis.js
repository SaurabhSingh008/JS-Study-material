const PromiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Saurabh",password:"123"});
        } else{
            reject('erroe: js went wrong ')
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response =  await PromiseFive
        console.log(response);
    } catch(erroe){
        console.log(error);
    }
}
consumePromiseFive()