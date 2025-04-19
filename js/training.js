const work_ex = [
    {
        id: 1,
        icon: "fas fa-chalkboard-teacher",
        designation: "Jr. Lecturer",
        organization: "Trident Academy of Creative Technology",
        duration: "2018 - 2021",
        description: "Taught different subjects like Python, PHP, and Advance Java and handled labs for Computer Graphics, RDBMS, etc. Also mentoring students for projects."
    },
    {
        id: 2,
        icon: "fas fa-laptop-code",
        designation: "Software Engineer",
        organization: "Minfire Solutions",
        duration: "2021 - 2022",
        description: "Worked on several projects with cutting edge technologies like Django, DRF, React JS, Celery, Redis, AWS EC2. Worked with the team on project deployment."
    },
    {
        id: 3,
        icon: "fas fa-user-tie",
        designation: "Asst Professor",
        organization: "Silicon Institute of Technology",
        duration: "2022 - Present",
        description: "Teaching different subjects like Internet and Web Technology, Data Structure, and handling labs for Data Structure and RDBMS. Also mentoring students for projects."
    },
]

let whtml = "";
for(let i=work_ex.length-1; i>=0; i--){
    whtml += card(work_ex[i]);
}

document.getElementById("works").innerHTML = whtml;


function card(work){
   let card_component = "<div class='col-md-4'>" +
          "<div class='card mb-5 work-card' data-aos='zoom-in'>" +
           " <div class='card-body'>" +
              "<div class='text-center mb-3'>" +
                "<i class='"+ work.icon +" fa-3x work-icon'></i>" +
              "</div>" +
              "<h3 class='h3 text-center my-2'>"+ work.designation+"</h3>" +
              "<i class='fas fa-map-marker-alt my-1'></i> "+ work.organization + "<br />"+
              "<i class='fas fa-calendar-alt my-1'></i> " + work.duration +
              "<p class='text-justify my-2'>"+ work.description +"</p>"+
            "</div>" +
          "</div>" +
        "</div>";

    return card_component;
}
