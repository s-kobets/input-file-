var xhr, requests;

before(function () {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function (req) { requests.push(req); };
});

after(function () {
    // Like before we must clean up when tampering with globals.
    xhr.restore();
});

it("makes a GET request for todo items", function () {
    getTodos(42, sinon.spy());

    assert.equals(requests.length, 1);
    assert.match(requests[0].url, "/todo/42/items");
});