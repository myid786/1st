const minimum = (...a) =>{
    let min = a[0];
    for(let i = 0; i < a.length; i++){
        if(a[i] < min){
            min = a[i];
        }
    }
    return min;
}


let s = minimum(1,10,52,86,45,25);
console.log(s);
