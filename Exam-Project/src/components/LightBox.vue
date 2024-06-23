<script>
import ColGrid from './ColGrid.vue';
import Calendar from './Calendar.vue';

export default {
    name: 'ParentComponent',
    components: {
        ColGrid,
        Calendar,
    },
    props: {
        currentDate: Number,
    },
    data() {
        return {
            BookingText: 'Choose a date',
            date: 0,
        };
    },
    computed: {
        dateIsPicked() {
            return this.date == 0;
        }
    },
    methods: {
        openLightBox() {
            console.log('Button clicked!');
        },
        datePicked(date) {
            this.date = date;
            switch (date) {
                case 0:
                    this.BookingText = 'Choose a date';
                    break;
                case 25:
                    this.BookingText = '19:30 / FEW SEATS';
                    break;
                case 26:
                    this.BookingText = '19:30 / FEW SEATS';
                    break;
                case 27:
                    this.BookingText = '19:30 / RESERVE NOW';
                    break;
                case 28:
                    this.BookingText = '19:30 / FEW SEATS';
                    break;
                case 29:
                    this.BookingText = '19:30 / RESERVE NOW';
                    break;
                default:
                    this.BookingText = `Error, no date picked: ${date}`;
                    break;
            }
        },
        resetDate() {
            this.datePicked(0);
        },
    },
};
</script>

<template>
    <ColGrid>
        <div class="col-span-6 flex flex-col items-center">
            <Calendar @datePicked="datePicked" :currentDate="date"/>

            <div v-if="dateIsPicked">
                <button class="transition w-[355px] border font-semibold py-3 bg-transparent text-dark-gray border-dark-gray duration-300 mt-5 uppercase pointer-events-none select-none">{{ BookingText }}</button>
            </div>
            <div v-else>
                <button class="transition w-[355px] border font-semibold py-3 bg-transparent hover:bg-cream text-cream hover:text-brown border-cream hover:border-transparent duration-300 mt-5 uppercase">{{ BookingText }}</button>
            </div>
        </div>
        <div class="col-span-6 text-left text-xl px-12">
            <p class="text-2xl">Performance lasts: 1h 30min</p>
            <p class="text-dark-gray text-[1.2rem]">No age restrictions, everyone is welcome!</p>
            <p class="pt-7">Choreography: Hooman Sharifi</p>
            <p class="pt-4">Music and Sound Design: Neda Sanai</p>
            <p class="pt-4">Dancers: Afra Hosseini Kaladjahi, Ama Kyei, Anastasija Olescuka, Andreas Sanchez, Anna Fitoussi, Anton Borgström, Camille Prieux, Chiara Gilioli, Eleanor Campbell, Gloria Kapako, Ida Holmlund, Johanna Willig-Rosenstein, Lilian Steiner, Mohamed Y. Shika, Noam Segal, Omar Velasquez Rojas, Rebecca Livaniou, Robin Johansson, Shai Faran, Vincent Van der Plas.</p>
            <p class="pt-4">Text: BAM – Burcu Sahin, Athena Farrokhzad, Merima Dizdarević</p>
        </div>
    </ColGrid>
</template>

<style scoped>
</style>
