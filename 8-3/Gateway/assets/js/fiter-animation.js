filter_menu();
function filter_menu() {
    var j$ = jQuery,
        $nav = j$("#filters"),
        $slideLine = j$("#slide-line"),
        $currentItem = j$(".current-item");

    j$(function () {
        // Menu has active item
        if ($currentItem[0]) {
            $slideLine.css({
                width: $currentItem.width(),
                left: $currentItem.position().left,
            });
        }

        // Underline transition
        j$($nav)
            .find("li")
            .hover(
                // Hover on
                function () {
                    $slideLine.css({
                        width: j$(this).width(),
                        left: j$(this).position().left,
                    });
                },
                // Hover out
                function () {
                    if ($currentItem[0]) {
                        // Go back to current
                        $slideLine.css({
                            width: $currentItem.width(),
                            left: $currentItem.position().left,
                        });
                    } else {
                        // Disapear
                        $slideLine.width(0);
                    }
                }
            );
    });
}

$("#filters li").click(function () {
    $("#filters li").removeClass("current-item");
    $(this).addClass("current-item");
    filter_menu();
});
