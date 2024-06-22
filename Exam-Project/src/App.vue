<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import SplitType from 'split-type';
import BlockSection from './components/BlockSection.vue';
import ColGrid from './components/ColGrid.vue';
import NavBar from './components/NavBar.vue';
import Quote from './components/Quote.vue';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const splitTypes = ref([]);

onMounted(() => {
    const elements = document.querySelectorAll('.reveal-type');
    elements.forEach((char, i) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        const text = new SplitType(char, { types: 'chars' });
        splitTypes.value.push({ text, fg });

        gsap.fromTo(text.chars,
            {
                color: bg
            },
            {
                color: fg,
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 45%',
                    scrub: 0.5,
                    markers: false,
                },
                stagger: 0.3
            }
        );
    });

    // ScrollTrigger for fading out NavBar
    ScrollTrigger.create({
        trigger: "#map",
        start: 'top 60%',
        end: 'top top',
        scrub: true,
        markers: false,
        onEnter: () => gsap.to("#navbar", { opacity: 0, pointerEvents: 'none' }),
        onLeaveBack: () => gsap.to("#navbar", { opacity: 1, pointerEvents: 'auto' }),
    });
});

function scrollToMap() {
    // Instantly set the color to fg
    splitTypes.value.forEach(({ text, fg }) => {
        gsap.set(text.chars, { color: fg });
    });

    // Scroll to the map section
    gsap.to(window, { duration: 1.6, scrollTo: "#map", ease: "power3" });
}
</script>

<template>
  <NavBar id="navbar" @scroll-to-map="scrollToMap" />
  <BlockSection id="hero" class="bg-[#161718] hero-section" msg="Hero Section">
    <template v-slot:hero >
      <img src="./assets/images/Cover.png" alt="Cover" class="absolute inset-0 w-full h-screen object-cover pointer-events-none select-none">
    </template>

      <div class="filler col-span-6"></div>
      <div class="col-span-6 px-28 leading-[4.5rem] pt-24">
        <h1>WHILE IN BATTLE I’M FREE<br>
          NEVER FREE TO REST</h1>
        <p class="text-2xl pt-32 px-24 text-left leading-10">Exploring the movement of bodies in the city space of Copenhagen during the Metropolis Festival June 2024.</p>
      </div>

  </BlockSection>
  <BlockSection id="image-1" class="bg-[#807164]" msg="Image 1 Section">


        <p class="col-span-6 text-3xl leading-10 px-40 text-left">A meeting between 10 of swedish dance company Cullberg’s own dancers and 10 external dancers from the street dance community.</p>
        <img class="col-span-6" src="./assets/images/Image1.png" alt="Image 1">


  </BlockSection>
  <BlockSection id="image-2" class="bg-[#57575F]" msg="Image 2 Section">


        <img class="col-span-6" src="./assets/images/Image2.png" alt="Image 2">
        <p class="col-span-6 text-3xl leading-10 px-36 text-left">From the battle the Dancers rise, as individuals and together. They spring from the fight, the resistance, the coexistence. From the will and necessity to make a stand for something that might be taken away.</p>


  </BlockSection>
  <BlockSection id="quote" class="bg-[#AA7246]" msg="Quote Section">

      <div class="col-span-12">
        <Quote quote="“… a feeling of quiet euphoria arises. A small step for our audience affinity, a big one for Hoomanism.”"/>
        <p class="italic absolute bottom-24 right-24 text-[#BCACAC]">-&nbsp<a href="https://www.aftonbladet.se/kultur/teater/a/Q7vR48/recension-hooman-sharifi-cullberg-while-in-battle-im-free-never-free-to-rest" target="_blank">Aftonbladet</a></p>
      </div>

  </BlockSection>
  <BlockSection id="map" class="bg-[#4D5C93]" msg="Map Section">

      <div class="col-span-6 flex flex-col items-center px-40 gap-4">
        <div class="flex flex-center">
          <a href="https://www.metropolis.dk/">
            <img src="./assets/images/Metropolis.png" alt="Metropolis Logo" class="w-full h-full object-contain">
          </a>
          <p class="italic px-1">&nbspX&nbsp</p>
          <a href="https://cullberg.com/">
            <img src="./assets/images/Cullberg.png" alt="Cullberg Logo" class="w-full h-full object-contain">
          </a>
        </div>
        <p class="text-2xl leading-10 text-left">Tickets are free and gives you access to a seat on a bench or seat cushion on the ground. Please do take your place at least 15 min. before the begining of the performance.</p>
        <button class="transition w-full border font-semibold py-3 bg-transparent hover:bg-cream text-cream hover:text-[#161718] border-cream hover:border-transparent duration-300">GET YOUR TICKET</button>
      </div>
      <img class="col-span-6" src="./assets/images/Map.png" alt="Map">

  </BlockSection>
</template>


<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Ensures the image doesn't overflow the container */
}

.cover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire container */
}
</style>
