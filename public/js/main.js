$(document).ready(function(){
  //Search functionality
  $("#search").keyup(function() {
    var value = this.value;
    $("#mytable").find("tr").each(function(index) {
      if (!index) return;
      var id = $(this).find("td").text();
      $(this).toggle(id.indexOf(value) !== -1);
    });
  });

  //showing data to modal for edit record
  $('#mytable').on('click','.edit',function(){
    var contacts_id = $(this).data('id');
    var first_name = $(this).data('first_name');
    var last_name = $(this).data('last_name');
    var contact_number = $(this).data('contact_number');
    var email_address = $(this).data('email_address');
    $('#EditModal').modal('show');
    $('.first_name').val(first_name);
    $('.last_name').val(last_name);
    $('.contact_number').val(contact_number);
    $('.email_address').val(email_address);
    $('.contacts_id').val(contacts_id);
  });

  //showing modal for delete record
  $('#mytable').on('click','.delete',function(){
    var contacts_id = $(this).data('id');
    $('#DeleteModal').modal('show');
    $('.contacts_id2').val(contacts_id);
  });


});
