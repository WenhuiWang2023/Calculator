const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');
let calculation = [];
let accumlativeCalculation;
function calculate(button){
    const value = button.textContent;

    if(value == "CLEAR"){
        calculation = [];
        screenDisplay.textContent = '.';
    }else if (value === "="){
        const res = eval(accumlativeCalculation);
        const tmp = Math.floor(res);
        const tmpx = tmp.toString();
        //console.log(tmp)
        //console.log(typeof tmpx);
        //console.log(tmpx);
        //console.log(tmpx.length)
        screenDisplay.textContent =  res.toFixed(10-tmp.toString.length);
    }else{

        calculation.push(value);
        accumlativeCalculation = calculation.join('');
        screenDisplay.textContent = accumlativeCalculation;
    }

}

buttons.forEach(button => button.addEventListener('click',() => calculate(button)))