
Ext.application({
	name:'MyApp',
	requires : ['Ext.Ajax','Ext.Toolbar','Ext.Panel'],
	launch:function(){
		var eventHandler = function(button, event){
			Ext.Ajax.request({
				url:'ajax_xml.xml',
				//url:'ajax_xml.jsp',
				success:function(response, options){
					var res = response.responseXML;
					//alert(res);
					display(res);
				},
				failure:function(response, options){ 
					Ext.Msg.alert('서버 실행 오류');
				}
			});
		};
		
		function display(res){
			listPanel.removeAll(true);
			
			var query = Ext.create('Ext.dom.Query'); //xmlDom문서 검색용 클래스
			var jikwonArray = query.select('jikwon', res);
			//alert(jikwonArray.length);
			for(var i=0; i < jikwonArray.length; i++){
				var jikwon = jikwonArray[i];  //jikwon element 얻기
				var jno = jikwon.getAttribute('jno');  //속성 값 얻기
				var jname = query.selectNode('jname', jikwon)
								.childNodes[0].nodeValue;  //element값(text) 얻기
				var jimage = query.selectNode('jimage', jikwon)
								.childNodes[0].nodeValue;
			
				var item = {
					xtype:'panel',
					html:['<table><tr><td>' + jno + '</td>' ,
					      '<td>' + jname + '</td>' , 
					      '<td><image src="../images/' + jimage ,
					      '" width=150"/></td></tr></table>'].join('')
				};
				listPanel.add(item);
			}
		}
		
		var toolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:{
				xtype:'button',
				text:'XML 자료 읽기(Ajax)',
				ui:confirm,
				handler:eventHandler
			}
		});
		
		var listPanel = Ext.create('Ext.Panel');
		
		var rootPanel = Ext.create('Ext.Panel',{
			items:[toolbar, listPanel]
		});
		
		Ext.Viewport.add(rootPanel);
	}
});