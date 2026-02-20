load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let novelList = [];
        doc.select("#contentstory .home-content .itemupdate").forEach(e => {
            novelList.push({
                name: e.select(".iname h3").text(),
                link: e.select(".iname h3 a").attr("href"),
                description: e.select(".icate").text(),
                host: BASE_URL
            });
        });
        return Response.success(novelList);
    }
    return null;
}