const cache={};
function calculation(a,b){
    let result = (a+b)*(a+b)*(b+b);
    console.warn("calculation function called ",result)
    return result
}

function memory(a,b){
    const key=a+":"+b;
    if(!cache[key]){
       const result = calculation(a,b);
       cache[key]=result;
       return result;
    }
    else{
        console.log("result come from cache",cache[key]);
        
        return cache[key] ;
    }
}