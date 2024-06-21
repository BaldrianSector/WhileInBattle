<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import SplitType from 'split-type';
import BlockSection from './components/BlockSection.vue';
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
                    start: 'top 70%',
                    end: 'top 30%',
                    scrub: true,
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
  <BlockSection id="hero" class="bg-[#161718]" msg="Hero Section"/>
  <BlockSection id="image-1" class="bg-[#807164]" msg="Image 1 Section" />
  <BlockSection id="image-2" class="bg-[#57575F]" msg="Image 2 Section" />
  <BlockSection id="quote" class="bg-[#AA7246]" msg="Quote Section">
    <br>
    <Quote quote="“… a feeling of quiet euphoria arises. A small step for our audience affinity, a big one for Hoomanism.”"/>
  </BlockSection>
  <BlockSection id="map" class="bg-[#4D5C93]" msg="Map Section" />
</template>

<style scoped>
</style>
