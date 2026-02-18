// @ts-ignore
import { Slider } from 'nexusui';

const freqSlider = new Slider('#frequency-slider', {
    size: [200, 20],
    min: 100,
    max: 1000,
    value: 440,
    step: 1,
});

const volSlider = new Slider('#volume-slider', {
    size: [200, 20],
    min: 0,
    max: 1,
    value: 1,
    step: 0.01,
});

let ctx: AudioContext | null = null;
let osc: OscillatorNode | null = null;
let gain: GainNode | null = null;

freqSlider.on('change', (value: any) => {
    if (osc) osc.frequency.value = value;
})

volSlider.on('change', (value: any) => {
    if (gain) gain.gain.value = value;
})

const playButton = document.getElementById("start")!;
playButton.addEventListener("click", () => {
    if (osc) return;
    ctx = ctx ?? new AudioContext();
    osc = ctx.createOscillator();
    gain = ctx.createGain()
    osc.frequency.value = freqSlider.value;
    osc.connect(gain)
    gain.connect(ctx.destination);
    osc.start()
});

const stopButton = document.getElementById("stop")!;
stopButton.addEventListener("click", () => {
    osc?.stop();
    gain = null;
    osc = null;
});
