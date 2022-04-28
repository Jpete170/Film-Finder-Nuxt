<template>
    <div class="container">
        <h1 class="text-center">Movie Catalogue</h1>
        <div class="">
            <b-form-group label="Radio filters" id="radio-filter">
                <b-container>
                    <b-row>
                    <b-col md="auto">
                        <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='5' selected>5</b-form-radio> 
                    </b-col>
                    <b-col md="auto">
                        <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='10'>10</b-form-radio>  
                    </b-col>
                    <b-col md="auto">
                        <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='15'>15</b-form-radio>
                    </b-col>
                    <b-col md="auto">
                        <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='20'>20</b-form-radio>
                    </b-col>
                </b-row>
                </b-container>
                
            </b-form-group>
            <button @click="refresh">Refresh Results</button>
        </div>
        <br/>
        <div>
            <ol>
                <li v-for="m in movies" :key='m.show_id'>
                    {{m.title}}, <a :href="`/catalogue/`+m.show_id" >Page</a>
                </li>
            </ol>
        </div>
    </div>
    
</template>

<style>
    h1{
        text-decoration: underline;
    }
</style>

<script>
    import {axiosGet} from '../plugins/api'
    export default{
        data(){
            return {
                movies:[],
                limit: '5', //To be dynamically updated
            }
        },
        async fetch(){
            this.movies = await axiosGet('films/Movie?limit='+this.limit).then(function(res){
                console.log(res.data)
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
