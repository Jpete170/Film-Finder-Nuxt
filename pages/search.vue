<template>
    <div>
        <p>Test Page</p>
    </div>
</template>

<style>

</style>

<script>
import { axiosGet } from '../plugins/api'
    export default{
        data(){
            return{
                column: '',
                query: '',
                limit: '',
                results: [],
            }
        },
        async fetch(){
            this.results = await axiosGet(`/films/search?column=${this.column}&query=${this.query}&limit=${this.limit}`).then(function(res){
                return res.data
            })
        },
         methods:{
            refresh(){
                this.$nuxt.refresh()
            }
        },
        
    }
</script>
