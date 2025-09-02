function throttle(func, delay){
    let timer =null;        // variable to keep the track of our time
    return (...args) =>{
        if(timer ==null){   // if there is no timer currently running
            func(...args);  // exacute the main function
            timer=setTimeout(() =>{ // if set a timer to clear the timer 
                timer =null;    // clear the timer to allow the main function to be executed again
            }, delay)
        }
    }
}
// fetchData is example, or its is the function where we need to call API
const fetchData =() =>{
    console.log('Fetch Data...');
    setTimeout(() =>{
        console.log('Data Fetched...');
    }, 2000);
};

const callApi =throttle(fetchData, 5000);
callApi();
