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
            let originalImage;
            let partImage;
            let pointA, pointB;
            let showStrokes = false;
            let showPoints = false;
            let enableHotkeys = false;
            let fadeStartPercent;
            let fadeEndPercent;
            let numPoints;
            let amplitude;
            let frequency;
            let timeFactor;
            let frequencyFactor;
            let marginX;
            let reverseWave = false;
            let pg;

            p.preload = () => {
                originalImage = p.loadImage("/assets/images/P5/Images/img4.jpg");
            };
            
            p.setup = () => {
                p.createCanvas(800, 600, p.WEBGL);
                
                pointA = new DraggablePoint(395, 254);
                pointB = new DraggablePoint(398, 500);
                pg = p.createGraphics(p.width, p.height, p.WEBGL);
                
            };
            
            p.draw = () => {
                updatePartImage();
                p.translate(-p.width / 2, -p.height / 2); // Adjusting the coordinate system

                const time = p.millis() / 1000.0;
                
                // Tweak these values to get different effects
                fadeStartPercent = 0.0;
                fadeEndPercent = 0.0;
                numPoints = Math.max(2, 160);
                amplitude = 50;
                frequency = -0.054;
                timeFactor = 0.78;
                frequencyFactor = 0.13;
                marginX = 0;
                
                //p.background(0);
                p.clear();
                originalImage.resize(0, p.height);
                p.image(originalImage, 0, 0);

                if (showStrokes) {
                    p.stroke(255);
                } else {
                    p.noStroke();
                }

                if (showPoints) {
                    pointA.display();
                    pointB.display();
                }

                drawQuadStrip();

                pg.push();
                pg.translate(-pg.width / 2, -pg.height / 2); // Adjusting the coordinate system for pg
                p.image(pg, 0, 0);
                pg.pop();

                if (pointA.dragging || pointB.dragging) {
                    updatePartImage();
                }
            };

            class DraggablePoint {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                    this.dragging = false;
                    this.offsetX = 0;
                    this.offsetY = 0;
                }

                display() {
                    if (showStrokes) {
                        p.stroke(0);
                    } else {
                        p.noStroke();
                    }
                    p.noFill();
                    p.ellipse(this.x, this.y, 10, 10);
                }

                clicked(mx, my) {
                    let d = p.dist(mx, my, this.x, this.y);
                    if (d < 5) {
                        this.dragging = true;
                        this.offsetX = this.x - mx;
                        this.offsetY = this.y - my;
                    }
                }

                dragged(mx, my) {
                    if (this.dragging) {
                        this.x = mx + this.offsetX;
                        this.y = my + this.offsetY;
                    }
                }

                released() {
                    this.dragging = false;
                }
            }

            p.mousePressed = () => {
                pointA.clicked(p.mouseX, p.mouseY);
                pointB.clicked(p.mouseX, p.mouseY);
            };

            p.mouseDragged = () => {
                pointA.dragged(p.mouseX, p.mouseY);
                pointB.dragged(p.mouseX, p.mouseY);
            };

            p.mouseReleased = () => {
                pointA.released();
                pointB.released();
            };

            function updatePartImage() {
                let x = p.int(Math.min(pointA.x, pointB.x));
                let y = p.int(Math.min(pointA.y, pointB.y));
                let w = p.int(Math.abs(pointB.x - pointA.x));
                let h = p.int(Math.abs(pointB.y - pointA.y));

                if (w > 0 && h > 0) {
                    partImage = originalImage.get(x, y, w, h);
                } else {
                    partImage = null;
                }
            }

            function drawQuadStrip() {
                if (partImage == null) {
                    return; // Do not draw if partImage is null
                }

                pg.clear(); // Clear the PGraphics with transparency
                pg.push();
                pg.translate(-pg.width / 2, -pg.height / 2); // Adjust coordinate system for pg

                if (showStrokes) {
                    pg.stroke(255, 255, 255, 127); // Set stroke color for the quad strip
                } else {
                    pg.noStroke(); // Disable strokes for the quad strip
                }

                pg.fill(150);

                let x = new Array(numPoints);
                let y1 = new Array(numPoints);
                let y2 = new Array(numPoints);

                // Calculate the rightmost x-coordinate of the draggable rectangle
                let rightSideX = pointA.x > pointB.x ? pointA.x : pointB.x;

                // Calculate the leftmost x-coordinate of the draggable rectangle
                let leftSideX = pointA.x < pointB.x ? pointA.x : pointB.x;

                // Calculate the top y-coordinate of the draggable rectangle
                let topY = pointA.y < pointB.y ? pointA.y : pointB.y;

                // Calculate the bottom y-coordinate of the draggable rectangle
                let bottomY = pointA.y > pointB.y ? pointA.y : pointB.y;


                let time = p.millis() / 1000.0; // Time in seconds

                for (let i = 0; i < numPoints; i++) {
                    if (reverseWave) {
                        x[i] = p.map(i, 0, numPoints - 1, leftSideX, 0 + marginX);
                    } else {
                        x[i] = p.map(i, 0, numPoints - 1, rightSideX, p.width - marginX);
                    }

                    let sineValue = p.sin(
                        i * frequency * p.sin(i * frequency * frequencyFactor + time * timeFactor)
                    ) * amplitude;

                    y1[i] = topY + sineValue;
                    y2[i] = bottomY + sineValue;
                }

                let fadeStartPoints = Math.floor(numPoints * fadeStartPercent);
                let fadeEndPoints = Math.floor(numPoints * fadeEndPercent);

                // Draw the rectangle between points
                pg.noFill();
                pg.rect(pointA.x, pointA.y, pointB.x - pointA.x, pointB.y - pointA.y);
                
                pg.beginShape(p.QUAD_STRIP);
                pg.texture(partImage);

                for (let i = 0; i < x.length; i++) {
                    let alpha = 255;
                    if (i < fadeStartPoints) {
                        alpha = p.map(i, 0, fadeStartPoints - 1, 0, 255);
                    } else if (i >= x.length - fadeEndPoints) {
                        alpha = p.map(i, x.length - fadeEndPoints, x.length - 1, 255, 0);
                    } else {
                        alpha = 255;
                    }

                    // Set tint with calculated alpha
                    pg.tint(255, alpha);

                    let u = p.map(i, 0, x.length - 1, 0, partImage.width);
                    pg.vertex(x[i], y1[i], u, 0);
                    pg.vertex(x[i], y2[i], u, partImage.height);
                }

                pg.endShape();

                // Reset tint to default for other drawings
                pg.noTint();
                pg.pop();
            }

            p.keyPressed = () => {
                if (enableHotkeys) {
                    if (p.key === 'H' || p.key === 'h') {
                        showStrokes = !showStrokes;
                    }
                    if (p.key === 'D' || p.key === 'd') {
                        showPoints = !showPoints;
                    }
                    if (p.key === 'S' || p.key === 's') {
                        pg.save(`output_${new Date().toISOString().replace(/[:.]/g, '_')}.png`);
                        console.log("image saved");
                    }
                    if (p.key === 'R' || p.key === 'r') {
                        reverseWave = !reverseWave;
                    }
                    if (p.key === 'P' || p.key === 'p') {
                        console.log(`PointA(${pointA.x}, ${pointA.y})`);
                        console.log(`PointB(${pointB.x}, ${pointB.y})`);
                    }
                }
            };
        }
    },
    beforeDestroy() {
        this.sketch.remove();
    }
};
</script>

<style scoped>

</style>
