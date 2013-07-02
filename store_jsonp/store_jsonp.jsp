<%@ page language="java" contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% String serverKey = request.getParameter("serverKey"); %>
<% if(serverKey != null){%>
	<%=serverKey%>(
		{
		  "data":[
		     {"no":"hb1", "name":"한사람", "age":"33", "tel":"010-111-1111"},
		     {"no":"hb2", "name":"신기해", "age":"33", "tel":"010-222-1111"},
		     {"no":"hb3", "name":"신기한", "age":"35", "tel":"010-333-1111"}
		  ]
		}
   );
<%}%>
