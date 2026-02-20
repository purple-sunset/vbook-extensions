load('config.js');
function execute(url) {
    let response = fetch(url);
    if(response.ok) {
        let doc = response.html();
        let el = doc.select("#chapter-list .paging a").last().attr("onclick").match(/page\((\d+),(\d+)\);/);
        if(el) {
            let bookId = el[1];
            let lastPage = el[2];

            let list = [];
            for (let i = 1; i <= lastPage; i++) {
                let tocResponse = fetch(BASE_URL + "/get/listchap/" + bookId + "?page=" + i);
                if(!tocResponse.ok) {
                    continue;
                }
            
                let tocJson = tocResponse.json();
                if(!tocJson || !tocJson.data) {
                    continue;
                }
                
                var tocEl = Html.parse(tocJson.data).select("ul li a");
                for (let j = 0; j < tocEl.length - 1; j++) {
                    let e = tocEl.get(j);
                    list.push({
                        name: e.text(),
                        url: e.attr("href"),
                        host: BASE_URL
                    });
                }
            }

            return Response.success(list);
        }
    }

    return null;
}