$(function () {
    $(".menu-link").click(function () {
        $(".menu-link").removeClass("is-active");
        $(this).addClass("is-active");
        // change menu
        var tag = $(this).attr('tag');
        $('.tag-content').addClass('hide');
        $('.'+tag).removeClass('hide');
    });
});

const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
