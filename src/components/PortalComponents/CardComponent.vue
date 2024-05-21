<template>
    <div v-bind:class="props.class">
        <div class="content">
            <img :src="props.image" alt="Card Image">
            <div>
                <h3>{{ props.title }}</h3>
                <p>{{props.content}} </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps} from 'vue';

const props = defineProps({
    class:{
        type:String,
        require:true
    },
    image:{
        type: String,
        require: true
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    
})
</script>

<style scoped lang="scss">
    .content {
        display: flex;
    }

</style>


