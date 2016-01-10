System.register(["react"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React;
    var MyView;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            }],
        execute: function() {
            MyView = (function (_super) {
                __extends(MyView, _super);
                function MyView() {
                    var _this = this;
                    _super.apply(this, arguments);
                    this.state = {
                        complete: false
                    };
                    this.getStatus = function () {
                        return (_this.state.complete ? "complete" : "incomplete");
                    };
                    this.toggleCompletion = function () {
                        _this.setState({ complete: !_this.state.complete });
                    };
                }
                MyView.prototype.render = function () {
                    return (React.createElement("div", null, React.createElement("div", null, this.props.name, " is ", this.props.age), React.createElement("div", null, "Task: ", this.getStatus()), React.createElement("button", {onClick: this.toggleCompletion}, "Toggle completion")));
                };
                return MyView;
            }(React.Component));
            exports_1("MyView", MyView);
        }
    }
});
//# sourceMappingURL=my-first.js.map