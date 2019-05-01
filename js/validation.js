//validation
function validation()  {
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comments').value;
    var subj = document.getElementById('subject').value;
    
      //regular expression
      var usercheck = /^[A-Za-z .]{3,30}$/;
      var emailcheck = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      var subcheck =/^[a-zA-Z]$/;
      var commentchq =  /^[a-zA-Z ]$/;

      if (usercheck.test(username)) {
         //to do 
      }else {
        swal({
            title: "👎",
            text: "User Name is invalid",
            icon: "success",
          });
        return false;
      };

      if (emailcheck.test(email)) {
         //to do 
    }else {
      swal({
          title: "👎",
          text: "Email is invalid",
          icon: "success",
        });
      return false;
    };

    if (usercheck.test(subj)) {
        //to do 
      }
  
      else {
          swal({
              title: "👎",
              text: "Subject Invalid",
              icon: "success",
            });
          return false;
      }
      

    if (usercheck.test(comment)) {
      //to do 
    }

    else {
        swal({
            title: "👎",
            text: "Please Check Speacial character like /, _, :",
            icon: "success",
          });
        return false;
    }
  }