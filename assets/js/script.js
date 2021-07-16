$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
    $(​ "a"​ ).on(​ 'click'​ , ​ function​ (event) {
        if​ (​ this​ .hash !== ​ ""​ ) {
            event.preventDefault();
            var​ hash = ​ this​ .hash;
            $(​ 'html, body'​ ).animate({
                scrollTop: $(hash).offset().top
                }, ​ 800​ , ​ function​ (){
                    window​ .location.hash = hash;
    });
    } ​ // End if
    });
});
