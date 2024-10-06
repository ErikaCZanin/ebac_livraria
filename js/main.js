$(document).ready(function(){
    $('#carroseul-imgs').slick({
       autoplay:true
    })

    $(document).ready(function(){
        $('#carroseul-produtos').slick({
          dots: true, // Adiciona navegação por pontos (opcional)
          autoplay: true, // Faz o carousel rolar automaticamente
          autoplaySpeed: 2000, // Intervalo entre a troca automática (2 segundos)
          speed: 500 // Velocidade de transição entre slides
        });
      });
      
    $('.menu-hamburguer').click(function(){
       $('.container-menu').slideToggle();
    })

    $('.container-menu a').click(function() {
        $('.container-menu').slideUp();
    });

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

   $('.lista-livros button').click(function(){
    const destino = $('#contato');
    
      const nomeLivro = $(this).parent().find('h3').text();

      $('#lInteresse').val(nomeLivro);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
   })

   $('.ver-mais').click(function() {
    const destino = $('#contato');

    $('html, body').animate({
        scrollTop: destino.offset().top
    }, 1000);
});

})