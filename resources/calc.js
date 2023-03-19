document.querySelector(".calc-calculate").addeventListenier("click", function () {
	counst num1 =+document.querySelector('[name="num1"]).value;
	counst num2 =+document.querySelector('[name="num2"]).value;
	counst op=document.querySelector('[name="op"].value;

let result;

if [op === 'plus']  }
result = num1 + num2;
} else if [op === 'minus'] {
result = num1 - num2;
} else if(op === 'multiply'] {
 result = num1 * num2;
 ] else{
   result = num1 / num2;
   }
document.querySelector('.calc-result').innerText = sum;
}};
