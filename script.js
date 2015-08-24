function parseQuote(response)
		{
			$(".quote").html( response.quoteText);
			$(".author").html( response.quoteAuthor);
      
      // change tweet data
      //delete old button
      $("#new-button").html("");
      
      //create new button
      twttr.widgets.createShareButton(
        'http://freecodecamp.com/',
        document.getElementById('new-button'),
        {
          count: 'none',
          size: 'large',
          text: " - "+ response.quoteText + " - " + response.quoteAuthor
        }).then(function (el) {
          console.log("Button created.")
        });
		}

function getNewQuote(){
  var API="http://api.forismatic.com/api/1.0/?callback=?&method=getQuote&lang=en&format=jsonp&jsonp=parseQuote";
  $.getJSON(API, function(result){
      
    });
}

$(document).ready(function() { 
  
   getNewQuote();
  
  $('#more').click(function(){
    getNewQuote();
    
  }); 
});