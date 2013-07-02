Ext.define('MyApp.view.Search',{
	extend : 'Ext.Panel',
	config : {
		id : 'searchView',
		flex : 1,
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [{
			xtype : 'fieldset',
			title : '첫번째 페이지',
			items : [{
				xtype : 'button', text : '두번째 페이지호출' , id : 'sButton'
			}]
		}]
	}
});