<template>
  <div>
    <main-section :title="'Cобытие'" >

      <div slot="body"> 
        <h1>1</h1>
      </div>
    </main-section> 
  </div>
</template>

<script>
import MainSectionComponentVue from '../Shared/MainSectionComponent.vue';
export default {
    props:['path','id'],
    components: {
      mainSection: MainSectionComponentVue,
    },
}
</script>

<style>
    
</style>