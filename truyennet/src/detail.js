load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select(".book-info .mRightCol h1").text(),
            cover: doc.select(".book-info .mLeftCol .book-3d .book-info-pic img").attr("src"),
            author: doc.select(".book-info .mLeftCol .book-info-top .book-info-text ul li").first().select("a").text(),
            description: doc.select(".book-info .mRightCol #gioithieu .scrolltext > div").text(),
            ongoing: doc.select(".label-status").text().indexOf("Đang cập nhật") >= 0,
            host: BASE_URL
        });
    }
    return null;
}
