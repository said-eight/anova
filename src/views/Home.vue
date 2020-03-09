<template>
  <div class="home">
<hc1></hc1>
<br>
<hc2></hc2>
<br>

<hc3></hc3>
<br>

<hc4></hc4>
<br>

<hc5></hc5>
<br>

<hc6></hc6>
<br>

<hc7></hc7>



  </div>
</template>

<script>


import hc1 from '@/components/home_components/hc1.vue'
import hc2 from '@/components/home_components/hc2.vue'
import hc3 from '@/components/home_components/hc3.vue'
import hc4 from '@/components/home_components/hc4.vue'
import hc5 from '@/components/home_components/hc5.vue'
import hc6 from '@/components/home_components/hc6.vue'
import hc7 from '@/components/home_components/hc7.vue'


export default {
  name: 'Home',
  components: {
    hc1,
    hc2,
    hc3,
    hc4, 
    hc5,
    hc6,
    hc7
  }
}


</script>
