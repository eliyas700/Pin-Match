function gettingPin(){
   const getPin= Math.round(Math.random()*10000);
   const pinResult = getPin + '';
   if(pinResult.length == 4){
    return getPin;
   }
   else{
       return gettingPin();
   }
   
}
function generatePin(){
    const pin = gettingPin();
    document.getElementById('display-input').value = pin ;
    
}
document.getElementById('key-pad').addEventListener('click', function(e){
    const keyValue =e.target.innerText;
    const typedKey= document.getElementById
    ('typed-value');
    const previousValue = typedKey.value;
    if(isNaN(keyValue)){
        if(keyValue == 'C'){
            typedKey.value = '';
        }
        if(keyValue == '<'){
            typedKey.value =typedKey.value.slice(0,-1);
        }
    }
    else{
        const previousValue = typedKey.value;
    typedKey.value =  previousValue + keyValue ;
    }
    
});

function pinVerifying(){
    const generateDisplay = document.getElementById('display-input').value;
    const typedValueDisplay = document.getElementById('typed-value').value;
    const errorMsg = document.getElementById('errorMsg');
    const successMsg = document.getElementById('successMsg');
    if( generateDisplay == typedValueDisplay){
       successMsg.style.display = 'block';
       errorMsg.style.display = 'none';
    }
    else{
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';  
    }
}

const incrementButton = document.getElementById("increment-btn")
    incrementButton.addEventListener("click", function () { 
    incrementButton.innerText = parseInt(incrementButton.innerText)+3; 
    }) 