// comportamiento de la página de entrada
document.addEventListener('DOMContentLoaded', () => {
    const pantallaInicio = document.getElementById('pantallaInicio');
    const pantallaPreguntas = document.getElementById('pantallaPreguntas');
    const botonComenzar = document.getElementById('botonComenzar');

    // Verificar si venimos de actividades.html
    const fromActivities = document.referrer.includes('actividades.html');
    
    if (fromActivities || sessionStorage.getItem('entradaMostrada')) {
        // Si venimos de actividades o ya se mostró la entrada, ocultamos la entrada
        if (pantallaInicio) pantallaInicio.style.display = 'none';
        if (pantallaPreguntas) {
            pantallaPreguntas.style.display = 'block';
            pantallaPreguntas.style.opacity = '1';
        }
    } else {
        // Primera visita
        if (pantallaInicio && pantallaPreguntas) {
            pantallaPreguntas.style.display = 'block';
            pantallaPreguntas.style.opacity = '0';
            
            botonComenzar.addEventListener('click', () => {
                pantallaInicio.style.opacity = '0';
                pantallaPreguntas.style.opacity = '1';
                pantallaPreguntas.style.transition = 'opacity 0.5s ease-in-out';
                
                // Guardar que ya se mostró la entrada
                sessionStorage.setItem('pantallaInicio Mostrada', 'true');
                
                setTimeout(() => {
                    pantallaInicio.style.display = 'none';
                }, 500);
            });
        }
    }
});

//Función para guardar el nombre de usuario y mostrarlo por la consola
function guardarNombre() {
    var nombreEstudiante = document.getElementById('casillaUsuario').value;
    console.log(nombreEstudiante);
 }

//mostrar toast (por configurar)
 const toastTrigger = document.getElementById('toastRegistro')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


// Función para iniciar la evaluación (mostrar preguntas)
  function iniciarEvaluación() {
    // Ocultar la pantalla de bienvenida
    document.getElementById('pantallaInicio').style.display = 'none';
    // Mostrar la pantalla con las preguntas
    document.getElementById('pantallaPreguntas').style.display = 'block';
  }

  // Función para enviar la respuesta (puedes personalizarlo según tus necesidades)
  function enviarRespuesta() {
    // Obtiene la opción seleccionada
    const opciones = document.getElementsByName('opcion');
    let respuestaSeleccionada = '';
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        respuestaSeleccionada = opciones[i].nextElementSibling.innerText; // Obtiene el texto de la opción seleccionada
        break;
    
      }
    }

    if (respuestaSeleccionada) {
      alert('Respuesta enviada: ' + respuestaSeleccionada);
    } else {
      alert('Por favor, selecciona una respuesta');
    }
    console.log(respuestaSeleccionada);
  }


