const form = document.getElementById('form');
const nombres = document.getElementById('nombres');
const user = document.getElementById('user');
// const date = document.getElementById('date');
const domicilio = document.getElementById('domicilio');
// const vender = document.getElementById('vender');
// const comprar = document.getElementById('comprar');
// const electro = document.getElementById('electro');
// const moda = document.getElementById('moda');
// const hogar = document.getElementById('hogar');
// const jugueteria = document.getElementById('jugueteria');
// const vidasana = document.getElementById('vidasana');
// const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const confirmar = document.getElementById('confirmar');
const enviar = document.getElementById('enviar');
const borrar = document.getElementById('borrar');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const nombresValue = nombres.value.trim();
    const domicilioValue = domicilio.value.trim();
    const userValue = user.value.trim();
    const contraseñaValue = contraseña.value.trim();
    const confirmarValue = confirmar.value.trim();

    if(userValue === ''){
        setErrorFor(user, 'No puede dejar el usuario en blanco');
    }else{
        setSuccesFor(user);
    }
    if(nombresValue === ''){
        setErrorFor(nombres, 'No puede dejar el usuario en blanco');
    }else{
        setSuccesFor(nombres);
    }
    if(domicilioValue === ''){
        setErrorFor(domicilio, 'No puede dejar el usuario en blanco');
    }else{
        setSuccesFor(domicilio);
    }
    if(contraseñaValue === '') {
		setErrorFor(contraseña, 'Debe ingresar una contraseña.');
	} else {
		setSuccesFor(contraseña);
    }
    if(confirmarValue === '') {
		setErrorFor(confirmar, 'Debe confirmar la contraseña');
	} else if(contraseñaValue !== confirmarValue) {
		setErrorFor(confirmar, 'Las contraseñas no coinciden');
	} else{
		setSuccesFor(confirmar);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccesFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control succes';
}
