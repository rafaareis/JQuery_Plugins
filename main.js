$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('+00(00)00000-0000', {
        placeholder:'+__(__)_____-____'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculo: {
                required: false,
            }
        },

        messages: {
            nome: 'Por favor, insira o seu nome.'
        },

        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})