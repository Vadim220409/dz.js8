function counter(){
    for(let i = 3; i <= 13; i++){
        console.log(i);
    }
}

function printer(){
    for(let i = 0; i < 10; i++){
        console.log(10);
    }
}

function comparison(a, b){
    if (a > b){
        console.log("Число a більше b");
    }
    else if (b > a){
        console.log("Число b більше a");
    }
    else {
        console.log("Числа рівні");
    }
}

comparison(12, 314)