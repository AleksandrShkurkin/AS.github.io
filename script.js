// JavaScript source code

let answers = ["Yes", "Absolutely", "No doubt", "Maybe", "Perhaps", "More yes then no", "I`m not sure", "I can`t say right now", "More no then yes", "I don`t think so", "No", "Nope", "No way"];
let question = new String();
let questionTrimmed = new String();
let decision;
let text = document.createTextNode('');

let elementInput = document.createElement('div');
let fieldDiv = document.createElement('div');
let buttonDiv = document.createElement('div');
elementInput.className = 'input';
fieldDiv.className = 'field';
buttonDiv.className = 'button';
elementInput.appendChild(fieldDiv);
elementInput.appendChild(buttonDiv);
let inputForm = document.createElement('form');
inputForm.name = 'questions';
inputForm.className = 'inputForm';
let inputField = document.createElement('input');
inputField.type = 'text';
inputField.name = 'inputQuestion';
inputField.className = 'inputQue';
inputForm.appendChild(inputField);
fieldDiv.appendChild(inputForm);
let buttonConfirm = document.createElement('button');
buttonConfirm.className = 'confirm';
buttonConfirm.onclick = () => {
    question = document.questions.inputQuestion.value;
    questionTrimmed = question.trim();
    if (questionTrimmed.length < 3) {
        text.nodeValue = '';
        text.replaceWith(text);
        alert("Input a word");
    }
    else {
        decision = Math.floor(Math.random() * (12 + 1));
        text.nodeValue = answers[decision];
        text.replaceWith(text);
    }
}
let textButton = document.createTextNode('Get the answer...');
buttonConfirm.appendChild(textButton);
buttonDiv.appendChild(buttonConfirm);
document.body.appendChild(elementInput);

let elementOutput = document.createElement('div');
let ballDiv = document.createElement('div');
ballDiv.className = 'ballDiv';
let divText = document.createElement('div');
divText.appendChild(text);
divText.className = 'textDiv';
ballDiv.appendChild(divText);
elementOutput.appendChild(ballDiv);
elementOutput.className = 'output';
document.body.appendChild(elementOutput);