//1. Create clock
const clock = document.querySelector('.clock');
setInterval(
    () => clock.innerHTML = (new Date()).toLocaleTimeString();
1000
);

//1.1 another setInterval function
const clock = document.querySelector('.clock');
const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval(updateTime, 1000);

//2. replace link and text
const link = document.querySelector('a');
link.href = "https://www.facebook.com/";
link.textContent = 'Facebook';

//3. add new paragraphs 
const sect = document.querySelector('section');
for (i = 0; i < 10; i++) {
    const para = document.createElement('p');
    para.textContent = i + 1 + ". Some new text";
    sect.appendChild(para);
}

//3.1 another way add new paragraphs
const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = ". Some new text";
for (i = 0; i < 10; i++) {
    const newPara = para.cloneNode(true);
    newPara.textContent = i + 1 + para.textContent;
    sect.appendChild(newPara);
}

//4. Create button 
function btnClicked() {
    const newPara = para.cloneNode(true);
    sect.appendChild(newPara);
};

//5. Create calculator 
document.querySelector('.calc').addEventListener('click', calc);
function calc() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}

//6. Create "clear" btn
document.querySelector('.clear').addEventListener('click', clear);
function clear() {
    const display = document.querySelector('.display');
    display.value = '';
};
