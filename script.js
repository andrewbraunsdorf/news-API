function search() {
    var xhrCall = new XMLHttpRequest();
    const keyword = document.getElementById("keyword").value;
    console.log(keyword);
    const date = document.getElementById("date").value;
    console.log(date);

    var url = 'https://newsapi.org/v2/everything?' +
        'q=' + keyword + '&' +
        'from=' + date + '&' +
        'sortBy=popularity&' +
        'apiKey=' + newsAPIKey;

    xhrCall.open('GET', url, true);

    //onload check the readystate automatically, but not the status
    xhrCall.onload = function() {

        var objectData = JSON.parse(this.responseText);
        console.log(objectData)
        document.getElementById('results').innerHTML = ''
        // data.articles
    };
    // console.log(xhrCall);

    xhrCall.send();

    // console.log('The button was clicked!');
}
