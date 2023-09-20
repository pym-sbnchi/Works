var bannerArray = [];
bannerArray.push($(".banner1"));
bannerArray.push($(".banner2"));
bannerArray.push($(".banner3"));
bannerArray.push($(".banner4"));
bannerArray.push($(".banner5"));

$(document).ready(function () {
  var currentBanner = 0;

  $("#banner-right").click(function () {
    var lastBanner = currentBanner++;
    bannerArray[currentBanner].addClass("show");
    lastBanner - 1;
    bannerArray[lastBanner].removeClass("show");
    $(".slider-num").html(currentBanner + 1 + " / 5");
  });

  $("#banner-left").click(function () {
    var preBanner = currentBanner--;
    bannerArray[currentBanner].addClass("show");
    preBanner - 1;
    bannerArray[preBanner].removeClass("show");

    $(".slider-num").html(currentBanner + 1 + " / 5");
  });
});
