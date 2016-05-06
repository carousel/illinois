$('.desktop-button-search').click(function(e){
 
     var value = $('.search-wrapper-input').val();
    $('.search-wrapper').remove();
    $('.desktop-content').remove();
   
    alert('Your search query: ' + value);
});
