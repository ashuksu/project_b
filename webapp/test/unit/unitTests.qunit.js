/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"appprojectb/project_b/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});