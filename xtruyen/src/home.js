load('config.js');
function execute() {
    return Response.success([
        {
            title: "Mới Cập Nhật",
            script: "gen.js",
            input: BASE_URL + "truyen/?m_orderby=latest"
        },
        {
            title: "Truyện Hot",
            script: "gen.js",
            input: BASE_URL + "/truyen/?m_orderby=trending"
        },
        {
            title: "Top View",
            script: "gen.js",
            input: BASE_URL + "/truyen/?m_orderby=views"
        }
    ])
}

