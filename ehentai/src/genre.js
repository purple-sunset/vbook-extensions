function execute() {
    const doc = Http.get("https://e-hentai.org").html();
    const el = doc.select(".itc .cs");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var id = e.id();
        var cat = id.replace("cat_", "");
        data.push({
           title: e.text(),
           input: "https://e-hentai.org/?f_cats=" + cat,
           script: 'gen.js'
        });
    }
    return Response.success(data);
}