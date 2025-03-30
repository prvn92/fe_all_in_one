const debounce = (cb, timer) => {
    let timerId=null;
    return function(...args){
        const callerThis = this;
        if(timerId){
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => cb.bind(callerThis)(...args), timer)
    };
}