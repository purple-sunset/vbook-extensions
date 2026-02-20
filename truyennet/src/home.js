load('config.js');
function execute() {
    return Response.success([
        {
            title: "Truyện hot",
            script: "hot.js",
            input: BASE_URL
        },
        {
            title: "Truyện Mới Cập Nhật",
            script: "news.js",
            input: BASE_URL
        }
    ])
}

