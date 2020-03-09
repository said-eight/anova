<template>
  <div class="container" style="max-width:1200px"> 
  <b-navbar bg-transparent toggleable="xl" type="dark" id="nav">
    <b-navbar-brand href="Home"  @click="modificarid(0)"><img src="img/logoo blanco.png"  id="logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
      <b-navbar-nav  >
   <b-tabs>
     <b-nav-item @click="modificarid(0)" :to="{name: 'empresarial'}"  >
      <b-tab title="ANOVA PUNTO DE VENTA" active>
                <b-nav-item><a-icon size="large" type="export" id="icon" /> Acceder a ANOVA</b-nav-item>

      </b-tab>
        </b-nav-item>
       <b-nav-item @click="modificarid(0)" :to="{name: 'Puntodeventa'}"  >
      <b-tab title="ANOVA PUNTO DE VENTA" active>
                <b-nav-item><a-icon size="large" type="export" id="icon" /> Acceder a ANOVA</b-nav-item>

      </b-tab>
        </b-nav-item>
   </b-tabs>

      </b-navbar-nav>

      
    </b-collapse>
  </b-navbar>

           </div> 
 
</template>

<script>
  export default {
      name : 'empresarial',
  
  }
</script>