load('config.js');
function execute(url) {
    if(!url.endsWith("/")) url = url + "/";

    let response = fetch(url);
    if(response.ok) {
        let doc = response.html();
        let bookId = doc.select(".rating-post-id").attr("value");

        let chapterUrl = url + "ajax/chapters/";
        let chapterResponse = fetch(chapterUrl, {
            method: 'POST'
        });

        if(chapterResponse.ok) {
            let chapterDoc = chapterResponse.html();
            let list = [];
            chapterDoc.select(".page-content-listing ul.version-chap > li").forEach(e => 
                list.push(url + "||" + bookId + "||" + e.attr("data-value"))
            );
            return Response.success(list);
        }
    }

    return null;
}