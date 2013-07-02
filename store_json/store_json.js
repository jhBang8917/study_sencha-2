Ext.application({
	launch : function(){
		Ext.define('MyApp.model',{
			extend : 'Ext.data.Model',
			config : {
				fields : ['no','name','age','tel']
			}
		});
		var ajaxProxy = Ext.create('Ext.data.proxy.Ajax',{
			url : 'store_json.jsp',
			reader : {
				type : 'json',
				rootProperty : 'data'//daum openapi => channel.item
			}
		});
		
		var userStore = Ext.create('Ext.data.Store',{
			//autoLoad : true,
			model : 'MyApp.model',
			proxy : ajaxProxy
		});
		
		
		var dataList = Ext.create('Ext.dataview.List',{
			flex : 1,
			store : userStore,
			itemTpl : '<div>{no} {name} {age} {tel}</div>'
		});
		var titleBar = Ext.create('Ext.TitleBar',{
			docked : 'top',
			title : '직원정보목록(모두)',
			items : [{
				xtype : 'button',
				text : '전체보기',
				align : 'right',
				handler : function(){
					//????
					userStore.load();
				}
			}]
		});
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen : true,
			layout : {
				type : 'vbox'
			},
			items : [titleBar,dataList]
		});
		Ext.Viewport.add(rootPanel);
	}
});