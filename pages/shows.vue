<template>
    <div class="container">
        <h1>TV Show Catalogue</h1>
        <div class="border border-secondary p-2">
            <b-form-group label="Filter Amount Shown" id="radio-filter">
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
                    </b-row>
                </b-container>
                
            </b-form-group>
            <br/>
            
            <br />
            <button @click="refresh">Refresh Results</button>
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
