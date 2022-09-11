$(function() {
  tableScroll();
  if ($(window).width() < 996) {
    toastScroll();
  }
  $(document).on("click", ".scroll", function() {
    $("html, body").animate(
      {
        scrollTop: $(window).height() - 70
      },
      500
    );
  });
  $(function() {
    $(document).on("click", ".ven", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
      var latt = parseFloat($(this).attr("data-lat"));
      var lngg = parseFloat($(this).attr("data-lng"));
      var labb = $(this).attr("data-label");
      console.log(latt + " - " + lngg);
      setCoords(latt, lngg, labb);
    });
    $(document).on("click", "#toggle", function() {
      $(this).toggleClass("on");
      $("#nav-bar").toggleClass("active");
    });
    $("#link").click(function() {
      window.location.href = "https://awsugtw.kktix.cc/events/2022awscmdtw";
      // $("#myModal").modal("show");
      // $("#myModal iframe").attr("src", src);
    });

    $("#myModal button").click(function() {
      $("#myModal iframe").removeAttr("src");
    });
    $(document).on("click", "#nav-bar ul li", function() {
      $("#nav-bar").removeClass("active");
      $("#toggle").removeClass("on");
    });
    $(".section.hdr").css({
      paddingTop: $(".section.hdr > .content").height()
    });
  });
  function toastScroll() {
    var sections = $(".section");
    var targets = [
      "#about-event",
      "#ticktes",
      "#venues",
      "#agenda",
      "#sponsors",
      "#speakers",
      "#volunteers",
      "#subscribe"
    ];
    var text = [
      "關於 AWS Community Day",
      "活動報名",
      "活動焦點",
      "活動議程",
      "贊助企業",
      "講師陣容",
      "志工團隊",
      "活動分享"
    ];
    var secidx = 0;
    $.map(sections, function(val, i) {
      if ($(this).scrollTop() > val.offsetTop) {
        secidx = i + 1;
      }
    });
    if (
      $(this).scrollTop() + $(this).height() >
      $("#volunteers").offset().top
    ) {
      $(".floating_toast a")
        .attr("href", "#home")
        .text("Goto Top");
    } else {
      $(".floating_toast a")
        .attr("href", targets[secidx])
        .text("前往 " + text[secidx]);
    }
  }
  function tableScroll() {
    if (
      $(this).scrollTop() > $(".table").offset().top - $("#nav-bar").height() &&
      $(this).scrollTop() < $(".table").offset().top + $(".table").height()
    ) {
      $(".table").addClass("fixit");
      $(".table").removeClass("absit");
    } else if (
      $(this).scrollTop() > $(".table").offset().top - $("#nav-bar").height() &&
      $(this).scrollTop() > $(".table").offset().top + $(".table").height()
    ) {
      $(".table").addClass("absit");
      $(".table").removeClass("fixit");
    } else if (
      $(this).scrollTop() <
      $(".table").offset().top - $("#nav-bar").height()
    ) {
      $(".table")
        .removeClass("absit")
        .removeClass("fixit");
    }
  }
  $(document).scroll(function() {
    $(".section.hdr > .content").css({
      top: 0 - $(this).scrollTop() / 1.5,
      opacity: 1 - $(this).scrollTop() / $(".section.hdr > .content").height()
    });
    if ($(this).scrollTop() < $(".section.hdr > .content").height()) {
      $(".section.hdr").css({
        background:
          "rgba(0,0,0," +
          $(this).scrollTop() / $(".section.hdr > .content").height() / 0.25 +
          ")"
      });
    }

    tableScroll();

    if ($(window).width() < 996) {
      toastScroll();
    }

    if ($(this).scrollTop() >= $(".section.hdr > .content").height()) {
      $("#nav-bar").addClass("fixi-it");
      $("body").css({
        paddingTop: $("#nav-bar").height()
      });
    } else {
      $("#nav-bar").removeClass("fixi-it");
      $("body").css({
        paddingTop: 0
      });
    }
  });
  $(document).on("click", "a", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        700
      );
    }
  });
});
