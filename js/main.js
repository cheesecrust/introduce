$(function () {
    $(".tab-icon-left").on("click", function () {
        let targetNum;
        $.each($(".imgBox"), function(_, item){
            if(item.classList.length == 2){
                $(item).removeClass("show")
                targetNum = (Number(item.id[4]) - 1);
            }
            if(targetNum == -1){
                targetNum = 2
            }
        })
        $("#tab-" + targetNum).addClass("show");
    });
});

$(function () {
    $(".tab-icon-right").on("click", function () {
        let targetNum;
        $.each($(".imgBox"), function(_, item){
            if(item.classList.length == 2){
                $(item).removeClass("show")
                targetNum = (Number(item.id[4]) + 1);
            }
            if(targetNum == 3){
                targetNum = 0
            }
        })
        $("#tab-" + targetNum).addClass("show");
    });
});