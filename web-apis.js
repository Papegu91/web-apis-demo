// 1️⃣ Fetch API - Making an HTTP request
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log("Fetched Post:", data))
    .catch(error => console.error("Fetch Error:", error));

// 2️⃣ Geolocation API - Get user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log("Latitude:", position.coords.latitude);
            console.log("Longitude:", position.coords.longitude);
        },
        error => console.error("Geolocation Error:", error)
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}

// 3️⃣ Clipboard API - Copy text to clipboard
const textToCopy = "Hello, this text is copied to clipboard!";
navigator.clipboard.writeText(textToCopy)
    .then(() => console.log("Text copied successfully!"))
    .catch(err => console.error("Clipboard Error:", err));

// 4️⃣ Notification API - Show browser notification
if (Notification.permission === "granted") {
    new Notification("Hello! This is a notification from JavaScript.");
} else {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("You have enabled notifications!");
        }
    });
}
