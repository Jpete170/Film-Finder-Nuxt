<template>
  <div>
    
      <ul>
       <li>placeholder Text</li>
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
      /*
      this.show = await fetch('http://localhost:8000/api/films/shows/s10').then(res=> res.json())
      this.show2 = await axiosGet('http://localhost:8000/api/films/shows/s21').then(function(res){
        return res.data
      })*/
    },

  }
</script>