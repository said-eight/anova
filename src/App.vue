<template>
  <div id="app">
  
     <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>



      </a-layout-header>
      
      <a-layout-content>  
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color:rgba(255,255,255,0);">
  <a class="navbar-brand" href="#"><img src="../src/assets/logoo blanco.png" id="logo"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"> ANOVA PUNTO DE VENTA<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ANOVA EMPRESARIAL</a>
      </li>
     <li class="nav-item">
        <a class="nav-link" href="#">HARDWARE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PRECIOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SOPORTE</a>
      </li>
        <li class="nav-item">
       <a class="nav-link"> 
   <a-popover placement="bottom">
        <template slot="content">
           <center>
          <span><a-icon type="phone" />(33) 20 14 89 95 </span> </center>
        </template>
     
        <a-button><a-icon type="customer-service" />¡LLámanos!</a-button>
      </a-popover>
       </a>
      </li>
    </ul>
    
  </div>
</nav>
      
<!-- 
         <a-card title="" style="width:100%;background-color:rgba(255,255,255,0);">
    <a-card-grid style="width:50%;">
      <p id="p1"><a-icon type="ellipsis" />Controlar tu restaurante<br>nunca fue tan facil</p>
     

      </a-card-grid>
    <a-card-grid style="width:50%;"><img
      alt="example"
      src="compu.png"
      
    /></a-card-grid>

          </a-card>
         -->
    <a-row>
      <a-col :span="12"><p id="p1"><a-icon type="ellipsis" />Controlar tu restaurante nunca fue tan facil</p>
</a-col>
      <a-col :span="12"><img
      alt="example"
      src="compu.png"
      
    /></a-col>
    </a-row>
          
          </a-layout-content>

          
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
     </div>

  </div>
</template>

<script>

