const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4D03F", "#8E44AD", "#16A085", "#E74C3C", "#2ECC71"];

document.getElementById("color-btn").addEventListener("click", function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

document.getElementById("nextbtn").addEventListener("click", function () {
    window.location.href = "question/index.html";
});

document.addEventListener("DOMContentLoaded", updateDate);
function updateDate() {
    const dateElement = document.getElementById("current-date");

    // Get current date
    const today = new Date();
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString("en-US", options);
    dateElement.innerText = formattedDate;
}


function getInputValueById(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function updateTask(buttonId, taskName) {
    const button = document.getElementById(buttonId);
    button.disabled = true;
    button.style.backgroundColor = "#dbd7d7";
    button.style.color = "#e8e0e0";
    
    alert("Board Updated Successfully");

    const taskComplete = getInputValueById("taskComplete") - 1;
    document.getElementById("taskComplete").innerText = taskComplete;

    const taskCount = getInputValueById("taskCount") + 1;
    document.getElementById("taskCount").innerText = taskCount;

    if(taskComplete === 0){
        alert("Congrats!! You have completed all the current tasks!")
    }

    // Get current time
    const currentTime = new Date().toLocaleString();

    //Added activity log
    let p = document.createElement("p");
    p.textContent = `You have completed the task "${taskName}" on ${currentTime}`;
    
    const container = document.getElementById("container");
    container.appendChild(p);
    container.style.backgroundColor = "lightblue";
    container.style.padding = "5px";
}

// For acces dynamically
const taskList = [
    { id: "btn1", name: "Fix Mobile Button Issue" },
    { id: "btn2", name: "Add Dark Mode" },
    { id: "btn3", name: "Optimize Home Page" },
    { id: "btn4", name: "Add New Emoji" },
    { id: "btn5", name: "Integrate OpenAI API" },
    { id: "btn6", name: "Improve Job Searching" }
];

taskList.forEach(task => {
    document.getElementById(task.id).addEventListener("click", function () {
        updateTask(task.id, task.name);
    });
});

// Clear history
document.getElementById("clearHistory").addEventListener("click", function () {
    document.getElementById("container").innerHTML = "";
});
