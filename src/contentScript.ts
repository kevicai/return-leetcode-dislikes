(() => {
    // listen for background job pings
    chrome.runtime.onMessage.addListener(
        async (msg: problemNameMsg, sender, response) => {
            const { problemName } = msg;

            const count = await getProblemDislikeCount(problemName);
            console.log(problemName, count);
            showDislikeCount(parseNumber(count));
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

function parseNumber(number: number): string {
    if (number < 1000) {
        return number.toString();
    } else {
        return (number / 1000).toFixed(2) + "K";
    }
}

function showDislikeCount(count: number | string) {
    console.log("showing dislike count");
    // Create or update the overlay element
    let overlay = document.getElementById("dislike-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "dislike-overlay";
        overlay.style.position = "fixed";
        overlay.style.bottom = "45px";
        overlay.style.left = "13px";
        overlay.style.backgroundColor = "rgb(60,60,60)";
        overlay.style.color = "white";
        overlay.style.padding = "5px 8px";
        overlay.style.borderRadius = "7px";
        document.body.appendChild(overlay);
    }

    // Update the content of the overlay with the dislike count
    overlay.textContent = `Dislikes: ${count}`;
}
