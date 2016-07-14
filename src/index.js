var isNode = require("@nathanfaucett/is_node");


module.exports = blurNode;


function blurNode(node) {
    if (isNode(node) && node.blur) {
        try {
            node.blur();
        } catch (e) {}
    }
}
