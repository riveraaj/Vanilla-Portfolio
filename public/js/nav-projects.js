const allButton = document.getElementById("all");
const webButton = document.getElementById("web");
const mobileButton = document.getElementById("mobile");
const desktopButton = document.getElementById("desktop");
const projectList = document.getElementById("grid-projects");
const projects = projectList.getElementsByClassName("project");

function filterProjects(type) {
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (project.classList.contains(type)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    }
}

filterProjects("project");

allButton.addEventListener("click", function () {
    filterProjects("project");
    allButton.classList.add("active");
    webButton.classList.remove("active");
    desktopButton.classList.remove("active");
    mobileButton.classList.remove("active");
});

webButton.addEventListener("click", function () {
    filterProjects("web");
    allButton.classList.remove("active");
    webButton.classList.add("active");
    desktopButton.classList.remove("active");
    mobileButton.classList.remove("active");
});

desktopButton.addEventListener("click", function () {
    filterProjects("desktop");
    allButton.classList.remove("active");
    webButton.classList.remove("active");
    desktopButton.classList.add("active");
    mobileButton.classList.remove("active");
});

mobileButton.addEventListener("click", function () {
    filterProjects("mobile");
    allButton.classList.remove("active");
    webButton.classList.remove("active");
    desktopButton.classList.remove("active");
    mobileButton.classList.add("active");
});