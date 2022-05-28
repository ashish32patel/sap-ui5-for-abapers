sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent",
  ],
  function (Controller, History, UIComponent) {
    "use strict";
    return Controller.extend("akp.po.walkthrough.controller.BaseController", {
        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },

        
      onBack: function() {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();
        
        if (sPreviousHash !== undefined) {
            window.history.go(-1);

        } else {
            var oRouter = this.getRouter(); 
            oRouter.navTo("overview",{},true);
        }
      }
    });
  }
);
