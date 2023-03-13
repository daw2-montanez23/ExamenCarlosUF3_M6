import { cervezas } from "../bd";

export const pedidos ={//creamos una constante con un template con comillas `` para añadir dentro el formulario necesario con su bootstrap id's y valores necesarios ademas de añadir tambien un boton submit para la hora de realizar el pedido añadirlo a la tabla
    template:`
    
    <div class="col-6" id="registrarPedido">
        <h1>Selecciona tu cerveza y haz tu pedido</h1>
        <form id="FormularioCervezas" class="needs-validation w-50 pt-2 ps-2 FormularioCervezas" novalidate>
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre del grupo:</label>
                <input id="nombre" type="text" class="form-control nombre" required pattern="[A-Z_a-z]{1,10}">
                <!-- mensaje si valida -->
                <div class="valid-feedback">Todo correcto</div>
                <!-- mensaje si no valida -->
                <div class="invalid-feedback">Del 1 y 10, no espacios y solo _</div>
            </div>
            <div class="mb-3">
                <label for="mesa" class="form-label">Mesa:</label>
                <input type="number" class="form-control " id="mesa" value="" required>
            </div>
                <label for="cervezas" class="form-label">Elige tu birra</label>
                <select name="select" id="cervezas">
                </select>
            <div class="mb-3">
            <label for="cantidad" class="form-label mt-5">¿Cuantas te traigo?</label>
                <input type="number" class="form-control " id="cantidad" value="" required>
            </div>
            <button id="enviar" type="submit" class="btn btn-success w-100 enviar">Añadir Pedido</button>
        </form>
    </div>
    <div class="col-6 d-flex justify-content-center align-items-center text-center" id="descripcion">
        <p>Emborrachate con nosotros!</p>
    </div>
    `,
    script: ()=>{ //creamos un script
        console.log('FormPedido')//hacemos un console.log de formPedido
        //creamos una variable html con un option para que se muestre un texto en el desplegable 
        var html=`
        <option >Elige con que te vas a emborrachar</option>
        `
        cervezas.forEach(cerveza => {//recorremos el array cervezas con un foreach
            html+=`<option value="${cerveza.id}">${cerveza.nombre}</option>`//añadimos dentro del la variable html las opciones con su nombre de la cerveza habiendo cogiendo el valor anteriormente del id de la cerveza que elegimos
        });
        const select = document.querySelector("#cervezas")//creamos una constante select que apunta al label con id cervezas
        select.innerHTML = html //inyectamos los datos dentro de la variable html dentro de la label cervezas para poder seleccionar la que quieras de dentro de la base de datos
        select.addEventListener("change", (event) => { //creamos un evento en el cual cuando se detecte un cambio haga lo siguiente:
            const posicionCerveza = cervezas.findIndex(cerveza=>cerveza.id == event.target.value) //creamos una constante con nombre posicionCerveza que busque con un findIndex dentro de la base dedatos  el ID
            //seguidamente creamos una variable html y con ayuda de bootstrap creamos una "card" en los cuales pondremos los datos de la base dedatos segun se cambie de cerveza en los options ademas de la imagen
            const html=`
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                   <h3 class="card-text">${cervezas[posicionCerveza].nombre}</h3> 
                    <p class="card-text">${cervezas[posicionCerveza].descripcion}</p>
                </div>
                <img src="${cervezas[posicionCerveza].imagen}" class="card-img-bottom w-50 h-50 align-items-center" alt="cervezaImagen">
            </div>
            `
            //crearemos una constante llamada descripcion que sera de la base dedatos y la inyectaremos en la constante html junto a la "card"
            const descripcion = document.querySelector("#descripcion")
            descripcion.innerHTML = html
        });
    }
}