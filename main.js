







function initApp() {


    //slider
    var elem = document.querySelector('input[type="range"]');

    var rangeValue = function(){
        var newValue = elem.value;
        var target = document.querySelector('.value');
        target.innerHTML = newValue;
    };

    elem.addEventListener("input", rangeValue);

    document.getElementById('reason').addEventListener('submit', submitForm, false);
}
//checkers


function checkCheckbox(id) {
    var state = document.getElementById(id);
    if(state.checked){
        //checked
        return true;
    }else{
        //not checked
        return false;
    }
}
//submiters
function submitForm(e) {

    console.log("submitForm: initilazing")
    e.preventDefault();
    var obvious = checkCheckbox('obvious_fake');
    // console.log("submitForm:" + obvious)
    var probably = checkCheckbox('probably_fake');
    // console.log("submitForm:" + probably)
    var sided = checkCheckbox('one_sided');
    // console.log("submitForm:" + sided)
    var clickbait = checkCheckbox('clickbait');
    // console.log("submitForm:" + clickbait)

    var reason = [obvious, probably, sided, clickbait];

    // console.log("submitForm:" + reason)

    var score = document.getElementById('rating').innerText;

    // console.log("submitForm:" + rating )





    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        console.log("submitForm:chrome tabs")
        var url = tabs[0].url;
        console.log("submitForm:" + url)


        submitReview(url,uid, reason, score,e);

        // use `url` here inside the callback because it's asynchronous!
    });
}

function submitReview(url_site, uid, reason, score,e){

    // e.preventDefault();
    // var url = url_site.toString().replace("https://", "");
    // var url = url.toString().split("/", 1);
    // var url = url.toString().replace("www.","")
    // var url = url.toString().split(".",1)

    // console.log("submitReview: starting")
    // firebase.database().ref('user_reviews/' + uid).push({
    //     news: url_site,
    //     reason: reason,
    //     score: score
    // }, function (error) {
    //     if(error) {
    //         console.log("submitReview: user_reviews: " + error);
    //     }else{
    //         console.log("submitReview: data saved succesfully to user_reviews")
    //     }
    // });



//     var ratingsRef = firebase.database().ref("reviews");
//     ratingsRef.orderByChild("news").equalTo(url_site).on("value", function (snapshot) {
//         var scores = snapshot.val();
//         console.log("submitReview: snapshot of reviews:" + scores);
//         if(scores){
//             console.log("submitReview: snapshot not null")
//             // console.log(snapshot.child);
//             var keys = Object.keys(scores);

//             console.log(keys);
// ///////opercje na liczbach
//             var scoreRef = firebase.database().ref("reviews/"+ keys);
//             scoreRef.transaction(function (review) {
//                 console.log("scoreRef:")
//                 console.log(review)
//                 //dodac score do full score
//                 //podzielic full score przez rating_count
//                 //ustawic score na wczesniejszy wynik
//                 //     review.full_score = review.full_score + score;

//                     return;
//             })
//             // scoreRef.on("value", function (snapshot) {
//             //     console.log("subitReview: scoreRef:")
//             //     console.log(snapshot.val());
//             //
//             // })
//         }else {
//             console.log("submitReview: snapshot null")
//             firebase.database().ref('reviews').push({
//                 full_score: score,
//                 news: url_site,
//                 rating_count: 1,
//                 reason: reason,
//                 score: score
//             }, function (error) {
//                 if(error) {
//                     console.log("submitReview: reviews: " + error);
//                 }else{
//                     console.log("submitReview: data saved succesfully to reviews")
//                 }
//             });
//         }
//     })







}

// function logout() {
//     if (firebase.auth().currentUser) {
//         console.log(firebase.auth().currentUser);
//         console.log("main.js: logout: logging out");
//         firebase.auth().signOut();
//     } else {
//         console.log("main.js: logout: not logged out")
//     }
// }

window.onload = function() {
    initApp();
};