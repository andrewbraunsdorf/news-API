function search() {
    var xhrCall = new XMLHttpRequest();
    const keyword = document.getElementById("keyword").value;
	 console.log(keyword);
	 const date = document.getElementById("date").value;
	 console.log(date);
	 
        var url = 'https://newsapi.org/v2/everything?' +
          'q=' + keyword + '&' +
          'from='+ date+ '&' +
          'sortBy=popularity&' +
          'apiKey='+ newsAPIKey;
}