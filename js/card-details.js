$(()=>{
    $('.open-gallery-link').mouseover(function() {
        var items = [];
        $( $(this).attr('href') ).find('.card-detail').each(function() {
          items.push( {
            src: $(this) 
          } );
        });
        $.magnificPopup.open({
          items:items,
          gallery: {
            enabled: true 
          }
        });
    });
})