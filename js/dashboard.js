
var Dashboard = (function(){

	//private properties and methods

	//public properties and methods
	return {
		init: function(){
			this.buildInterface();	
		},
		buildInterface: function(){
			this.buildSidebar();
			
			//handler to refresh all affixed items
			$('[data-spy="affix"]').each(function () {
			  $(this).affix('refresh');
			});
		},

		//build interface elements 
		buildSidebar: function(){
			$('.nav-list').affix();
		}
	};
})();