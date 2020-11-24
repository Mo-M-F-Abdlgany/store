$('.navbar-nav li').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})

// $(".navbar").sticky({
//     topSpacing: 0,
//     zIndex: '50'
//   });



