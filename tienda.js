function comprar(producto) {
    var stockElement = document.getElementById(`stock_${producto}`);
    var stock = parseInt(stockElement.innerText);

    if (stock > 0) {
        stock--;
        stockElement.innerText = stock;

        if (stock === 0) {
            notificarAdministrador(producto);
        }
    } else {
        alert("El producto está agotado");
    }
}

function notificarAdministrador(producto) {
    fetch(`/notificar?producto=${producto}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al enviar la notificación");
            }
            console.log("Notificación enviada al administrador");
        })
        .catch(error => console.error("Error:", error));
}
