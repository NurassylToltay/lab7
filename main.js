let h1 = document.getElementsByTagName("h1")[0]
h1.innerText = "Lab7 Assignment"
h1.setAttribute("style", "color: blue");

let hr1 = document.createElement("hr");
document.body.appendChild(hr1);

let h2 = document.createElement("h2");
h2.innerText = "Task"
h2.setAttribute("style", "color: red");
document.body.appendChild(h2);

let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques: "
document.body.appendChild(p1);

let ul1Array = [' find elements in the DOM (<b>5 points</b>); ', 
				' create/add/remove elements (<b>5 points</b>); ', 
				' change content of the elements (<b>5 points</b>); ', 
				' change styles of the elements (<b>5 points</b>); ', 
				' change attributes of the elements (<b>5 points</b>); ', 
				' change classes of the elements (<b>5 points</b>). '];

function UL(array) {

    let list = document.createElement("ul");

    for (i = 0; i < array.length; i++) {

        let item = document.createElement("li");

        item.innerHTML = array[i];

        list.appendChild(item);

        if (i % 2 == 0) {
        	item.classList.add("even");
        	item.setAttribute("style", "color: green");
        }

        else {
        	item.classList.add("odd");
        	item.setAttribute("style", "color: purple");
        }
    }

    return list;
}

document.body.appendChild(UL(ul1Array));

let p2 = document.createElement("p");
p2.innerHTML = " ";
document.body.appendChild(p2);

let hr2 = document.createElement("hr");
document.body.appendChild(hr2);

let h3 = document.createElement("h2");
document.body.appendChild(h3);
h3.innerHTML = "Submission";
h3.setAttribute("style", "color: red");

let p3 = document.createElement("p");
p3.innerHTML = "To submit your work, follow these instructions:";
document.body.appendChild(p3);

let ul2Array = [' Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>). ',
				' Clone this repository to your local machine and work inside it. ', 
				' Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>). ', 
				' Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>). ', 
				' Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section). ', 
				' Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>). ', 
				' After you finish your work, submit it to the Github (<b>2 points</b>). '];

document.body.appendChild(UL(ul2Array));

let hr3 = document.createElement("hr");
document.body.appendChild(hr3);

console.log(document);