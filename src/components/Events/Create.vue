<template>
  <div>
      <main-section :title="'Cобытие'" >

      <div slot="body"> 
        <div class="form-group" :class="{'has-error': $v.event.title.$invalid && $v.event.title.$dirty}">
        <label >Иконка</label>
        <input type="text" v-model="$v.event.title.$model" class="form-control"  >
        <div v-if="!$v.event.title.required && $v.event.title.$dirty" class="help-block">поле обязательно</div>
    </div>
      </div>
     
    
    </main-section>
  </div>
</template>

<script>

import { required,  } from 'vuelidate/lib/validators';

export default {
    data(){
        return {
            event:{
                title:'',
                city:'',
                data:'',
                time:'',

            }
        }
    },
    validations: {
        event:{
            event: {required},
            // Text: {required},
        }
  }
}
</script>

<style>

</style>