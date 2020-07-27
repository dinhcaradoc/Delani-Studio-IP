$(document).ready(function(){
  $("#design-icon").click(function(){
    $("#design-icon-hidden").toggle();
    $("#design-icon-showing").toggle();
  })

  $("#development-icon").click(function(){
    $("#development-icon-hidden").toggle();
    $("#development-icon-showing").toggle();
  })

  $("#product-mgt-icon").click(function(){
    $("#product-mgt-icon-hidden").toggle();
    $("#product-mgt-icon-showing").toggle();
  })
})

$("#client-message").click(function(){
  var name = document.getElementById("client-name").value;
  alert('Hey there ' + name + ". Thank you for sharing your details with us. We have received your message and will keep in touch.");
});
