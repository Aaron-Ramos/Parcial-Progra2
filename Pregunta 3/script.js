function registerNewProduct() {
    var reg_nombre = document.getElementById("nombre_reg").value;
    var reg_precio = document.getElementById("precio_reg").value;
    var reg_cant = document.getElementById("cant_reg").value;
    var reg_sub = document.getElementById("precio_reg").value * document.getElementById("cant_reg").value;

    //alert(reg_nombre);
    var userArray = [];

    if (sessionStorage.getItem("wUserArray") !== null) {
        userArray = JSON.parse(sessionStorage.getItem("wUserArray"));
    }

    var current_reg = {
        nombre: reg_nombre,
        precio: reg_precio,
        cantidad: reg_cant,
        subtotal: reg_sub
    };

    userArray.push(current_reg);

    sessionStorage.setItem("wUserArray", JSON.stringify(userArray));

}