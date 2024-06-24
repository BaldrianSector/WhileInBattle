<script setup>
import { useI18n } from 'vue-i18n';
import { watchEffect, computed } from 'vue';
import { defineEmits } from 'vue';

const { t } = useI18n();

const { locale } = useI18n();

const setLanguage = (newLang) => {
    locale.value = newLang;
    localStorage.setItem('lang', newLang);
};

watchEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
        locale.value = storedLang;
    }
});

const isEnglish = computed(() => locale.value === 'en');
const isDanish = computed(() => locale.value === 'da');

const emit = defineEmits(['scroll-to-map', 'open-light-box']);

function scrollToMap() {
    emit('scroll-to-map');
}

function openLightBox() {
    emit('open-light-box');
}
</script>

<template>
  <div class="grid-container fixed z-10 pt-20">
    <nav>
      <div class="col-span-1-2 flex-center">
        <a href="https://www.metropolis.dk/" target="_blank">
          <img src="../assets/images/Metropolis.png" alt="Metropolis Logo" class="w-full h-full object-contain">
        </a>
        <p class="italic px-1">&nbspX&nbsp</p>
        <a href="https://cullberg.com/" target="_blank">
          <img src="../assets/images/Cullberg.png" alt="Cullberg Logo" class="w-full h-full object-contain">
        </a>
      </div>
      <div class="col-span-7-8 flex-center">
        <div class="flex cursor-pointer" @click="scrollToMap">
            <img src="../assets/images/Pin.png" class="pr-2" alt="Pin">
            <p>Blågårds Plads</p>
        </div>
      </div>
      <div class="col-span-9-10 flex-center">
        <button class="transition w-full border font-semibold py-3 bg-transparent hover:bg-cream text-cream hover:text-[#161718] border-cream hover:border-transparent duration-300 hover:mix-blend-difference" @click="openLightBox">{{ t('buy-button') }}</button>
      </div>
      <div class="col-span-11-12 flex-center">
        <span :class="{'cursor-pointer': true, 'font-semibold': isEnglish}" @click="setLanguage('en')">ENGLISH</span>&nbsp/&nbsp
        <span :class="{'cursor-pointer': true, 'font-semibold': isDanish}" @click="setLanguage('da')">DANISH</span>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 120px);
  grid-gap: 20px;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
}

nav {
  display: contents; /* Allows the divs to respect the grid container */
}

.col-span-1-2 {
  grid-column: 1 / span 2;
}

.col-span-7-8 {
  grid-column: 7 / span 2;
}

.col-span-9-10 {
  grid-column: 9 / span 2;
}

.col-span-11-12 {
  grid-column: 11 / span 2;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
