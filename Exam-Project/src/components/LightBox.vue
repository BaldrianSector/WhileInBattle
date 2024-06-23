<script setup>
import { ref } from 'vue';
import ColGrid from './ColGrid.vue';
import Calendar from './Calendar.vue';

// Define the reactive variable for BookingText
const BookingText = ref('Choose a date');
const Date = ref(0);

// Function to handle button click (optional)
const openLightBox = () => {
    console.log('Button clicked!');
};
</script>

<template>
    <ColGrid>
        <div class="col-span-6 flex flex-col items-center">
            <Calendar/>
            <button class="transition w-[355px] border font-semibold py-3 bg-transparent hover:bg-cream text-cream hover:text-brown border-cream hover:border-transparent duration-300 mt-5 uppercase">{{ BookingText }}</button>
        </div>
        <div class="col-span-6 text-left text-xl px-12">
            <p class="text-2xl">Performance lasts: 1h 30min</p>
            <p class="text-[#887979] text-[1.2rem]">No age restrictions, everyone is welcome!</p>
            <p class="pt-7">Choreography: Hooman Sharifi</p>
            <p class="pt-4">Music and Sound Design: Neda Sanai</p>
            <p class="pt-4">Dancers: Afra Hosseini Kaladjahi, Ama Kyei, Anastasija Olescuka, Andreas Sanchez, Anna Fitoussi, Anton Borgström, Camille Prieux, Chiara Gilioli, Eleanor Campbell, Gloria Kapako, Ida Holmlund, Johanna Willig-Rosenstein, Lilian Steiner, Mohamed Y. Shika, Noam Segal, Omar Velasquez Rojas, Rebecca Livaniou, Robin Johansson, Shai Faran, Vincent Van der Plas.</p>
            <p class="pt-4">Text: BAM – Burcu Sahin, Athena Farrokhzad, Merima Dizdarević</p>
        </div>
    </ColGrid>
</template>

<style scoped>
</style>
