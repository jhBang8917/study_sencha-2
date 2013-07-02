<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
//Thread.sleep(2000);
String funcName = request.getParameter("callback");
%>

<% if(funcName != null){ %>
		<%=funcName %>(
			[
			  {"jno":"근로자1", "jname":"신기해", "jimage":"s3.png"},
			  {"jno":"근로자2", "jname":"두송이", "jimage":"s4.png"},
			  {"jno":"근로자3", "jname":"한가해", "jimage":"s5.png"}
			]
		);
<%}%>