    // const canvas = document.querySelector('.canvas'),
var width = 2440;
if( $(window).width() < 992 ) {
    var width = 992;
}
if( $(window).width() < 575 ) {
    var width = 575;
}
const canvases = Array.from(document.getElementsByClassName("canvas"));


for (let canvas of canvases) {
    const ctx = canvas.getContext("2d"),
        Tau = Math.PI * 2,
        PI180 = Math.PI / 180,
        Mcos = Math.cos,
        Msin = Math.sin,
        Mfloor = Math.floor,
        waves = [];
    //   console.log( ctx );
    let h = 250,
        w = width;
    ctx.canvas.height = h;

    const Wave = function (config) {
        this.numP = config.numP;
        this.orbitRadius = config.orbitRadius;
        this.speed = config.speed * -1;
        this.numWaves = config.numWaves;
        this.orbitCenters = [];
        this.particles = [];
        this.yCenter = config.yCenter;
        this.dots = config.dots;
        this.color = config.color;    
        this.build();
    };
    Wave.prototype.build = function () {
        this.setParticles();
        this.setOrbitCenters();
    };
    Wave.prototype.setParticles = function () {
        this.particles = [];
        let rotationStep = ((360 * this.numWaves) / this.numP) * PI180;
        for (let i = 0, loop = this.numP; i < loop; i++) {
            let p = {
                angle: rotationStep * i,
                vx: 0,
                vy: 0,
            };
            this.particles.push(p);
        }
    };
    Wave.prototype.setOrbitCenters = function () {
        this.orbitCenters = [];
        let step = (w + this.orbitRadius * 2) / (this.numP - 1.5);
        for (let i = 0, loop = this.numP; i < loop; i++) {
            this.orbitCenters.push(-this.orbitRadius + step * i);
        }
    };
    Wave.prototype.update = function () {
        this.particles.forEach((p, i) => {
            p.angle += this.speed;
            p.vx = this.orbitRadius * Mcos(p.angle) + this.orbitCenters[i];
            p.vy = this.orbitRadius * Msin(p.angle) + this.yCenter;
        });
    };
    Wave.prototype.drawWave = function () {
        ctx.strokeStyle = this.color + " " // "#418DCB ";
        ctx.fillStyle = this.color + " " //"#418DCB ";
        ctx.beginPath();
        ctx.moveTo(0, this.centerY);
        this.particles.forEach((p, i) => {
            ctx.lineTo(p.vx, p.vy);
        });

        if (config.fillComponentLines) {
            ctx.lineTo(w, h + 1);
            ctx.lineTo(0, h + 1);
            ctx.fill();
        }
        ctx.stroke();

        if (config.dots) {
            this.particles.forEach((p, i) => {
                ctx.fillStyle = "#418DCB ";
                ctx.beginPath();
                ctx.arc(p.vx, p.vy, 2, 0, Tau);
                ctx.fill();
            });
        }
    };

    const draw = () => {
        ctx.strokeStyle = "transparent";
        ctx.fillStyle = "transparent";
        ctx.beginPath();
        ctx.moveTo(0, config.centerY);

        let px, py;
        for (let i = 0; i < config.numP; i++) {
            px = waves[0].particles[i].vx;
            py = waves[0].particles[i].vy;
            for (let j = 1; j < config.waveCount; j++) {
                px += waves[j].particles[i].vx;
                py += waves[j].particles[i].vy;
            }
            ctx.lineTo(px / config.waveCount, py / config.waveCount);
        }
        ctx.lineTo(w, h + 1);
        ctx.lineTo(0, h + 1);
        ctx.fill();
        ctx.stroke();
    };

    /* Clear canvas and redraw waves  */
    const animate = () => {
        canvas.width = w;
        waves.forEach((w) => w.update());
        if (config.drawComponentLines) {
            waves.forEach((w) => w.drawWave(  ));
        }
        draw();
        requestAnimationFrame(animate);
    };

    const config = {
        yCenter: h * 0.50,
        dots: false,
        fillComponentLines: false,
        drawComponentLines: true,
        speedBase: 0.0005,
        speedShift: 0.005,
        waveCount: 3,
        waveHeight: 60,
        waveHeightVariation: 10,
        numWaves: 0.9,
        numP: 30,
    };
    const waveColors = [ '#418dcb1a', '#418dcb80', '#418dcb4d' ] ;
    const buildSystem = () => {

        /* Generate waves */
        for (let i = 0; i < config.waveCount; i++) {
            let mod = {
                speed: config.speedBase + config.speedShift * i,
                orbitRadius: config.waveHeight + config.waveHeightVariation * i,
                color: waveColors[i]
            };
            let runVals = { ...config, ...mod };
            waves.push(new Wave(runVals));
        }
    };

    buildSystem();
    animate();
}
