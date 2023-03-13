export const home ={//exportamos una constante con un template en el cual habra un titulo y el contenido del home ademas de un script con un console.log
    template: `      
    <div class="text-center" id="titulo">
    <div><h1>Birras y tapas</h1></div>
    </div>
    <div class="container-fluid">
        <div class="row border m-5 shadow p-3 mb-5 rounded pt-5" id="pedidos">
        </div>
        <div class="row border m-5 shadow p-3 mb-5 rounded pt-5">
            <div class="col-12" id="tabla">
                <p>Esto es lo que has tomado ya ...</p>
            </div>
        </div>
    </div> `,
    script: ()=>{
        console.log('Home')
    }
}