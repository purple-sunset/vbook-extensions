load('config.js');
function execute(url) {
    let response = fetch(url);
    if(response.ok) {
        let doc = response.html();
        let bookId = doc.select(".rating-post-id").value("value");

        let list = [];
        doc.select(".page-content-listing ul.version-chap > li").forEach(e => 
            list.push(url + "||" + bookId + "||" + e.attr("data-value"))
        );

        return Response.success(list);
    }

    return null;
}