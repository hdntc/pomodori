const timeToMMSS = (seconds) => {
    const s = seconds % 60;
    const m = (seconds - s) / 60;

    return m.toString().padStart(2, "0") + ":" + s.toString().padStart(2, "0")
}

export default timeToMMSS;