  //function getIp() {
    //$.post("ip.php", function (data) {
      //$("#ip").val(data);
    //});
  //}

  $.getJSON('https://freegeoip.net/json/')
       .done (function(location)
       {
            $('#country').html(location.country_name);
            $('#country_code').html(location.country_code);
            $('#region').html(location.region_name);
            $('#region_code').html(location.region_code);
            $('#city').html(location.city);
            $('#latitude').html(location.latitude);
            $('#longitude').html(location.longitude);
            $('#timezone').html(location.time_zone);
            $('#ip').html(location.ip);
       });
