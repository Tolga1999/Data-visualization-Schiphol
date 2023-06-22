// Importeer express uit de node_modules map
import express, {
    application
} from 'express'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// gebruik three.js
// app.use(express.static('node_modules/three'));

// Stel afhandeling van formulieren in (BEKIJK DEZE CODE NOG)
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use("/threeJs", express.static('threeJs'));

// Maak een route voor de index
app.get('/', async function (request, response) {
    // API access
    async function getJSON(){
        try {
            // const response = await fetch("https://api.schiphol.nl/public-flights/destinations"
            const response = await fetch("https://api.schiphol.nl/public-flights/flights", {
                mode: 'cors',
                headers: {
                    "Accept": "application/json",
                    "resourceversion": "v4",
                    "app_id": "3edb3822",
                    "app_key": "0761b1d0018e7e19dca650fc66ea42eb"
                }
            });
    
            const data = await response.json();
            console.log("Success:", data);
            return data
        } catch (error) {
            console.error("Error:", error);
        }
    }
    let data = getJSON();

    // om data te kunnen zien
    data.then( (results) => {
        // console.log (results)

        // render de pagina maar ook de data van de API door naar view
        response.render("index", results)
    })
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
    // Toon een bericht in de console en geef het poortnummer door
    console.log(`Application started on http://localhost:${app.get('port')}`)
})


// END NODE