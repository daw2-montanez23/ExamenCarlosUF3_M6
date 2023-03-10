import { cervezas } from "../bd";

export const pedidos ={
    template:`
    
    <div class="col-6" id="registrarPedido">
        <h1>Selecciona tu cerveza y haz tu pedido</h1>
        <form id="FormCervezas" class="needs-validation w-50 pt-2 ps-2 FormCervezas" novalidate>
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
    <div class="col-6 d-flex justify-content-center align-items-center text-center" id="descripcionCervezas">
        <p>Emborrachate con nosotros!</p>
    </div>
    `,
    script: ()=>{
        console.log('FormPedidos')

        var html=`
        <option >Elige tu birra</option>
        `
        cervezas.forEach(cerveza => {
            html+=`<option value="${cerveza.id}">${cerveza.nombre}</option>`
        });

        const select = document.querySelector("#cervezas")

        select.innerHTML = html 

        select.addEventListener("change", (event) => {
            //Busco la posicion donde esta el usuario
            const posicionCerveza = cervezas.findIndex(cerveza=>cerveza.id == event.target.value)

            const html=`
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                   <h3 class="card-text">${cervezas[posicionCerveza].nombre}</h3> 
                    <p class="card-text">${cervezas[posicionCerveza].descripcion}</p>
                </div>
                <img src="${cervezas[posicionCerveza].imagen}" class="card-img-bottom w-50 h-50 align-items-center" alt="FotoCerveza">
            </div>
            `
            const descripcion = document.querySelector("#descripcionCervezas")
            
            descripcion.innerHTML = html
        });

    }
}