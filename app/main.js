System.register(['react', 'react-dom', './my-first'], function(exports_1) {
    "use strict";
    var React, ReactDOM, my_first_1;
    var dom, appContainer;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (my_first_1_1) {
                my_first_1 = my_first_1_1;
            }],
        execute: function() {
            dom = (React.createElement("div", null, React.createElement(my_first_1.MyView, {name: "Piotr", age: 33, "unknown-prop": 3})));
            appContainer = document.getElementById("app-container");
            ReactDOM.render(dom, appContainer);
        }
    }
});
//# sourceMappingURL=main.js.map