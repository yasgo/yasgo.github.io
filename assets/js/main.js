var mainFunction = 
{

	elements: {

		grid 			: $(".portfolio-grid"),

		gridItem 		: $(".portfolio-grid-item"),

		skillsItem 		: $("main .skills-section .skills-item"),

		readMoreButton 	: $("main .portfolio-section .read-more-button"),

		preloader 		: $(".preloader"),

		preloaderBar 	: $(".preloader .bar")

	},

	PORTFOLIO_COLLECTION : [],

	MAX_SHOW_PORTFOLIO_ITEM : 4,

	init: function(){

		mainFunction.preloaderSettings();

		mainFunction.setIsotope();

		mainFunction.getDataPortfolioItem();

		mainFunction.showPortfolioItem();

		mainFunction.clickSettings();

		mainFunction.resizeSettings();
		
	},

	resizeSettings: function(){
		setInterval(function(){
			mainFunction.elements.grid.masonry('layout');
		}, 1000);
	},

	preloaderSettings: function(){
		mainFunction.elements.preloaderBar.addClass("active");
		setTimeout(function(){
			mainFunction.elements.preloader.animate({opacity:0}, 500, function(){
				$(this).remove();
				$("html").removeClass("preload");
			})
		}, 3000);
	},

	clickSettings: function(){
		mainFunction.elements.skillsItem.on("click", function(e){
			e.preventDefault();
		});

		mainFunction.elements.readMoreButton.on("click", function(e){
			e.preventDefault();
			mainFunction.showPortfolioItem();
		});
	},

	showPortfolioItem: function(){
		for (var i = 0; i < mainFunction.MAX_SHOW_PORTFOLIO_ITEM; i++) {
			mainFunction.addPortfolioItem( mainFunction.PORTFOLIO_COLLECTION[0] );
			mainFunction.PORTFOLIO_COLLECTION.shift();
		}
		if(mainFunction.PORTFOLIO_COLLECTION.length == 0) {
			mainFunction.elements.readMoreButton.remove();
		}
	},

	setIsotope: function() {
		mainFunction.elements.grid.masonry({
			itemSelector: '.portfolio-grid-item',
			layoutMode: 'fitRows',
			isAnimated: true
		});
	},

	getDataPortfolioItem: function() {
		mainFunction.elements.gridItem.each(function(i) {
			mainFunction.PORTFOLIO_COLLECTION.push($(this));
		});
		mainFunction.elements.gridItem.remove();
		mainFunction.elements.grid.masonry('reloadItems')
		mainFunction.elements.grid.masonry('layout');

	},

	addPortfolioItem: function(item) {
		mainFunction.elements.grid.append( item ).masonry( 'appended', item );
		mainFunction.elements.grid.masonry('reloadItems')
		mainFunction.elements.grid.masonry('layout');
	}

};

$(document).ready(mainFunction.init);