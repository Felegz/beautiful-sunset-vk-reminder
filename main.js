const Telegraf = require('telegraf')

var SunCalc = require('suncalc');
//var SunCalc = require('suncalc');

const express = require('express');
const app = express();

// Bot TOKEN
const bot = new Telegraf(process.env.BOT_TOKEN)

const appName = process.env.PROJECT_NAME
const appPort = process.env.PORT

//var log = require('log-to-file');

var fs = require("fs");

var weatherApi = process.env.weatherApi
var darkSkyApi = process.env.darkSkyApi
var forecastioApi = process.env.forecastioApi

var weatherOpenweather = require('openweather-apis');
weatherOpenweather.setCity('Novosibirsk');
weatherOpenweather.setAPPID(process.env.weatherOpenweather);
weatherOpenweather.setLang('ru');

var ForecastIo = require('forecastio');

const channelBot = require('channel-telegram-bot');
const token = process.env.BOT_TOKEN;

//const niceEmoji = '🥋 '


var testWeather = { coord: { lon: 82.92, lat: 55.03 },
weather: [ { id: 800, main: 'Clear', description: 'ясно', icon: '01n' } ],
base: 'stations',
main: 
{ temp: 16,
pressure: 1006,
humidity: 26,
temp_min: 16,
temp_max: 16 },
visibility: 10000, ///этого нет в другой апишке
wind: { speed: 5, deg: 170 },
clouds: { all: 0 }, ////???
dt: 1558194955,
sys: 
{ type: 1,
id: 8958,
message: 0.0053,
country: 'RU',
sunrise: 1558131387,
sunset: 1558189994 },
id: 1496747,
name: 'Novosibirsk',
cod: 200 }



var darkskyTestData = {
"latitude": 51.506,
"longitude": -0.127,
"timezone": "Europe/London",
"currently": {
"time": 1558207241,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"nearestStormDistance": 20,
"nearestStormBearing": 27,
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 60.06,
"apparentTemperature": 60.06,
"dewPoint": 48.3,
"humidity": 0.65,
"pressure": 1007.41,
"windSpeed": 6.6,
"windGust": 6.6,
"windBearing": 22,
"cloudCover": 0.35,
"uvIndex": 0,
"visibility": 9.2,
"ozone": 357.96
},
"minutely": {
"summary": "Partly cloudy for the hour.",
"icon": "partly-cloudy-day",
"data": [
{
"time": 1558207200,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207260,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207320,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207380,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207440,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207500,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207560,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207620,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207680,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207740,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207800,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207860,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207920,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558207980,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208040,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208100,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208160,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208220,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208280,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208340,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208400,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208460,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208520,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208580,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208640,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208700,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208760,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208820,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208880,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558208940,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209000,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209060,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209120,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209180,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209240,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209300,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209360,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209420,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209480,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209540,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209600,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209660,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209720,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209780,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209840,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209900,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558209960,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210020,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210080,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210140,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210200,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210260,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210320,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210380,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210440,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210500,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210560,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210620,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210680,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210740,
"precipIntensity": 0,
"precipProbability": 0
},
{
"time": 1558210800,
"precipIntensity": 0.008,
"precipIntensityError": 0.02,
"precipProbability": 0.01,
"precipType": "rain"
}
]
},
"hourly": {
"summary": "Mostly cloudy starting tonight.",
"icon": "partly-cloudy-day",
"data": [
{
"time": 1558206000,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.001,
"precipProbability": 0.07,
"precipType": "rain",
"temperature": 60.73,
"apparentTemperature": 60.73,
"dewPoint": 48.14,
"humidity": 0.63,
"pressure": 1007.25,
"windSpeed": 6.59,
"windGust": 6.59,
"windBearing": 20,
"cloudCover": 0.43,
"uvIndex": 0,
"visibility": 9.32,
"ozone": 359.12
},
{
"time": 1558209600,
"summary": "Clear",
"icon": "clear-night",
"precipIntensity": 0.0002,
"precipProbability": 0.05,
"precipType": "rain",
"temperature": 58.8,
"apparentTemperature": 58.8,
"dewPoint": 48.53,
"humidity": 0.69,
"pressure": 1007.71,
"windSpeed": 6.63,
"windGust": 6.63,
"windBearing": 24,
"cloudCover": 0.2,
"uvIndex": 0,
"visibility": 8.97,
"ozone": 355.76
},
{
"time": 1558213200,
"summary": "Clear",
"icon": "clear-night",
"precipIntensity": 0.0004,
"precipProbability": 0.03,
"precipType": "rain",
"temperature": 57.78,
"apparentTemperature": 57.78,
"dewPoint": 48.19,
"humidity": 0.7,
"pressure": 1008.06,
"windSpeed": 3.33,
"windGust": 6.88,
"windBearing": 67,
"cloudCover": 0.17,
"uvIndex": 0,
"visibility": 10,
"ozone": 352.95
},
{
"time": 1558216800,
"summary": "Clear",
"icon": "clear-night",
"precipIntensity": 0.0003,
"precipProbability": 0.03,
"precipType": "rain",
"temperature": 56.81,
"apparentTemperature": 56.81,
"dewPoint": 47.81,
"humidity": 0.72,
"pressure": 1008.22,
"windSpeed": 3.18,
"windGust": 6.25,
"windBearing": 116,
"cloudCover": 0.23,
"uvIndex": 0,
"visibility": 10,
"ozone": 351.28
},
{
"time": 1558220400,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0004,
"precipProbability": 0.03,
"precipType": "rain",
"temperature": 55.73,
"apparentTemperature": 55.73,
"dewPoint": 47.73,
"humidity": 0.74,
"pressure": 1008.29,
"windSpeed": 2.74,
"windGust": 4.79,
"windBearing": 120,
"cloudCover": 0.27,
"uvIndex": 0,
"visibility": 10,
"ozone": 350.22
},
{
"time": 1558224000,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0005,
"precipProbability": 0.04,
"precipType": "rain",
"temperature": 54.84,
"apparentTemperature": 54.84,
"dewPoint": 47.63,
"humidity": 0.77,
"pressure": 1008.33,
"windSpeed": 2.42,
"windGust": 3.58,
"windBearing": 125,
"cloudCover": 0.33,
"uvIndex": 0,
"visibility": 10,
"ozone": 349.21
},
{
"time": 1558227600,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0003,
"precipProbability": 0.03,
"precipType": "rain",
"temperature": 53.99,
"apparentTemperature": 53.99,
"dewPoint": 47.58,
"humidity": 0.79,
"pressure": 1008.36,
"windSpeed": 2.3,
"windGust": 2.89,
"windBearing": 118,
"cloudCover": 0.42,
"uvIndex": 0,
"visibility": 10,
"ozone": 348.2
},
{
"time": 1558231200,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 53.18,
"apparentTemperature": 53.18,
"dewPoint": 47.69,
"humidity": 0.82,
"pressure": 1008.37,
"windSpeed": 2.25,
"windGust": 2.46,
"windBearing": 107,
"cloudCover": 0.53,
"uvIndex": 0,
"visibility": 10,
"ozone": 347.36
},
{
"time": 1558234800,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 52.81,
"apparentTemperature": 52.81,
"dewPoint": 47.86,
"humidity": 0.83,
"pressure": 1008.4,
"windSpeed": 2.31,
"windGust": 2.5,
"windBearing": 96,
"cloudCover": 0.61,
"uvIndex": 0,
"visibility": 10,
"ozone": 346.66
},
{
"time": 1558238400,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 52.88,
"apparentTemperature": 52.88,
"dewPoint": 47.86,
"humidity": 0.83,
"pressure": 1008.45,
"windSpeed": 2.64,
"windGust": 3.39,
"windBearing": 77,
"cloudCover": 0.65,
"uvIndex": 0,
"visibility": 10,
"ozone": 346.1
},
{
"time": 1558242000,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 53.14,
"apparentTemperature": 53.14,
"dewPoint": 47.72,
"humidity": 0.82,
"pressure": 1008.52,
"windSpeed": 3.15,
"windGust": 4.75,
"windBearing": 48,
"cloudCover": 0.66,
"uvIndex": 0,
"visibility": 10,
"ozone": 345.7
},
{
"time": 1558245600,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 54.12,
"apparentTemperature": 54.12,
"dewPoint": 47.64,
"humidity": 0.79,
"pressure": 1008.66,
"windSpeed": 3.54,
"windGust": 5.7,
"windBearing": 33,
"cloudCover": 0.69,
"uvIndex": 0,
"visibility": 10,
"ozone": 345.35
},
{
"time": 1558249200,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 56.33,
"apparentTemperature": 56.33,
"dewPoint": 47.71,
"humidity": 0.73,
"pressure": 1008.87,
"windSpeed": 3.68,
"windGust": 5.76,
"windBearing": 29,
"cloudCover": 0.75,
"uvIndex": 1,
"visibility": 10,
"ozone": 345.09
},
{
"time": 1558252800,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 59.07,
"apparentTemperature": 59.07,
"dewPoint": 47.82,
"humidity": 0.66,
"pressure": 1009.12,
"windSpeed": 3.73,
"windGust": 5.41,
"windBearing": 32,
"cloudCover": 0.84,
"uvIndex": 2,
"visibility": 10,
"ozone": 344.94
},
{
"time": 1558256400,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 61.61,
"apparentTemperature": 61.61,
"dewPoint": 47.87,
"humidity": 0.61,
"pressure": 1009.33,
"windSpeed": 3.72,
"windGust": 5.04,
"windBearing": 36,
"cloudCover": 0.88,
"uvIndex": 3,
"visibility": 10,
"ozone": 344.79
},
{
"time": 1558260000,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 63.73,
"apparentTemperature": 63.73,
"dewPoint": 47.71,
"humidity": 0.56,
"pressure": 1009.45,
"windSpeed": 3.74,
"windGust": 4.86,
"windBearing": 43,
"cloudCover": 0.87,
"uvIndex": 3,
"visibility": 10,
"ozone": 344.84
},
{
"time": 1558263600,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 65.53,
"apparentTemperature": 65.53,
"dewPoint": 47.48,
"humidity": 0.52,
"pressure": 1009.54,
"windSpeed": 3.7,
"windGust": 4.68,
"windBearing": 53,
"cloudCover": 0.83,
"uvIndex": 4,
"visibility": 10,
"ozone": 344.95
},
{
"time": 1558267200,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 66.9,
"apparentTemperature": 66.9,
"dewPoint": 47.31,
"humidity": 0.49,
"pressure": 1009.56,
"windSpeed": 3.63,
"windGust": 4.37,
"windBearing": 58,
"cloudCover": 0.79,
"uvIndex": 4,
"visibility": 10,
"ozone": 344.95
},
{
"time": 1558270800,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0002,
"precipProbability": 0.04,
"precipType": "rain",
"temperature": 68.02,
"apparentTemperature": 68.02,
"dewPoint": 47.35,
"humidity": 0.48,
"pressure": 1009.51,
"windSpeed": 3.42,
"windGust": 3.74,
"windBearing": 58,
"cloudCover": 0.79,
"uvIndex": 4,
"visibility": 10,
"ozone": 344.64
},
{
"time": 1558274400,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0007,
"precipProbability": 0.05,
"precipType": "rain",
"temperature": 68.8,
"apparentTemperature": 68.8,
"dewPoint": 47.48,
"humidity": 0.47,
"pressure": 1009.42,
"windSpeed": 3.18,
"windGust": 3.21,
"windBearing": 56,
"cloudCover": 0.8,
"uvIndex": 4,
"visibility": 9.47,
"ozone": 344.29
},
{
"time": 1558278000,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.002,
"precipProbability": 0.08,
"precipType": "rain",
"temperature": 69.05,
"apparentTemperature": 69.05,
"dewPoint": 47.68,
"humidity": 0.47,
"pressure": 1009.33,
"windSpeed": 3,
"windGust": 3.05,
"windBearing": 50,
"cloudCover": 0.8,
"uvIndex": 3,
"visibility": 6.68,
"ozone": 344.09
},
{
"time": 1558281600,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0049,
"precipProbability": 0.13,
"precipType": "rain",
"temperature": 69.03,
"apparentTemperature": 69.03,
"dewPoint": 48.04,
"humidity": 0.47,
"pressure": 1009.26,
"windSpeed": 2.88,
"windGust": 3.01,
"windBearing": 39,
"cloudCover": 0.8,
"uvIndex": 2,
"visibility": 4.44,
"ozone": 344.08
},
{
"time": 1558285200,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0101,
"precipProbability": 0.16,
"precipType": "rain",
"temperature": 68.6,
"apparentTemperature": 68.6,
"dewPoint": 48.47,
"humidity": 0.49,
"pressure": 1009.22,
"windSpeed": 2.7,
"windGust": 3.03,
"windBearing": 26,
"cloudCover": 0.79,
"uvIndex": 1,
"visibility": 2.63,
"ozone": 344.28
},
{
"time": 1558288800,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0141,
"precipProbability": 0.18,
"precipType": "rain",
"temperature": 67.39,
"apparentTemperature": 67.39,
"dewPoint": 48.87,
"humidity": 0.51,
"pressure": 1009.3,
"windSpeed": 2.55,
"windGust": 3.13,
"windBearing": 22,
"cloudCover": 0.77,
"uvIndex": 0,
"visibility": 2.19,
"ozone": 344.82
},
{
"time": 1558292400,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0142,
"precipProbability": 0.2,
"precipType": "rain",
"temperature": 65.54,
"apparentTemperature": 65.54,
"dewPoint": 49.15,
"humidity": 0.55,
"pressure": 1009.62,
"windSpeed": 2.73,
"windGust": 3.94,
"windBearing": 31,
"cloudCover": 0.71,
"uvIndex": 0,
"visibility": 4.38,
"ozone": 346.02
},
{
"time": 1558296000,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0138,
"precipProbability": 0.22,
"precipType": "rain",
"temperature": 63.39,
"apparentTemperature": 63.39,
"dewPoint": 49.34,
"humidity": 0.6,
"pressure": 1010.07,
"windSpeed": 3.25,
"windGust": 5.47,
"windBearing": 46,
"cloudCover": 0.65,
"uvIndex": 0,
"visibility": 7.96,
"ozone": 347.66
},
{
"time": 1558299600,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0135,
"precipProbability": 0.2,
"precipType": "rain",
"temperature": 61.35,
"apparentTemperature": 61.35,
"dewPoint": 49.45,
"humidity": 0.65,
"pressure": 1010.44,
"windSpeed": 3.68,
"windGust": 6.6,
"windBearing": 59,
"cloudCover": 0.6,
"uvIndex": 0,
"visibility": 10,
"ozone": 348.95
},
{
"time": 1558303200,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0102,
"precipProbability": 0.15,
"precipType": "rain",
"temperature": 59.63,
"apparentTemperature": 59.63,
"dewPoint": 49.42,
"humidity": 0.69,
"pressure": 1010.61,
"windSpeed": 3.88,
"windGust": 7.25,
"windBearing": 69,
"cloudCover": 0.58,
"uvIndex": 0,
"visibility": 9.02,
"ozone": 349.71
},
{
"time": 1558306800,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0063,
"precipProbability": 0.11,
"precipType": "rain",
"temperature": 58.33,
"apparentTemperature": 58.33,
"dewPoint": 49.31,
"humidity": 0.72,
"pressure": 1010.68,
"windSpeed": 3.92,
"windGust": 7.53,
"windBearing": 75,
"cloudCover": 0.58,
"uvIndex": 0,
"visibility": 6.51,
"ozone": 350.17
},
{
"time": 1558310400,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0047,
"precipProbability": 0.1,
"precipType": "rain",
"temperature": 57.33,
"apparentTemperature": 57.33,
"dewPoint": 49.12,
"humidity": 0.74,
"pressure": 1010.73,
"windSpeed": 3.69,
"windGust": 7.07,
"windBearing": 77,
"cloudCover": 0.61,
"uvIndex": 0,
"visibility": 5.55,
"ozone": 350.34
},
{
"time": 1558314000,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0049,
"precipProbability": 0.12,
"precipType": "rain",
"temperature": 56.53,
"apparentTemperature": 56.53,
"dewPoint": 48.81,
"humidity": 0.75,
"pressure": 1010.69,
"windSpeed": 2.81,
"windGust": 5.1,
"windBearing": 68,
"cloudCover": 0.7,
"uvIndex": 0,
"visibility": 8,
"ozone": 350.2
},
{
"time": 1558317600,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0057,
"precipProbability": 0.14,
"precipType": "rain",
"temperature": 55.77,
"apparentTemperature": 55.77,
"dewPoint": 48.41,
"humidity": 0.76,
"pressure": 1010.61,
"windSpeed": 1.7,
"windGust": 2.48,
"windBearing": 50,
"cloudCover": 0.83,
"uvIndex": 0,
"visibility": 10,
"ozone": 349.7
},
{
"time": 1558321200,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.0057,
"precipProbability": 0.14,
"precipType": "rain",
"temperature": 55.32,
"apparentTemperature": 55.32,
"dewPoint": 48.16,
"humidity": 0.77,
"pressure": 1010.61,
"windSpeed": 1.34,
"windGust": 1.94,
"windBearing": 28,
"cloudCover": 0.9,
"uvIndex": 0,
"visibility": 10,
"ozone": 349.21
},
{
"time": 1558324800,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-night",
"precipIntensity": 0.004,
"precipProbability": 0.11,
"precipType": "rain",
"temperature": 55.13,
"apparentTemperature": 55.13,
"dewPoint": 48.09,
"humidity": 0.77,
"pressure": 1010.75,
"windSpeed": 2.05,
"windGust": 2.46,
"windBearing": 19,
"cloudCover": 0.86,
"uvIndex": 0,
"visibility": 10,
"ozone": 348.81
},
{
"time": 1558328400,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0018,
"precipProbability": 0.07,
"precipType": "rain",
"temperature": 55.01,
"apparentTemperature": 55.01,
"dewPoint": 48.2,
"humidity": 0.78,
"pressure": 1010.97,
"windSpeed": 3.35,
"windGust": 3.98,
"windBearing": 14,
"cloudCover": 0.77,
"uvIndex": 0,
"visibility": 10,
"ozone": 348.42
},
{
"time": 1558332000,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0007,
"precipProbability": 0.07,
"precipType": "rain",
"temperature": 55.76,
"apparentTemperature": 55.76,
"dewPoint": 48.38,
"humidity": 0.76,
"pressure": 1011.21,
"windSpeed": 4.31,
"windGust": 5.54,
"windBearing": 8,
"cloudCover": 0.69,
"uvIndex": 0,
"visibility": 10,
"ozone": 347.97
},
{
"time": 1558335600,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0003,
"precipProbability": 0.06,
"precipType": "rain",
"temperature": 56.99,
"apparentTemperature": 56.99,
"dewPoint": 48.68,
"humidity": 0.74,
"pressure": 1011.5,
"windSpeed": 4.65,
"windGust": 5.61,
"windBearing": 1,
"cloudCover": 0.63,
"uvIndex": 1,
"visibility": 10,
"ozone": 347.27
},
{
"time": 1558339200,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0002,
"precipProbability": 0.04,
"precipType": "rain",
"temperature": 58.59,
"apparentTemperature": 58.59,
"dewPoint": 49.15,
"humidity": 0.71,
"pressure": 1011.82,
"windSpeed": 4.73,
"windGust": 5.1,
"windBearing": 354,
"cloudCover": 0.58,
"uvIndex": 2,
"visibility": 10,
"ozone": 346.52
},
{
"time": 1558342800,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 60.15,
"apparentTemperature": 60.15,
"dewPoint": 49.54,
"humidity": 0.68,
"pressure": 1012.08,
"windSpeed": 4.94,
"windGust": 5.18,
"windBearing": 348,
"cloudCover": 0.56,
"uvIndex": 3,
"visibility": 10,
"ozone": 346.07
},
{
"time": 1558346400,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 60.98,
"apparentTemperature": 60.98,
"dewPoint": 49.8,
"humidity": 0.67,
"pressure": 1012.26,
"windSpeed": 5.53,
"windGust": 6.36,
"windBearing": 339,
"cloudCover": 0.62,
"uvIndex": 4,
"visibility": 10,
"ozone": 346.03
},
{
"time": 1558350000,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 61.11,
"apparentTemperature": 61.11,
"dewPoint": 49.94,
"humidity": 0.67,
"pressure": 1012.36,
"windSpeed": 6.27,
"windGust": 8.12,
"windBearing": 330,
"cloudCover": 0.7,
"uvIndex": 4,
"visibility": 10,
"ozone": 346.28
},
{
"time": 1558353600,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 61.6,
"apparentTemperature": 61.6,
"dewPoint": 49.89,
"humidity": 0.65,
"pressure": 1012.43,
"windSpeed": 6.76,
"windGust": 9.1,
"windBearing": 323,
"cloudCover": 0.73,
"uvIndex": 4,
"visibility": 10,
"ozone": 346.59
},
{
"time": 1558357200,
"summary": "Mostly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 63.62,
"apparentTemperature": 63.62,
"dewPoint": 49.62,
"humidity": 0.6,
"pressure": 1012.39,
"windSpeed": 6.68,
"windGust": 8.34,
"windBearing": 321,
"cloudCover": 0.66,
"uvIndex": 4,
"visibility": 10,
"ozone": 346.89
},
{
"time": 1558360800,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 66.22,
"apparentTemperature": 66.22,
"dewPoint": 49.15,
"humidity": 0.54,
"pressure": 1012.29,
"windSpeed": 6.37,
"windGust": 6.82,
"windBearing": 321,
"cloudCover": 0.54,
"uvIndex": 4,
"visibility": 10,
"ozone": 347.14
},
{
"time": 1558364400,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 67.92,
"apparentTemperature": 67.92,
"dewPoint": 48.81,
"humidity": 0.5,
"pressure": 1012.29,
"windSpeed": 6.29,
"windGust": 6.29,
"windBearing": 323,
"cloudCover": 0.44,
"uvIndex": 3,
"visibility": 10,
"ozone": 347.49
},
{
"time": 1558368000,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 68.4,
"apparentTemperature": 68.4,
"dewPoint": 48.79,
"humidity": 0.5,
"pressure": 1012.43,
"windSpeed": 6.74,
"windGust": 7.06,
"windBearing": 328,
"cloudCover": 0.4,
"uvIndex": 2,
"visibility": 10,
"ozone": 347.79
},
{
"time": 1558371600,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0,
"precipProbability": 0,
"temperature": 68.31,
"apparentTemperature": 68.31,
"dewPoint": 48.99,
"humidity": 0.5,
"pressure": 1012.63,
"windSpeed": 7.5,
"windGust": 8.87,
"windBearing": 335,
"cloudCover": 0.38,
"uvIndex": 1,
"visibility": 10,
"ozone": 348.15
},
{
"time": 1558375200,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0004,
"precipProbability": 0.05,
"precipType": "rain",
"temperature": 67,
"apparentTemperature": 67,
"dewPoint": 49.18,
"humidity": 0.53,
"pressure": 1012.97,
"windSpeed": 8.05,
"windGust": 10.59,
"windBearing": 342,
"cloudCover": 0.35,
"uvIndex": 0,
"visibility": 10,
"ozone": 348.71
},
{
"time": 1558378800,
"summary": "Partly Cloudy",
"icon": "partly-cloudy-day",
"precipIntensity": 0.0009,
"precipProbability": 0.07,
"precipType": "rain",
"temperature": 65.04,
"apparentTemperature": 65.04,
"dewPoint": 49.21,
"humidity": 0.57,
"pressure": 1013.5,
"windSpeed": 8.14,
"windGust": 12.15,
"windBearing": 347,
"cloudCover": 0.31,
"uvIndex": 0,
"visibility": 10,
"ozone": 349.65
}
]
},
"daily": {
"summary": "Light rain tomorrow, with high temperatures rising to 70°F on Tuesday.",
"icon": "rain",
"data": [
{
"time": 1558134000,
"summary": "Mostly cloudy throughout the day.",
"icon": "partly-cloudy-day",
"sunriseTime": 1558152358,
"sunsetTime": 1558209047,
"moonPhase": 0.48,
"precipIntensity": 0.0006,
"precipIntensityMax": 0.0021,
"precipIntensityMaxTime": 1558195200,
"precipProbability": 0.23,
"precipType": "rain",
"temperatureHigh": 64.81,
"temperatureHighTime": 1558188000,
"temperatureLow": 52.81,
"temperatureLowTime": 1558234800,
"apparentTemperatureHigh": 64.81,
"apparentTemperatureHighTime": 1558188000,
"apparentTemperatureLow": 52.81,
"apparentTemperatureLowTime": 1558234800,
"dewPoint": 47.45,
"humidity": 0.7,
"pressure": 1006.76,
"windSpeed": 2.11,
"windGust": 14.95,
"windGustTime": 1558152000,
"windBearing": 6,
"cloudCover": 0.65,
"uvIndex": 4,
"uvIndexTime": 1558177200,
"visibility": 7.17,
"ozone": 367.15,
"temperatureMin": 50.23,
"temperatureMinTime": 1558152000,
"temperatureMax": 64.81,
"temperatureMaxTime": 1558188000,
"apparentTemperatureMin": 50.23,
"apparentTemperatureMinTime": 1558152000,
"apparentTemperatureMax": 64.81,
"apparentTemperatureMaxTime": 1558188000
},
{
"time": 1558220400,
"summary": "Mostly cloudy throughout the day.",
"icon": "partly-cloudy-day",
"sunriseTime": 1558238677,
"sunsetTime": 1558295534,
"moonPhase": 0.53,
"precipIntensity": 0.0036,
"precipIntensityMax": 0.0142,
"precipIntensityMaxTime": 1558292400,
"precipProbability": 0.69,
"precipType": "rain",
"temperatureHigh": 69.05,
"temperatureHighTime": 1558278000,
"temperatureLow": 55.01,
"temperatureLowTime": 1558328400,
"apparentTemperatureHigh": 69.05,
"apparentTemperatureHighTime": 1558278000,
"apparentTemperatureLow": 55.01,
"apparentTemperatureLowTime": 1558328400,
"dewPoint": 48.04,
"humidity": 0.64,
"pressure": 1009.17,
"windSpeed": 2.76,
"windGust": 7.25,
"windGustTime": 1558303200,
"windBearing": 55,
"cloudCover": 0.68,
"uvIndex": 4,
"uvIndexTime": 1558263600,
"visibility": 8.62,
"ozone": 346.12,
"temperatureMin": 52.81,
"temperatureMinTime": 1558234800,
"temperatureMax": 69.05,
"temperatureMaxTime": 1558278000,
"apparentTemperatureMin": 52.81,
"apparentTemperatureMinTime": 1558234800,
"apparentTemperatureMax": 69.05,
"apparentTemperatureMaxTime": 1558278000
},
{
"time": 1558306800,
"summary": "Partly cloudy until evening.",
"icon": "partly-cloudy-day",
"sunriseTime": 1558324998,
"sunsetTime": 1558382021,
"moonPhase": 0.56,
"precipIntensity": 0.0017,
"precipIntensityMax": 0.0063,
"precipIntensityMaxTime": 1558306800,
"precipProbability": 0.38,
"precipType": "rain",
"temperatureHigh": 68.4,
"temperatureHighTime": 1558368000,
"temperatureLow": 50.4,
"temperatureLowTime": 1558414800,
"apparentTemperatureHigh": 68.4,
"apparentTemperatureHighTime": 1558368000,
"apparentTemperatureLow": 50.4,
"apparentTemperatureLowTime": 1558414800,
"dewPoint": 48.98,
"humidity": 0.66,
"pressure": 1012.13,
"windSpeed": 4.72,
"windGust": 14.25,
"windGustTime": 1558386000,
"windBearing": 348,
"cloudCover": 0.56,
"uvIndex": 4,
"uvIndexTime": 1558346400,
"visibility": 9.59,
"ozone": 348.46,
"temperatureMin": 55.01,
"temperatureMinTime": 1558328400,
"temperatureMax": 68.4,
"temperatureMaxTime": 1558368000,
"apparentTemperatureMin": 55.01,
"apparentTemperatureMinTime": 1558328400,
"apparentTemperatureMax": 68.4,
"apparentTemperatureMaxTime": 1558368000
},
{
"time": 1558393200,
"summary": "Clear throughout the day.",
"icon": "clear-day",
"sunriseTime": 1558411321,
"sunsetTime": 1558468506,
"moonPhase": 0.59,
"precipIntensity": 0.0001,
"precipIntensityMax": 0.0002,
"precipIntensityMaxTime": 1558393200,
"precipProbability": 0.07,
"precipType": "rain",
"temperatureHigh": 69.72,
"temperatureHighTime": 1558450800,
"temperatureLow": 50.82,
"temperatureLowTime": 1558497600,
"apparentTemperatureHigh": 69.72,
"apparentTemperatureHighTime": 1558450800,
"apparentTemperatureLow": 50.82,
"apparentTemperatureLowTime": 1558497600,
"dewPoint": 43.17,
"humidity": 0.56,
"pressure": 1017.61,
"windSpeed": 7.24,
"windGust": 14.51,
"windGustTime": 1558476000,
"windBearing": 327,
"cloudCover": 0.02,
"uvIndex": 7,
"uvIndexTime": 1558436400,
"visibility": 10,
"ozone": 350.55,
"temperatureMin": 50.4,
"temperatureMinTime": 1558414800,
"temperatureMax": 69.72,
"temperatureMaxTime": 1558450800,
"apparentTemperatureMin": 50.4,
"apparentTemperatureMinTime": 1558414800,
"apparentTemperatureMax": 69.72,
"apparentTemperatureMaxTime": 1558450800
},
{
"time": 1558479600,
"summary": "Mostly cloudy starting in the afternoon.",
"icon": "partly-cloudy-day",
"sunriseTime": 1558497647,
"sunsetTime": 1558554990,
"moonPhase": 0.62,
"precipIntensity": 0.0003,
"precipIntensityMax": 0.0015,
"precipIntensityMaxTime": 1558548000,
"precipProbability": 0.06,
"precipType": "rain",
"temperatureHigh": 68.27,
"temperatureHighTime": 1558530000,
"temperatureLow": 51.18,
"temperatureLowTime": 1558584000,
"apparentTemperatureHigh": 68.27,
"apparentTemperatureHighTime": 1558530000,
"apparentTemperatureLow": 51.18,
"apparentTemperatureLowTime": 1558584000,
"dewPoint": 37.87,
"humidity": 0.44,
"pressure": 1019.07,
"windSpeed": 3.69,
"windGust": 14.63,
"windGustTime": 1558479600,
"windBearing": 267,
"cloudCover": 0.35,
"uvIndex": 6,
"uvIndexTime": 1558522800,
"visibility": 9.91,
"ozone": 351.21,
"temperatureMin": 50.82,
"temperatureMinTime": 1558497600,
"temperatureMax": 68.27,
"temperatureMaxTime": 1558530000,
"apparentTemperatureMin": 50.82,
"apparentTemperatureMinTime": 1558497600,
"apparentTemperatureMax": 68.27,
"apparentTemperatureMaxTime": 1558530000
},
{
"time": 1558566000,
"summary": "Overcast throughout the day.",
"icon": "cloudy",
"sunriseTime": 1558583974,
"sunsetTime": 1558641473,
"moonPhase": 0.65,
"precipIntensity": 0.0023,
"precipIntensityMax": 0.0076,
"precipIntensityMaxTime": 1558645200,
"precipProbability": 0.5,
"precipType": "rain",
"temperatureHigh": 68.86,
"temperatureHighTime": 1558620000,
"temperatureLow": 51.62,
"temperatureLowTime": 1558670400,
"apparentTemperatureHigh": 68.86,
"apparentTemperatureHighTime": 1558620000,
"apparentTemperatureLow": 51.62,
"apparentTemperatureLowTime": 1558670400,
"dewPoint": 43.51,
"humidity": 0.55,
"pressure": 1013.72,
"windSpeed": 4.91,
"windGust": 15.56,
"windGustTime": 1558623600,
"windBearing": 219,
"cloudCover": 0.96,
"uvIndex": 3,
"uvIndexTime": 1558602000,
"visibility": 9.61,
"ozone": 349.62,
"temperatureMin": 51.18,
"temperatureMinTime": 1558584000,
"temperatureMax": 68.86,
"temperatureMaxTime": 1558620000,
"apparentTemperatureMin": 51.18,
"apparentTemperatureMinTime": 1558584000,
"apparentTemperatureMax": 68.86,
"apparentTemperatureMaxTime": 1558620000
},
{
"time": 1558652400,
"summary": "Overcast throughout the day.",
"icon": "cloudy",
"sunriseTime": 1558670305,
"sunsetTime": 1558727954,
"moonPhase": 0.68,
"precipIntensity": 0.0076,
"precipIntensityMax": 0.0167,
"precipIntensityMaxTime": 1558699200,
"precipProbability": 0.94,
"precipType": "rain",
"temperatureHigh": 66.71,
"temperatureHighTime": 1558713600,
"temperatureLow": 54.26,
"temperatureLowTime": 1558756800,
"apparentTemperatureHigh": 66.71,
"apparentTemperatureHighTime": 1558713600,
"apparentTemperatureLow": 54.26,
"apparentTemperatureLowTime": 1558756800,
"dewPoint": 46.25,
"humidity": 0.63,
"pressure": 1009.41,
"windSpeed": 5.5,
"windGust": 20.99,
"windGustTime": 1558735200,
"windBearing": 301,
"cloudCover": 0.98,
"uvIndex": 3,
"uvIndexTime": 1558688400,
"visibility": 8.15,
"ozone": 356.88,
"temperatureMin": 51.62,
"temperatureMinTime": 1558670400,
"temperatureMax": 66.71,
"temperatureMaxTime": 1558713600,
"apparentTemperatureMin": 51.62,
"apparentTemperatureMinTime": 1558670400,
"apparentTemperatureMax": 66.71,
"apparentTemperatureMaxTime": 1558713600
},
{
"time": 1558738800,
"summary": "Mostly cloudy throughout the day.",
"icon": "partly-cloudy-day",
"sunriseTime": 1558756637,
"sunsetTime": 1558814434,
"moonPhase": 0.71,
"precipIntensity": 0.0027,
"precipIntensityMax": 0.0082,
"precipIntensityMaxTime": 1558760400,
"precipProbability": 0.49,
"precipType": "rain",
"temperatureHigh": 69.19,
"temperatureHighTime": 1558800000,
"temperatureLow": 54.05,
"temperatureLowTime": 1558846800,
"apparentTemperatureHigh": 69.19,
"apparentTemperatureHighTime": 1558800000,
"apparentTemperatureLow": 54.05,
"apparentTemperatureLowTime": 1558846800,
"dewPoint": 50.41,
"humidity": 0.68,
"pressure": 1010.8,
"windSpeed": 8.79,
"windGust": 24.32,
"windGustTime": 1558760400,
"windBearing": 293,
"cloudCover": 0.7,
"uvIndex": 4,
"uvIndexTime": 1558785600,
"visibility": 9.86,
"ozone": 350.45,
"temperatureMin": 54.26,
"temperatureMinTime": 1558756800,
"temperatureMax": 69.19,
"temperatureMaxTime": 1558800000,
"apparentTemperatureMin": 54.26,
"apparentTemperatureMinTime": 1558756800,
"apparentTemperatureMax": 69.19,
"apparentTemperatureMaxTime": 1558800000
}
]
},
"flags": {
"sources": [
"nearest-precip",
"meteoalarm",
"cmc",
"gfs",
"icon",
"isd",
"madis",
"darksky"
],
"meteoalarm-license": "Based on data from EUMETNET - MeteoAlarm [https://www.meteoalarm.eu/]. Time delays between this website and the MeteoAlarm website are possible; for the most up to date information about alert levels as published by the participating National Meteorological Services please use the MeteoAlarm website.",
"nearest-station": 0.597,
"units": "us"
},
"offset": 1
}


console.log("длина "+darkskyTestData.hourly.data.length)
//console.log(darkskyTestData.hourly.data[22])



//tracery
//var grammar = require("./tracery.js").grammar;
//var tempStatus = grammar.flatten("#origin#");

//console.log(grammar.flatten("---it makes you feel #custom emotion# about #anything#"));


// Set Webhook
bot.telegram.setWebhook(`https://${appName}.glitch.me/webhook`)
console.log(`Listening incoming webhook on: https://${appName}.glitch.me/webhook`)
//console.log(tempStatus) //.ВРЕМЕННО 


//// WRITE STUFF HERE

var times = SunCalc.getTimes(new Date(), 55.04, 82.93);//[55.0, 82.0]] [55.0, 82.0]


var sunriseNskTimes = (times.sunrise.getHours() + 7) % 24;
var morningGoldenhourEndNskTimes = (times.goldenHourEnd.getHours() + 7) % 24;
var goldenhourNskTimes = (times.goldenHour.getHours() + 7) % 24;
var sunsetNskTimes = (times.sunset.getHours() + 7) % 24;


var whenToRemind = (times.goldenHour.getHours() + 5) % 24;

var now = new Date();
var currentHours = ( now.getHours() + 7 ) % 24;


var weatherJs = require('weather-js');
weatherJs.find({search: 'Novosibirsk', degreeType: 'C'}, function(err, result) {
  
  //console.log(JSON.stringify(result, null, 2));
  
  

  
  //darkskyTestData.hourly.forEach
 
  //console.log(darkskyTestData.hourly.data[0])
  
   //console.log(darkskyTestData.hourly.data[0].time)
   //console.log(new Date(darkskyTestData.hourly.data[0].time * 1000))
  
  
  /*for(var i = 0; i < darkskyTestData.hourly.data.length; i++){
    
    //console.log(darkskyTestData.hourly.data[i].time)
    var timeItem = new Date(darkskyTestData.hourly.data[i].time * 1000)
    console.log ( (timeItem.getHours() + 7 )% 24);
    
   
  }*/
  
  
  
  
  
 /* 
  var tempTimes = times;
  
console.log ('Before:' + Date(tempTimes.goldenHour.getHours()))
tempTimes.goldenHour.setHours( tempTimes.goldenHour.getHours() +  7);
console.log ('After:' + Date(tempTimes.goldenHour.getHours()))
  */
  
  
  
  
  if(err) console.log(err);
  console.log('\nSunrise will be at ' + sunriseNskTimes + ':' + times.sunrise.getMinutes());
  console.log('Morning golden hour will end at ' + morningGoldenhourEndNskTimes + ':' + times.sunset.getMinutes());
  
  console.log('I WILL REMIND my users at ' + whenToRemind + ':' + times.sunset.getMinutes());
  console.log('GOLDEN HOUR will start at ' + goldenhourNskTimes + ':' + times.sunset.getMinutes());
  
  console.log('Sunset will be at ' + sunsetNskTimes  + ':' + times.sunset.getMinutes());
  console.log('Current time: ' + currentHours + ':' + now.getMinutes());
  
  var timeUntilReminder = whenToRemind - currentHours
  console.log('Hours until reminder: ' + timeUntilReminder)
  
  var z = 0
  //z = 1 
  
  if(timeUntilReminder<2.5 && timeUntilReminder>0 || z){
    console.log ("Пора сделать запрос");
    
    
    
   var forecastIo = new ForecastIo(forecastioApi); 
    forecastIo.forecast('55.04', '82.93').then(function(data) { //55.04, 82.93
    console.log(JSON.stringify(data, null, 2));
       
    console.log(data.hourly.data.length)
    
    console.log(darkskyTestData.hourly.data[2])
      
    checkSunset(data);
      
    
    });                        
  
  } else {
    console.log ("еще рано делать запрос")
    checkSunset(darkskyTestData);
    console.log(darkskyTestData.hourly.data[2])

    
      
  
  
  
  }
  
  
    
/*
  console.log('\nopen weather CLOUDS: (30% to 70%) ' + testWeather.clouds.all )
  console.log('open weather WIND speed: (must be low) ' + testWeather.wind.speed)
  console.log('open weather HUMIDITY: (must be low, but not too low) ' + testWeather.main.humidity)
  console.log('open weather VISIBILITY: (must be high) ' + testWeather.visibility)
  */
  
  
  var x = 0
  //var x = 1
  if (x){
        weatherOpenweather.getAllWeather(function(err, JSONObj){
        console.log(JSONObj);
    });
  
  }
  
    var y = 0
  //var y = 1    //делает запрос 
  if (y){
    var forecastIo = new ForecastIo(forecastioApi); //вот этой хуйней я буду пользоваться
    forecastIo.forecast('55.04', '82.93').then(function(data) { //55.04, 82.93
    console.log(JSON.stringify(data, null, 2));
       
    console.log(data.hourly.data.length)
  });
  
  }
  
  
  
  
});



function checkSunset(darkskyTestData){

  console.log(darkskyTestData.hourly.data[2])
  
  var sunsetDarkskyData = darkskyTestData.hourly.data[2]
  
   console.log('\ndarksy weather CLOUDS, from 0 to 1 (30% to 70%) ' + sunsetDarkskyData.cloudCover)
  console.log('darksy  weather WIND speed mph: (must be low) ' + sunsetDarkskyData.windSpeed)
  console.log('darksy  weather HUMIDITY, from 0 to 1: (must be low, but not too low) ' + sunsetDarkskyData.humidity)
  console.log('darksy  weather VISIBILITY, capped at 10 miles: (must be high) ' + sunsetDarkskyData.visibility)
    
    //слабый ветер считается до 5.4 м/с. это 12 миль/час
    if(sunsetDarkskyData.cloudCover>0.3 && sunsetDarkskyData.cloudCover<0.7 && sunsetDarkskyData.windSpeed<12 &&
       sunsetDarkskyData.humidity >0.1 &&  sunsetDarkskyData.humidity < 2.5 &&
       sunsetDarkskyData.visibility > 7
      
      ){
        console.log('ОХУЕННЫЙ БЛЯТЬ ЗАКАТ');
      channelBot.sendMessage('@nsksunsetsu', `Сегодня в Н-ске будет красивый закат :)`, token)
    .then(res => console.log(res))
    .catch(err => console.error(err))
       }
    else console.log('ЗАКАТ ХУЙНЯ')
   /* channelBot.sendMessage('@nsksunsetsu', `Сегодня красивого заката не будет :(`, token)
    .then(res => console.log(res))
    .catch(err => console.error(err))*/
    
      
  
}



app.get('/test_mode', (req, res) => {
  console.log('HELLO HELLO HELLO');
  doYourJob();
  
  
   /*channelBot.sendMessage('@nsksunsetsu', `Бот живой`, token)
    .then(res => console.log(res))
    .catch(err => console.error(err))
  
  */
  res.end('Hello there, I\'m alive');  
});


const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});



 /*var diff = now.getTimezoneOffset(); 
console.log(diff);*/











//var goldenHourStr = convertToNsk(times.sunrise.goldenHour());


//console.log(sunriseStr);
//console.log(goldenHourStr);
//console.log(sunsetStr);



//console.log(times);













// Start builtin Webhook
//bot.startWebhook('/webhook', null, appPort)


bot.on('/quit', (ctx) => {
  // Simple usage 
  ctx.telegram.leaveChat(ctx.message.chat.id)
})

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
})



const testMenu = Telegraf.Extra
  .markdown()
  .markup((m) => m.inlineKeyboard([
    m.callbackButton('Test button', 'test')
  ]))

const aboutMenu = Telegraf.Extra
  .markdown()
  .markup((m) => m.keyboard([
    m.callbackButton('⬅️ Back')
  ]).resize())
/*
app.hears('test', (ctx) => {
  ctx.reply('test message', testMenu).then(() => {
    ctx.reply('about', aboutMenu)
  })
})

//app.action('test', (ctx) => ctx.answerCallbackQuery('Yay!'))
*/
bot.on('sticker', (ctx) => ctx.reply('What a lovely sticker 👍'))
  
bot.on('text', (ctx) => {
  ctx.reply(tempStatus);
  //appendTextToFile(tempStatus,"file.txt","");
  log(tempStatus+ctx.from)
  console.log('I generated status: ',tempStatus)
  
  tempStatus = grammar.flatten("#origin#");
  //console.log('start'+tempStatus, ctx.from)
});

bot.command('/hipster', (ctx) => ctx.reply('S '+tempStatus))

//var tempStatus = grammar.flatten("#origin#");

// bot.command('start', (ctx) => ctx.reply('Hello World')) versi pendeknya
bot.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

bot.command('help', (ctx) => {
  console.log('help', ctx.from)
  ctx.reply('Tidak ada bantuan untuk saat ini')
})

bot.command('recommend', (ctx) => {
  console.log('recommend', ctx.from)
  ctx.send('asdasd')
})


// Listener
bot.on('message', (ctx) => {
  // Debug telegram incoming webhook
  console.log(ctx.message)
  
  // Untuk melihat pesannya, tekan tombol log
  console.log(ctx.updateSubType)
  
  //sambut pendatang baru di grup
  if(ctx.updateSubType == 'new_chat_member'){
    ctx.reply(`Selamat datang ${ctx.message.new_chat_member.first_name} 😁`)
  }
  
  //mengirim pesan kembali ke user
  // ctx.reply(ctx.message.text)  
})



function appendTextToFile(text, fileName, separator) {
  fs.readFile(fileName, function(err, data) {
    if (err) throw err;
    if (data.indexOf(text) >= 0) {
      //metadata = metadata + "DUPLICATE";
    } else {
      fs.appendFile(fileName, separator + text, function(err) {
        //сохранять ссылки в отдельный файл
        if (err) throw err;
        console.log("Saved " + text + " to " + fileName);
      });
      console.log(data);
    }
  });
}



 function convertToNsk( x){
  return (x + 7) % 24
}



function doYourJob(){
 console.log('doing my job')
  
  
  weatherJs.find({search: 'Novosibirsk', degreeType: 'C'}, function(err, result) {
  
  if(err) console.log(err);
  console.log('\nSunrise will be at ' + sunriseNskTimes + ':' + times.sunrise.getMinutes());
  console.log('Morning golden hour will end at ' + morningGoldenhourEndNskTimes + ':' + times.sunset.getMinutes());
  
  console.log('I WILL REMIND my users at ' + whenToRemind + ':' + times.sunset.getMinutes());
  console.log('GOLDEN HOUR will start at ' + goldenhourNskTimes + ':' + times.sunset.getMinutes());
  
  console.log('Sunset will be at ' + sunsetNskTimes  + ':' + times.sunset.getMinutes());
  console.log('Current time: ' + currentHours + ':' + now.getMinutes());
  
  var timeUntilReminder = whenToRemind - currentHours
  console.log('Hours until reminder: ' + timeUntilReminder)
  
  var z = 0
  //z = 1    //Откомменти меня обратно, когда будет судить жюри, чтобы не исчерпать лимит запросов
  
  if(timeUntilReminder<2.5 && timeUntilReminder>0 || z){
    console.log ("Пора сделать запрос");
    
    
    
   var forecastIo = new ForecastIo(forecastioApi); 
    forecastIo.forecast('55.04', '82.93').then(function(data) { //55.04, 82.93
    //console.log(JSON.stringify(data, null, 2));
       
    console.log(data.hourly.data.length)
    
    console.log(darkskyTestData.hourly.data[2])
      
    checkSunset(data);
      
    
    });                        
  
  } else {
    console.log ("еще рано делать запрос")
    checkSunset(darkskyTestData);
    console.log(darkskyTestData.hourly.data[2])

    
      
  
  
  
  }
  
  
    
/*
  console.log('\nopen weather CLOUDS: (30% to 70%) ' + testWeather.clouds.all )
  console.log('open weather WIND speed: (must be low) ' + testWeather.wind.speed)
  console.log('open weather HUMIDITY: (must be low, but not too low) ' + testWeather.main.humidity)
  console.log('open weather VISIBILITY: (must be high) ' + testWeather.visibility)
  */
  
  
  var x = 0
  //var x = 1
  if (x){
        weatherOpenweather.getAllWeather(function(err, JSONObj){
        console.log(JSONObj);
    });
  
  }
  
    var y = 0
  //var y = 1    //делает запрос 
  if (y){
    var forecastIo = new ForecastIo(forecastioApi); //вот этой хуйней я буду пользоваться
    forecastIo.forecast('55.04', '82.93').then(function(data) { //55.04, 82.93
    console.log(JSON.stringify(data, null, 2));
       
    console.log(data.hourly.data.length)
  });
  
  }
  
  
  
  
});



function checkSunset(darkskyTestData){

  console.log(darkskyTestData.hourly.data[2])
  
  var sunsetDarkskyData = darkskyTestData.hourly.data[2]
  
   console.log('\ndarksy weather CLOUDS, from 0 to 1 (30% to 70%) ' + sunsetDarkskyData.cloudCover)
  console.log('darksy  weather WIND speed mph: (must be low) ' + sunsetDarkskyData.windSpeed)
  console.log('darksy  weather HUMIDITY, from 0 to 1: (must be low, but not too low) ' + sunsetDarkskyData.humidity)
  console.log('darksy  weather VISIBILITY, capped at 10 miles: (must be high) ' + sunsetDarkskyData.visibility)
    
    //слабый ветер считается до 5.4 м/с. это 12 миль/час
    if(sunsetDarkskyData.cloudCover>0.3 && sunsetDarkskyData.cloudCover<0.7 && sunsetDarkskyData.windSpeed<12 &&
       sunsetDarkskyData.humidity >0.1 &&  sunsetDarkskyData.humidity < 2.5 &&
       sunsetDarkskyData.visibility > 7
      
      ){
      
      
      
      
        console.log('ОХУЕННЫЙ БЛЯТЬ ЗАКАТ');
      channelBot.sendMessage('@nsksunsetsu', `Сегодня в Н-ске будет красивый закат :)`, token)
    .then(res => console.log(res))
    .catch(err => console.error(err))
      
      
      
      
       }
    else console.log('ЗАКАТ ХУЙНЯ')
  
  
  
  var line1 = 'Облачность: ' + sunsetDarkskyData.cloudCover + ' (нужно 30-70%)'     //from 0 to 1 (30% to 70%) ' + sunsetDarkskyData.cloudCover)
  var line2 = 'Ветер: '+ sunsetDarkskyData.windSpeed + ''
  var line3 = 'Влажность: '+ sunsetDarkskyData.humidity + ''
      console.log('darksy  weather HUMIDITY, from 0 to 1: (must be low, but not too low) ' + sunsetDarkskyData.humidity)
  var line4 = 'Видимость: '+ sunsetDarkskyData.visibility + ''
      console.log('darksy  weather VISIBILITY, capped at 10 miles: (must be high) ' + sunsetDarkskyData.visibility)
  
  
  
  
  
   channelBot.sendMessage('@nsksunsetsu',
   
   `Не будет сегодня в Новосибирске красивого заката :(` + '\n' +
    line1 + '\n' +
    line2 + '\n' +
    line3 + '\n' +
    line4 + '\n' +
    'Чтобы протестить меня ещё раз, жми по ссылке: https://nsk-sunsets.glitch.me/test_mode'
   
   , token)
    .then(res => console.log(res))
    .catch(err => console.error(err))
  
  
  
    
      
  
}

  
  
  
  
  
}



function checkSunsetWebhook(darkskyTestData){
  console.log('I\'m activated by webhook')

  console.log(darkskyTestData.hourly.data[2])
  
  var sunsetDarkskyData = darkskyTestData.hourly.data[2]
  
   console.log('\ndarksy weather CLOUDS, from 0 to 1 (30% to 70%) ' + sunsetDarkskyData.cloudCover)
  console.log('darksy  weather WIND speed mph: (must be low) ' + sunsetDarkskyData.windSpeed)
  console.log('darksy  weather HUMIDITY, from 0 to 1: (must be low, but not too low) ' + sunsetDarkskyData.humidity)
  console.log('darksy  weather VISIBILITY, capped at 10 miles: (must be high) ' + sunsetDarkskyData.visibility)
    
    //слабый ветер считается до 5.4 м/с. это 12 миль/час
    if(sunsetDarkskyData.cloudCover>0.3 && sunsetDarkskyData.cloudCover<0.7 && sunsetDarkskyData.windSpeed<12 &&
       sunsetDarkskyData.humidity >0.1 &&  sunsetDarkskyData.humidity < 2.5 &&
       sunsetDarkskyData.visibility > 7
      
      ){
        console.log('ОХУЕННЫЙ БЛЯТЬ ЗАКАТ');
      channelBot.sendMessage('@nsksunsetsu', `Сегодня в Н-ске будет красивый закат :)`, token)
    .then(res => console.log(res))
    .catch(err => console.error(err))
       }
    else console.log('ЗАКАТ ХУЙНЯ')
    channelBot.sendMessage('@nsksunsetsu', `Не будет сегодня в Новосибирске красивого заката :(`, token)
    .then(res => console.log(res))
    .catch(err => console.error(err))
    
  
  
}