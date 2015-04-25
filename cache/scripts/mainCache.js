var appCache = {};

appCache.url = {
	server: 'http://localhost:3000/',
	indisponivel: 'http://localhost:3000/cache/indisponivel.html',
	offline: 'http://localhost:3000/cache/offline.html'
};


appCache.isServerOnline = false;

appCache.checkStatusApp = function(disponivel){

	appCache.isServerOnline = (disponivel) ? true : false;

	var intervalCheckStatusApp = setInterval(function(){

		appCache.isOnLine = navigator.onLine;

		if (appCache.isOnLine)
		{

			$.ajax({
				url: 'http://localhost:3000/ping',
				dataType: 'JSON',
				success: function(){
					appCache.isServerOnline = true;
					if ( window.parent.location.href != appCache.url.server)
						window.parent.location = appCache.url.server;
				},
				error: function(xhr, status, message){

					appCache.isServerOnline = false;
					if ( window.parent.location.href != appCache.url.indisponivel)
						window.parent.location = appCache.url.indisponivel;
				}
			});

		}else if (window.parent.location.href != appCache.url.offline) {
			window.parent.location = appCache.url.offline;
		}
	}, 3000);
};
