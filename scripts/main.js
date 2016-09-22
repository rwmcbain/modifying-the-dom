window.onload = function(event) {
    console.log('fuck yeah');

    var checkmark = "&#10004;";

    //get a list of elements with a tag
    var list = document.getElementsByTagName('li');
    var n = list.length; //length of our list
    var paragraph = document.getElementById('target-for-text');
    var content = buildParagraph("I love the sleeps");
    var name = document.getElementById('name');
    // name.innerHTML = "I am soooo sleepy";
    var username = prompt('What is your username?');
    name.innerHTML = username;
    paragraph.innerHTML = content;
    // console.log(checkmark);
    // console.log(list);


    console.log(paragraph);
    console.log(content);

    for (var i = 0; i < n; i++) {
        list[i].innerHTML = list[i].innerHTML + checkmark;
    }

    // loop through the ordered list
    // and at the end of the innerHTML of each li
    // add <strong>wish i could has</strong>


    function buildParagraph(content) {
        var openTag = "<em><strong>";
        var closingTag = "</strong></em>";
        return openTag + content + closingTag;
    }
};
