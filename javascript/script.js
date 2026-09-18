document.getElementById("loginform")
.addEventListener("submit",
     function(event) {
          event.preventDefault();

          let username = document.getElementById("username").value.trim();
          let password = document.getElementById("password").value.trim();
          let message = document.getElementById("message");

          if (username == "") {
               message.textContent = "Please Enter User Name";
               message.style.color = "red";
               return;
          }
          if (password == "") {
               message.textContent = "Please Enter Password";
               message.style.color = "red";
               return;
          }

          if(username == "singh" && password == "singhh1")
          {
               message.textContent = "Login Sucussfull";
               message.style.color = "green";
          }
          else 
          {
               message.textContent = "Invalide user name or password";
               message.style.color = "red";
          }


});