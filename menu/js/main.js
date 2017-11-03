$(document).ready(function() {
    $('.logo-nav').click(function(event) {
        $('.gnav').toggleClass('active');
        $('.group-list').removeClass('active');
    });
    $('.gnav-sub-level1').click(function(event) {
        event.preventDefault();
        let dataSub2 = $(this).attr('data-menuLv2');
        $('.group-list').removeClass('active');
        $('.gnav-sub-level2').removeClass('open-items');
        $("#" + dataSub2).addClass('open-items');
        $('.group-level2').addClass('active');
    });
    $('.group-level2 li').click(function(event) {
        let dataSub3 = $(this).attr('data-menuLv3');
        $('.gnav-sub-level3').removeClass('open-items');
        $("#" + dataSub3).addClass('open-items');
        $('.group-level3').addClass('active');
    });

});
