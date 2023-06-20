ab.onLoad(function(){

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/
const observer = new IntersectionObserver(
    ([e]) => {
        document.querySelector("#sticky-logo").style.display = ( e.intersectionRatio < 1 ? "block" : "none");
    },
    { threshold: [1] }
);
const el = document.querySelector("#tabs")
observer.observe(el);


// https://stackoverflow.com/a/6677069/458370
function scrollToElement(selector) {
    $([document.documentElement, document.body]).animate({
        scrollTop: ($(selector).length > 0 ? $(selector).offset().top - $("#before-tabs").height() - 20 : 0)
    }, 400);
    window.location.hash = selector;
}

function copyLinkToClipboard(link) {
    navigator.clipboard.writeText(window.location.origin + "#" + link);
}

window.scrollToElement = scrollToElement;
window.copyLinkToClipboard = copyLinkToClipboard;
});