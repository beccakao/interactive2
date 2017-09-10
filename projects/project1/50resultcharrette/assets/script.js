// $(document).ready(function(){
	
// 	$('#button-4').click(function() {
// 		$('#button-3').animate({
// 			opacity: 0.4,
// 			marginLeft: '0.6in',
// 			fontSize: '24px',
// 			borderWidth: '10px'
// 		}, 1000 );
// 	});

// 	$('#button-4').mouseover(function() {
// 		$('.item').animate({
// 			marginLeft: '1in'
// 		}, 1000 );
// 	});

$(document).ready(function(){
	// Make text larger
	$('#button-1').click(function() {
		$(this).animate({
			fontSize: '333px',
		}, 1000 );
	});
	// Change background color
	$('#button-2').click(function() {
		$(this).animate({
			fontSize: '333px',
		}, 1000 );
		$(this).css("background-color","red")
	});
	// Change background opacity
	$('#button-3').click(function() {
		$(this).animate({
			fontSize: '333px',
			opacity: 0.5,
		}, 1000 );
		$(this).css("background-color","red")
	});
	// Change height
	$('#button-4').click(function() {
		$(this).animate({
			fontSize: '333px',
			height: '50%',
		}, 1000 );
	});
	// Change width
	$('#button-5').click(function() {
		$(this).animate({
			fontSize: '333px',
			width: '9%',
		}, 1000 );
	});
	// "Fade out"
	$('#button-6').click(function() {
		$(this).animate({
			fontSize: '333px',
			opacity:0,
		}, 1000 );
	}); 
	// Pop up
	$('#button-7').click(function() {
		$(this).animate({
			fontSize: '333px',
		}, 3000 );
		alert("7 IS A LUCKY NUMBER.");
	});
	// Make new text appear
	$('#button-8').click(function() {
		$(this).text(":)");
		$(this).css("font-family","helvetica, arial, sans-serif")
		$(this).css("font-weight","bold")
		$(this).css("font-size","12em")
		$(this).css("text-align","center")
		$(this).css("vertical-align","middle")
	});

    $('#button-9').click(function() {
	});

	// Hide
	$('#button-45').click(function() {
		$(this).hide()
	});

	// Close tab
	$('#button-50').click(function closeWin() {
    	window.top.close();
	});
});











