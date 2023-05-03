/* incorporar una serie de cambios en el sitio web utilizando jQuery y 
manejadores de eventos para obtener variados resultados */


//cambiar color imput al escribir en él
$(function () {
    $('#code').on({
        focus: function () {
            $(this).removeClass('bg-success').css('color', 'green');
            $(this).addClass('bg-info text-primary');
        },
        //click afuera
        blur: function () {
            $(this).removeClass('bg-info text-primary');
            $(this).addClass('bg-success').css('color', 'green');
        },
    });


    //evento click
    $('#bt').on({
        click: function () {
            $(this).addClass('bg-warning');
            $(this).text('¿Estás seguro?');
        },
        
        dblclick: function () {
            $(this).removeClass('bg-warning');
            $(this).addClass('bg-primary');
            $(this).text('¡OK!');
        },

        //click afuera
        blur: function () {
            $(this).removeClass('bg-primary');
            $(this).css({ 'background-color': 'transparent', color: 'green' });
            $(this).text('COMPRADO');
        },
    });
});