const debounce =(func, delay) =>{
    let timer;      // this will hold the timer ID
    return (...args) =>{
        clearTimeout(timer);  // clear fi there is any time present
        timer =setTimeout(() => {
            func.apply(this,args);  //execute the original function after the delay
        }, delay);
    }
}
const callFunc =(input) =>console.log(input); //  this is the function where we can our API
const callApi =debounce(() =>callFunc('Api Calling....'), 2000);  // debounce for 2 sec
callApi();
