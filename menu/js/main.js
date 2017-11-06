$(document).ready(function() {
    $('.logo-nav').click(function(event) {
        $('.background-menu').toggleClass('open');
        $('.gnav').stop().toggleClass('active');
        $('.group-list').removeClass('active');
        $('.btn-menu-top').stop().toggleClass('active');
    });
    // click open Col menu 2
    $('.gnav-sub-level1').click(function(event) {
        event.preventDefault();
        let dataSub2 = $(this).attr('data-menuLv2');
        $('.group-list').removeClass('active');
        $('.gnav-sub-level2').removeClass('open-items');
        $("#" + dataSub2).addClass('open-items');
        $('.group-level2').addClass('active');
    });
    // click open Col menu 3
    $('.gnav-sub-level2 li').click(function(event) {
        event.preventDefault();
        let dataSub3 = $(this).attr('data-menuLv3');
        $('.gnav-sub-level3').removeClass('open-items');
        $("#" + dataSub3).addClass('open-items');
        $('.group-level3').addClass('active');
    });
    // Click hightlight button gnav
    $('.gnav-sub-level1 a').click(function(event) {
        $('.gnav-btn-icon').removeClass('light');
        $(this).find('.gnav-btn-icon').addClass('light');
    });
    $('.gnav-sub-level2 a').click(function(event) {
        $('.gnav-sub-level2 .gnav-btn-icon').removeClass('light');
        $(this).find('.gnav-btn-icon').addClass('light');
    });

    let widthBr = $(window).width();
    if (widthBr >= 780) {
        $(window).scroll(function(event) {
            if ($(this).scrollTop() > 75) {
                $('.bg-header').addClass('closed');
            } else {
                $('.bg-header').removeClass('closed');
                $('.logo-nav').click(function(event) {
                    $('.bg-header').toggleClass('closed');
                });
            }
        });
    }
});
