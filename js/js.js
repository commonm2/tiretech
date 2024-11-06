//  tesktop 서브메뉴 슬라이드 다운

$(".navList, .sub_shadow").on("mouseenter mouseleave", function (e) {
  if (window.innerWidth >= 1170)
    if (e.type == "mouseenter") {
      $(".sub").stop().fadeIn();
      $(".sub_shadow").stop().slideDown(600);
    } else {
      $(".sub")
        .stop()
        .fadeOut(200, function () {
          $(this).removeAttr("style");
        });
      $(".sub_shadow")
        .stop()
        .slideUp(200, function () {
          $(this).removeAttr("style");
        });
    }
});

// 모바일 상태 서브메뉴 슬라이드 다운
const $mainBtn = $(".navList > li > a.mainBtn ");
$mainBtn.on("click", function () {
  if (window.innerWidth < 1170) {
    if (!$(this).parent("li").hasClass("on")) {
      $(".navList > li").removeClass("on");
      $(this).parent("li").addClass("on");
    } else {
      $(this).parent("li").removeClass("on");
    }
  }
});

// trigger 버튼 클릭

$(".trigger").on("click", function () {
  $("header").toggleClass("open");
  $(".navList > li").removeClass("on");
});

$(".moreBtn").on("click", function () {
  $(".more").hide();
  $(".item_wrap_more").slideDown();
});

// footer select 선택 시 해당 링크로 페이지 새창으로 이동
const fam = document.querySelector("#fam");
fam.addEventListener("change", function () {
  if (this.value) {
    window.open(this.value);
  }
});
new daum.roughmap.Lander({
  timestamp: "1730856111780",
  key: "2m5pn",
  // mapWidth: "1080",
  mapHeight: "600",
}).render();