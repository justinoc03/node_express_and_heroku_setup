console.log('JS is sourced');

$(document).ready(function(){
  console.log('JQ is sourced');

  //on click
  $('#sendInfo').on('click', function(){
    console.log('in sendInfo click');
    //get user input
    var creatureIn = $('#creatureIn').val();
    var noiseIn = $('#noiseIn').val();
    //assemble object to send to server
    var objectToSend={
      creature: creatureIn,
      noise: noiseIn
    };
    //ajax post that sends object ot /texter route
    $.ajax({
      type: 'POST',
      url: '/texter',
      data: objectToSend,
      success: function(data){
        console.log('got this from server --' + data);
      }
    });
  });
});
