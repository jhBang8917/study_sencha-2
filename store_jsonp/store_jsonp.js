Ext.application({
	launch : function(){
		Ext.define('MyApp.model',{
			extend : 'Ext.data.Model',
			config : {
				fields : ['no','name','age','tel']
			}
		});
		var ajaxProxy = Ext.create('Ext.data.proxy.JsonP',{
			url : 'http://hanbit1.cafe24.com/sencha/store_jsonp.jsp',
			callbackKey : 'serverKey',
			reader : {
				type : 'json',
				rootProperty : 'data'
			}
		});
		
		var userStore = Ext.create('Ext.data.Store',{
			model : 'MyApp.model',
			proxy : ajaxProxy
		});
		var dataList = Ext.create('Ext.dataview.List',{
			store : userStore,
			itemTpl : '{no} {name} {age} {tel}'
		});
		var titleBar = Ext.create('Ext.TitleBar',{
			docked : 'top',
			title : '직원목록모두보기(JsonP)',
			items : [{
				xtype : 'button',
				text : '전체보기',
				handler : function(){
					userStore.load();
				}
			}]
		});
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen : true,
			layout : 'fit',
			items : [titleBar, dataList]
		});
		Ext.Viewport.add(rootPanel);
	}
});