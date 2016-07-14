var tape = require("tape"),
    blurNode = require("..");


tape("blurNode(node : Node) should blur element without throwing an error in ie", function(assert) {
    var input = document.createElement("input");

    document.body.appendChild(input);

    input.focus();
    blurNode(input);

    assert.notEqual(input, document.activeElement);

    assert.end();
});
