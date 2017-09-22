jQuery(document).ready(function() {
  var following = [];
  var url = "https://api.twitch.tv/kraken/streams/freecodecamp";
  //Display Free Code Camp Status
  $.getJSON(url, function(data1) {
    if (data1.stream === null) {
      $("#fccStatus").html("Free Code Camp is Currently Offline");
    } else {
      $("#fccStatus").html("Free Code Camp is Currently Online");
    }

  });

  //Display Follower Data
  var followerUrl = "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/";
  $.getJSON(followerUrl, function(data2) {
    for (var a = 0; a < data2.follows.length; a++) {
      var displayName = data2.follows[a].channel.display_name;
      following.push(displayName);
    }

    following.push("ESC_SC2");
    following.push("OgamingSC2");
    following.push("cretetion");
    following.push("storbeck");
    following.push("habathcx");
    following.push("RobotCaleb");
    following.push("freecodecamp");

    for (var b = 0; b < following.length; b++) {

      var url2 = 'https://api.twitch.tv/kraken/streams/' + following[b] + '/?callback=?';

      $.getJSON(url2).done(function(data3) {
        var logo;
        var status;
        var name;
        var streamUrl;

        if (data3.error) {
          logo = 'http://i63.tinypic.com/20hspoh.jpg';
          name = data3.message;
          status = data3.error;

          $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
            "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
        }

        if (data3.stream === null) {
          $.getJSON(data3._links.channel, function(data5) {

            status = "Offline";
            logo = data5.logo;
            name = data5.display_name;
            streamUrl = data5.url;

            if (logo === null) {
              logo = 'http://i63.tinypic.com/20hspoh.jpg';
            }

            $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
          });
        }
      });
    }
    for (var c = 0; c < following.length; c++) {
      var onlineUrl = 'https://api.twitch.tv/kraken/streams/' + following[c];
      $.getJSON(onlineUrl, function(data4) {
        var logo = data4.stream.channel.logo;
        if (logo === null) {
          logo = 'http://i63.tinypic.com/20hspoh.jpg';
        }
        var status = data4.stream.channel.status;
        var name = data4.stream.channel.display_name;
        var streamUrl = data4.stream.channel.url;
        
var openStream = function() {
        if(streamUrl=== true) {
         onClick.open.streamUrl
        }
}

        $("#followerInfo").prepend("<div class ='row'" + ">" + "<div class='col-md-3'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-3'>" + name + "</div>" + "<div class='col-md-3'>" + status + "</div>" + "<div class='col-md-3'>" + streamUrl + "</div</div>");
console.log(streamUrl)
      });
    }
  });
});