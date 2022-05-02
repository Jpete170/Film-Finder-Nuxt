<template>
  <div class="container">
    <div class='text-center'>
      <h1 class="">Film Finder</h1>
    </div>
    <div id="search">
      <Search/>
      <br/>
    </div>

    <div class="" id="movies">
      <h2>Movies</h2>
      <div class="" v-if="!movies_loaded">
        <b-spinner label="spinning"></b-spinner>
      </div>
      <div class="" v-if="movies_loaded">
        <b-row class="b-row" align-h="center" cols="3"><!--Grid Row-->
            <div v-for="movie in movies" :key="movie.show_id">
              <b-col class=""><!--Grid Column-->
                <b-card
                :title=movie.title
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
                >
                  <b-card-text>
                    <p>Rating: {{movie.rating}}</p>
                    <p>{{movie.description}}</p>
                  </b-card-text>
                  <b-button :href="`/catalogue/`+movie.show_id" variant="primary">Go To Page</b-button>
                </b-card>
              </b-col>
            </div>
          </b-row>
      </div> <!--End v-if-->

    </div>

    <div class="" id="tv-shows">
      <h2>TV Shows</h2>

      <div class="" v-if="!shows_loaded">
        <b-spinner label="spinning" />
      </div>
      <div class="" v-if="shows_loaded">
        <b-row class="b-row" align-h="center" cols="3"><!--Grid Row-->
            <div v-for="show in shows" :key="show.show_id">
              <b-col class=""><!--Grid Column-->
                <b-card
                :title=show.title
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
                >
                  <b-card-text>
                    <p>Rating: {{show.rating}}</p>
                    <p>{{show.description}}</p>
                  </b-card-text>
                  <b-button :href="`/catalogue/`+show.show_id" variant="primary">Go To Page</b-button>
                </b-card>
              </b-col>
            </div>
          
        </b-row>
      </div> <!--End v-if-->

    </div>
    
  </div>
</template>

<style>
  h1{
    text-decoration: underline;
  }
</style>

<script>
  import {axiosGet} from '@/plugins/api'
  export default {
    data() {
      return {
        movies: [],
        shows: [],
        movies_loaded: false,
        shows_loaded: false,
      }
    },
    async fetch() {
      
      //this.show = await fetch('http://127.0.0.1:8000/api/films/shows/s10').then(res=> res.json())
      this.movies = await axiosGet('/films/Movie?limit=6').then(function(res){
        return res.data
      })
      this.movies_loaded = true;

      this.shows = await axiosGet('/films/TV_Show?limit=6').then(function(res){
        return res.data
      })
      this.shows_loaded = true;
    },
 
  }
</script>
