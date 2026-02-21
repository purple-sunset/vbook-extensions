load('config.js');
load('crypto.js');
load('pako.js');
function execute(url) {
    let response = fetch(url);
    if(response.ok) {
        let doc = response.text();
        let data_x = doc.match(/const data_x = "(\S+)";/);
        if(data_x) {
            let encryptedText = data_x[1];
            let decryptedText = decryptText(encryptedText);
            return Response.success(decryptedText);
        }
    }

    return null;
}