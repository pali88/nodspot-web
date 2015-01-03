function searchTopTracks(info, tab) {
    chrome.tabs.create({
        url: "http://nodspot.com/#?type=topTracks&term="+ info.selectionText +"&track=0"
    });
}

chrome.contextMenus.create(
    {
        title: 'Play "%s" top tracks',
        contexts: ["selection"],
        onclick: searchTopTracks
    }
);