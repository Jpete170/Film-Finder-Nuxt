<template>
    <div>
        <div class="">
          <b-button @click="$router.back()" variant="secondary">Go Back</b-button>  
        </div>
        <div class="container">
            <h1 class="text-center">{{show.title}}</h1>
            <div>
                <p>Type: {{show.type}}</p>

                <div>
                    <div v-if="show.director !=''">
                       <p>Director: {{show.director}}</p> 
                    </div>
                    <div v-else>
                        <p>No Director Information could be found</p>
                    </div>
                </div>
                
                <div>
                    <div v-if="show.cast != ''">
                        <p>Cast: {{show.cast}}</p>
                    </div>
                    <div v-else-if="show.cast == ''">
                        <p>No Cast information could be found.</p>
                    </div>   
                </div>

                <div>
                    <div v-if="show.country != ''">
                        <p>Country: {{show.country}}</p>
                    </div>
                    <div v-else-if="show.country == ''">
                        <p>No Country information could be found.</p>
                    </div>  
                </div>

                <div>
                   <div v-if="show.date_added != ''">
                        <p>Date Added: {{show.date_added}}</p>
                    </div>
                    <div v-else-if="show.date_added == ''">
                        <p>No date_added information could be found.</p>
                    </div>
                </div>

                <div> <!--No if statement needed-->
                   <div v-if="show.release_year != ''">
                        <p>Release Year: {{show.release_year}}</p>
                    </div>
                    <div v-else-if="show.release_year == ''">
                        <p>No release_year information could be found.</p>
                    </div>
                </div>

                <div>
                   <div v-if="show.rating != ''">
                        <p>Rating: {{show.rating}}</p>
                    </div>
                    <div v-else-if="show.rating == ''">
                        <p>No ratings could be found.</p>
                    </div> 
                </div>

                <div>
                   <div v-if="show.duration != ''">
                        <p>Duration: {{show.duration}}</p>
                    </div>
                    <div v-else-if="show.duration == ''">
                        <p>No duration could be found.</p>
                    </div>
                </div>

                <div> 
                  <div v-if="show.listed_in != ''">
                        <p>Genres: {{show.listed_in}}</p>
                    </div>
                    <div v-else-if="show.listed_in == ''">
                        <p>No Genres could be found.</p>
                    </div> 
                </div>

                <div>
                   <p>Description: {{show.description}}</p> 
                   <div v-if="show.description != ''">
                        <p>Description: {{show.description}}</p>
                    </div>
                    <div v-else-if="show.description == ''">
                        <p>No Description could be found.</p>
                    </div>
                </div>
                
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
