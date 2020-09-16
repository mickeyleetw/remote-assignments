const welMessage=document.getElementById('welMessage');
const MainBtn = document.getElementsByClassName('MainBtn');
const HideBoxex=document.getElementById('HideBoxex');


welMessage.addEventListener('click',()=>{
	welMessage.textContent="Have a Good Time!";
})

MainBtn[0].addEventListener('click',()=>{
	HideBoxex.style.display='initial';
})