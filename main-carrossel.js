//alert("caixa troll"); caixinha de alerta pop up, elements.style = 'background-color:red;'
//1-acessar a janela(browser)
//2-Pegar HTML todo
//3-pegar o botao
//4- Saber que esta sendo clicado no botão

//5-Acessar a Janela
//6-Pegar HTML todo
//7-Pegar o elements
//8-Mover o elements para direita
//9-

const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const elements = window.document.querySelector(".elements");
let pixels = 100;

btnRight.addEventListener("click", function(){
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;

});

btnLeft.addEventListener('click', function(){
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;

});