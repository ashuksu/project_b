sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("app.project.b.projectb.controller.Main", {
        onInit() {
        },
        clickMe() {
            this.getView().byId('logo_image').setVisible(true);
        }
    });
});