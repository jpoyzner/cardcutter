$(function() {
	$.get(location.search.substring(1).split("target=")[1], function(data) {
		var newData = data.responseText.replace('<html', '<div><html').replace('</html>','</html></div>');
		$(newData).find("table").each(function() {
			var card = $(this);
			var image = card.find('img');
			if (image.length && !card.find('form').length) {
				var cornerHTML = "<div class=\"corner\">" + card.find('p:contains("$")').first().remove().html() + "</div>";
				var imageHTML = image.parent().remove().addClass("card-image")[0].outerHTML;
				var cardHTML = cornerHTML + imageHTML + "<div class=\"card-desc\">" +  card.html() + "</div>";
				$('#output').append("<div class=\"card\">" + cardHTML + "</div>");
			}
         });
	});
	
	//test with:
	//target=http://www.ebay.com/sch/Video-Games-/139973/
});