

let year = document.querySelector('.year')
let date = new Date()
let newyear = date.getFullYear()

year.textContent = newyear



const subImages = document.querySelectorAll('.productimg img');

const mainImage = document.querySelector('.mainimg');




let quantity = document.querySelector(".quantity p");
let plus = document.querySelector("#more");
let moins = document.querySelector('#less');

plus.addEventListener('click', function (){
    let newquantity = Number(quantity.textContent);
    newquantity += 1;
    quantity.textContent = newquantity;
});




moins.addEventListener('click', function(){
    let lessquantity = Number(quantity.textContent);
    lessquantity -= 1;
    if(lessquantity >= 0){
        quantity.textContent = lessquantity;
    }else{
        alert('Erreur, vous devez avoir au moins 1 article')
        quantity.textContent = 0
    }
})




setTimeout(function() {
    popupAppear();
}, 10000);

function popupAppear() {
    document.getElementById("popup").style.display = "block";
}

function quitPopup() {
    document.getElementById("popup").style.display = "none";
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        quitPopup();
    }
});

function receivemail() {
    let email = document.getElementById("emailInput").value;
    console.log(email);
    quitPopup();
}





let hamburger = document.getElementById('hamburger')
let menuphone = document.querySelector('#phone-menu')

hamburger.addEventListener('click', function(){
    menuphone.classList.toggle('affiche');  
    hamburger.classList.toggle('rotate');  
})

menuphone.addEventListener('click', function(){
    menuphone.classList.toggle('affiche');
    hamburger.classList.toggle('rotate');
})
