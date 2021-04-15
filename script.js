document.title='CALCULATOR';
function Calculate(btn){
    
    const operation = btn.innerHTML;
    const resultat = document.getElementById("resultat");
    if(operation == "="){
        
        resultat.innerHTML = eval(resultat.innerHTML);
        
    }else if(operation == "AC"){
        
        resultat.innerHTML = '0';
    }else{
        if(resultat.innerHTML == '0'){
            
            resultat.innerHTML = operation;
        }else{
            resultat.innerHTML += operation;
            //resultat.innerHTML = resultat.innerHTML + operation;
        }
    }
}