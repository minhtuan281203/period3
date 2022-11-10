const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// custom 404 page
const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
 "Do not fear what you don't know.",
 "You will have a pleasant surprise.",
 "Whenever possible, keep it simple.",
]

app.use((req, res) => {
 res.type('text/plain')
 res.status(404)
 res.send('404 - Not Found')
})
// custom 500 page
app.use((err, req, res, next) => {
 console.error(err.message)
 res.type('text/plain')
 res.status(500)
 res.send('500 - Server Error')
})
app.listen(port, () => console.log(
 `Express started on http://localhost:${port}; ` +
 `press Ctrl-C to terminate.`))