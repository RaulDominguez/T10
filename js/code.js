var total = 0;
$(document).ready(function(){
  $('body button').click(function(){
      var producto = $('body input').first().val();
      var precio = $('body input').last().val();
      $('tbody').append('<tr><td>'+producto+'</td><td>'+precio+'</td><td><button>Eliminar</button></td></tr>');
      /*total += $('tbody tr').children().last().eq(1).val();
      $('tfoot tr').children().last().text(total);*/
      //total += parseFloat(precio);
  });
  $(document).on('click','td button', function(){
        $(this).parent().parent().remove();
        });
  //$('tfoot tr td').last().text(total);
});
