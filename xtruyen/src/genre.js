load('config.js');
function execute() {
    let response = fetch(BASE_URL);
    if (response.ok) {
        let doc = response.html();
        let genre = [];
        doc.select(".main-menu ul.main-navbar > li:nth-child(3) > ul.sub-menu > li").forEach(e => {
            genre.push({
                title: e.select("a").text(),
                input: e.select("a").attr("href"),
                script: "gen.js"
            });
        });
        return Response.success(genre);
    }
    return null;
}
