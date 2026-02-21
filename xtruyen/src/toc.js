load('config.js');
function execute(url) {
    let bookId = url.split("||")[1];
    let dataValue = url.split("||")[2];
    let page = dataValue.split("-to-");

    let response = fetch(BASE_URL + '/wp-admin/admin-ajax.php', {
        method: 'POST',
        headers: { "user-agent": UserAgent.system() },
        body: {
            "action": 'load_chapter_list_from_to',
            "manga_id": bookId,
            "from": page[0],
            "to": page[1]
        }
    });

    if(response.ok) {
        let doc = response.html();
        let chapters = [];
        doc.select("li a").forEach(e => {
            chapters.push({
                name: e.text(),
                url: e.attr("href"),
                host: BASE_URL
            });
        });
        return Response.success(chapters);
    }

    if(response.status == 429) {
        sleep(1000);
        return execute(url);
    }

    return Response.error("Fail to fetch book " + bookId + ", from: " + page[0] + " to: " + page[1] + ", status: " + response.status);
}