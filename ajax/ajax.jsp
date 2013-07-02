<%@ page contentType="text/html;charset=utf-8"  pageEncoding="utf-8" %>
<%

    request.setCharacterEncoding("utf-8");
    int firstNum  = Integer.parseInt(request.getParameter("firstNum"));
    int secondNum = Integer.parseInt(request.getParameter("secondNum")); 
    
    StringBuffer rtnVal = new StringBuffer();
    
    rtnVal.append("{\"data\":")
          .append("\"")
          .append(String.valueOf(firstNum + secondNum))
          .append("\"")
          .append("}");
    out.println(rtnVal);
%>