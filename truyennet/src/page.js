load('config.js');
function execute(url) {
    let response = fetch(url);
    if(response.ok) {
        let doc = response.html();
        let el = doc.select("#chapter-list .paging a").last().attr("onclick").match(/page\((\d+),(\d+)\);/);
        if(el) {
            let bookId = el[1];
            let lastPage = el[2];

            let pages = [];
            for (let i = 1; i <= lastPage; i++) {
                pages.push("/get/listchap/" + bookId + "?page=" + i);
            }
            return Response.success(pages);
        }
    }

    return null;
}