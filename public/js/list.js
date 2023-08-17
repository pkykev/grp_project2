const asyncHandler = require('express-async-handler')
const Handlebars = require('handlebars')

const fetchData = asyncHandler(async () => {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
)

const friendList = fetchData


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