var user;
jQuery(function($) {
    "use strict";
   	$.ajax({
        url: "/api/profile",
        type: "GET",
        headers:{ "Authorization": 'Bearer ' + getToken()},
        success: function(data) {
        	$(".contentAreaInner").css("display","block")
        	console.log(data);
          user = data;
        	$("#logout").text("" + data.name);
        	$("#userName").text(data.name);
          if(isUserAdmin()) {
            $("#myTicketsLi").text("All tickets");
          }
    	},
        error: function() { window.location.href = '/'}
    });

   	$("#logout").click(function() {
   		 localStorage.removeItem("xDocToken");
   		 window.location.href="/";
   	});
});
function isUserAdmin() {
   if(user.status == 1)
      return true;
    return false;
}