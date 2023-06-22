let form = document.querySelector('.search-form')
let flightsArray = document.querySelectorAll('.flight-data')

let selectAllButton = document.querySelector('.select-all-button')
let checkboxContent = document.querySelector('.checkbox-select-content')

let selectSingleButtons = document.querySelectorAll('.select-single-button')
let checkboxContentSingleButtons = document.querySelectorAll('.checkbox-single-select-content')

// search engine for table
form.addEventListener('submit', (event) => {
    event.preventDefault()

    // selecteer input en maak het uppercase zodat het niet case sensitive is
    let destinationCodeInput = document.querySelector('.destination-code').value.toUpperCase()

    for (let i = 0; i < flightsArray.length; i++) {

        // if flightarray doesnt include input => make the flights invisible
        if (!flightsArray[i].innerText.toUpperCase().includes(destinationCodeInput)) {
            flightsArray[i].classList.add('container-off');
        } else {
            flightsArray[i].classList.remove('container-off')
        }
    }
})

// hover events
selectAllButton.addEventListener("mouseover", () => {
    selectAllButton.classList.add('hover')
});

selectAllButton.addEventListener("mouseout", () => {
    selectAllButton.classList.remove('hover')
});

// DATAMAPS empty arcs array
let mapArcArray = []

// select all button
let selectAllClicked = true;
selectAllButton.addEventListener('click', () => {
    // verander background color naar wit
    if (selectAllClicked == true) {
        selectAllButton.classList.add('checked')

        // fill every option checkbox
        selectSingleButtons.forEach(singleButton => {
            singleButton.classList.add('checked')

            checkboxContentSingleButtons.forEach(singlgeContentButton => {
                singlgeContentButton.classList.add('select-all-button-fill')
            });

            // add to arc maps
            const object = {
                origin: {
                    latitude: 52.3122,
                    longitude: 4.77511,
                },
                destination: {
                    // max and min range randomizer = Math.floor(Math.random() * (max - min + 1)) + min;
                    latitude: Math.floor(Math.random() * (50 - -20 + 1)) + -20,
                    longitude: Math.floor(Math.random() * (70 - -20 + 1)) + -20,
                },
            }

            // add new arc object to array
            mapArcArray.push(object)

            // when clicked on flight show arcs
            map.arc(mapArcArray, {
                strokeWidth: 1.5,
            })

        });

        selectAllClicked = false
    } else {
        selectAllButton.classList.remove('checked')

        // fill every option checkbox
        selectSingleButtons.forEach(singleButton => {
            singleButton.classList.remove('checked')
        });

        // empty whole arc array
        mapArcArray = []

        // show map arc again after removing objects
        map.arc(mapArcArray, {
            strokeWidth: 1.5,
        })

        selectAllClicked = true
    }
})

// single button checkbox
selectSingleButtons.forEach(singleButton => {

    // hover events
    singleButton.addEventListener("mouseover", () => {
        singleButton.classList.add('hover')
    });

    singleButton.addEventListener("mouseout", () => {
        singleButton.classList.remove('hover')
    });
    // hover events end

    let singleClicked = true;

    singleButton.addEventListener('click', () => {
        if (singleClicked == true) {
            singleButton.classList.add('checked')

            // add to arc maps
            const object = {
                origin: {
                    latitude: 52.3122,
                    longitude: 4.77511,
                },
                destination: {
                    latitude: Math.floor(Math.random() * (80 - 0 + 1)) + -20,
                    longitude: Math.floor(Math.random() * (80 - 0 + 1)) + -20,
                },
            }

            // add new arc object to array
            mapArcArray.push(object)

            // when clicked on flight show arc
            map.arc(mapArcArray, {
                strokeWidth: 1.5,
            })

            singleClicked = false
        } else {
            singleButton.classList.remove('checked')

            // removes last object from arc array
            mapArcArray.pop()

            // show map arc again after removing object
            map.arc(mapArcArray, {
                strokeWidth: 1.5,
            })

            // map.arc([{
            //     origin: {
            //         latitude: -200,
            //         longitude: -200,
            //     },
            //     destination: {
            //         latitude: -200,
            //         longitude: -200,
            //     }
            // }], {
            //     strokeWidth: 1.5,
            // })

            singleClicked = true
        }
    })
});


// DATAMAPS
let europeButton = document.querySelector('.europe-button')
let resetButton = document.querySelector('.reset-button')

let map = new Datamap({
    element: document.getElementById('map'),
    scope: 'world',
    fills: {
        defaultFill: '#cccccc',
        entered: '#1B60DB',
    },
    projection: 'mercator',
    geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        highlightFillColor: '#1B60DB',
        highlightBorderColor: '#fff',
    },
});

europeButton.addEventListener('click', () => {
    map.svg.selectAll(".datamaps-subunits").transition().duration(750).attr("transform", "scale(4)translate(-325, -100)");
    map.arc([{
        origin: {
            latitude: 52.5,
            longitude: -105,
        },
        destination: {
            latitude: -10,
            longitude: 30,
        }
    }], {
        strokeWidth: 1.5,
    })
})

resetButton.addEventListener('click', () => {
    map.svg.selectAll(".datamaps-subunits").transition().duration(750).attr("transform", "");

    // empty whole arc array
    mapArcArray = []

    // show map arc again after removing objects
    map.arc(mapArcArray, {
        strokeWidth: 1.5,
    })
})
// Arcs coordinates can be specified explicitly with latitude/longtitude,
// or just the geographic center of the state/country.