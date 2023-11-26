function fibonacci(limit){
    let fibseq = [0,1];

    for( i=2; i <= limit; i++){
        fibseq[i] = fibseq[i-1]+fibseq[i-2];
    }

    return fibseq;
}

fibonacci(10);





























console.log("Fibonacci sequence up to",limit,"is:",fibonacci(10));




// function fibonacci(limit){
//     if(limit <= 0) return [];
//     if(limit == 1) return [0];
//     if(limit == 2) return [0,1];
//     else{
//         let fibseq = fibonacci(limit-1);
//         console.log(limit);
//         fibseq.push(fibseq[fibseq.length-1] + fibseq[fibseq.length-2] );
//         return fibseq;
//     }
// }

// fibonacci(20)