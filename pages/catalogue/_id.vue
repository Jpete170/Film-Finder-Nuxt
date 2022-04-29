<template>
    <div>
        <div class="">
          <b-button @click="$router.back()" variant="secondary">Go Back</b-button>  
        </div>
        <div class="container">
            <h1 class="text-center">{{show.title}}</h1>
            <div>
                <p>Type: {{show.type}}</p>
                <p>Director: {{show.director}}</p>
                <p>Cast: {{show.cast}}</p>
                <p>Country: {{show.country}}</p>
                <p>Date added to service: {{show.date_added}}</p>
                <p>Year released: {{show.release_year}}</p>
                <p>Rating: {{show.rating}}</p>
                <p>Duration: {{show.duration}}</p>
                <p>Genres: {{show.listed_in}}</p>
                <p>Description: {{show.description}}</p>
            </div>
            <div>
                <h2>More Information</h2>
                <p>More information about this {{show.type}} can be found below:</p>
                <p>(Links may not properly work)</p>
                <ul>
                    <li><a :href='`https://www.google.com.au/search?q=${show.title} ${show.type}`' target="blank">Google</a></li>
                    <li>Or try <a :href='`https://en.wikipedia.org/wiki/${show.title}`' target="blank">Wikipedia</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    h1 {
        text-decoration: underline;
    }
</style>

<script>
    import {axiosGet} from '@/plugins/api'
    export default{
        data(){
            return{
                show: [],
            }
        },
       async fetch(){
           this.show = await axiosGet(`/films/shows/${this.$route.params.id}`).then(function(res){
            return res.data
        })

       }
    

    }
</script>
