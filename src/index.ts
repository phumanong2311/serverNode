import express, { response } from 'express'
import user from './routes/user.js';

const app = express()
const port = 4000
// app.use("/user", user);
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/', () => {
    response.send('hello')
})

app.listen(port, function(){
    console.log('Your app running on port '+ port);
})
