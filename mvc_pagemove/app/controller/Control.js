Ext.define('MyApp.controller.Control',{
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			mainView : '#mainView',//this.getMainView()
			searchView : '#searchView',
			searchListView : '#searchListView',
			
			firstButton : '#firstButton',
			secondButton : '#secondButton',
			fButton : '#fButton',
			sButton : '#sButton'
		},
		control : {
			firstButton : {tap : 'moveFirst'},
			fButton : {tap : 'moveFirst'},
			secondButton : {tap : 'moveSecond'},
			sButton : {tap : 'moveSecond'}
		}
	},
	moveFirst : function(){
		var mainView = this.getMainView();//Main 패널 객체
		var searchView = this.getSearchView();
		mainView.setActiveItem(searchView);
	},
	moveSecond : function(){
		var mainView = this.getMainView();//Main 패널 객체
		var searchListView = this.getSearchListView();
		mainView.setActiveItem(searchListView);
	}
});






