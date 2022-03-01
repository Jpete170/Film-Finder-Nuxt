<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">Nuxt App</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item><NuxtLink to="/about" class="text-white">About</NuxtLink></b-nav-item>
                <b-nav-item>Disabled</b-nav-item>
            </b-navbar-nav>

            </b-collapse>
        </b-navbar>
</div>
</template>

<script>
    export default{
        name: "Navbar"
    }
</script>