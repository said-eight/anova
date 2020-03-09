<template>
  <div id="app">
 
     <!-- agregar componente HEADER EN APP DIRECTO y  tomar propiedad imagen de cada vista 
     segun la imagen es el componente que se manda a llamar en el header 
     cerrar etiqueta en la vista -->
    <header>
<div class="container-fluid"  id="header" :style="{ 'background-image': 'url(img/header/' + $route.name + '.png)' }">
<div class="container" style="max-width:1200px"> 
  <b-navbar bg-transparent toggleable="xl" class="px-auto" type="dark" id="nav">
    <b-navbar-brand :to="{name: 'Home'}" ><img src="img/logoo blanco.png"  id="logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
      <b-navbar-nav  >
   
        <b-nav-item class="pl-3" :to="{name: 'Puntodeventa'}"  > PUNTO DE VENTA</b-nav-item>
        <b-nav-item  class="pl-3" :to="{name: 'Empresarial' }"> EMPRESARIAL</b-nav-item>
         <b-nav-item class="pl-3" :to="{name: 'Hardware'}" >HARDWARE</b-nav-item>
         <b-nav-item class="pl-3"   :to="{name: 'Precios'}"  >PRECIOS</b-nav-item>
         <b-nav-item class="pl-3" :to="{name: 'Soporte'}" >SOPORTE</b-nav-item>
      
          <b-button pill   size="md" id="buttonwha" variant="light" class="my-2 my-sm-0 ml-3" type="submit">
            <i class="fab fa-whatsapp"></i> ¡Escríbenos! </b-button>
     
        <b-nav-item><i class="fas fa-sign-in-alt pl-3"></i> Acceder a ANOVA</b-nav-item>



      </b-navbar-nav>

      
    </b-collapse>
  </b-navbar>

    <headercomp> </headercomp>
           </div> 
 


</div>
    </header>
<div  id="body"  >  

    <router-view/>
</div>
    <div class="container-fluid"  id="footer" >


            <footercomp></footercomp>

           </div>
     
      </div>
</template>
<script>
import  {mapState} from 'vuex';
import  {mapMutations} from 'vuex';

import headercomp from '@/components/headercomp.vue'
import footercomp from '@/components/footercomp.vue'


export default {
  name: 'app',
  data(){
    return {
      po: 0
    }
  },
 
  components:{
    headercomp,
    footercomp

  },
  computed:{
    ...mapState(['rutas','id'])
  },
  methods:
  { 
    ...mapMutations(['modificarid'])


    }
  }
  
  
</script>

