 let menuIcon = document.querySelector('.menu_icon');

menuIcon.addEventListener('click', ()=>{

menuIcon.classList.toggle('active');
	
	if(!menuIcon.classList.contains('active')){
	menuIcon.classList.toggle('not-active');
	
	}else{
	
		menuIcon.classList.remove('not-active');
	
	}

});
