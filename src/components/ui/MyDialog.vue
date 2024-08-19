<template>
  <div v-if="showDialog" class="dialog-overlay" @click.self="close">
    <div class="dialog-content">
      <img :src="image" alt="Dialog Image" />
      <h2>{{ title }}</h2>
      <slot name="subtitle"></slot>
      <p>{{ content }}</p>
      <slot name="additionalContent"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const emit = defineEmits<{
  (event: 'update:modelValue', visible: boolean): void;
}>();

const showDialog = computed(() => props.modelValue);

function close() {
  emit('update:modelValue', false);
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%; /* Limita la altura máxima */
  overflow-y: auto; /* Permite desplazamiento vertical */

}

.dialog-content {
  background: white;
  padding: 40px;
  border-radius: 5px;
  position: relative;
  max-width: 70%;
  margin-top: 800px;
  margin-bottom: 20px;
  color: black;
  max-height: 80%;
  overflow-y: auto;
} 

p{
  text-align: justify;
} 
.dialog-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.dialog-image {
  max-width: 100%;
  height: auto;

}
</style>
