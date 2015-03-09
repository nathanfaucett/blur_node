var Browser = require("zombie"),
    blurNode = require("../src/index");


describe("blurNode(node : Node)", function() {
    before(function(done) {
        var _this = this;

        Browser.visit("http://localhost", function(e, browser) {
            _this.document = browser.window.document;
            done();
        });
    });

    it("should blur element without throwing an error in ie", function() {
        var a = this.document.createElement("input");

        this.document.body.appendChild(a);
        blurNode(a);
    });
});
