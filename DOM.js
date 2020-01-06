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

//7. display an alert popup when the user clicks a specified button
<button onclick="show()">Click Me</button>
<script>
function show() {
  alert("Hi there");
}
</script>

//8. Get Date clicked on btn //Mon Jan 06 2020 16:26:13 GMT+0200 (Восточная Европа, стандартное время)
window.onload = function() {
    let getDate = document.getElementById('date');
    getDate.onclick = function() {
        document.body.innerHTML = Date();
    }
};

//9. onchange event //e.g. changed text toLowerCase
function change() {
    let changeElem = document.getElementById('change');
    changeElem.value = changeElem.value.toLowerCase();
}

//10.Confirm password
function pasValidate() {
    let pas = document.getElementById('password');
    let confirmPas = document.getElementById('confirm-password');
    if(pas.value !== '' && confirmPas.value !== '') {
        if(pas.value === confirmPas.value) {
            return true;
        }
    }
    alert('The password confirmation is not the same as the password entered');
    return false;
}

//11. Preview and next photo //https://code.sololearn.com/WZ4g0DO30OZ8/#html
let myPhoto = [
    "https://scontent.fkbp1-1.fna.fbcdn.net/v/t1.0-9/56165197_2266650753551004_6828915923814973440_n.jpg?_nc_cat=107&_nc_ohc=0DpEvziGmtkAQlOX6v4pdbKjH3HMdg37sHn6fsy99dS9VQPWA-xEQqdWw&_nc_ht=scontent.fkbp1-1.fna&oh=a0155115601b2f763143dda2245e8fc3&oe=5EB3F416",
    "https://scontent.fkbp1-1.fna.fbcdn.net/v/t1.0-9/18528076_1904107323138684_4820492057980338862_n.jpg?_nc_cat=105&_nc_ohc=quThTQiwwMoAQkVlYcoDIh49JgDCB-VfWqqd2ATCYKIHlbkvodxvYOYbA&_nc_ht=scontent.fkbp1-1.fna&oh=9a004315879be4a9db89b35e7decc695&oe=5E9DC9B9",
    "https://scontent.fkbp1-1.fna.fbcdn.net/v/t1.0-9/14495424_1798392050376879_8667288120079411522_n.jpg?_nc_cat=101&_nc_ohc=inJmOZvds2YAQkjlfhe4g1qCFsEfaWxEjZjLHQiCGXa6iYPPt9LnLWyYg&_nc_ht=scontent.fkbp1-1.fna&oh=cb30cfa425f2a9a324e9b6df5a32e3e8&oe=5E9504D1",
    "https://scontent.fkbp1-1.fna.fbcdn.net/v/t1.0-9/80083801_2472208786328532_1595207916669894656_n.jpg?_nc_cat=107&_nc_ohc=NCmTHTLO7jEAQljtas1jJWas0bBey6kkB3ENWrSxrhoctyj24xhTugdEA&_nc_ht=scontent.fkbp1-1.fna&oh=eef00eed62a458878ef356206978bc33&oe=5EA8B2D3"
    ];
let num = 0;

function next() {
    let slider = document.getElementById("slider");
    num++;
    for(num = 0; num > myPhoto.length; ) {
    }
    slider.src = myPhoto[num];
}

function prev() {
    let slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        mum = myPhoto.length-1;
    }
    slider.src = myPhoto[num];
};
