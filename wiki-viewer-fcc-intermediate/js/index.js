$(document).ready(function() {

  //search function
  $('#search').click(function() {
    //api
    var searchTerm = $('#searchTerm').val();
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';

    //ajax call get the info
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: 'json',

      //organize the info for output display
      success: function(data) {
        $('#output').html('');
        for (var i = 0; i < data[1].length; i++) {
          $('#output').prepend('<li><a href= ' + data[3][i] + '>' + data[1][i] + '</a><p>' + data[2][i] + '</p></li>');
        }
      },

      //in case of error
      error: function(errorMessage) {
        alert('Error!');
      }

    })

  });

});