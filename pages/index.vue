<template>
  <div class="container">
    <div class='text-center'>
      <h1 class="">Film Finder</h1>
    </div>
    <div>
      <p>Welcome to Film Finder! A website that allows to search a variety of Movie and TV Shows available from across the globe.</p>
      <p>The Titles listed below is just a small selection of items available to browse.</p>
    </div>
    <div id="search">
      <Search/>
      <br/>
    </div>

    <div class="" id="movies">
      <h2 class="text-center">Movies</h2>
      <div class="" v-if="!movies_loaded">
        <b-spinner label=""></b-spinner>
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
            <b-button href="/movies" variant="primary" >View more Movies</b-button>
          </b-row>
      </div> <!--End v-if-->
      
    </div>
    <br/>
    <div class="" id="tv-shows">
      <h2 class="text-center">TV Shows</h2>

      <div class="" v-if="!shows_loaded">
        <b-spinner label="" />
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
          <b-button href="/shows" variant="primary">View more TV Shows</b-button>
        </b-row>
      </div> <!--End v-if-->
      
    </div>

    <!--The below <br> creates a space between the previous element and the footer element -->
    <br/>
  </div>
</template>

<style>
  h1, h2{
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
