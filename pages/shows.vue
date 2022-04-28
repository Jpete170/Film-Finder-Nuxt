<template>
    <div class="container">
        <h1>TV Show Catalogue</h1>
        <div class="">
            <b-form-group label="Radio filters" id="radio-filter">
                <b-container>
                    <b-row>
                    <b-col md="auto">
                        <b-form-radio v-model="limit" value='5' selected>5</b-form-radio> 
                    </b-col>
                    <b-col md="auto">
                        <b-form-radio v-model="limit" value='10'>10</b-form-radio>  
                    </b-col>
                    <b-col md="auto">
                        <b-form-radio v-model="limit" value='15'>15</b-form-radio>
                    </b-col>
                    <b-col md="auto">
                        <b-form-radio v-model="limit" value='20'>20</b-form-radio>
                    </b-col>
                </b-row>
                </b-container>
                
            </b-form-group>
            <button @click="refresh">Refresh Results</button>
        </div>
        <br/>
        <div>
            <ol>
                <li v-for="s in shows" :key='s.show_id'>
                    {{s.title}}, <a :href="`/catalogue/`+s.show_id" >Page</a>
                </li>
            </ol>
        </div>
    </div>
</template>

<style>
 h1 {
     text-decoration: underline;
 }
</style>

<script>
    import {axiosGet} from '../plugins/api'
    export default{
        data(){
            return {
                shows: [],
                limit: '5', //To be dynamically updated
            }
        },
        async fetch(){
            this.shows = await axiosGet('films/TV Show?limit='+this.limit).then(function(res){
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
