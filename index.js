// funuction for addition 
function addition(x,y){
        return x + y;
    }

//function for subtraction
function subtraction(x,y){
    return x-y;
}


// function for muliplication
function multiply(x,y){
return x * y;
}

// function for division
function division(x,y){
    return x/y;
}


class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    // this is for clearing all 
    clear(){
        this.currentOperand='';
        this.previousOperand= '';
        this.operation =undefined;
    }
    // this is just gone delete just one element from the last number
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }
    //this is when a user clicks on a number to add to the number already there  adds to the screen
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand =this.currentOperand.toString() + number.toString();
    }
    // this is when user selects on the operations [+ ,-, *,\,}
    chooseoperation(operation){
        if(this.currentOperand === '' )return
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand='';
    }
    // this will calculate the numbers given to give a result 
    compute(){
        let computation;
        const prev= parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev)||isNaN(current)) return
        switch(this.operation){
            case '+':
                computation=  prev + current;
                break;
            case '-':
            computation=  prev - current;
                break;
            case '*':
            computation=  prev * current;
                break;
            case '/':
            computation=  prev / current;
                break; 
            default:
                return
            
        }
        this.currentOperand= computation;
        this.previousOperand= '';
        this.operation=''
    }
   
    // this will update the screen
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        if(this.operation != null){
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        }
    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButtons = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

//listening for click for numbers
numberButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

//listneing for click for operations
operationButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.chooseoperation(button.innerText);
        calculator.updateDisplay();
    });
});

//listening for a click for equals
equalsButtons.addEventListener('click',() =>{
        calculator.compute();
        calculator.updateDisplay();
    
});
//listening for a click clear all
allClearButtons.addEventListener('click',() =>{
    calculator.clear();
    calculator.updateDisplay();

});
//listening for a click for del one element 
deleteButtons.addEventListener('click',() =>{
    calculator.delete();
    calculator.updateDisplay();
});