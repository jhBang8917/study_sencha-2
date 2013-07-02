<%@page import="java.sql.*"%>
<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
[
<%
Connection conn = null;
PreparedStatement pstmt = null;
ResultSet rs = null;
String result = "";

try{
	Class.forName("oracle.jdbc.driver.OracleDriver");
	conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "scott", "tiger");
}catch(Exception e){
	System.out.println("연결 오류:" + e.getMessage());
	return;
}

try{
	pstmt = conn.prepareStatement("select * from sangdata order by code asc");
	rs = pstmt.executeQuery();
	while(rs.next()){
		result += "{";
		result += "\"code\":" + "\"" + rs.getString("code") + "\",";
		result += "\"sang\":" + "\"" + rs.getString("sang") + "\",";
		result += "\"su\":" + "\"" + rs.getString("su") + "\",";
		result += "\"dan\":" + "\"" + rs.getString("dan") + "\"";
		result += "},";
	}
	if(result.length() > 0){
		result = result.substring(0, result.length() - 1);
	}
	out.print(result);
}catch(Exception e){
	System.out.println("처리 오류:" + e.getMessage());
}
%>
]




