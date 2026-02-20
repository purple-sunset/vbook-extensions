load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select(".profile-manga .post-title h1").text(),
            cover: doc.select(".profile-manga .tab-summary .summary_image img").attr("src"),
            author: doc.select(".profile-manga .tab-summary .summary_content .post-content .author-content a").text(),
            description: doc.select(".content-area .description-summary .summary__content").text(),
            ongoing: doc.select(".profile-manga .tab-summary .summary_content .post-content .post-content_item").last().select(".summary-content").text().indexOf("Đang ra") >= 0,
            host: BASE_URL
        });
    }
    return null;
}
