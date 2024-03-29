let audioCtx, stream, input, analyzer;

const init = async () => {
    audioCtx = new AudioContext();
    stream = await navigator.mediaDevices.getUserMedia({audio: true});
    input = audioCtx.createMediaStreamSource(stream);
    analyzer = audioCtx.createAnalyser();
    input.connect(analyzer);
    return Promise.resolve(0);
}

init().then(() => {
    // input = audioCtx.createMediaStreamSource(stream);
    // analyzer = audioCtx.createAnalyser();
    // input.connect(analyzer);

    // console.log(audioCtx, '\n', stream, '\n', input, '\n', analyzer);
    // return;

    frequencyArray = new Float32Array(analyzer.frequencyBinCount);
    analyzer.getFloatFrequencyData(frequencyArray);
    console.log(frequencyArray);
    return;

    const tick = () => {
        // requestAnimationFrame(tick);

        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // ctx.strokeStyle = '#222';
        // ctx.lineWidth = 2;
        // ctx.beginPath();

        // analyzer.getFloatFrequencyData(frequencyArray);
        console.log(frequencyArray);
        return;

        frequencyArray.forEach((freq, index) => {
            let x = canvas.width / frequencyArray.length * index;
            let y = freq / 2;

            console.log(x, y);

            if (index == 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.closePath();
        ctx.stroke();
    };

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = 700;
    canvas.width = 1000;
    tick();
});
