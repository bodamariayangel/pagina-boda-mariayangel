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
            e.preventDefault();
            // if (Invite.isOkAsistencia()) {
            //     // Load and disabled buttom.
            //     $("#sendAsistencia").text("Enviando...");
            //     $("#sendAsistencia").prop("disabled", true);
                
            //     // Envio form
            //     Invite.sendAsistencia();
            // }
            Invite.sendAsistencia();
        });
    },

    //Envio de formulario
    sendAsistencia: function() {
        var $form = $('form#formAsistencia'), url = 'https://script.google.com/macros/s/AKfycbxKch4owUNw3Bv1yS5bGajVG3cQztADXSYrfCQxBBVqi3QPNxBXcEsCdxNYiW6wPb27/exec';
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject(),
            async: false,
        });

        $form.hide();
        $('#sendAsistencia').hide();
        $('.formulario-content').append("<h5>'Informaci&oacute;n enviada'</h5><p class='subtitle'>Gracias por confirmar la asistencia</p>");
        setTimeout(function() {
            $('#modalAsistencia').modal('hide');
        }, 40000);
    },

    // Validacion de form.
    isOkAsistencia: function() {

        // Remuevo mensajes de error anteriores
        $("#error-form").remove();
  
        // Variables necesarias para la validacion
        var flag = true;
        var err = '';
  
        // Variables del form para validar.
        var asistenteName = $.trim($("#nombreAsistente").val());
        var asistenteTlf = $.trim($("#telefonoAsistente").val());
        var asistenteComentarios = $.trim($("#comentariosAsistente").val());
  
        // Nombre
        if (asistenteName == '') {
          flag = false;
          err = lang_nombreRequerido;
        } else {
          if (asistenteName.length > 20) {
            flag = false;
            err = lang_caracteresNombreAsistencia;
          }
        }
  
        // Comentarios
        if (asistenteComentarios != '') {
          if (asistenteComentarios.length > 100) {
            flag = false;
            err = lang_caracteresComentariosAsistencia;
          }
        }
  
        if (flag === false) {
          $('#formAsistencia').after('<span id="error-form">' + err + '</span>');
        }
        return flag;
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
    },

    videoHeight: function() {
        var video = $('footer iframe');
        if (video.length > 0) {
            var width = video.width();
            var height = width*9/16;
            video.attr('height', height + 'px');
        }
    },
   
}
$(document).ready(function (){
    Invite.events();
    Invite.parallax();
    Invite.videoHeight();
});

$(window).resize(function(){
	Invite.videoHeight();
})