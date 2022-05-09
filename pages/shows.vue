<template>
    <div class="container">
        <h1 class="text-center">TV Show Catalogue</h1>

        <div id="Filter options" class="border border-secondary p-2">
            
            <div>
                <b-form-group label="Search Movies" id="search-filter">
                    <b-container>
                        <b-row>
                            <b-col>
                                <b-form-select v-model="selected" :options="columns"/>
                            </b-col>
                            <b-col>
                                <b-form-input v-model="query" placeholder="Enter what you want to search for." /> 
                            </b-col>
                        </b-row>
                        <br/>
                        <b-button @click="search">Search Movies</b-button>
                    </b-container>

                </b-form-group>
            </div>
            <b-form-group label="Limit Page Items" id="radio-filter">
                <b-container>
                    <b-row>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='5' selected>5 Items</b-form-radio> 
                        </b-col>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='10'>10 Items</b-form-radio>  
                        </b-col>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='15'>15 Items</b-form-radio>
                        </b-col>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" :aria-describedby="ariaDescribedBy" value='20'>20 Items</b-form-radio>
                        </b-col>
                        <b-col md="auto">
                            <b-form-radio v-model="limit" value="10000">Show All</b-form-radio>
                        </b-col>
                        <b-col v-for="type in types" :key="type">
                            <b-form-input v-model="limit" placeholder="Enter custom amount." :id="`type-${type}`" :type="type"/> 
                        </b-col>
                    </b-row>
                </b-container>
            </b-form-group>
            
            <b-button @click="refresh">Refresh Results</b-button>
            <br/>
        </div>

        <br/>
        <div>
            <b-row align-h="center" cols="3">
                <div v-for="s in shows" :key="s.show_id">
                    <b-col>
                        <b-card :title="s.title" tag="article" style="max-width: 20rem" class="mb-2">
                            <b-card-text>
                                <p>Rating: {{s.rating}}</p>
                                <p>{{s.description}}</p>
                            </b-card-text>
                            <b-button :href="`/catalogue/`+s.show_id" variant="primary">Go to Page</b-button>
                        </b-card>
                    </b-col>
                </div>
            </b-row>
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
                columns:[
                    {value: null, text:'Select an Option'},
                    {value: 'title', text:'Title'},
                    {value: 'director', text: 'Director'},
                    {value: 'cast', text:'Cast'},
                    {value: 'country', text:'Country'},
                    {value: 'date_added', text:'Date Added to Service'},
                    {value: 'release_year', text:'The Release Year for a Movie / TV Show'},
                    {value:'rating', text:'Rating'},
                    {value:'duration', text:'Duration'},
                    {value:'listed_in', text:'Genres'},
                    {value: 'description', text:'Description'}
                ],
                selected: null,
                types:['number'],
                query:'',
            }
        },
        async fetch(){
            this.shows = await axiosGet('films/TV Show?limit='+this.limit).then(function(res){
                //console.log(res.data)
                return res.data
            })
        },
         methods:{
            refresh(){
                this.$nuxt.refresh()
            },
            async search(){
                if(this.selected == null && this.query == ''){
                    this.shows = await axiosGet('films/TV Show?limit='+this.limit).then(function(res){
                        //console.log(res.data)
                        return res.data
                    })
                } else { 
                    this.shows = await axiosGet(`films/TV Show/filter?column=${this.selected}&query=${this.query}&limit=${this.limit}`).then(function(res){
                        return res.data
                    })
                }
            },
        }
    }
</script>
