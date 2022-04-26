<template>
    <div class="container">
        <div class="text-center">
            <h1>About the Site</h1>
        </div>

        <div>
            <h2>About</h2>
            <p>This website was created as primarily as a way to learn both the <a href="https://nuxtjs.org/">Nuxt</a> and <a href="https://fastapi.tiangolo.com/">FastAPI</a> frameworks.</p>
            <p>Currently, this Nuxt app focuses on the displaying and querying of information from a Python FastAPI backend, using <a href="https://axios-http.com/docs/intro">Axios</a>.</p>

            <p>The overall "theme" for this website is a "Movie and TV Show database" (hence the name 'Film Finder'), where the website displays a any number of movies or tv shows matching user generated criteria.</p>
        </div>

        <div id="Github-Repos">
            <h3>GitHub Repositories</h3>
            <b-row>
                <b-col>
                    <b-card
                    title="Nuxt App Repository"
                    >
                        <b-card-text>
                            The repository for the front-end Nuxt app.
                        </b-card-text>
                        <div class="text-right">
                            <b-button href="https://github.com/Jpete170/Film-Finder-Nuxt" variant="primary">Go to Repository</b-button>
                        </div>                    
                    </b-card>
                </b-col>

                <b-col>
                    <b-card
                    title="API Repository"
                    >
                        <b-card-text>
                            The repository for the Python API using the FastAPI Framework
                        </b-card-text>
                        <div class="text-right">
                            <b-button href="https://github.com/Jpete170/fastAPI-project" variant="primary">Go to Repository</b-button>
                        </div>
                        
                    </b-card>
                </b-col>
            </b-row>
        </div>
        
        <br />
    </div>
</template>
<style>
    h1, h2, h3{
        text-decoration: underline;
    }
</style>

<script>
    export default{
        name: 'About'
    }
</script>