var appCache = {};

appCache.url = {};

appCache.url.base = 'http://localhost:3000/';
appCache.url.server = appCache.url.base;
appCache.url.serverPing = appCache.url.base + 'ping';
appCache.url.indisponivel = appCache.url.base + 'cache/indisponivel.html';
appCache.url.offline = appCache.url.base + 'cache/offline.html';

appCache.INTERVAL_TIME = 3000;
appCache.isServerOnline = false;


appCache.startCheckStatusApp = function(){

	appCache.checkStatusApp( appCache.setServerOn, appCache.setServerOff, appCache.setClientConnectionOff );

	appCache.INTERVAL_CHECK_STATUS_APP = setInterval(function(){
			appCache.checkStatusApp( appCache.setServerOn, appCache.setServerOff, appCache.setClientConnectionOff );
		},
		appCache.INTERVAL_TIME
	);
};
appCache.setServerOn = function(online){
	appCache.isServerOnline = true;
	if ( window.parent.location.href != appCache.url.server)
		window.parent.location = appCache.url.server;
};
appCache.setServerOff = function(online){
	if (appCache.isOnline()) {
		appCache.isServerOnline = false;
		if ( window.parent.location.href != appCache.url.indisponivel)
			window.parent.location = appCache.url.indisponivel;
	}else{
		appCache.setClientConnectionOff();
	}
};
appCache.setClientConnectionOff = function(){
	if (window.parent.location.href != appCache.url.offline)
		window.parent.location = appCache.url.offline;
};
appCache.checkStatusApp = function(callback_online, callback_offiline){

	callback_online = typeof(callback_online) === 'function' ? callback_online : new Function();
	callback_offiline = typeof(callback_offiline) === 'function' ? callback_offiline : new Function();

	$.ajax({
		url: 'http://localhost:3000/ping',
		dataType: 'JSON',
		success: callback_online,
		error: callback_offiline
	});

};
appCache.isOnline = function(){

	if ( 'onLine' in window.navigator ){

		return navigator.onLine;

	}else{

		var xhr = new XMLHttpRequest();
		var onLine;

		// phone home
		xhr.open('HEAD', '/', false); // async=false
		try {
			xhr.send();
			onLine = true;
		} catch (e) {
			// throws NETWORK_ERR when disconnected
			onLine = false;
		}

		return onLine;
	}
};
