
// Import our custom CSS
import './scss/styles.scss' 

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//importamos las constantes creadas en los templates de los js 

import { header } from './componentes/header'

import { home } from './vistas/home'

import { pedidos } from './componentes/formPedido'
import { tablaCervezas} from './componentes/tablaCervezas'


//creamos un documentqueryselector que apunte a la etiqueta header e inyecte ahi el contenido del template de header
document.querySelector('header').innerHTML = header.template
//llamamos al script de header
header.script()

//creamos un documentqueryselector que apunte a la etiqueta main e inyecte ahi el contenido del template de home
document.querySelector('main').innerHTML = home.template
//llamamos al script de home
home.script()

//creamos un documentqueryselector que apunte al id tabla e inyecte ahi el contenido del template de tablaCervezas
document.querySelector('#tabla').innerHTML = tablaCervezas.template
//llamamos al script de tablaCervezas
tablaCervezas.script()

//creamos un documentqueryselector que apunte al id pedidos e inyecte ahi el contenido del template de pedidos
document.querySelector('#pedidos').innerHTML = pedidos.template
//llamamos al script de pedidos
pedidos.script()



