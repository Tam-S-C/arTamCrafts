// funcion al darle click al boton enviar formulario, pàgina contacto

function enviarFormulario(event) {
    event.preventDefault();

    // Obtener las dimensiones de la ventana principal
    var ventanaPrincipalAncho = window.innerWidth;
    var ventanaPrincipalAlto = window.innerHeight;

    // Calcular la posición de la ventana emergente para que esté centrada
    var popupAncho = 350  ; // Ancho de la ventana emergente
    var popupAlto = 120;   // Alto de la ventana emergente
    var left = (ventanaPrincipalAncho - popupAncho) / 2;  // div 2 la medida para que quede centrada
    var top = (ventanaPrincipalAlto - popupAlto) / 2; // div 2 la medida para que quede centrada

    // Para crear la ventana emergente + medidas y ubicación 
    var popup = window.open("", "Popup", "width=" + popupAncho + ", height=" + popupAlto + ", top=" + top + ", left=" + left + ", location=no, status=no, menubar=no, scrollbars=no, resizable=no, titlebar=no, toolbar=no");

    // Estilos CSS dentro de JS
    popup.document.write("<style>body { background-color: #D7D7ED; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; }</style>");
    popup.document.write("<p style='font-weight: bold; color: #978FC5; font-size: 20px;'>Mensaje enviado! =) Gracias!</p>");
    popup.document.write('<html><head><title>arTamCrafts</title></head><body>');
    popup.document.write('</body></html>');

    // Restablecer el formulario luego de enviarlo
    document.getElementById("formulario").reset();

    // Cerrar popup después de 4 seg.
    setTimeout(function() {
    popup.close();
    }, 4000); 
}