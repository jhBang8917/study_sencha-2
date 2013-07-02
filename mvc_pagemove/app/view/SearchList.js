Ext.define('MyApp.view.SearchList',{
	extend : 'Ext.Panel',
	config : {
		id : 'searchListView',
		flex : 1,
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [{
			xtype : 'fieldset',
			title : '두번째 페이지',
			items : [{
				xtype : 'button', text : '첫번째 페이지호출' , id : 'fButton'
			}]
		}]
	}
});