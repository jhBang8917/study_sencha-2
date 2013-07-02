<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
request.setCharacterEncoding("utf-8");
String id = request.getParameter("userid");
String pwd = request.getParameter("pwd");
System.out.println("id : "+id+", pwd : "+pwd);
String message = null;
if(id != null && pwd != null){
	if(id.equalsIgnoreCase("user")){
		if(pwd.equals("111")){
			message = "로그인 성공";
		}else{
			message = "비밀번호 불일치";
		}
	}else{
		message = "아이디 불일치";
	}
}else{
	message = "아이디와 비밀번호를 입력!";
}
%>

<% if(message.equals("로그인 성공")){ %>
	{
	   "success":true,   //클라이언트의 success:function()을 만남
	   "loginResult":"success"
    }
<% }else{%>
    {
	   "success":true,   //클라이언트의 success:function()을 만남
	   "loginResult":"fail",
	   "message":"<%=message %>"
    }
<%}%>