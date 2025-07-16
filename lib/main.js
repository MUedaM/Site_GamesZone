$(document).ready(function(){

    $('#email').mask('', {
        placeholder: 'seu@email.com'
    })

    $('#telefone').mask('(00) 0 0000 - 0000', {
        placeholder: '( _ _ )   _   _ _ _ _ -- _ _ _ _'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Este campo é obrigatorio.',
            mensagem: 'Esta campo é obrigaotiro.'
        },
    })

    document.querySelectorAll('.nav-pills .nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            const menu = document.getElementById('menu-navegacao');
            if (menu.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(menu, {toggle: false});
                bsCollapse.hide();
            }
        });
    });
})