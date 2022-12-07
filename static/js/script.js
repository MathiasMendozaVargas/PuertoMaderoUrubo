var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


// // CONTACT BUTTONS
// $(document).on("click", ".contact-btn", function(){
//      $.ajax({
//           url: '/encreasePerson',
//           type: 'GET',
//           success: function(res){
//                if(res == "success"){
//                     console.log("Redirected Succesfully!")
//                }else{
//                     alert("Something went wrong!")
//                     console.log(res)
//                }
//           }
//      })
// })