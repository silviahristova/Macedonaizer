window.addEventListener("hashchange", changePage);

function changePage(e){
    var currentHash = window.location.hash;
    var sections = document.querySelectorAll(".section");
    var defaultSection = "welcome";
    var sectionId = currentHash.substring(1);

    // Array.from is not supported from IE. Use sectionsArray on the next lines in order to support it
    // var sectionsArray = [];
    //sections.forEach(function (section) {sectionsArray.push(section)});

    if (!Array.from(sections).some(function (section) {return section.id === sectionId})) {
        sectionId = defaultSection;
    }

    sections.forEach(function (element) {
        if (element.id === sectionId) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

changePage();