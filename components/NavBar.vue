<template>
    <div class="">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">Film Finder</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="">
                <b-nav-item><NuxtLink to="/about" class="text-white">About</NuxtLink></b-nav-item>
                <b-nav-item><NuxtLink to="/movies" class="text-white">Movies</NuxtLink></b-nav-item>
                <b-nav-item><NuxtLink to="/shows" class="text-white">Shows</NuxtLink></b-nav-item>
                <b-nav-item><NuxtLink to="/search" class="text-white">Search</NuxtLink></b-nav-item>
            </b-navbar-nav>

            </b-collapse>
        </b-navbar>
</div>
</template>
<style>
    
</style>

<script>
    export default{
        name: "Navbar"
    }
</script>