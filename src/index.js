var isNode = require("is_node");


module.exports = function blurNode(node) {
    if (isNode(node) && node.blur) {
        try {
            node.blur();
        } catch (e) {}
    }
};
