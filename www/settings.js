var NativeSettings = function() {
};

NativeSettings.open = function(setting, onsucess, onfail) {
	var settings = (typeof setting === 'string' || setting instanceof String) ? [setting] : setting;
	cordova.exec(onsucess, onfail, "NativeSettings", "open", settings);
};

NativeSettings.hasPermission = function(onsucess, onfail) {
	cordova.exec(onsucess, onfail, "NativeSettings", "hasPermission");
};

NativeSettings.requestPermission = function(onsucess, onfail) {
	cordova.exec(onsucess, onfail, "NativeSettings", "requestPermission");
};

module.exports = NativeSettings;
