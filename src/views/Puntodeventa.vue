<template>
<div>

<pc1_analiza></pc1_analiza>
<br>
<br>
<br>
<br>
<br>
<br>
<pc2_protege></pc2_protege>
<br>
<br>
<br>
<br>
<br>
<br>
<pc3_agiliza></pc3_agiliza>
<br>
<br>
<br>
<br>
<br>
<br>
<pc4_manda></pc4_manda>
<br>
<br>
<br>
<br>
<br>
<br>
<pc5_tuinfo></pc5_tuinfo>
<br>
<br>
<br>
<br>
<br>
<br>
<pc6_reportes></pc6_reportes>
<br>
<br>
<br>
<br>
<br>
<br>
<pc7_mejora></pc7_mejora>



</div>
</template>
<script>

import pc1_analiza from '@/components/punto_components/pc1_analiza.vue'
import pc2_protege from '@/components/punto_components/pc2_protege.vue'
import pc3_agiliza from '@/components/punto_components/pc3_agiliza.vue'
import pc4_manda from '@/components/punto_components/pc4_manda.vue'
import pc5_tuinfo from '@/components/punto_components/pc5_tuinfo.vue'
import pc6_reportes from '@/components/punto_components/pc6_reportes.vue'
import pc7_mejora from '@/components/punto_components/pc7_mejora.vue'




export default {
  name: 'Puntodeventa',
  components: {
    pc1_analiza,
    pc2_protege,
    pc3_agiliza,
    pc4_manda,
    pc5_tuinfo,
    pc6_reportes,
    pc7_mejora

  }
 
}


</script>
