<template>
    <div class="container">
        <h1 class="text-center">Movie Catalogue</h1>
        <div class="border border-secondary p-2">
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
                </b-row>
                </b-container>
                
            </b-form-group>
            <br/>
            <button @click="refresh">Refresh Results</button>
        </div>
        <br/>
        <div class="">
            <b-row align-h="center" cols="3">
                <div v-for="m in movies" :key="m.show_id">
                    <b-col>
                        <b-card :title="m.title" tag="article" style="max-width: 20rem" class="mb-2">
                            <b-card-text>
                                <p>Rating: {{m.rating}}</p>
                                <p>{{m.description}}</p>
                            </b-card-text>
                            <b-button :href="`/catalogue/`+m.show_id" variant="primary">Go to Page</b-button>
                        </b-card>
                    </b-col>
                </div>
            </b-row>
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
