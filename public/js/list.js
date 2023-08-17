const asyncHandler = require('express-async-handler')

const friendlist = asyncHandler(async())
fetch("mockData.json")
.then(response => response.json())
.then(data => {
    // Data is now available as a JavaScript object
    displayData(data);
})
.catch(error => {
    console.error("Error fetching data:", error);
});


const friendList = [
    
];

// Compile Handlebars template
const source = document.getElementById("friend-template").innerHTML;
const template = Handlebars.compile(source);

const friendListContainer = document.getElementById("friend-list");

function displayFriendList() {
    const context = { friends: friendList.map(friend => ({
        ...friend,
        profile_picture: `profile_images/${friend.id}.jpg`
    })) };
    const html = template(context);
    friendListContainer.innerHTML = html;
}

displayFriendList();