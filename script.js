let example2Button = document.getElementById('example2');
example2Button.onclick = function() {
   alert("Nice to meet you");
}

let example3Button = document.getElementById('example3');
example3Button.addEventListener('click', function() {
   alert("Bye!");
});

let example4Button = document.querySelector('#example4');
example4Button.addEventListener('click', function(){
   example4Button.textContent = "Nice to meet you";
});

let example5Div = document.querySelector('#example5');
example5Div.addEventListener('click', function(){
   alert(example5Div.textContent.length);
});

let num = 0;

let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
   h1.textContent = num;
});

let increaseButton = document.querySelector('#increase');
increaseButton.addEventListener('click', function() {
   num = num + 1;
   h1.textContent = num;
});

let decreaseButton = document.querySelector('#decrease');
decreaseButton.addEventListener('click', function() {
   num = num - 1;
   h1.textContent = num;
});

let helloButton = document.querySelector('#hello');
helloButton.addEventListener('click', function() {
   num = num * 0;
   h1.textContent = num;
});


document.querySelector('#example6').addEventListener('click', function() {
   this.style.color =  `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});

let example7Div = document.querySelector('#example7');
example7Div.addEventListener('click', function(){
   example7Div.remove();
})

document.getElementById('level3').addEventListener('click', function() {
   alert ("level 3 clicked");
})
document.getElementById('level2').addEventListener('click', function() {
   alert ("level 2 clicked");
})
document.getElementById('level1').addEventListener('click', function() {
   alert ("level 1 clicked");
})

let example8Button = document.getElementById('example8');
example8Button.addEventListener('click', function() {
   alert("Hello!");
   alert("Nice to meet you!");
   alert("Bye!");
});
