load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let novelList = [];
        doc.select("#slide .item").forEach(e => {
            novelList.push({
                name: e.select("a").attr("title"),
                link: e.select("a").attr("href"),
                cover: e.select("a img").attr("src"),
                host: BASE_URL
            });
        });
        return Response.success(novelList);
    }
    return null;
}