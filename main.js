document.getElementById('calculate').addEventListener('click',function(){

    
    const result = document.querySelector('.result');

    const value = parseFloat((document.getElementById('input')).value);
    let tax =0;
    if ( value <= 50000){
       tax = 0;

    }else if( value >= 50000  && value <= 10000){
        tax = value * 0.1
   }else if( value >= 100000  && value <= 50000){
        tax = value * 0.2
   }else if( value >= 500000){
        tax = value * 0.3
   }
   else{
    result.innerHTML='please enter a number ('-'*)';
   }

   document.querySelector(".result").innerHTML = `your tax is : ${tax.toFixed(2)}  DZ`

})