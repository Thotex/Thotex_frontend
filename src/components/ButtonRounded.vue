<template>
    <div class="rounded-square">
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',
    props: {
        msg: String
    }
});
</script>
<style scoped lang="scss">
.rounded-square {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: #3498db; /* Add your desired background color */
    color: white; /* Add text color */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>