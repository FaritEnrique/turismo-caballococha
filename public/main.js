const boton = document.querySelectorAll('.boton');
const mostrarComentario = document.querySelectorAll('.opinion');

boton.forEach(function(elemento, indice){
    elemento.addEventListener('click', function(){
        mostrarComentario[indice].classList.toggle('opinion');

        if(mostrarComentario[indice].classList.contains('opinion')){
            elemento.innerHTML = 'Ver más';

        }else{
            elemento.innerHTML = 'Ver menos';
        }
    })
})

const btnAbrirModal = document.querySelector('.btn_modalNosotros');
const btnCerrarModal = document.querySelector('.btn-cerrar-modal');
const modal =  document.querySelector('#modal');

btnAbrirModal.addEventListener('click', () => {
    modal.showModal();
})

btnCerrarModal.addEventListener('click', () => {
    modal.close();
})