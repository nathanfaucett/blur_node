var tape = require("tape"),
    getActiveElement = require("get_active_element"),
    blurNode = require("..");


tape("blurNode(node : Node) should blur element without throwing an error in ie", function(assert) {
    var input = document.createElement("input");

    document.body.appendChild(input);

    try {
        input.focus();
    } catch (e) {}
    blurNode(input);

    assert.notEqual(input, getActiveElement());

    assert.end();
});
