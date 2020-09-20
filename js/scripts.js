$("document").ready(function(){
  $("#design").click(function(){
    $("#story1").show();
    $("#design").toggle();
  })
  $("#development").click(function(){
    $("#story2").show();
    $("#development").toggle();
  })
  $("#products").click(function(){
    $("#story3").show();
    $("#products").toggle()
  })
  $("#button").click(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var message=$("#message").val();
    if (!email || !name) {
      alert("please enter your details to continue");
    } else {
      alert(name+" thank you for contacting us we will get back to you in a few.");
    }
    $("#output").text(name + email + message);
  })
})
