import Vue from 'vue'
import Router from 'vue-router'
import Contacto from './components/contacto'
import SobreMi from './components/sobremi'
import Inicio from './components/inicio'
import UltimoPost from './components/ultimopost'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [      
        {
            path: '/inicio',            
            component: Inicio
        }, 
        {
            path: '/contacto',            
            component: Contacto
        },
        {
            path: '/sobremi',            
            component: SobreMi
        },
        {
            path: '/ultimopost',            
            component: UltimoPost
        }
    ]
})
