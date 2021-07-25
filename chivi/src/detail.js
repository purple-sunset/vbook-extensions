function execute(url) {
    var json = Http.get(url).string();

    var data = JSON.parse(json);

    if (data) {
        var updateTime = new Date(data.update * 1000);
        var updateStr = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds() + " " + updateTime.getDay() + "/" + updateTime.getMonth() + "/" + updateTime.getFullYear()

        return Response.success({
            "name": data.btitle_vi,
            "cover": data.bcover ? "/covers/" + data.bcover : "",
            "author": data.author_vi,
            "description": data.bintro.join("\n"),
            "detail": data.author_vi + "\n" + data.genres.join("\n") + (data.status == 0 ? "Còn tiếp" : "Hoàn thành") + "\n" + "Update: " + updateStr,
            "ongoing": data.status == 0,
            "host": "https://chivi.xyz",
        });
    }

    return null
}