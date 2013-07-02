Ext.application({
	name : 'MyApp',
	views : ['Main','Search','SearchList'],
	controllers : ['Control'],
	launch : function(){
		Ext.Viewport.add({xclass:'MyApp.view.Main'});
		Ext.Viewport.add({xclass:'MyApp.view.Search'});
		Ext.Viewport.add({xclass:'MyApp.view.SearchList'});
	}
});