<script>
import { ref, computed } from 'vue';
import ColGrid from './ColGrid.vue';
import Calendar from './Calendar.vue';
import { useI18n } from 'vue-i18n';

export default {
    name: 'ParentComponent',
    components: {
        ColGrid,
        Calendar,
    },
    props: {
        currentDate: Number,
    },
    setup() {
        const { t } = useI18n();
        const BookingText = ref(t('No Date Selected'));
        const date = ref(0);

        const dateIsPicked = computed(() => date.value === 0);

        const openLightBox = () => {
            console.log('Button clicked!');
        };

        const datePicked = (pickedDate) => {
            date.value = pickedDate;
            switch (pickedDate) {
                case 0:
                    BookingText.value = t('No Date Selected');
                    break;
                case 25:
                case 26:
                case 28:
                    BookingText.value = t('Few Seats');
                    break;
                case 27:
                case 29:
                    BookingText.value = t('Reserve Now');
                    break;
                default:
                    BookingText.value = t('Error No Date', { date: pickedDate });
                    break;
            }
        };

        const resetDate = () => {
            datePicked(0);
        };

        return {
            t,
            BookingText,
            date,
            dateIsPicked,
            openLightBox,
            datePicked,
            resetDate,
        };
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
                <a href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/s/6655dc75e820523242408abe?lang=en" target="_blank">
                    <button class="transition w-[355px] border font-semibold py-3 bg-transparent hover:bg-cream text-cream hover:text-brown border-cream hover:border-transparent duration-300 mt-5 uppercase">{{ BookingText }}</button>
                </a>
            </div>
        </div>
        <div class="col-span-6 text-left text-xl px-12">
            <p class="text-2xl">{{ t('Duration') }}</p>
            <p class="text-dark-gray text-[1.2rem]">{{ t('Restrictions') }}</p>
            <p class="pt-7">{{ t('Choreography') }}</p>
            <p class="pt-4">{{ t('Music and Sound Design') }}</p>
            <p class="pt-4">{{ t('Dancers') }}</p>
            <p class="pt-4">{{ t('Text') }}</p>
        </div>
    </ColGrid>
</template>

<style scoped>
</style>
