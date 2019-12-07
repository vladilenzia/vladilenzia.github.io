function inputF(){
 let inputGroup = document.querySelectorAll('.request .input-group'),//frame
	formControl = document.querySelectorAll('.request .form-control'), //input
    btn = document.querySelector('.request .button'); //button

    for (let i = 0; i < formControl.length; i++) {
    	let form = formControl[i];
    	btn.addEventListener('click', () => {
    		if (form.value == null || form.value == 0) {
    			form.style.background = '#FA8484';
    		} else {
    			form.style.background = '';
    		}
    	})
    	form.addEventListener('keyup', () => {
    		if (form.value == null || form.value == 0) {
    			form.style.background = '#FA8484';
    		} else if (form.value !== null || form.value !== 0) {
    			form.style.background = '';
    		}
    	})    
    }

    for (let i = 0; i < 3; i++) {   
    	let y =  inputGroup[i].querySelector('.form-control');
    	let z =  inputGroup[i].querySelectorAll('.dropdown-item');
    	let d = z.forEach(function (elem){
    		elem.onclick  = function (){
    			y.value = this.innerText;
    		}
    	})
    }
};
inputF();






































