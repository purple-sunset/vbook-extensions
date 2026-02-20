load('config.js');
function execute(url, page) {
    let response = !page ? fetch(url) : fetch(url + "?page=" + page);
    if (response.ok) {
        let doc = response.html();
        let novelList = [];
        let next = doc.select(".phan-trang").first().select(".active + .btn-page").attr("href").match(/page=(\d+)/);
        if (next) next = next[1]; else next = '';
        
        doc.select(".truyen-list .item").forEach(e => {
            novelList.push({
                name: e.select("h3 a").text(),
                link: e.select("h3 a").attr("href"),
                cover: e.select(".cover img").attr("src"),
                description: e.select(".line").first().text(),
                host: BASE_URL
            });
        });

        return Response.success(novelList, next);
    }
    return null;
}