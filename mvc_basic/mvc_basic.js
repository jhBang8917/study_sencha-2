Ext.application({
	name : 'MyApp',
	views : ['MyApp.view.Welcome'],
	appFolder : 'app',
	launch : function() {
		Ext.create('MyApp.view.Welcome',{fullscreen : true});
	}
});