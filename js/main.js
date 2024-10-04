$(document).ready(function(){
    $('#carroseul-imgs').slick({
       autoplay:true
    })
 
    $('.menu-hamburguer').click(function(){
       $('nav').slideToggle();
    })

    $('#tel').mask('(00) 00000-0000',{
       placeholder: '(00) 00000-0000'
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
           tel: {
               required: true
           }
       },
       messages: {
           nome: 'Por favor, insira o nome'
       },
       submitHandler: function(form) {
           console.log(form)
       },
       invalidHandler: function(evento, validador) {
           let camposIncorretos = validador.numberOfInvalids();
           if(camposIncorretos){
               alert(`Existem ${camposIncorretos} campos incorretos`)
           }
       }
   })

   $('.lista-veiculos button').click(function(){
    const destino = $('#contato');
    
      const nomeVeiculo = $(this).parent().find('h3').text();

      $('#vInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
   })

})