(() => {
    // listen for background job pings
    chrome.runtime.onMessage.addListener(
        async (msg: problemNameMsg, sender, response) => {
            const { problemName } = msg;

            const count = await getProblemDislikeCount(problemName);
            console.log(problemName, count);
            showDislikeCount(count);
        }
    );
})();

async function getProblemDislikeCount(problemName: string) {
    let response = await fetch("https://leetcode.com/graphql/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `query questionTitle($titleSlug: String!) {
                question(titleSlug: $titleSlug) {
                    dislikes
                }
            }`,
            variables: {
                titleSlug: problemName,
            },
        }),
    });

    let json = await response.json();
    return json?.data?.question?.dislikes;
}

function showDislikeCount(count: number) {
    if (count == undefined) return;

    const buttons = document.querySelectorAll(".flexlayout__tab button");
    
    if (buttons.length > 2) {
        console.log("Showing dislike count");
        const dislikeButton = buttons[1];
        // dislike button is the second button
        dislikeButton.innerHTML += `<div>${count}<div>`;
    }
}
