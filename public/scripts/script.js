// total counter
const totals = document.querySelectorAll(".data");
let max = 5000

totals.forEach(total => {
    // max number is 10000
    total.innerHTML = Math.floor(Math.random() * max)

    gsap.from(total, {
        textContent: 0,
        duration: 5,
        ease: "power1.in",
        snap: {
            textContent: 1
        },
        stagger: {
            each: 1.0,
        }
    });
});

// table content
// let tableRow = document.querySelectorAll(".flight-data")

//     gsap.from(tableRow, {
//         duration: 2,
//         opacity: 0,
//         ease: 'power3.out',
//         stagger: {
//             each: 0.1
//         },
//         scrollTrigger: {
//             trigger: 'tableRow',
//             start: 'top top',
//             markers: true
//         }
//     })