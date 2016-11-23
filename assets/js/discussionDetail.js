
			var formData = {}
			function getParameterByName(name, url) {
			    if (!url) {
			      url = window.location.href;
			    }
			    name = name.replace(/[\[\]]/g, "\\$&");
			    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			        results = regex.exec(url);
			    if (!results) return null;
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, " "));
			}
			          
			$(document).ready(function () {
				formData["id"]= getParameterByName("id");
                discussionsViewModel.getDetail();
                 $( "#addCommentForm" ).submit(function( event ) { 
			        var formData2 = {};
			        formData2["email"]= user.email;
			        formData2["userName"] = user.name;
			        formData2["message"] = $("#writeDetails").val();
			        formData2["ticketId"] =getParameterByName("id");
			        $.ajax({
			          type: "POST",
			          url: "/api/addComment",
			          data: formData2,
			          success: function(data) {
			            window.location.href = "/discussions";
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

            var discussionsViewModel = {
                discussion: ko.observable({title:"",description:"",reporter:""}),
                commentsList :ko.observableArray(),
                userComment:ko.observable(),
                getDetail: function () {
                    var self = this;
					
                      	$.ajax({
				        url: "/api/profile",
				        type: "GET",
				        headers:{ "Authorization": 'Bearer ' + getToken()},
				        success: function(data) {
					        user = data;
					        $.ajax({
		                        url: "api/getTicket",
		                        data: formData,
		                        type: "POST",
		                        success: function (response) {
		                        	console.log(response);
		                          	self.discussion(response);
		                          	$.ajax({
				                        url: "api/getAllComments",
				                        data: formData,
				                        type: "POST",
				                        success: function (comments) {
				                        	console.log(comments);
				                          	self.commentsList(comments);
				                          	
				                        },
				                        error: function (jqXHR, status, error) {
				                            console.log(error);
				                        }
				                    });
		                        },
		                        error: function (jqXHR, status, error) {
		                            console.log(error);
		                        }
		                    });
				    	}
                  	});
                },
                addComment :function() {
                	var self = this;
                }
            };
            ko.bindingHandlers.bindHTML = {
                'init': function () {
                },
                'update': function (element, valueAccessor) {
                    ko.utils.setHtml(element, valueAccessor());
                }
            }
            ko.applyBindings(discussionsViewModel);
