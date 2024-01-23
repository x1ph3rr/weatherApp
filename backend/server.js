const express = require("express");
const router = express.Router();
const axios = require("axios");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./Config/config");
const apiRoutes = require("./Routes/api");

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
require("./Config/passport")(passport);

//db connection
mongoose.connect('"mongodb+srv://x1ph3rr:x1ph3rr@cluster0.xi5mxmg.mongodb.net/local_library?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

//routes
app.use('/api',apiRoutes);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

// router.get("home", (request, response) => {
//     axios
//         .get('https://api.open-meteo.com/v1/forecast?latitude=28.6519&longitude=77.2315&current=temperature_2m&hourly=temperature_2m,visibility,sunshine_duration&timezone=Asia%2FTokyo')
//         .then((res) => {
//             response.json(res.data)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// })
