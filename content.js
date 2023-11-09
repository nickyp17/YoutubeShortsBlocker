// Background script
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Modify the URL here
      const modifiedUrl = details.url.replace(/shorts\//, "watch?v=");
      return { redirectUrl: modifiedUrl };
    },
    { urls: ["*://*.youtube.com/*"] },
    ["blocking"]
  );
  