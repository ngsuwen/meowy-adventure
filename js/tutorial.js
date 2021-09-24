$(()=>{
    $('.popup-link').magnificPopup({
      closeBtnInside:true
    });

    // opens tutorial on load
    $.magnificPopup.open({
            items:{
                src: '#first-popup',
                type: 'inline'
            },
            gallery: {
                enabled:true
            }
    })
})