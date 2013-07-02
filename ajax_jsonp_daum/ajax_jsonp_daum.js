Ext.application({
	requires : ['Ext.data.JsonP','Ext.Panel','Ext.Toolbar'],
	launch : function() {
		var eventHandler = function(button, event){
			Ext.Viewport.mask({xtype:'loadmask',message:'loading...'});
			Ext.data.JsonP.request({
				url : 'http://apis.daum.net/search/book',
				callbackKey : 'callback',
				params : {
					"apikey" : "DAUM_SEARCH_DEMO_APIKEY",
					"output" : "json",
					"q" : "java"
				},
				success : function(result){
					Ext.Viewport.unmask();
					display(result);
				},
				failure : function(result){
					Ext.Viewport.unmask();
				}
				
			});
		}
		var convert = function(v) {
            var before = v;
            var title = before.replace(/(&lt;)/g,'<').replace(/(&gt;)/g,'>');
            return title;
        }
		function display(resArr){
			listPanel.removeAll(true);
			var items = resArr.channel.item;
			for(var i in items){
				var item = items[i];
				var title = item.title;
				var cover_s_url = item.cover_s_url;
				
				var pItem = {
						xtype : 'panel',
						html : '<table><tr><td><image src="'+cover_s_url+'" />'+
						'</td><td>'+convert(title)+'</td></tr></table>'
				}
				
				listPanel.add(pItem);
			}
		}
		var toolbar = Ext.create('Ext.Toolbar',{
			docked : 'top',
			items : {
				xtype : 'button',
				text : '다음API가져오기',
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