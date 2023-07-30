const exporess=require('express');

const port = 3000

const app = exporess()
app.set('view engine', 'hbs')

app.get('/xd', (req, res) => {
    res.send("hello nodedddddddd")
    console.log(4444)

} )
app.listen(port)
