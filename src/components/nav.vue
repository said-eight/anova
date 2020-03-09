<template>
    <b-navbar bg-transparent toggleable="xl" type="dark" id="nav">
    <b-navbar-brand href="Home" ><img src="img/logoo blanco.png"  id="logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
      <b-navbar-nav  >
   
        <b-nav-item :to="{name: 'Puntodeventa'}" >ANOVA PUNTO DE VENTA</b-nav-item>
        <b-nav-item :to="{name: 'Empresarial'}">ANOVA EMPRESARIAL</b-nav-item>
         <b-nav-item :to="{name: 'Hardware'}">HARDWARE</b-nav-item>
         <b-nav-item :to="{name: 'Precio'}">PRECIOS</b-nav-item>
         <b-nav-item :to="{name: 'Soporte'}">SOPORTE</b-nav-item>
         <b-nav-item>
                 <a-popover placement="bottom">
           <template slot="content">
           <center>
          <span><a-icon type="phone" />(33) 20 14 89 95 </span> </center>
        </template>
              <a-button ghost shape="round"><a-icon type="customer-service" />¡Llamanos!</a-button>
      </a-popover>
      </b-nav-item>
        <b-nav-item><a-icon size="large" type="export" id="icon" /> Acceder a ANOVA</b-nav-item>



      </b-navbar-nav>

      
    </b-collapse>
  </b-navbar>

  
</template>
<script>

export default {
    name: 'nav'
}
</script>
<style lang="less">


#nav {
  

    &.router-link-exact-active {
      color: #42b983;
    }
  }

</style>