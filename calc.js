//
//
var v1, v2, res;
var ops = "";

function clickClr(){
    document.querySelector("#res").innerHTML = "";
}

function clickOne(){
    document.querySelector("#res").innerHTML += "1";
}

function clickZero(){
    document.querySelector("#res").innerHTML += "0";
}

function clickSum(){
    v1 = document.querySelector("#res").innerHTML;
    document.querySelector("#res").innerHTML = "";
    ops = "+"
}

function clickSub(){
    v1 = document.querySelector("#res").innerHTML;
    document.querySelector("#res").innerHTML = "";
    ops = "-"
}

function clickEql(){
    v2 = document.querySelector("#res").innerHTML;
    
    v1 = Convert(v1);
    v2 = Convert(v2);

    switch (ops) {
        case "+":
            res = v1 + v2;
            break;
        
        case "-":
            res = v1 - v2;
            break;
    
        default:
            res = "Err"
            break;
    }
    document.querySelector("#res").innerHTML = res;
}

function Convert(v){
    //CONVERT V1 AND V2 TO DECIMAL HERE 1001
    //v1 = parseInt(v);

    var i = 0;
    var n = 0;
    var r = 0;
    var d = 0;
    n = parseInt(v);

    for(x in v){
        r = n % 10;
        if(r>0){
            d = d + (r * 2**i);
        }
        i += 1;
        n = Math.floor(n/10);
    }

    return d;
}
