$(document).ready(function(){
    // allo scorrere del mouse su dropdown deve apparire e scomparire
    var scorriIn = $('.whithdropdown');
    scorriIn.mouseenter(function(){

        var drop = $('.dropdown');
        drop.removeClass('hidden');

    });

     // rimuovo all'uscire con il mouse
     var scorriOut = $('.whithdropdown');
     scorriOut.mouseleave(function(){

        var drop = $('.dropdown');
        drop.addClass('hidden');

    });

    // Cambiamento Chevron vicino a IT passandoci sopra con il mouse 
    var chevronChange = $('.chevron');
    chevronChange.mouseenter(function(){

        // da su a giù:
        var invert=$ ('i');
        invert.removeClass('fa-chevron-up');
        invert.html('<i class="fas fa-chevron-down"></i>');
    });

     // da giù a su:
     var chevronChangeUp =$('.chevron')
     chevronChangeUp.mouseleave(function(){
        var invertUp =$ ('i');
        // invertUp.removeClass('fa-chevron-down');
        invertUp.html('<i class="fas fa-chevron-up"></i>');

    });


    // 
    // BONUS:___________________________
    // 
    // AL clicpk su hamburger deve apparire il burger menu

    var burgerMenu = $('.hamburger');
    burgerMenu.click(function(){
    

        var classBurger = $('.burger-menu');
        console.log(classBurger);
        classBurger.toggle('hidden');
    });

});