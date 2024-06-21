<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import SplitType from 'split-type';
import BlockSection from './components/BlockSection.vue';
import Quote from './components/Quote.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char, i) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        const text = new SplitType(char, { types: 'chars' });

        gsap.fromTo(text.chars,
            {
                color: bg
            },
            {
                color: fg,
                scrollTrigger: {
                    trigger: char,
                    start: 'top 50%',
                    end: 'top 10%',
                    scrub: true,
                    markers: false,
                },
                stagger: 0.3
            }
        );
    });
});
</script>

<template>
  <BlockSection id="hero" class="bg-[#161718]" msg="Hero Section" />
  <BlockSection id="s1" class="bg-[#807164]" msg="Image 1 Section" />
  <BlockSection id="s1" class="bg-[#57575F]" msg="Image 2 Section" />
  <BlockSection id="s1" class="bg-[#AA7246]" msg="Quote Section">
    <br>
    <Quote quote="“… a feeling of quiet euphoria arises. A small step for our audience affinity, a big one for Hoomanism.”"/>
  </BlockSection>
  <BlockSection id="s1" class="bg-[#4D5C93]" msg="Map Section" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
