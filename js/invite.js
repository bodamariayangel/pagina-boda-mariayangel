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
    
    // $('body').on('click', '#sendAsistencia', function(e) {
        //   e.preventDefault();
        //   if (isOkAsistencia()) //Form bien validado
        //   {
        //     // Load and disabled buttom.
        //     $("#sendAsistencia").text(lang_informandoAsistencia + "...");
        //     $("#sendAsistencia").prop("disabled", true);
        //     // Obtengo el Form.
        //     var formulario = $("#formAsistencia")[0];
        //     // Obtengo los datos del formulario
        //     var datos = new FormData(formulario);
        //     // Visualizar como viajan los datos
        //     // for (var pair of datos.entries()) {
        //     //   console.log(pair[0] + ", " + pair[1]);
        //     // }
        //     // Envio con fetch los datos mediante POST
        //     fetch(_pathApp + "producto/fetchs/confirmar-asistencia.php", {
        //         method: "POST",
        //         body: datos
        //       })
        //       // Promesas fetch
        //       .then(res => res.json())
        //       .then(data => {
        //         // Si recibo error 
        //         if (data.error === true) {
        //           $("#sendAsistencia").text(lang_confirmarAsistencia);
        //           $("#sendAsistencia").prop("disabled", false);
        //           // Imprimo el error
        //           $('#formAsistencia').after('<span id="error-form">' + data.desc + '</span>');
        //         }
        //         // Si no hay error 
        //         if (data.error === false) {
        //           $("#sendAsistencia").text(lang_confirmarAsistencia);
        //           $("#sendAsistencia").prop("disabled", false);
        //           // Oculto elementos del form y reseteo
        //           $('#formAsistencia')[0].reset();
        //           $('#modalAsistencia .formulario-content, #modalAsistencia .modal-footer, #modalAsistencia h5').hide();
        //           // Acomodo el css para centrar mensaje
        //           $('#modalAsistencia .modal-body').addClass('fix-height');
        //           // Muestro mensaje de exito
        //           $('#modalAsistencia .msj-content').html(
        //             "<h5>" + lang_asistenciaMsjExito_1 + "</h5><p>" + lang_asistenciaMsjExito_2 + "</p>"
        //           ).show();
        //           // Cierro modal y vuelvo a activar form
        //           setTimeout(function() {
        //             $('#modalAsistencia').modal('hide');
        //             $('#modalAsistencia .formulario-content, #modalAsistencia .modal-footer, #modalAsistencia h5').show();
        //             $('#modalAsistencia .msj-content').html('').hide();
        //             $('#modalAsistencia .modal-body').removeClass('fix-height');
        //           }, 4000);
        //         }
        //       });
        //   }
        // });

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