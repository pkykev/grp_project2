document.addEventListener("DOMContentLoaded", function () {
    console.log('listing page')
    const userData = {users: [
        {"id":1,"first_name":"Winni","last_name":"Tonepohl","email":"wtonepohl0@yahoo.co.jp","gender":"Female","sexual_orientation":"heterosexual","primary_language_spoken":"Tsonga","cruise_location":"Richmond"},
        {"id":2,"first_name":"Jayson","last_name":"Eyrl","email":"jeyrl1@about.com","gender":"Male","sexual_orientation":"lesbian","primary_language_spoken":"Lithuanian","cruise_location":"Tromsø"},
        {"id":3,"first_name":"Cointon","last_name":"Domico","email":"cdomico2@istockphoto.com","gender":"Male","sexual_orientation":"pansexual","primary_language_spoken":"Tswana","cruise_location":"Barengkok"},
        {"id":4,"first_name":"Sheree","last_name":"Firidolfi","email":"sfiridolfi3@yahoo.co.jp","gender":"Female","sexual_orientation":"gay","primary_language_spoken":"Gujarati","cruise_location":"Lukashin"},
        {"id":5,"first_name":"Arliene","last_name":"Fullylove","email":"afullylove4@artisteer.com","gender":"Female","sexual_orientation":"pansexual","primary_language_spoken":"Norwegian","cruise_location":"Göteborg"},
        {"id":6,"first_name":"Shaun","last_name":"Matis","email":"smatis5@soup.io","gender":"Male","sexual_orientation":"bisexual","primary_language_spoken":"Swahili","cruise_location":"Al Khushnīyah"},
        {"id":7,"first_name":"Guthrey","last_name":"Richardeau","email":"grichardeau6@mit.edu","gender":"Male","sexual_orientation":"pansexual","primary_language_spoken":"Tetum","cruise_location":"Jianshe"},
        {"id":8,"first_name":"Jude","last_name":"MacRorie","email":"jmacrorie7@howstuffworks.com","gender":"Male","sexual_orientation":"heterosexual","primary_language_spoken":"Malagasy","cruise_location":"Wunat"},
        {"id":9,"first_name":"Ewan","last_name":"Blick","email":"eblick8@quantcast.com","gender":"Male","sexual_orientation":"pansexual","primary_language_spoken":"Greek","cruise_location":"Sokarame"},
    ]};
  
    const userTemplate = document.getElementById("user-template").innerHTML;
    const userCompiledTemplate = Handlebars.compile(userTemplate);
  
    const userListContainer = document.getElementById("user-list");
    userListContainer.innerHTML = userCompiledTemplate({ users: userData });
  });