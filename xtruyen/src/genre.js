load('config.js');
function execute() {
    let response = fetch(BASE_URL);
    if (response.ok) {
        let doc = response.html();
        let genre = [];
        doc.select(".genres_wrap .widget-content .genres ul > li").forEach(e => {
            genre.push({
                title: e.select("a").text(),
                input: BASE_URL + e.select("a").attr("href"),
                script: "gen.js"
            });
        });
        return Response.success(genre);
    }
    return null;
}
