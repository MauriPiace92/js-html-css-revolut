$(document).ready(function(){
    var scorri = $('.whithdropdown');
    scorri.mouseenter(function(){

        var drop = $('.dropdown');
        drop.removeClass('hidden');
        

        scorri.mouseleave(function(){

            drop.addClass('hidden');
    
        });

    });

    var chevronChange = $('.chevron');
    chevronChange.click(function(){

        var invert=$ ('i')
        invert.html('<i class="fas fa-chevron-up"></i>');
        console.log(invert);


    });




    








    



});