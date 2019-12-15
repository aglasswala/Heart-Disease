$(document).ready(function(){
    console.log("Hi")
    $("#submission").click(function(){

          $.ajax({
              type: "POST",
              url: 'http://localhost:3001/api/heart',
              data: {
                  'sex': $('#sex').val(), 
                  'cp': $('#cp').val(), 
                  'trestbps': $('#trestbps').val(), 
                  'thalach': $('#thalach').val(), 
                  'oldpeak': $('#oldpeak').val(), 
                  'ca': $('#ca').val(), 
                  'thal': $('#thal').val()
                },
              success: function(data){
                  console.log("Hi")
                  $("#pasteHere").html(data);
              },
              error: function(xhr, desc, err) {
                  console.log(xhr);
                  console.log("Details: " + desc + "\nError:" + err);
              }
          });
      });
  });
