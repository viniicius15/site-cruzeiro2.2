const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="./img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="./img/close_white_36dp.svg";
    }
}

function toggleChat() {
    var chatBox = document.getElementById('chatBox');
    if (chatBox.style.display === 'none') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}

function respondToQuestion(question) {
    var responses = {
        "Como posso resetar minha senha?": "Para resetar sua senha, vá até a página de login e clique em 'Esqueci minha senha'.",
        "Qual é o horário de funcionamento?": "Nosso horário de funcionamento é das 9h às 18h, de segunda a sexta.",
        "Onde fica nossa sede?": "Nossa sede está localizada na Av. Principal, 123, Centro, Cidade - Estado."
    };
    var response = responses[question] || "Desculpe, não tenho uma resposta para essa pergunta.";
    document.getElementById('chatResponse').innerText = response;
}


function abrirCadastro() {
    document.getElementById('overlayCadastro').style.display = 'flex';
}

function fecharCadastro() {
    document.getElementById('overlayCadastro').style.display = 'none';
}

function abrirLogin() {
    document.getElementById('overlayLogin').style.display = 'flex';
}

function fecharLogin() {
    document.getElementById('overlayLogin').style.display = 'none';
}


/* slide */

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
//var slideIndex = 0;
//showSlides();
//function showSlides() {
    //var i;
  //  var slides = document.getElementsByClassName("mySlides");
   // for (i = 0; i < slides.length; i++) {
   //     slides[i].style.display = "none";
   // }
  //  slideIndex++;
   // if (slideIndex > slides.length) { slideIndex = 1 }
   // slides[slideIndex - 1].style.display = "block";
   // setTimeout(showSlides, 2000); // Change image every 2 seconds
//}