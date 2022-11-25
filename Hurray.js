

function Hurray(N){
    if(N%5 && N%7){
        console.log("Masai School")
    }
    else if(N%7){
        console.log("Masai")
    }
    else if(N%5){
        console.log("School")
    }
    else{
        console.log("Hurray")
    }
}
Hurray(7)