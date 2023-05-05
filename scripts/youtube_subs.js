// Get Subscribers
const youtubeKey = 'AIzaSyBv_YyVbrh2LrZGHj_uVs8PKcXj1re8aIk';
const youtubeUser = 'UC8rEOiZYhiQiykMYtHH5_8Q';
const subCount = document.getElementById('yt-subs');

if ($(window).width() < 960) {
    mobile = true;
 }
else {
    mobile = false;
}

let getSubscribers = () => {
    subCount.innerHTML = "subscribers loading..."
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        if (mobile == true) {
            subCount.innerHTML = "<br>"+((data["items"][0].statistics.subscriberCount)/1000).toString().replace(".", ".") + "K subscribers";
        } else if (mobile == false) {
            subCount.innerHTML = ((data["items"][0].statistics.subscriberCount)/1000).toString().replace(".", ".") + "K subscribers";
        }
    })
}

getSubscribers();