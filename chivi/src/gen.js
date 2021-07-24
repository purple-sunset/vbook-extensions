function execute(url, page) {
    if (!page) {
        page = 0;
    }

    var json = Http.get(url + "&page=" + page + "&take=24").string();

    var data = JSON.parse(json);
    var next = 0;

    var novelList = [];

    if (data.books) {
        var total = data.total;
        if (page < total) {
            next = page;
        }
        novelList = data.books.map(item => {
            return {
                "name": item.btitle_vi,
                "link": "~" + item.bslug,
                "description": item.author_vi,
                "cover": item.bcover ? "/covers/" + item.bcover : "",
                "host": "https://chivi.xyz"
            }
        });
    }

    return Response.success(novelList, next);
}