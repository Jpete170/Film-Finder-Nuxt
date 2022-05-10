<template>
    <div class="container">
        <div>
            <h1 class="text-center">Search Results</h1>
        </div>
        <div>
            <Search/>
            <b-form-group label="Limit Page Items" id="radio-filter">
                <b-container>
                    <b-row>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" value='5' selected>5 Items</b-form-radio> 
                        </b-col>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" value='10'>10 Items</b-form-radio>  
                        </b-col>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" value='15'>15 Items</b-form-radio>
                        </b-col>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" value='20'>20 Items</b-form-radio>
                        </b-col>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" value="10000">Show All</b-form-radio>
                        </b-col>
                        
                        <b-col>
                          <b-button @click="refresh">Refresh Results</b-button>  
                        </b-col>
                    </b-row>
                </b-container>
            </b-form-group>
            
        </div>
        <br/>
        <div>
            <h2>{{this.limit}} Results for "{{this.$route.query.query}}" in "{{this.$route.query.column}}"</h2>
            <div v-if="!this.results_loaded">
                <b-spinner label="" />
            </div>
            <div v-if="this.error == 'false'">
                <b-row align-h="center" cols="3">
                    <div v-for="r in results" :key=r.show_id>
                        <b-col>
                            <b-card
                            :title=r.title
                            tag="article"
                            style="max-width: 20rem"
                            class="mb-2"
                            >
                                <b-card-text>
                                    <p>Rating: {{r.rating}}</p>
                                    <p>{{r.description}}</p>
                                </b-card-text>
                                <b-button :href="`/catalogue/`+r.show_id" variant="primary">Go To Page</b-button>
                            </b-card>
                        </b-col>
                    </div>
                </b-row>
            </div>
            <div v-else-if="this.error == 'true'">
                <p>An Error Has Occurred</p>
                <p>{{this.errorMessage}}</p>
            </div>
        </div>
    </div>
</template>

<style>
    
    h1, h2{
        text-decoration: underline;
    }
</style>

<script>
import { axiosGet } from '../plugins/api'
    export default{
        data(){
            return{
                column: this.$route.query.column,
                query: this.$route.query.query,
                limit: this.$route.query.limit,
                results: [],
                error: 'false',
                errorMessage: [],
                results_loaded: false,
            }
        },
        async fetch(){
            //Fill in the different elements with information from the URL
            //this.column = ;
            //this.query = ;
            //this.limit = ;
            //
            
            try {
                if(this.$route.query.column == "null"){
                    this.results = await axiosGet('/films').then(function(res){
                        return res.data
                    })
                    this.results_loaded = true;
                } else {
                   this.results = await axiosGet(`/films/search?column=${this.column}&query=${this.query}&limit=${this.limit}`).then(function(res){
                    //console.log(res)
                    
                    return res.data
                    }) 
                    this.results_loaded = true;
                }
                
            } catch(error){
                this.error = 'true';
                this.errorMessage = error
                console.log(error)
            }
            
        },
         methods:{
            refresh(){
                this.$nuxt.refresh()
            }
        },
        
    }
</script>
