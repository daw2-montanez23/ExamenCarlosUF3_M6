import { cervezas } from "../bd"

export const tablaCervezas ={
    template:`
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Cervezas</th>
            <th scope="col">Cantidad</th>
            
            </tr>
            <tr>
            <td>${cervezas.nombre}</td>
            <td></td>
            <td class="px-5"><button data-id="${cervezas.id}" type="button" class="btn btn-danger eliminar">Eliminar</button></td>
            <td class="px-5"><button data-id="${cervezas.id}" type="button" class="btn btn-warning editar"  data-bs-toggle="modal" data-bs-target="#exampleModal">Editar Pedido</button></td>
            </tr>
        </thead>
        <tbody id="cuerpoTabla">
        </tbody>
        </table>
        `,
    script: ()=>{
        console.log('tablaCervezas')
        
    }
}
 