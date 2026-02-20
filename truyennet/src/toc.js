load('config.js');
function execute(url) {
    let response = fetch(url);
    if(response.ok) {
        let json = response.json();

        if(!json || !json.data) {
            return Response.error("API response không hợp lệ: " + json);
        }
        
        let chapters = [];
        Html.parse(json.data).select("ul li a").forEach(e => {
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