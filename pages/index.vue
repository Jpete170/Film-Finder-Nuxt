<template>
  <div>
    
      <ul>
       <li>placeholder Text</li>
       
       <li>{{show2.title}}</li>
      </ul>
     
    </div>
  
</template>

<script>
  import {axiosGet} from '@/plugins/api'
  export default {
    data() {
      return {
        show: [],
        show2: []
      }
    },
    async fetch() {
      
      //this.show = await fetch('http://127.0.0.1:8000/api/films/shows/s10').then(res=> res.json())
      this.show2 = await axiosGet('/films/shows/s21').then(function(res){
        return res.data
      })
     
    },

  }
</script>