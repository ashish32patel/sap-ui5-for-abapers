sap.ui.define([
    // "sap/ui/core/mvc/Controller",
    "akp/po/walkthrough/controller/BaseController",
    "sap/ui/core/routing/History"

 ], function (BaseController,History) {
    "use strict";
    return BaseController.extend("akp.po.walkthrough.controller.Detail", {
      onInit: function () {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
      },
      _onObjectMatched: function (oEvent) {
          this.getView().bindElement({
              path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").poPath),
              model: "pos",
          }

          )
      },
    //-->now we are Reusing the onBack method defined in the BaseController.js
    //   onNavBack: function() {
    //     var oHistory = History.getInstance();
    //     var sPreviousHash = oHistory.getPreviousHash();
        
    //     if (sPreviousHash !== undefined) {
    //         window.history.go(-1);

    //     } else {
    //         var oRouter = this.getOwnerComponent().getRouter();
    //         oRouter.navTo("overview",{},true);
    //     }
    //   }

    });
 });