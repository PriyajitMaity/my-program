const debounce =(func, delay =500) =>{
    let timer;
    return (...args) =>{
        clearTimeout(timer);
        timer =setTimeout(() => {
            func.apply(this,args);
        }, delay);
    }
}
const callFunc =(input) =>console.log(input);
const callApi =debounce(() =>callFunc('Api Calling....'), 2000);
callApi();
