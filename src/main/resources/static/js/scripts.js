// Toggle login form
const loginButton = document.querySelectorAll('.info-item .btn');
const active = document.querySelectorAll('.container-form .btn');

loginButton.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.container').classList.toggle('log-in');
    });
});

active.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.container').classList.add('active');
    });
});

// Add to cart animation
document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach(button => {
        button.addEventListener('click', cartClick);
    });

    function cartClick() {
        let button = this;
        let cart = document.getElementById('cart');
        let cartTotal = cart.getAttribute('data-totalitems');
        let newCartTotal = parseInt(cartTotal) + 1;
        button.classList.add('clicked');
        setTimeout(() => {
            cart.classList.add('shake');
            cart.setAttribute('data-totalitems', newCartTotal);
            setTimeout(() => {
                cart.classList.remove('shake');
            }, 500);
        }, 100);
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 2000);
    }
});

// Scroll menu animation
var menu = document.getElementById('menu');
var signin = document.getElementById('sign-in');
var cart = document.getElementById('cart');

document.addEventListener('scroll', () => {
    var yPos = window.pageYOffset;
    if (yPos > 220) {
        setTimeout(() => {
            menu.classList.add('navbar-light');
            menu.classList.add('bg-light');
            signin.classList.add('btn-outline-primary');
            cart.classList.add('btn-outline-dark');
        }, 100)
        signin.classList.remove('btn-outline-warning');
        cart.classList.remove('btn-outline-warning;');
    } else if (yPos < 220) {
        setTimeout(() => {
            menu.classList.remove('navbar-light');
            menu.classList.remove('bg-light');
            signin.classList.remove('btn-outline-primary');
            cart.classList.remove('btn-outline-dark');
        }, 100)
        signin.classList.add('btn-outline-warning');
        cart.classList.add('btn-outline-warning');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.pageYOffset > 220) {
        setTimeout(() => {
            menu.classList.add('navbar-light');
            menu.classList.add('bg-light');
            signin.classList.add('btn-outline-primary');
            cart.classList.add('btn-outline-dark');
        }, 100)
        signin.classList.remove('btn-outline-warning');
        cart.classList.remove('btn-outline-warning;');
    }
});