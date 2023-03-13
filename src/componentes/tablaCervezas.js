import { cervezas } from "../bd" //importamos cervezas de bd
import { pedidos } from "./formPedido" //importamos pedidos de formPedido

export const tablaCervezas ={ //creo una tabla con unos th en los tr y un tbody donde inyectaremos los datos recibidos del js formPedido
    template:`
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Cervezas</th>
            <th scope="col">Cantidad</th>
            </tr>
        </thead>
        <tbody id="cuerpoTabla">
        </tbody>
        </table>
        `,
    script: ()=>{ //creamos un script
        console.log('tablaCervezas')//lo mostramos por consola
        
        const main = document.querySelector('main') //creamos una constante que apunte al main
        const formularioPedido = document.querySelector('#enviar') //creamos otra cpnstante que apunte al id enviar del js formPedido

        main.addEventListener("click",(event)=>{  //creamos el evento que cuando detecte un click en el el main exactamente en el id= enviar que pase lo siguiente:
            if(event.target.classList.contains('enviar')){

                event.preventDefault();//event prevent default para que no se actualize la pagina 
            
                if(formularioPedido.checkValidity()){ //verificamos que la constante tiene restricciones y que las cumple
                    const seleccionado = document.querySelector('#cervezas') //creamos la constante que apunta al id = cervezas que se encuentra en el label dentro del js formPedido
                    
                    const cantidad = document.querySelector('cantidad').value // creamos la constante cantidad que detecta el valor que le hemos puesto en la label cantidad del js formPedido
                    const table = document.getElementById("#cuerpoTabla");// creamos constante table que escoge el elemento por el id en el id cuerpoTabla
                    const tr = document.createElement("tr"); //creamos una constante en la cual nos creara un tr
                    //Aqui lo que hacemos es crear un innerHTML de la constante tr en la cual solo esta el dato <tr>, hacemos que se creen <td> con los datos necesaios ademas de los botones finalmente cerramos el tr
                    tr.innerHTML = `   
                        <td> ${cerveza}</td>
                        <td> ${cantidad}</td>
                        <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                        <td><button type="button" class="btn btn-warning">Editar Pedido</button></td>
                        </tr>
                    `
                    table.appendChild(tr);//con appenChild añadiremos a la abla el tr generado anteriormente
                    console.log("pedido hecho!!")//hacemos un consol.log conforme se ha realizado el pedido correctamente y se ha añadido a la tabla
                }
            }
        })
    }
}
 