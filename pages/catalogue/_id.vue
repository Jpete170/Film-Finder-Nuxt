<template>
    <div>
        {{show.title}}
    </div>
</template>

<style>

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
