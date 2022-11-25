$("#get-in-touch-form").submit(function (event) {
      
    event.preventDefault();
    
    $('#submit').val('Submitting...');
      
    var email = $('#email').val();
    var phone = $('#phone').val();
    var name = $('#name').val();
    var message = $('#message').val();
    var error = false;
    var response_html = "";
    
    if(name==""){
        error = true; 
        response_html = response_html + "<li>Name cannot be blank!</li>";
    }
    
    if(phone==""){
        error = true; 
        response_html = response_html + "<li>Phone Number cannot be blank!</li>";
    }else{
        if(!/^[0-9]+$/.test(phone)){
            error = true; 
            response_html = response_html + "<li>Phone field should only contain numbers!</li>";
        }        
    }    
    
    if(email==""){
        error = true; 
        response_html = response_html + "<li>Email cannot be blank!</li>";
    }else{
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            error = true; 
            response_html = response_html + "<li>Incorrect email format!</li>";
        }        
    }  
  
    if(error===true){ 
        $('#submit').val('Submit');
        $('.response').removeClass('text-success');
        $('.response').addClass('text-danger');
        $('.response').html(response_html); return false; 
    }else{
        
                    
        $.ajax({
            url:'api.php',
            type:'post',
            data:{name:name,email:email,phone:phone,message:message,type:'contact-us'},
            dataType:'json',
            success:function(response){
                if(response.status=="success"){
                    $('#submit').val('Submit');
                    $('.response').removeClass('text-danger');
                    $('.response').addClass('text-success');
                    $('.response').html("Thankyou for contacting us! Our team will contact you soon!");
                    $("#get-in-touch-form").trigger("reset");
                    window.location.href = `./thank-you.php`;
                }else{
                    $('#submit').val('Submit');
                    $('.response').removeClass('text-success');
                    $('.response').addClass('text-danger');
                    $('.response').html("<li>Oops! Something is not right, please try again!</li>");
                }
            }
        });
    }
    
  });    

  $("#get-in-touch-form-modal").submit(function (event) {
      
    event.preventDefault();
    
    $('#m-submit').val('Submitting...');
      
    var email = $('#m-email').val();
    var phone = $('#m-phone').val();
    var name = $('#m-name').val();
    var message = $('#m-message').val();
    var error = false;
    var response_html = "";
    
    if(name==""){
        error = true; 
        response_html = response_html + "<li>Name cannot be blank!</li>";
    }
    
    if(phone==""){
        error = true; 
        response_html = response_html + "<li>Phone Number cannot be blank!</li>";
    }else{
        if(!/^[0-9]+$/.test(phone)){
            error = true; 
            response_html = response_html + "<li>Phone field should only contain numbers!</li>";
        }        
    }    
    
    if(email==""){
        error = true; 
        response_html = response_html + "<li>Email cannot be blank!</li>";
    }else{
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            error = true; 
            response_html = response_html + "<li>Incorrect email format!</li>";
        }        
    }  
  
    if(error===true){ 
        $('#m-submit').val('Submit');
        $('.m-response').removeClass('text-success');
        $('.m-response').addClass('text-danger');
        $('.m-response').html(response_html); return false; 
    }else{
        
                    
        $.ajax({
            url:'api.php',
            type:'post',
            data:{name:name,email:email,phone:phone,message:message,type:'contact-us'},
            dataType:'json',
            success:function(response){
                if(response.status=="success"){
                    $('#m-submit').val('Submit');
                    $('.m-response').removeClass('text-danger');
                    $('.m-response').addClass('text-success');
                    $('.m-response').html("Thankyou for contacting us! Our team will contact you soon!");
                    $("#get-in-touch-form-modal").trigger("reset");
                    window.location.href = `./thank-you.php`;
                }else{
                    $('#m-submit').val('Submit');
                    $('.m-response').removeClass('text-success');
                    $('.m-response').addClass('text-danger');
                    $('.m-response').html("<li>Oops! Something is not right, please try again!</li>");
                }
            }
        });
    }
    
  });    

