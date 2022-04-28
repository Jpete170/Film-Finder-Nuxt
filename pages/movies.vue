<template>
    <div class="container">
        <h1>Movie Catalogue</h1>
        <div>
            <b-form-group label="Radio filters">
                <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='5'>5</b-form-radio>
                <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='10'>10</b-form-radio>
            </b-form-group>
            <button @click="refresh">Refresh Results</button>
        </div>
        <div>
            <ol>
                <li v-for="m in movies" :key='m.show_id'>
                    {{m.title}}
                </li>
            </ol>
        </div>
    </div>
    
</template>

<style>

</style>

<script>
    import {axiosGet} from '../plugins/api'
    export default{
        data(){
            return {
                movies:[],
                limit: '', //To be dynamically updated
            }
        },
        async fetch(){
            this.movies = await axiosGet('films/Movie?limit='+this.limit).then(function(res){
                return res.data
            })
        },
         methods:{
            refresh(){
                this.$nuxt.refresh()
            }
        }
    }
</script>
