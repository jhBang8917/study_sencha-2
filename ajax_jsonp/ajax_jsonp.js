Ext.application({
	requires : ['Ext.data.JsonP','Ext.Panel','Ext.Toolbar'],
	launch : function() {
		var eventHandler = function(button, event){
			Ext.Viewport.mask({xtype:'loadmask',message:'loading...'});
			Ext.data.JsonP.request({
				url : 'http://hanbit1.cafe24.com/sencha/ajax_jsonp.jsp',
				callbackKey : 'callback',
				success : function(result){
					Ext.Viewport.unmask();
					display(result);
				},
				failure : function(result){
					Ext.Viewport.unmask();
				}
				
			});
		}
		
		function display(resArr){
			//listPanel.removeAll(true);
			
			for(var i in resArr){
				var jikwon = resArr[i];
				var jno = jikwon.jno;
				var jname = jikwon.jname;
				var jimage = jikwon.jimage;
				
				var item = {
						xtype : 'panel',
						html : ['<table><tr><td>'+jno+'</td><td>'+jname,
								'</td><td><image src="../images/'+jimage,
								'" width="200"/></td></tr></table>'].join('')
				};
				
				listPanel.add(item);
			}
		}
		var toolbar = Ext.create('Ext.Toolbar',{
			docked : 'top',
			items : {
				xtype : 'button',
				text : 'JSONP가져오기',
				ui : 'confirm',
				handler : eventHandler
			}
		
		});
		
		var listPanel = Ext.create('Ext.Panel');
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			scrollable : true,
			items : [toolbar, listPanel]
		});
		Ext.Viewport.add(rootPanel);
	}
});