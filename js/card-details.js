function addToDeck(sn){
  let deckSn = 'd'+sn
  let $button = $('<img>').attr('src',`./src/${sn}.png`)
  $button.attr('id', deckSn)
  $('#tomDeck').prepend($button)
}

function removeFromDeck(sn){
  $($(`#d${sn}`)[0]).remove()
}

$(()=>{
  $(document).on('mousedown','.open-gallery-link', (function(event) {
    let sn=$(event.currentTarget).attr('id').substr(1)
    $('.card-detail').text(cardList[Number(sn)].effect)
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
        }});
    },500)
    $('.open-gallery-link').bind('mouseup mouseleave', function(){clearTimeout(timeout_id)})
  }));
})