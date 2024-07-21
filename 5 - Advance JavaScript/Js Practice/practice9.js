// 9. - Show a progress bar which shows how much page has been scrolled.

document.addEventListener("scroll", function () {
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("progressBar").style.width = scrollPercentage + "%";
});
