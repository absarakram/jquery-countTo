
var eventFired = false;
$(window).scroll(function(){

	$('.countto').each(function(){
		var checkview = isScrolledIntoView( $( this ) );
		if(checkview === true  && eventFired === false){
  		$( '.countto' ).each( count );
  		eventFired = true;
		}
	});

});


function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
