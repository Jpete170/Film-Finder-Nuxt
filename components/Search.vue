<template>
    <div class="border border-secondary p-4">
        <h2>Search</h2>
        <div>
            <!--Insert explanation about the Search function here eventually -->
        </div>
        <br/>
        <div>
            <b-row>
                <b-col>
                  <b-form-select v-model="selected" :options="columns"/>  
                </b-col>
                <b-col>
                   <b-form-input v-model="query" placeholder="Enter what you want to search for." /> 
                </b-col>
                <b-col v-for="type in types" :key="type">
                    <b-form-input v-model="limit" placeholder="Enter the amount of results you want." :id="`type-${type}`" :type="type"/> 
                </b-col>
                <div>
                   <b-button variant="primary" :href='`/search?column=${this.selected}&query=${this.query}&limit=${this.limit}`'>Search</b-button>  
                </div>
                
            </b-row>
            
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return{
                columns:[
                    {value: null, text:'Select an Option'},
                    {value: 'type', text:'Type of Media (Film or TV Show)'},
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
                query: '',
                limit: '',
                selected: null,
                types:['number']
            }
        },
        async fetch(){

        },
    }
</script>