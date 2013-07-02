Ext.application({
	 name:'MyForm',
	 requires:[
	           'Ext.form.Panel',
	           'Ext.form.FieldSet', 
	           'Ext.field.Password', 
	           'Ext.TitleBar',
	           'Ext.MessageBox'],
	 launch:function(){
		 
		 var eventHandler = function(button, event){
			 console.log('test');
			 formPanel.submit({  //서버 파일 호출
				 url:'ajax_form.jsp',
				 params : [{"userid":Ext.getCmp('userid').getValue()},
				           {"pwd":Ext.getCmp('pwd').getValue()}],
				 success:function(result, response){  //서버에서 "success":true 일 때 만난다.
					 
					 if(response.loginResult == 'success'){
						 Ext.Msg.alert('로그인 성공');
					 }else if(response.loginResult == 'fail'){
						 Ext.Msg.alert('로그인 실패');
					 }
				 },
				 failure:function(result, request){
					 Ext.Msg.alert('서버 실행 오류:' + result.status);
					 //서버 접속 실패는 처리 못함(submit의 경우)
				 }
			 });
		 };
		 var formPanel = Ext.create('Ext.form.Panel', {
			 items:[{
				 xtype:'fieldset',
			    	 items:[
			    	     {xtype:'textfield', name:'userid',id:'userid', label:'아 이 디:'},
			    	     {xtype:'passwordfield', name:'pwd', id:'pwd',label:'비밀번호:',
			    	    	 	listeners : {
			    	    	 		action : function(){
			    	    	 			eventHandler();
			    	    	 		}
			    	    	 	}
			    	     },
			    	 ]
			 }]
		 });
		 var titleBar = Ext.create('Ext.TitleBar',{
			 docked:'top',
			 title:'로그인 폼',
			 items:[{
				 xtype:'button',
				 text:'입력자료 전송',
				 ui:'confirm',
				 align:'right',
				 handler:eventHandler
			 }]
		 });
		 
		 var rootPanel = Ext.create('Ext.Panel',{
			 layout:'fit',
			 items:[titleBar, formPanel]
		 });
		 Ext.Viewport.add(rootPanel);
		 
		 
	 }
});