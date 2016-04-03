var createViewModel = require("./main-view-model").createViewModel;
var frameModule =require("ui/frame");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

exports.changePage=function() {
    // console.log("Navigating");
    var navigationOptions={
        moduleName:'otherPages/pageTwo',
        context:{param1: "value1",
                param2: "value2"
                }
    }
    
    frameModule.topmost().navigate(navigationOptions);
}