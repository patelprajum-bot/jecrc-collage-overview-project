const locations = [
    {
        image: "img1.png",
        title: "Jaipur engineering collage and research  center",
        description: "JECRC FOUNDATION IS A PREMIER EDUCATIONAL INSTITUTION IN JAIPUR, IT WAS ESTABLISHED IN 2000."
    },
    {
        image: "A BOLCK.jpeg",
        title: "BlOCK-A",
        description: "BLOCK -A  IS ONE OF THE  KEY ACEDEMIC BLOCKS OF JECEC FOUNDATION"
    },

    {
        image: "images/img6.jpeg",
        title: "BLOCK-B",
        description: "BLOCK-B IS ONE OF THE  ACEDMECIS AND ALSO HELPFUL FOR JECRC ZARURT CLUB."
    },

    {
        image: "img13.jpeg",
        title: "BLOCK-C",
        description: "A MODERN ACADEMIC SPACE FOR CLASSES AND STUDY."
    },

    {
        image: "img11.jpeg",
        title: "BLOCK-D",
        description: "SPACIALLY DESIGNED FOR  JECRC INCUBATION CENTER ."
    },
   

     {
        image: "img4.png",
        title: "BlOCK -E",
        description: "IT IS THE PLACE FOR STUDENT  DEVLOPMENT CELL"
    },

       {
        image: "img6.jpeg",
        title: "SPRITIUAL  RESEARCH CELL (SRC)",
        description: "A DEDICATED SPACE THAT ENCOURAGES SPIRITUAL AWARENESS, SELF-REFLECTION, AND A DEEPER UNDERSTANDING OF VALUES AND INNER WELL-BEING."
    },
    
    {
        image: "bh1.png",
        title: "BOYS HOSTEL ",
        description: "A COMFORTABLE RESIDENTAL SPACE WHERE HOSTLESRS STUDENTS LIVE CONNECT WITH PEEERS AND EXPERIENCE CAMPUS LIFE ."
    },

     {
        image: "img5.jpeg",
        title: " JECRC MOONRIDERS CLUB ",
        description: "JECRC MOONRIDERS IS A VIBRANT STUDENT COMMUNITY WHERE CREATIVITY ,TEAMWORK ,AND INNVOTAION COME TOGETHER BEYOND THE CLASSROOM."
    },
    
   
     {
        image: "img3.png",
        title: "FOOTBALL GROUND",
        description: "A VIBRANT SPORTS SPACE WHERE STUDENTS ENGAGE IN  FOOTBALL MATCHES,AND FITNESS ACTIVITIES."
    },
 

     {
        image: "img17.jpeg",
        title: "BASKETBALL COURT",
        description: "A VERSATILE SPACE FOR BASKETBALL GAMES AND PHYSICAL ACTIVITIES."
    },
   


   
   
    

     {
        image: "img9.jpeg",
        title: "CRICKET GROUND",
        description: "A SPORTS AREA WHERE STUDENTS EMGAGE IN PHYSICAL ACTIVITIES. "
    },
    
    {
        image: "img8.jpeg",
        title: "ROUND TABLE AREA",
        description: " A VERSATILE SPACE FOR COLLABORATION, DISCUSSION WHERE STUDENTS MEETSAND EXCHANGE IDEAS."
    },
   
    {
        image: "img10.jpeg",
        title: " IN CAMPUS MANDIR",
        description: "A SPRITIUAL SPACE WHERE STUDENTS FIND PEACE. "
    },
    
    {
        image: "img12.jpeg",
        title: "AUDITORIUM",
        description: "A VERSATILE SPACE FOR PRESENTATIONS AND PERFOMANCES."
    },
    
    {
        image: "img15.jpeg",
        title: " CENTRAL LIBRARY",
        description: "A RESOURCEFUL SPACE WHERE STUDENT ACCESS KNOWLWDEGE IN PEACEFUL ENVIRONMENT."
    },


    {
        image: "thanks.jpeg",
        
    },
   
];


const title = document.querySelector("#title");
const description = document.querySelector("#description");
const background = document.querySelector(".background-current");

let currentIndex = 0;


// ===============================
// FIRST LOCATION
// ===============================

function showLocation(index) {

    const location = locations[index];

    // Image
    background.style.backgroundImage =
        `url("${location.image}")`;

    // Text
    title.textContent = location.title;
    description.textContent = location.description;
   

    // Reset text
    gsap.set(title, {
        y: 50,
        opacity: 0
    });

    gsap.set(description, {
        y: 30,
        opacity: 0
    });


    // Reset image
    gsap.set(background, {
        scale: 1.08
    });


    // ===============================
    // IMAGE ZOOM
    // ===============================

    gsap.to(background, {
        scale: 1.0,
        duration: 6,
        ease: "power1.inOut"
    });


    // ===============================
    // TITLE ANIMATION
    // ===============================

    gsap.to(title, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
    });


    // ===============================
    // DESCRIPTION ANIMATION
    // ===============================

    gsap.to(description, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: "power3.out"
    });


    // ===============================
    // WAIT → NEXT IMAGE
    // ===============================

    gsap.delayedCall(3.5, () => {

        // Text out
        gsap.to(title, {
            y: -40,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in"
        });

        gsap.to(description, {
            y: -25,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in"
        });


        // Image zoom-out
        gsap.to(background, {
            scale: 1.46,
            duration: 1.15,
            ease: "power2.inOut",
            onComplete: () => {

                // Next image
                currentIndex =
                    (currentIndex + 1) % locations.length;

                showLocation(currentIndex);

            }
        });

    });
}


// ===============================
// START CAMPUS TOUR
// ===============================

showLocation(0);