load('config.js');
function execute(url, page) {
    if (!page) page = '1';

    let response = fetch(url + "&page=" + page);
    if (response.ok) {
        let doc = response.html();

        let next = doc.select('ul.pagination > li > a[aria-label="Next"]').first().attr("href").match(/page=(\d+)/);
        if (next) next = next[1]; else next = '';

        let novelList = [];
        doc.select(".site-content > div.container > div.row .popular-item-wrap").forEach(e => {
            novelList.push({
                name: e.select(".popular-content .widget-title a").text(),
                link: e.select(".popular-content .widget-title a").attr("href"),
                description: e.select(".popular-content .list-chapter .author a").text(),
                cover: e.select(".popular-img img").attr("src"),
                host: BASE_URL
            });
        });
        return Response.success(novelList, next);
    }
    return null;
}