# ![icon48](https://github.com/kevicai/return-leetcode-dislikes/assets/74110291/4acac24b-cae8-45f3-981d-6fbe8ae7eb13) Return Leetcode Dislikes 

A Chrome extension to show the number of dislikes for leetcode problems

-->[Install link](https://chromewebstore.google.com/detail/return-leetcode-dislikes/dicljlkoaepceogdhchkpgijkjjpmebg?hl=en-US&authuser=0)<--

I made a simple chrome extension to show the number of dislikes for problems on Leetcode, hope it helps!

Leet code no longer shows a dislike count on the web version. So I made this extension to see the number of dislikes retrieved from their GraphQL api:

![image](https://github.com/kevicai/return-leetcode-dislikes/assets/74110291/0be246f4-8c00-4954-94b7-6f2b5f96dd59)


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

