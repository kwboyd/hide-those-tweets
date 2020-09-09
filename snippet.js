(function() {
    const elementToObserve = document.querySelector(`[aria-label="Timeline: Your Home Timeline"]`)

    const callback = function(mutationsList) {
        const nodes = elementToObserve.querySelectorAll(`[lang="en"]`)
        for (node of nodes) {
            node.textContent = "Nope."
        }
    }

    const tweetObserver = new MutationObserver(callback);

    tweetObserver.observe(elementToObserve, {subtree: true, childList: true});
})()
