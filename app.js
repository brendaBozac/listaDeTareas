/* seleccionamos los elementos del dom que vamos a necesitar */

const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

/* necesitamos ahora definir que va a ocurrir cuando se agrega una tarea,
que pasa cuando se marca una tarea como completada
y cuando se elimina una tarea  entonces necesitamos tres funciones
que luego vamos a asociar al boton y al input- tmb un evento en que el usuario pueda
presionar enter luego de ingresar la tarea y que eso sea equivalente a dar click en el boton*/

function agregarTarea() {
  /* lo primero es chequear si el input tiene ingresada informacion
  o si esta vacio...  */
  //si esto es true, hay un valor, una string que ingreso el usuario.
  if(input.value) {
    //crear tarea .-
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    //texto ingresado por el usuario .-
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    //crear y agregar contenedor de iconos .-
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);

    

    //iconos .-
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    /* append nos permite ingresar mas d un elemento */
    iconos.append(completar, eliminar);

    //agregar tarea a la lista
    listaDeTareas.appendChild(tareaNueva);
  } else {
    alert('Cuando estes lista, ingresa una tarea!');
  }
}

/* ahora necesitamos dos funciones, primero para activar el boton de tarea completada
y para activar el boton de eliminar */

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada'); //toggle - metodo - evalua si tiene esa clase
  /* la elimina, 
  si no tiene esa clase (la que ingresa el parametro 'completada')
  la agrega al elemento */
  
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}




/* al hacer click en el boton, activamos la funcion
si no hay tarea ingresada en el input, arroja alert */
boton.addEventListener('click', agregarTarea);

/* para que el enter funcione como un click al boton */
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    agregarTarea();
  }
})

