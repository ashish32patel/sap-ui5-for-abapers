sap.ui.define([
    "sap/ui/core/mvc/Controller"

 ], function (Controller) {
    "use strict";
    return Controller.extend("akp.po.walkthrough.controller.Detail", {
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
      }

    });
 });