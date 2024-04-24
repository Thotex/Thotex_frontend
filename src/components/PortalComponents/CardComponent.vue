<template>

<body>
        <div v-bind:class="props.class">
            <div class="content">
                <img :src="props.image" alt="Card Image">
                <h3>{{ props.title }}</h3>
                <p>{{props.content}}
                </p>
            </div>
    
        </div>
</body>


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


