
const Wrapper =document.querySelector(".wrapper");
const loginLink =document.querySelector(".login-link");
const registerLink =document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector(".icon-close");
        
registerLink.addEventListener('click' , () =>{
	Wrapper.classList.add('active');
});
loginLink.addEventListener('click', () =>{
	Wrapper.classList.add('active');
});
btnPopup.addEventListener('click', () =>{
	Wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () =>{
	Wrapper.classList.remove("active-popup");
});
function addToCart(productName, price) {
  var cart = document.getElementById('cart');
  var cartItem = document.createElement('div');

 
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = 
  `
    <p>${productName} - $${price}</p>
    <button onclick="removeFromCart(this)">Remove</button> <style> {width:80px;}</style>
  `;
  cart.appendChild(cartItem);
}
function removeFromCart(button) {
  var cartItem = button.parentElement;
  cartItem.remove();
}
const Wrapper1 =document.querySelector(".wrapper1");
const cartPopup=document.querySelector('.cartLogin-popup');
cartPopup.addEventListener('click', () =>{
	Wrapper1.classList.add('active-popup');
});
const iconClose1=document.querySelector(".icon-close1");
iconClose1.addEventListener('click', () =>{
	Wrapper1.classList.remove("active-popup");
});
const btnLink =document.querySelector(".btn1");
btnLink.addEventListener('click', () =>{
	Wrapper1.classList.add('active');
});
function msg()
{
	
  var Name = document.getElementById('input-box1').value;
      var number = document.getElementById('input-box2').value;
      var CVV = document.getElementById('input-box3').value;

	

 if (Name !== '' && number !== '' && CVV !== '') {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
       
      } else {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
      }
}
	
    