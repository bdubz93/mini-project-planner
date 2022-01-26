$('#save').on('click', function() {
    var first_name=$('#first_name').val();
    var last_name=$('#last_name').val();
    var email=$('#email').val();
    var count = $('#myTable tr').length;
    if(first_name!="" && last_name !="" && email!=""){
    $('#myTable tbody').append('<tr class="child"><td>'+count+'</td><td>'+first_name+'</td><td>'+last_name+'</td><td>'+email+'</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>');
    }
    });
    $(document).on('click','.remCF1',function(){
    $(this).parent().parent().remove();
    $('#myTable tbody tr').each(function(i){            
     $($(this).find('td')[0]).html(i+1);          
    });
    });