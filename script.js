function pinGenerator(){
    const randomPin=(Math.round(Math.random()*10000)).toString();
    let paddedPin=randomPin.padStart(4,'0');
    return paddedPin;
}
let newPin=0;
document.getElementById('pin-generate-btn').addEventListener('click',function(){
    
    // const finalPin=parseInt(paddedPin);
    newPin=pinGenerator();

    document.getElementById('random-pin-display').value=newPin;
    // console.log(finalPin);
    
});
let enteredPin="";
document.getElementById('digit-button').addEventListener('click',function(event){
    if(event.target.innerText=="C"){
        enteredPin="";
        document.getElementById('input-pin').value=enteredPin;
    }
    else if(event.target.innerText=="<"){
        enteredPin=enteredPin.substring(0,enteredPin.length-1);
        document.getElementById('input-pin').value=enteredPin;
    }
    else if(event.target.innerText=="Submit"){
        // enteredPin="";
        // document.getElementById('input-pin').value=enteredPin;
        if(newPin===enteredPin){
            document.getElementById('success').style.display='block';
            enteredPin="";
            document.getElementById('input-pin').value=enteredPin;
            document.getElementById('random-pin-display').value="";
        }
        else{
            document.getElementById('failure').style.display='block';
            enteredPin="";
            document.getElementById('input-pin').value=enteredPin;
            document.getElementById('random-pin-display').value="";
        }
    }
    else{
        enteredPin+=event.target.innerText;
        document.getElementById('input-pin').value=enteredPin;
    }
});

// document.getElementById('submit-btn').addEventListener('click',function(){
    
//     if(newPin===enteredPin){
//         document.getElementById('success').style.display='block';
//         document.getElementById('input-pin').value="";
//     }
//     else{
//         document.getElementById('failure').style.display='block';
//         document.getElementById('input-pin').value="";
//     }
// })

