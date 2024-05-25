'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
function displayPaymentInfo() {
  const paymentMethod = document.getElementById('payment-method').value;
  const paymentInfoDiv = document.getElementById('payment-info');
  const paymentDetailsDivs = document.querySelectorAll('.payment-details');

  // Hide all payment details sections
  paymentDetailsDivs.forEach(div => div.style.display = 'none');

  // Show the selected payment details section
  const selectedPaymentDiv = document.getElementById(`${paymentMethod}-info`);
  selectedPaymentDiv.style.display = 'block';
}

function makeDonation(sector, inputId) {
  const donationAmount = document.getElementById(inputId).value;
  const messageDiv = document.getElementById(`message-${inputId.split('-')[1]}`);
  messageDiv.style.display = 'none'; // Hide message div initially

  if(donationAmount && donationAmount > 0) {
      messageDiv.textContent = `Obrigado por sua doação de R$${donationAmount} para o setor de ${sector}!`;
      messageDiv.className = 'donation-message success';
      messageDiv.style.display = 'block'; // Show success message
  } else {
      messageDiv.textContent = 'Por favor, insira um valor válido para a doação.';
      messageDiv.className = 'donation-message error';
      messageDiv.style.display = 'block'; // Show error message
  }
}

function simulatePayment() {
  const paymentMethod = document.getElementById('payment-method').value;
  const paymentMessageDiv = document.getElementById('payment-message');
  paymentMessageDiv.style.display = 'none'; // Hide message div initially

  let paymentMethodText;
  switch (paymentMethod) {
      case 'credit-card':
          paymentMethodText = 'Cartão de Crédito';
          break;
      case 'paypal':
          paymentMethodText = 'PayPal';
          break;
      case 'bank-transfer':
          paymentMethodText = 'Transferência Bancária';
          break;
      case 'boleto':
          paymentMethodText = 'Boleto Bancário';
          break;
      default:
          paymentMethodText = 'Método de Pagamento';
  }

  paymentMessageDiv.textContent = `Pagamento simulado com sucesso utilizando ${paymentMethodText}!`;
  paymentMessageDiv.className = 'donation-message success';
  paymentMessageDiv.style.display = 'block'; // Show success message
}