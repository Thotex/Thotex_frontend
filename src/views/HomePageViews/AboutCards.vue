<template>
    <div v-bind:class="props.class">
        <div class="content">
            <img :src="props.image" alt="Card Image" class="card-image">
            <div>
                <h3>{{ props.title }}</h3>
                <p>{{props.content}} </p>
                <nav class="redes">
                    <a :href="props.redGit" target="_blank" rel="noreferrer" class="button-side">
                        <IconifyIcon class="iconos" icon="ion:social-github-outline" color="white" width="35px" heigth="20px" ></IconifyIcon>
                    </a>
                    <a :href="props.redLinked" target="_blank" rel="noreferrer" class="button-side">
                        <IconifyIcon class="iconos" icon="ion:social-linkedin-outline" color="white" width="35px" heigth="20px" ></IconifyIcon>
                    </a>
                </nav>
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
    },redGit:{
        type: String,
        required: true
    },
    redLinked:{
        type: String,
        required: true
    }
    
})
</script>

<style scoped lang="scss">
    .content {
        display: flex;  
    }
    .button-side{
        background-color: $custom-blue;
        width: 35px;
        padding: 2px;
        display: grid;
        margin: 5px;
        border-radius: 90%;
    }
    .redes{
        display: flex;
        align-items: center;
        padding-left: 29%
    }
    .card-image{
        object-fit: contain;
        border-radius: 100%;
    }
</style>


