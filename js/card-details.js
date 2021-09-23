$(()=>{
    $('.open-gallery-link').mousedown(function() {
        var items = [];
        $( $(this).attr('href') ).find('.card-detail').each(function() {
          items.push( {
            src: $(this) 
          } );
        });
        let timeout_id=setTimeout(function(){
            $.magnificPopup.open({
            items:items,
            gallery: {
                enabled: true 
            } 
        });
    },1000)
    $('.open-gallery-link').bind('mouseup mouseleave', function(){clearTimeout(timeout_id)})
    });
})