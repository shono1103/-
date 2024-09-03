const btn_nums = document.querySelectorAll('button.num');
const btn_operators = document.querySelectorAll('button.operator');
const result_text = document.getElementById('result-text');
const operator_text = document.getElementById('operator-text');

const InputCatcher = {
    operator: '',
    num_str: '',
    
    catchNum: function(num) {
        this.num_str += num;
    },
    catchOperator: function(operator) {
        this.operator = operator;
    },
    resetNum: function() {
        this.num_str = '';
    },
    getNum: function() {
        return this.num_str;
    },
    getOperator: function() {
        return this.operator;
    }   
}
const outputShower = {
        
        showNum: function(inNum_str) {
            result_text.textContent = inNum_str;
        },
        showOperator: function(inOperator) {
            operator_text.textContent = inOperator;
        }
}
const InputAndOutputManager = {
    resultNum_str: '',
    operator: '',

    pushBtn_nums: function() {
        btn_nums.forEach((btn_num) => {
            btn_num.addEventListener('click', () => {
                InputCatcher.catchNum(btn_num.textContent);
                outputShower.showNum(InputCatcher.getNum());
            });
        });
    },
    pushBtn_operators: function() {
        btn_operators.forEach((btn_operator) => {
            btn_operator.addEventListener('click', () => {
                InputCatcher.catchOperator(btn_operator.textContent);
                outputShower.showOperator(InputCatcher.getOperator());
                if(this.resultNum_str === '') {
                    this.setResultNum(InputCatcher.getNum());
                    InputCatcher.resetNum();
                    console.log(this.resultNum_str);
                    this.setOperator(InputCatcher.getOperator());
                    console.log(this.resultNum_str);
                }else{
                    calculator.calculating(
                        Number(this.resultNum_str), 
                        Number(InputCatcher.getNum()), 
                        this.operator);
                    this.setOperator(calculator.getResultNum());
                    this.setResultNum(calculator.resultNum_str);
                }

            });
        });
    },
    setResultNum: function(inNum_str) {
        this.resultNum_str = inNum_str;
    },
    setOperator: function(inOperator) {
        this.operator = inOperator;
    }   

}

const calculator = {
    resultNum_str: '',

    calculating: function(num1, num2, operator) {
        let result = 0;
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '÷':
                result = num1 / num2;
                break;
            case '=':
                result = num1;
                break;   
        }
        this.resultNum_str = result.toString();
        outputShower.showNum(this.resultNum_str);
        setResultNum(this.resultNum_str);
    },
    getResultNum: function() {
        return this.resultNum_str;
    }

}

InputAndOutputManager.pushBtn_nums();
InputAndOutputManager.pushBtn_operators();