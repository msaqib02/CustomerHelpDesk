

            $(document).ready(function () {

                discussionsViewModel.getList();

            });

            var discussionsViewModel = {
                discussionsList: ko.observableArray(),
                completeList :ko.observableArray(),
                titleSearch : ko.observable(),
                getList: function () {
                    var self = this;
                      	$.ajax({
				        url: "/api/profile",
				        type: "GET",
				        headers:{ "Authorization": 'Bearer ' + getToken()},
				        success: function(data) {
					        user = data;
					        $.ajax({
		                        url: "api//getTickets",
		                        success: function (response) {
		                            $.each(response, function (index, element) {
		                            	if( element.email != undefined &&  element.description != undefined  &&  element.title != undefined && (user.status == 1 || element.email == user.email)) {
		                               		self.discussionsList.push(element);
		                               		self.completeList.push(element);
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
                searchData : function() {
                	var self = this;
                	var filter = self.titleSearch();
				        
				    if (filter != "") {
				    	self.discussionsList([]);
				        ko.utils.arrayForEach(self.completeList(), function (item) {
				            if (item.description.indexOf(filter) >= 0 || item.title.indexOf(filter) >= 0|| item.email.indexOf(filter) >= 0) {
				                self.discussionsList.push(item);
				            }

				        });
				    } 
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
