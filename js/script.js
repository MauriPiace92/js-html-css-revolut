$(document).ready(function(){
    // allo scorrere del mouse su dropdown deve apparire e scomparire
    var scorri = $('.whithdropdown');
    scorri.mouseenter(function(){

        var drop = $('.dropdown');
        drop.removeClass('hidden');
        
        // rimuovo all'uscire con il mouse
        scorri.mouseleave(function(){

            drop.addClass('hidden');
    
        });

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




    








    



});