// Categories Filter
$(".cateFilterArea .primaryColor").each(function () {
   $(this).click(function () {
      // Toggle Button Highlight
      $(".cateFilterArea .primaryColor").addClass("white");
      $(this).removeClass("white");

      // Content Show / Hide, Show content from selected category
      $(".attrInfoInner").addClass("hide");
      $("." + $(this).attr("id")).removeClass("hide");
   });
});