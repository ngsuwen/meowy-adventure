$(()=>{
    $('.popup-link').magnificPopup({
      closeBtnInside:false
    });

    // opens tutorial on load
    $.magnificPopup.open({
        items:{
            src: '#first-popup',
            type: 'inline',
        },
        gallery: {
            enabled:true
        },
        closeBtnInside:false
    })

    $('#close-button').click(function(){
        $.magnificPopup.close();
     });
})