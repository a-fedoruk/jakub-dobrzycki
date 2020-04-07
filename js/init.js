$(document).ready(function () {
  $(".sidenav").sidenav({
    preventScrolling: false,
  });

  $("select").formSelect();
  $(".carousel").carousel({
    fullWidth: true,
    indicators: true,
    center: true,
  });

  $(".collapsible").collapsible();

  $(".nav-about").click(function () {
    scrollTo("about", 46);
    closeSideNav();
  });

  $(".nav-video").click(function () {
    scrollTo("video", 66);
    closeSideNav();
  });

  $(".nav-event").click(function () {
    scrollTo("events", 66);
    closeSideNav();
  });

  $(".nav-photo").click(function () {
    scrollTo("photo", 46);
    closeSideNav();
  });

  $(".nav-contact").click(function () {
    scrollTo("contact", 46);
    closeSideNav();
  });

  $("#logo-container").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  function closeSideNav() {
    $(".sidenav").sidenav({ preventScrolling: false }).close();
  }

  function scrollTo(id, value) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#" + id).offset().top - value,
      },
      300
    );
  }

  // var userName = 'twotravelbugs';
  // var URL = 'https://www.googleapis.com/youtube/v3/channels';
  var key = "AIzaSyCc5aBPud3A8mcYdjVmsEpFUUtAm_brfdQ";
  var playlistId = "PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: "snippet",
    key: key,
    maxResults: 3,
    playlistId: playlistId,
  };

  loadVids();

  function loadVids() {
    $.getJSON(URL, options, function (data) {
      $.each(data.items, function (i, item) {
        mainVid(item.snippet.resourceId.videoId, i);
      });
    });
  }

  function mainVid(id, i) {
    if (i === 0) {
      $(".video").append(`
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `);
    } else {
      $(".video").append(`
      <iframe width="100%" height="240" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `);
    }
  }
});
