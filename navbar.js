window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let floatNavbar = document.getElementById("coverChangeGallery");
    let homeCover = document.getElementById("newCover");
    let miniLogo = document.getElementById("miniLogo");
    let navSearch = document.getElementById("navSearch");
    if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 350
    ) {
        // floatNavbar
        floatNavbar.style.position = "fixed";
        floatNavbar.style.top = "-15px";
        // homCover
        homeCover.style.position = "fixed";
        homeCover.style.top = "-280px";
        homeCover.style.boxShadow = "0 0 25px 5px #000";
        // miniLogo
        miniLogo.style.display = "block";
        // navSearch
        navSearch.style.display = "block";
    } else {
        // floatNavbar
        floatNavbar.style.position = "relative";
        floatNavbar.style.top = "0px";
        // homCover
        homeCover.style.position = "absolute";
        homeCover.style.top = "0px";
        homeCover.style.boxShadow = "none";
        // miniLogo
        miniLogo.style.display = "none";
        // navSearch
        navSearch.style.display = "none";
    }
}
