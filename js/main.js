// On load
$(function() {

  // Hide the error labels
  $('.error').hide();

  // Prepare the click event handler
  $(".button").click(function() {
    // validate and process form here

    // Hide error labels when form is submitted
    $('.error').hide();

    // Validate the form data
	  var name = $("input#name").val();
		if (name == "") {
      $("label#name_error").show();
      $("input#name").focus();
      return false;
    }
		var email = $("input#email").val();
		if (email == "") {
      $("label#email_error").show();
      $("input#email").focus();
      return false;
    }
		var company = $("input#company").val();
		if (company == "") {
      $("label#company_error").show();
      $("input#company").focus();
      return false;
    }

    // Store the data in an object
    var dataString = 'name=' + name + '&email=' + email + '&company=' + company;

    // Ajax object to post, along with a response message.
    $.ajax({
      type: 'POST',
      url: 'https://web-dev-test.herokuapp.com/forms',
      data: dataString,
      success: function() {
        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#company').val('');

        // set the message to display
        $('#ajax-form').html("<div id='message'></div>");
        $('#message').html("<h2>The form has successfully been submitted</h2>")
        .append("<p>We will be in touch soon.</p>")
        .hide();
      }
      failure: function() {
        $('#ajax-form').html("<div id='message'></div>");
        $('#message').html("<h2>There was an error submitting the form.</h2>")
        .append("<p>Please try again.</p>")
        .hide();
      }
    });
    return false;

  });
});
