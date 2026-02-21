function decryptText(encryptedText) {
    const _0x2d6e55 = _0x27b9;
    (function(_0x20d1a8, _0x5b1192) {
        const _0x55ad93 = _0x27b9,
            _0x4b8885 = _0x20d1a8();
        while (!![]) {
            try {
                const _0x2202af = -parseInt(_0x55ad93(0x124)) / 0x1 * (-parseInt(_0x55ad93(0x123)) / 0x2) + -parseInt(_0x55ad93(0x119)) / 0x3 + -parseInt(_0x55ad93(0x11c)) / 0x4 * (-parseInt(_0x55ad93(0x11b)) / 0x5) + -parseInt(_0x55ad93(0x11d)) / 0x6 + -parseInt(_0x55ad93(0x118)) / 0x7 + parseInt(_0x55ad93(0x11a)) / 0x8 + parseInt(_0x55ad93(0x116)) / 0x9 * (parseInt(_0x55ad93(0x11e)) / 0xa);
                if (_0x2202af === _0x5b1192) break;
                else _0x4b8885['push'](_0x4b8885['shift']());
            } catch (_0x39dd42) {
                _0x4b8885['push'](_0x4b8885['shift']());
            }
        }
    }(_0x220d, 0x77cb2));

    function _0x27b9(_0x26e2fd, _0x594293) {
        _0x26e2fd = _0x26e2fd - 0x116;
        const _0x220d3b = _0x220d();
        let _0x27b9f6 = _0x220d3b[_0x26e2fd];
        return _0x27b9f6;
    }
    const s = _0x2d6e55(0x122);
    const c = _0x2d6e55(0x121);

    function _0x220d() {
        const _0x15f240 = ['2675428jUFFOA', '2855208tQIFTO', '4444880SOZuHQ', '10OBZBnm', '547364QnEXiG', '5705028fiwQVx', '15773530mbbHhi', 'indexOf', 'charCodeAt', '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', '62HpshDc', '11897UOrruh', 'string', 'inflate', '9AvAmRl', 'from'];
        _0x220d = function() {
            return _0x15f240;
        };
        return _0x220d();
    }
    let translated = '';
    for (let char of encryptedText) {
        let idx = c[_0x2d6e55(0x11f)](char);
        translated += idx > -0x1 ? s[idx] : char;
    }

    const binary = Uint8Array[_0x2d6e55(0x117)](atob(translated), _0x1de42c => _0x1de42c[_0x2d6e55(0x120)](0x0));
    let text = pako[_0x2d6e55(0x126)](binary, {
        'to': _0x2d6e55(0x125)
    });

    text = text.replace(/(&nbsp;)*(\s*<br\s*\/?>\s*){2,}/gi, "<br><br>");

    return text.trim();
}
