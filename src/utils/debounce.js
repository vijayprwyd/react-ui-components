let timer;

export function debounce(callback, delay) {
    return () => {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    }
}