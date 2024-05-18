// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("test1.invoices.controller.App", {
            onInit: function () {

            },

            onShowHello: function () {
              var oBundle = this.getView().getModel("i18n").getResourceBundle();
              var sRecipinet = this.getView().getModel().getProperty("/recipient/name");
              var sMsg = oBundle.getText("helloMsg", [sRecipinet]);
              MessageToast.show(sMsg);
            }
        });
    });
