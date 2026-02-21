load('config.js');

function execute(key, page) {
    if (!page) page = '0';

    let response = !page ? fetch(BASE_URL + "/?s=" + key + "&post_type=wp-manga") : fetch(BASE_URL + '/wp-admin/admin-ajax.php', {
        method: 'POST',
        headers: { "user-agent": UserAgent.system() },
        body: {
            "action": "madara_load_more",
            "template": "madara-core/content/content-search",
            "type":	"front",
            "page": page.toString(),
            "vars[s]": key,
            "vars[orderby]": "",
            "vars[paged]": "1",
            "vars[template]": "search",
            "vars[meta_query][0][relation]": "AND",
            "vars[meta_query][relation]": "AND",
            "vars[post_type]": "wp-manga",
            "vars[post_status]": "publish",
            "vars[manga_archives_item_layout]": "default",
        }
    });

    if (response.ok) {
        let doc = response.html();
        let novelList = [];
        doc.select("div.c-tabs-item__content").forEach(e => 
            novelList.push({
                name: e.select(".tab-summary .post-title a").text(),
                link: e.select(".tab-summary .post-title a").attr("href"),
                cover: e.select(".tab-thumb img").attr("src"),
                description: e.select(".tab-summary .post-content .mg_author .summary-content").text(),
                host: BASE_URL
            })
        );

        return Response.success(novelList, parseInt(page) + 1);
    }
    return null;
}
