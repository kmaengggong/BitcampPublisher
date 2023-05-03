outer: for(let i=0; i<3; i++){
    inner: for(let j=0; j<2; j++){
        if(i == j+2) break outer;
        console.log(`(${i}, ${j})`);
    }
}