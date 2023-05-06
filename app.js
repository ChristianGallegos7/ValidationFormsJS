const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const alertName = document.getElementById('alertName');
const alertEmail = document.getElementById('alertEmail');
const alertSuccess = document.getElementById('alertSuccess');



const mostrarMensajeExito = () =>{
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = 'Mensaje enviado con exito'
}

const pintarMensajeError = (errores) => {
    errores.forEach((err)=> {
        err.tipo.classList.remove('d-none');
        err.tipo.textContent = err.msg;
    })
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
   
    const errores = [];

    if(!regUserName.test(userName.value) || !userName.value.trim() ){
        userName.classList.add('is-invalid');
        errores.push({
            tipo: alertName,
            msg: 'Formato no valido en el campo nombre solo se permite letras.'
        })
    }else{
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
        alertName.classList.add('d-none')
    }
    
    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim() ){
        userEmail.classList.add('is-invalid');
        errores.push({
            tipo: alertEmail,
            msg: 'Ingrese un correo valido.'
        })
    }else{
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
        alertEmail.classList.add('d-none');
    }

    if(errores.length !== 0){
        pintarMensajeError(errores);
        return;
    }


    mostrarMensajeExito();
    setTimeout(() => {
        alertSuccess.classList.add('d-none')
    }, 3000);
})