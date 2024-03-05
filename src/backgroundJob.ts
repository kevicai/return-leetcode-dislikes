// Listen for tab updates
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url && tab.url.includes("leetcode.com/problems")) {
        // Extract the problem name from the URL
        const match = tab.url.match(/leetcode.com\/problems\/([^/?]+)/);
        const problemName = match && match[0].split("/")[2];
        // Pin content scripts
        chrome.tabs.sendMessage(tabId, { problemName } as problemNameMsg);
    }
});

interface problemNameMsg {
    problemName: string;
}