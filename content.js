window.addEventListener("MyCustomEvent", (event) => { //receive messages from your script
	console.log("FROM CONTENT SCRIPT: " + event.detail);
});

//This content.js is executed isolated from the page and therefore has access to the chrome extension API, such as chrome.runtime
