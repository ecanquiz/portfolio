<script setup>
import {ref} from 'vue'
import i18next from "i18next";

const xyz = ref('')
i18next.changeLanguage("es");
</script>
<template>
<div class="mx-1">{{xyz}}
  <select v-model="xyz">{{xyz}}
    <option value="en">en</option>
    <option value="es">es</option>
  </select>
</div>
</template>
