function getAuth(service) {
    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });
    $.ajaxSetup({ "async": false });
    return $.getJSON(service + "/auth.json", function (data) {
        return data;
    }).fail(function (d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: " + error)
    });
}