
jQuery(function($) {
    "use strict";
    $( "#addTicketForm" ).submit(function( event ) {
        var formData = {};
        $("#addTicketForm").find("input[name]").each(function (index, node) {
            formData[node.name] = node.value;
        });
        formData["email"]= user.email;
        formData["reporter"] = user.name;
        formData["description"] = $("#writeDetails").val();
        $.ajax({
          type: "POST",
          url: "/api/addTicket",
          data: formData,
          success: function(data) {
            window.location.href = "/home";
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
             console.log(errorThrown);
          }
        });

        event.preventDefault();
        event.stopPropagation();
        return false;
    });

});