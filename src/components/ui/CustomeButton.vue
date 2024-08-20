<template>
    <button :class="buttonClasses" @click="$emit('click')">
      <slot></slot>
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'cButton',
    props: {
      variant: {
        type: String,
        default: 'default',
      },
    },
    computed: {
        buttonClasses(): string[] {
      return ['button', `button--${this.variant}`];
  },
},
  });
  </script>
  
  <style scoped>
  .button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .button--default {
    background-color: #4d6fb3;
    color: white;
  }
  .button--outline {
    background-color: transparent;
    border: 2px solid #4d6fb3;
    color: #4d6fb3;
  }
  </style>
  