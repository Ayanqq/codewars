function abundantNumber(num) {
    let arr=[];
    for (let i=1;i<num;i++){
        if (num%i===0) arr.push(i)}
    return arr.reduce((a,b)=>a+b,0)>num
}