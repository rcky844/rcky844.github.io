function detectMobile() {
    return window.innerWidth <= 800 || window.innerHeight <= 600;
}

function createDialogPage(pageHref) {
    const element = document.getElementById("download-dialog");
    if (detectMobile()) {
        element.style.maxWidth = "100%";
        element.style.maxHeight = "100%";
        element.style.width = "100%";
        element.style.height = "100%";
        element.style.padding = 0;
    }

    const iframe = document.getElementById("download-dialog-iframe");
    iframe.setAttribute("src", pageHref);
    if (detectMobile()) {
        iframe.style.width = window.innerWidth - 10;
        iframe.style.height = window.innerHeight - 200;
    } else {
        iframe.style.width = "640px";
        iframe.style.height = "480px";
    }
    element.showModal();
}

function createDialogBuildPage(build) {
    createDialogPage('changelogs/build' + build + '.html');
}

function createDialogArchvedBuildPage(build) {
    createDialogPage('changelogs/archived/build' + build + '.html');
}

function createDialogBrowservioBuildPage(build) {
    createDialogPage('changelogs/browservio/build' + build + '.html');
}

function destroyDialog() {
    const element = document.getElementById("download-dialog");
    element.close();
}
