<template>
<div class="container" style="max-width:1200px;">
    

<div class="card mb-3 mx-auto bg-transparent border-0 " v-if="$route.name === 'Home'">
  <div class="row no-gutters">
   
    <div class="col-md-6 mt-5">
      <div class="card-body   bg-transparent ">
        <ul class="list-group list-group-flush  ">
         
    <li class="list-group-item border-0 bg-transparent">
      
 <p class="card-text mt-4" id="p1">  Controlar tu restaurante nunca fue tan facil</p> 
 
      </li>
    <li class="list-group-item border-0  bg-transparent"> 
 <p class="card-text" id="p2" >Software inteligente punto de venta para RESTAURANTES, BARES Y CAFETERIAS</p>     
  <button class="button button1"> <i class="fas fa-play"> </i>  Ver video de anova</button>
    <button class="button button2 ml-2">Prueba gratis por 30 dias</button>
    </li>
        </ul>
 
      </div>
    </div>
     <div class="col-md-6 ">
      <img src="img/home_pantalla.png" class="card-img mt-3 " id="img" alt="..." >
    </div>
  </div>
</div>













 <div class="card mb-5 bg-transparent border-0  "  v-if="$route.name === 'Puntodeventa'" id="p1" >
  <div class="row ">
    <div class="col-md-6 ">
      <img src="img/Punto_laptop.png" class="card-img mt-3 " style="width:600px">
    </div>
    <div class="col-md-6">
      <div class="card-body mt-3 bg-transparent text-right ">
        <ul class="list-group list-group-flush bg-transparent mb-5 ">
         
    <li class="list-group-item border-0 bg-transparent ">
      
      <h5  class="card-title  " id="titulog">ANOVA Punto de venta</h5>
      </li>
    <li class="list-group-item border-0 bg-transparent   "> 
      <h5  class="card-title " id="parrafoc">
        <i class="fas fa-play"></i> Dejanos a nosotros la administración </h5>
            <h5  class="card-title " id="parrafoc">y  dedicale mas tiempo a tus clientes</h5>

    <button class="button button1 ml-2">Descargar demos</button>
        <button class="button button2 ml-2">Precios</button>

                </li>

<li class="list-group-item border-0 bg-transparent text-center  "> 
            <img src="img/Punto_cerebro.png" class="card-img mb-5" style="width:180px">

    </li>
            <li class="list-group-item border-0 bg-transparent   "> 
    </li>

        

      
        </ul>

      </div>
    </div>
  </div>
</div>

<div class="container border-0  bg-transparent" v-if="$route.name === 'Precios'" id="precios" style="max-width:600px;" >

<ul class="nav justify-content-center mb-1 " >
  <li class="nav-item" >
    <a class="nav-link active tab" :class="{tabclick: tab}" @click="activartab()"  href="#">ANOVA punto de venta</a>
  </li>
  <li class="nav-item">
    <a class="nav-link tab" :class="{tabclick: tab2}"  @click="activartab2()"  href="#">ANOVA empresarial </a>
  </li>
</ul>

<div class="container"  v-if="tab" style="width:400px;">
<div class="card-group border-0 "    >
  <div class="card border-0 " id="card">
    <img src="img/precios/precio_1.png" class="card-img-top rounded-top  " alt="...">
    <div class="card-body ">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card  border-0 b" id="card">
    <img src="img/precios/precio_2.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
   
 
 
</div>
</div>

<div class="card-group  " v-else-if="tab2">
  

<div class="row row-cols-2 row-cols-md-3 bg-transparent">
    <div class="col mb-4">
      
      <div class="card h-100  border-0" id="card">
               <img src="img/precios/modulos_1.png" class="card-img-top" alt="..." >
        <div class="card-body mx-auto">
          <p class="card-text" id="tituloc">BAR</p>        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100 border-0" id="card" >
       <img src="img/precios/modulo_2.png" class="card-img-top" alt="..." >
        <div class="card-body mx-auto">
          <p class="card-text" id="tituloc">CAFETERÍA</p>        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100  border-0" id="card" >
      <img src="img/precios/modulo_3.png" class="card-img-top" alt="..." >
        <div class="card-body mx-auto">
          <p class="card-text" id="tituloc">ALITAS</p>        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100 border-0" id="card" >
              <img src="img/precios/modulo_4.png" class="card-img-top" alt="..." >
        <div class="card-body mx-auto">
          <p class="card-text" id="tituloc">FOOD TRUCK</p>        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100  border-0" id="card" >
      <img src="img/precios/modulo_5.png" class="card-img-top" alt="..." >
        <div class="card-body mx-auto">
          <p class="card-text" id="tituloc">MARISCOS</p>        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100  border-0" id="card" >
              <img src="img/precios/modulo_6.png" class="card-img-top" alt="..." >

        <div class="card-body text-center">
          <p class="card-text " id="tituloc">TAQUERÍA</p>        </div>
      </div>
    </div>
  </div>


</div>

     </div>




</div>
</template>
<script>
import  {mapState} from 'vuex';

export default {
  name:'headercomp',
  data() {
      return {
        tab: true,
        tab2: false
      }
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-transparent', 'text-light']
        } else {
          return ['bg-transparent', 'text-light']
        }
      },
      activartab(){
       
          this.tab= true
          this.tab2=false

     
     },
      activartab2(){
       
          this.tab2= true
          this.tab=false

     
      }
      
    },
  computed:{
    ...mapState(['rutas','id'])
  },
}
</script>