
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { header } from './componentes/header'

import { home } from './vistas/home'

import { pedidos } from './componentes/formPedido'
import { tablaCervezas} from './componentes/tablaCervezas'


document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = home.template
home.script()
document.querySelector('#pedidos').innerHTML = pedidos.template
pedidos.script()
document.querySelector('#tabla').innerHTML = tablaCervezas.template
tablaCervezas.script()


