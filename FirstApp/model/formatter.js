sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "CONF":
					return resourceBundle.getText("CONF");
				case "PEND":
					return resourceBundle.getText("PEND");
				case "OPEN":
					return resourceBundle.getText("OPEN");
				default:
					return sStatus;
			}
		}
	};
});