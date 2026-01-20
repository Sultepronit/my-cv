export function unpackUrls(text) {
    const regex = /\[a=([^\]]+)\]/g;
    return text.replace(regex, (match, url) => {
        return `<a href="https://${url}" target="_blank">${url}</a>`
    });
}

export function highlightAux(text) {
    const regex = /\(\(([^\)]+)\)\)/g;
    return text.replace(regex, (match, cont) => {
        return `<span class="aux">(${cont})</span>`
    });
}

export function HTMLize(text) {
    return unpackUrls(
        highlightAux(text)
    );
}