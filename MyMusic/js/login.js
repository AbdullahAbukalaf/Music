 $(document).ready(function (){
  $(".input-checkbox").click(function (){
    if ($(".input-checkbox").is(":checked")){
      $(".input-password").attr("type","text");
      $(".span-p2").text("Hide ");
    }else{
      $(".input-password").attr("type","password");
      $(".span-p2").text("Show ");
    }
  })
})

 $(document).ready(function (){
   $('.btn2').click(function (){
     $(".btn1").removeClass('done');
     $(".btn2").addClass('done');
     document.querySelector('.input-p').value='';
     document.querySelector('.input-e').value='';
     $(".sign-in-p").addClass('hidden');
     $(".create-p").removeClass('hidden');
     $(".div6-1").addClass('hidden');
     $(".div6-2").removeClass('hidden');
     $('.link-1').addClass('hidden');
     $('.link-2').removeClass('hidden');
   })
 })

  $(document).ready(function (){
   $('.btn1').click(function (){
     $(".btn2").removeClass('done');
     $(".btn1").addClass('done');
     document.querySelector('.input-p').value='';
     document.querySelector('.input-e').value='';
     $('.div5').addClass('hidden');
     $(".create-p").addClass('hidden');
     $(".sign-in-p").removeClass('hidden');
     $(".div6-2").addClass('hidden');
     $(".div6-1").removeClass('hidden');
     $('.link-2').addClass('hidden');
     $('.link-1').removeClass('hidden');
   })
 })



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
