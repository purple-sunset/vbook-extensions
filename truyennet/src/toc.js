load('config.js');
function execute(url) {
    let response = fetch(BASE_URL + url);
    if(response.ok) {
        let json = response.json();

        if(!json || !json.data) {
            return null;
        }
        
        let doc = Html.parse(json.data);

        let chapters = [];
        doc.select("ul li a").forEach(e => {
            chapters.push({
                name: e.text(),
                url: e.attr("href"),
                host: BASE_URL
            });
        });
        return Response.success(chapters);
    }
    
    return null;
}