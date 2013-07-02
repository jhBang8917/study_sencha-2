Ext.define('MyApp.view.Main',{
	extend : 'Ext.Panel',
	config : {
		id : 'mainView',
		layout : {
			type : 'card',
			animation : 'slide'
		},
		items : [{
			xtype : 'toolbar',
			docked : 'top',
			items : [{
				xtype : 'button', text : '첫번째', id : 'firstButton'
			},{
				xtype : 'button', text : '두번째', id : 'secondButton'
			}]
		}]
	}
});