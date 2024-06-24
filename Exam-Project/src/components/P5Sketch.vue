<template>
    <div ref="sketch"></div>
</template>

<script>
import p5 from 'p5';

export default {
    name: 'P5Sketch',
    mounted() {
        this.sketch = new p5(this.sketchSetup, this.$refs.sketch);
    },
    methods: {
        sketchSetup(p) {
            p.setup = () => {
                p.createCanvas(400, 400);
                p.background(200);
            };

            p.draw = () => {
                p.background(200);
                p.ellipse(p.mouseX, p.mouseY, 50, 50);
            };
        }
    },
    beforeDestroy() {
        this.sketch.remove();
    }
};
</script>

<style scoped>
div {
    width: 400px;
    height: 400px;
    z-index: 10;
    border: 1px solid black;
}
</style>
