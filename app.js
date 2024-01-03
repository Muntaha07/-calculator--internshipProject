let input = document.getElementById('inputBox'); // We have create on Id in Input 

let buttons = document.querySelectorAll('button'); // It takes all buttons in the document

let string = "";


let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
// evaluate ek inbuilt funcation hai JavaScript me 
// ese hoga aesa humare string me jo bhi kuch hoga use evalate karke wo hume de dega mathamatically
            string = eval(string); 
            input.value = string;  // input tag me value store karwa dege
            // jabhi = par click hoga to jo bhi result hoga wo hume input value me dikhega 
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
           string = string.substring(0, string.length - 1);
           input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})













