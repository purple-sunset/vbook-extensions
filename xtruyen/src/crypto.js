function decryptText(encryptedText) {
    const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const c = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';

    let translated = '';
    for (let char of encryptedText) {
        let idx = c.indexOf(char);
        translated += idx > -1 ? s[idx] : char;
    }

    let a = Array.from(atob(translated));
    const binary = new Uint8Array(a.map(x => x.charCodeAt(0)));
    // const binary = Uint8Array.from(atob(translated), x => x.charCodeAt(0));
    let text = pako.inflate(binary, {
        'to': 'string'
    });

    text = text.replace(/(&nbsp;)*(\s*<br\s*\/?>\s*){2,}/gi, "<br><br>");

    return text.trim();
}