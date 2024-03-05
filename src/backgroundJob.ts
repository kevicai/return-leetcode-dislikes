chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
    if (tab.url && tab.url.includes("leetcode.com/problems")) {
        // extract the problem name from url
        const match = tab.url.match(/leetcode.com\/problems\/([^/?]+)/);
        const problemName = match && match[0].split("/")[2]
        // pin content scripts
        chrome.tabs.sendMessage(tabId, {
            problemName,
        } as problemNameMsg);
    }
});

interface problemNameMsg {
    problemName: string;
}