const friendList = [
        // Provided friend data
        // ... (copy the entire provided array here)
    ];
    
    const friendListContainer = document.getElementById("friend-list");
    
    function createFriendCard(friend) {
        const friendCard = document.createElement("div");
        friendCard.classList.add("friend-card");
    
        const friendDetails = document.createElement("div");
        friendDetails.classList.add("friend-details");
    
        const friendName = document.createElement("p");
        friendName.classList.add("friend-name");
        friendName.textContent = `${friend.first_name} ${friend.last_name}`;
    
        const friendEmail = document.createElement("p");
        friendEmail.classList.add("friend-email");
        friendEmail.textContent = friend.email;
    
        const friendGender = document.createElement("p");
        friendGender.classList.add("friend-gender");
        friendGender.textContent = `Gender: ${friend.gender}`;
    
        const friendLocation = document.createElement("p");
        friendLocation.classList.add("friend-location");
        friendLocation.textContent = `Cruise Location: ${friend.cruise_location}`;
    
        friendDetails.appendChild(friendName);
        friendDetails.appendChild(friendEmail);
        friendDetails.appendChild(friendGender);
        friendDetails.appendChild(friendLocation);
    
        friendCard.appendChild(friendDetails);
        return friendCard;
    }
    
    function displayFriendList() {
        friendListContainer.innerHTML = "";
        friendList.forEach((friend) => {
            const friendCard = createFriendCard(friend);
            friendListContainer.appendChild(friendCard);
        });
    }
    
    displayFriendList();
    