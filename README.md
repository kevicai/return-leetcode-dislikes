# ![icon48](https://github.com/kevicai/return-leetcode-dislikes/assets/74110291/4acac24b-cae8-45f3-981d-6fbe8ae7eb13) Return Leetcode Dislikes 
![image](https://github.com/user-attachments/assets/24d082dc-58b9-4f73-a719-14ceac32ec0f)
A Chrome extension to show the number of dislikes for leetcode problems

-->[Install at Chrome Extension Store](https://chromewebstore.google.com/detail/return-leetcode-dislikes/dicljlkoaepceogdhchkpgijkjjpmebg?hl=en-US&authuser=0)<--

Leet code no longer shows a dislike count on the web version. So I made this extension to see the number of dislikes retrieved from their GraphQL API:

## Development 
### Setup
```console
$ npm install
``` 
### Build
```console
$ npm run build
``` 

## Test extension
### Setup
1. Go to chrome://extensions/
2. Turn on "Developer mode" at top right corner
3. Click "Load unpacked" at top left corner and select the 'dist' folder in this repo
### Running
1. Click the reload button in the extensions page  
2. Go to a leetcode problem page and check browser console for values

