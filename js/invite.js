Invite = {
    events: function(){
        $(document).on("change", "#formAsistencia .asistencia .custom-control-input", function (){
            $(".formAsistencia-info").addClass('show');
            if($(this).val()==="Si"){
                $(".formAsistencia-si").addClass('show');
            } else {
                $(".formAsistencia-si").removeClass('show');
            }
        });
        $(document).on("change", "#formAsistencia .acompanante .custom-control-input", function (){
            if($(this).val()==="Si"){
                $(".formulario-acompanante").addClass('show');
                $(".acompanante").removeClass('line-bottom');
            } else {
                $(".formulario-acompanante").removeClass('show');
                $(".acompanante").addClass('line-bottom');
            }
        });
        $(document).on("change", "#formAsistencia .ninios .custom-control-input", function (){
            if($(this).val()==="Si"){
                $(".formulario-ninios").addClass('show');
                $(".ninios").removeClass('line-bottom');
            } else {
                $(".formulario-ninios").removeClass('show');
                $(".ninios").addClass('line-bottom');
            }
        });

        $('#sendAsistencia').on('click', function(e) {
            var $form = $('form#formAsistencia'), url = 'https://script.google.com/macros/s/AKfycbxKch4owUNw3Bv1yS5bGajVG3cQztADXSYrfCQxBBVqi3QPNxBXcEsCdxNYiW6wPb27/exec';
            e.preventDefault();
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data: $form.serializeObject(),
                async: false,
                success: function(data) {
                    console.log(data);
                    $('form#formAsistencia').hide();
                    $('.formulario-content').append("<p class='subtitle'>Gracias</p>");
                },
                error: function(){
                    console.log("error");
                },
            });
        });
    },
    
    parallax: function(){
        if (device == 'mobile' || $(window).width() < 768) {
            var portadaParallax = './img/portada-mobile.jpg';
            var instagramParallax = './img/instagram_mobile.jpg';
        } else {
            var portadaParallax = './img/portada-desktop02.jpg';
            var instagramParallax = './img/instagram_mobile.jpg';
        }
        
        $('.portada').parallax({
            imageSrc: portadaParallax
        });

        $('.instagram').parallax({
            imageSrc: instagramParallax
        });
    }
   
}
$(document).ready(function (){
    Invite.events();
    Invite.parallax();
});