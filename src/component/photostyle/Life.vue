<template>
    <div class="outer_box">
        <v-life></v-life>
    </div>
</template>
<script>
import Life1 from './photo/Life1.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        'v-life':Life1
    }
    
}
</script>
<style lang="scss" scoped>
// .outer_box{
//     background-color: #0B0C11;
//     width: 100%;
//     height: 500px;
// }
</style>