$(function() {
	var container = $("#result-container");
	container.append('<div class="col-sm-4">');
	$.getJSON("https://fotoprojekt2015.cloudcontrolled.com/api.php", function(data) {
		$.each(data, function(key, value) {
			if(key == 3 || key == 7) {
				container.append('</div>');
				container.append('<div class="col-sm-4">');
			}
			container.find('.col-sm-4:last-child').append('<h2>'+ (key+1) +'.</h2><div class="tweet" id="tweet-' + value.id_str + '" tweetID="' + value.id_str + '"></div>');
			twttr.widgets.createTweet(
				value.id_str,
				document.getElementById('tweet-' + value.id_str),
				{
					align        : 'left',
					conversation : 'all',    // or all
					linkColor    : '#999999', // default is blue
					cards        : 'visible'  // or hidden
				}
			)
			.then (function (el) {
				// el.contentDocument.querySelector(".footer").style.display = "none";
			});
		});
	});
	container.append('</div>');
});
