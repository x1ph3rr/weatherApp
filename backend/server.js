const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("home", (request, response) => {
    axios
        .get('https://api.open-meteo.com/v1/forecast?latitude=28.6519&longitude=77.2315&current=temperature_2m&hourly=temperature_2m,visibility,sunshine_duration&timezone=Asia%2FTokyo')
        .then((res) => {
            response.json(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
})
