/**
 * Bootstrapper
 */
(function() {
	console.log('Brewing the coffee...');

	var deviceEvent = new Event('deviceready');
	document.addEventListener('deviceready', main);
	document.dispatchEvent(deviceEvent);

	// Create the clone
	window.cordovaClone = new CordovaClone();

})();