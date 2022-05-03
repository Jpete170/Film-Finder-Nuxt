<template>
    <div class="container">
        <div>
            <h1 class="text-center">Search Results</h1>
        </div>
        <div>
            <Search/>
        </div>
        <br/>
        <div>
            <h2>{{this.limit}} Results for "{{this.$route.query.query}}" in "{{this.$route.query.column}}"</h2>
            <div>
                <b-row align-h="center">
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
                column: '',
                query: '',
                limit: '',
                results: [],
            }
        },
        async fetch(){
            //Fill in the different elements with information from the URL
            this.column = this.$route.query.column;
            this.query = this.$route.query.query;
            this.limit = this.$route.query.limit;
            //
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
