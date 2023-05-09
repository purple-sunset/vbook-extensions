function execute(url) {
    let urlParts = url.split("/");
    let slug = urlParts[urlParts.length - 1];
    let slugParts = slug.split("-");
    let id = slugParts[0];

    let chapList = [];

    chapList.push({
        name: slug,
        url: url,
        host: "https://chivi.app"
    });

    chapList.push({
        name: id,
        url: url,
        host: "https://chivi.app"
    });

    let pageNo = 1;
    let tocUrl = "https://chivi.app/_wn/chaps/" + id;

    chapList.push({
        name: tocUrl,
        url: tocUrl,
        host: "https://chivi.app"
    });

    let hasChap = true;
    while(hasChap) {
        let tocResponse = fetch(tocUrl + "/_?pg=" + pageNo.toString());
        if (tocResponse.ok) {
            let data = tocResponse.json();
            hasChap = data.length > 0;

            data.forEach(e => {
                chapList.push({
                    name: e.title,
                    url: "/wn/" + slug + "/ch/_/" + e.schid + "/" + e.uslug + "--mt",
                    host: "https://chivi.app"
                });
            });
        }
        else {
            hasChap = false;
        }

        pageNo++;
    }

    return Response.success(chapList);
}