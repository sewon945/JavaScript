let num = 0;

$(".pulsNum").click(() => {
    num++
    $("span").text(num);
})

$(".miusNum").click(() => {
    if (num > 0) {
        num--;
        $("span").text(num);
    }
})

$(".resetNum").click(() => {
    $("span").text(num = 0)

})