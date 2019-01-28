<template>
    <div>blogDetail{{$route.params.id}}<vue-markdown v-highlight :source="content"></vue-markdown>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown';
import README from '../../README.md'
export default {
    name:'',
    components:{
        VueMarkdown
    },
    data(){
        return{
           content:README    
        }
    }
}
</script>
<style>
   code{
       
   }
</style>

