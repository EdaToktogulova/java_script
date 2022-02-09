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

