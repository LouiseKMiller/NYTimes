$('#searchButton').on('click', function() {
	var searchTerm = $('#searchTerm').val();
	var numRecords = $('#numRecords').val();
	var startYear = $('#startYear').val();
	var endYear = $('#endYear').val();
	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + searchTerm + "&page=" + numRecords + "&begin_date=" + startYear + "&end_date=" + endYear;
	if (numRecords == undefined) numRecords="";
	if (startYear == undefined) startYear="";
	if (endYear == undefined) endYear="";

	$.ajax({
		url: queryUrl,
		method: 'GET'
	})
	.done(function(data) {
		console.log(data);
	});
});