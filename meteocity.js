var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var input = document.querySelector('input');
var kelvin = 273;
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var city_1 = input.value;
        var icon_1 = document.querySelector('.icon-weather');
        var temperature_1 = document.querySelector('.weather-temp p');
        var location_1 = document.querySelector('.location');
        var error_message_1 = document.querySelector('.error-message');
        function callingFn() {
            return __awaiter(this, void 0, void 0, function () {
                var response, json_1, count_1, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=' + city_1.toLowerCase(), {
                                    method: 'get',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            json_1 = _a.sent();
                            temperature_1.innerHTML = Math.floor(json_1.main.temp - kelvin) + "\u00B0<span>C</span>";
                            location_1.innerHTML = json_1.name + ', ' + json_1.sys.country;
                            icon_1.src = 'images/icons/black/png/64x64/' + json_1.weather[0].icon + '.png';
                            error_message_1.innerHTML = '';
                            count_1 = 0;
                            temperature_1.addEventListener('click', function () {
                                count_1 += 1;
                                if (count_1 % 2 !== 0) {
                                    temperature_1.innerHTML = Math.floor((json_1.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span>";
                                }
                                else {
                                    temperature_1.innerHTML = Math.floor(json_1.main.temp - kelvin) + "\u00B0<span>C</span>";
                                }
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error("Error:", error_1);
                            error_message_1.innerHTML = 'Veuillez bien orthographier le nom de la ville en anglais.';
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        callingFn();
    }
});
// 10 CITIES WEATHER
var paris_background = document.querySelector('#paris-background');
var paris_temp = document.querySelector('#paris');
function parisWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, paris_data_1, paris_icon_1, count_2, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=paris', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    paris_data_1 = _a.sent();
                    paris_icon_1 = 'images/icons/white/png/64x64/' + paris_data_1.weather[0].icon + '.png';
                    paris_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + paris_icon_1 + "\" alt=\"\"> " + Math.floor(paris_data_1.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_2 = 0;
                    paris_temp.addEventListener('click', function () {
                        count_2 += 1;
                        if (count_2 % 2 !== 0) {
                            paris_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + paris_icon_1 + "\" alt=\"\"> " + Math.floor((paris_data_1.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            paris_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + paris_icon_1 + "\" alt=\"\"> " + Math.floor(paris_data_1.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(paris_data_1.main.temp - kelvin) < 10) {
                        paris_background.src = 'images/paris-hiver.jpg';
                    }
                    else if (Math.floor(paris_data_1.main.temp - kelvin) < 20) {
                        paris_background.src = 'images/paris-printemps.jpg';
                    }
                    else if (Math.floor(paris_data_1.main.temp - kelvin) > 20) {
                        paris_background.src = 'images/paris-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
parisWeather();
var athens_background = document.querySelector('#athens-background');
var athens_temp = document.querySelector('#athens');
function athensWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json_2, athens_icon_1, count_3, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=athens', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_2 = _a.sent();
                    athens_icon_1 = 'images/icons/white/png/64x64/' + json_2.weather[0].icon + '.png';
                    athens_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + athens_icon_1 + "\" alt=\"\"> " + Math.floor(json_2.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_3 = 0;
                    athens_temp.addEventListener('click', function () {
                        count_3 += 1;
                        if (count_3 % 2 !== 0) {
                            athens_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + athens_icon_1 + "\" alt=\"\"> " + Math.floor((json_2.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            athens_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + athens_icon_1 + "\" alt=\"\"> " + Math.floor(json_2.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(json_2.main.temp - kelvin) < 10) {
                        athens_background.src = 'images/athenes-hiver.jpg';
                    }
                    else if (Math.floor(json_2.main.temp - kelvin) < 20) {
                        athens_background.src = 'images/athenes-printemps.jpg';
                    }
                    else if (Math.floor(json_2.main.temp - kelvin) > 20) {
                        athens_background.src = 'images/athenes-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error:", error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
athensWeather();
var tokyo_background = document.querySelector('#tokyo-background');
var tokyo_temp = document.querySelector('#tokyo');
function tokyoWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json_3, tokyo_icon_1, count_4, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=tokyo', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_3 = _a.sent();
                    tokyo_icon_1 = 'images/icons/white/png/64x64/' + json_3.weather[0].icon + '.png';
                    tokyo_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + tokyo_icon_1 + "\" alt=\"\"> " + Math.floor(json_3.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_4 = 0;
                    tokyo_temp.addEventListener('click', function () {
                        count_4 += 1;
                        if (count_4 % 2 !== 0) {
                            tokyo_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + tokyo_icon_1 + "\" alt=\"\"> " + Math.floor((json_3.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            tokyo_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + tokyo_icon_1 + "\" alt=\"\"> " + Math.floor(json_3.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(json_3.main.temp - kelvin) < 10) {
                        tokyo_background.src = 'images/tokyo-hiver.jpg';
                    }
                    else if (Math.floor(json_3.main.temp - kelvin) < 20) {
                        tokyo_background.src = 'images/tokyo-printemps.jpg';
                    }
                    else if (Math.floor(json_3.main.temp - kelvin) > 20) {
                        tokyo_background.src = 'images/tokyo-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error("Error:", error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
tokyoWeather();
var bogota_background = document.querySelector('#bogota-background');
var bogota_temp = document.querySelector('#bogota');
function bogotaWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json_4, bogota_icon_1, count_5, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=bogota', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_4 = _a.sent();
                    bogota_icon_1 = 'images/icons/white/png/64x64/' + json_4.weather[0].icon + '.png';
                    bogota_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + bogota_icon_1 + "\" alt=\"\"> " + Math.floor(json_4.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_5 = 0;
                    bogota_temp.addEventListener('click', function () {
                        count_5 += 1;
                        if (count_5 % 2 !== 0) {
                            bogota_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + bogota_icon_1 + "\" alt=\"\"> " + Math.floor((json_4.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            bogota_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + bogota_icon_1 + "\" alt=\"\"> " + Math.floor(json_4.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(json_4.main.temp - kelvin) < 10) {
                        bogota_background.src = 'images/bogota-hiver.jpg';
                    }
                    else if (Math.floor(json_4.main.temp - kelvin) < 20) {
                        bogota_background.src = 'images/bogota-printemps.jpg';
                    }
                    else if (Math.floor(json_4.main.temp - kelvin) > 20) {
                        bogota_background.src = 'images/bogota-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error("Error:", error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
bogotaWeather();
var madrid_background = document.querySelector('#madrid-background');
var madrid_temp = document.querySelector('#madrid');
function madridWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json_5, madrid_icon_1, count_6, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=madrid', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_5 = _a.sent();
                    madrid_icon_1 = 'images/icons/white/png/64x64/' + json_5.weather[0].icon + '.png';
                    madrid_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + madrid_icon_1 + "\" alt=\"\"> " + Math.floor(json_5.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_6 = 0;
                    madrid_temp.addEventListener('click', function () {
                        count_6 += 1;
                        if (count_6 % 2 !== 0) {
                            madrid_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + madrid_icon_1 + "\" alt=\"\"> " + Math.floor((json_5.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            madrid_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + madrid_icon_1 + "\" alt=\"\"> " + Math.floor(json_5.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(json_5.main.temp - kelvin) < 10) {
                        madrid_background.src = 'images/madrid-hiver.jpg';
                    }
                    else if (Math.floor(json_5.main.temp - kelvin) < 20) {
                        madrid_background.src = 'images/madrid-printemps.jpg';
                    }
                    else if (Math.floor(json_5.main.temp - kelvin) > 20) {
                        madrid_background.src = 'images/madrid-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error("Error:", error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
madridWeather();
var london_background = document.querySelector('#london-background');
var london_temp = document.querySelector('#london');
function londonWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json_6, london_icon_1, count_7, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=london', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_6 = _a.sent();
                    london_icon_1 = 'images/icons/white/png/64x64/' + json_6.weather[0].icon + '.png';
                    london_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + london_icon_1 + "\" alt=\"\"> " + Math.floor(json_6.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_7 = 0;
                    london_temp.addEventListener('click', function () {
                        count_7 += 1;
                        if (count_7 % 2 !== 0) {
                            london_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + london_icon_1 + "\" alt=\"\"> " + Math.floor((json_6.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            london_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + london_icon_1 + "\" alt=\"\"> " + Math.floor(json_6.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(json_6.main.temp - kelvin) < 10) {
                        london_background.src = 'images/londres-hiver.jpg';
                    }
                    else if (Math.floor(json_6.main.temp - kelvin) < 20) {
                        london_background.src = 'images/londres-printemps.jpg';
                    }
                    else if (Math.floor(json_6.main.temp - kelvin) > 20) {
                        london_background.src = 'images/londres-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.error("Error:", error_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
londonWeather();
var sydney_background = document.querySelector('#sydney-background');
var sydney_temp = document.querySelector('#sydney');
function sydneyWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json_7, sydney_icon_1, count_8, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=sydney', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_7 = _a.sent();
                    sydney_icon_1 = 'images/icons/white/png/64x64/' + json_7.weather[0].icon + '.png';
                    sydney_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + sydney_icon_1 + "\" alt=\"\"> " + Math.floor(json_7.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_8 = 0;
                    sydney_temp.addEventListener('click', function () {
                        count_8 += 1;
                        if (count_8 % 2 !== 0) {
                            sydney_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + sydney_icon_1 + "\" alt=\"\"> " + Math.floor((json_7.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            sydney_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + sydney_icon_1 + "\" alt=\"\"> " + Math.floor(json_7.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(json_7.main.temp - kelvin) < 10) {
                        sydney_background.src = 'images/sydney-hiver.jpg';
                    }
                    else if (Math.floor(json_7.main.temp - kelvin) < 20) {
                        sydney_background.src = 'images/sydney-printemps.jpg';
                    }
                    else if (Math.floor(json_7.main.temp - kelvin) > 20) {
                        sydney_background.src = 'images/sydney-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error("Error:", error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
sydneyWeather();
var newyork_background = document.querySelector('#newyork-background');
var newyork_temp = document.querySelector('#newyork');
function newyorkWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json_8, newyork_icon_1, count_9, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=new%20york', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_8 = _a.sent();
                    newyork_icon_1 = 'images/icons/white/png/64x64/' + json_8.weather[0].icon + '.png';
                    newyork_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + newyork_icon_1 + "\" alt=\"\"> " + Math.floor(json_8.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_9 = 0;
                    newyork_temp.addEventListener('click', function () {
                        count_9 += 1;
                        if (count_9 % 2 !== 0) {
                            newyork_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + newyork_icon_1 + "\" alt=\"\"> " + Math.floor((json_8.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            newyork_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + newyork_icon_1 + "\" alt=\"\"> " + Math.floor(json_8.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(json_8.main.temp - kelvin) < 10) {
                        newyork_background.src = 'images/new-york-hiver.jpg';
                    }
                    else if (Math.floor(json_8.main.temp - kelvin) < 20) {
                        newyork_background.src = 'images/new-york-printemps.jpg';
                    }
                    else if (Math.floor(json_8.main.temp - kelvin) > 20) {
                        newyork_background.src = 'images/new-york-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_9 = _a.sent();
                    console.error("Error:", error_9);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
newyorkWeather();
var seoul_background = document.querySelector('#seoul-background');
var seoul_temp = document.querySelector('#seoul');
function seoulWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json_9, seoul_icon_1, count_10, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=seoul', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_9 = _a.sent();
                    seoul_icon_1 = 'images/icons/white/png/64x64/' + json_9.weather[0].icon + '.png';
                    seoul_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + seoul_icon_1 + "\" alt=\"\"> " + Math.floor(json_9.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_10 = 0;
                    seoul_temp.addEventListener('click', function () {
                        count_10 += 1;
                        if (count_10 % 2 !== 0) {
                            seoul_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + seoul_icon_1 + "\" alt=\"\"> " + Math.floor((json_9.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            seoul_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + seoul_icon_1 + "\" alt=\"\"> " + Math.floor(json_9.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(json_9.main.temp - kelvin) < 10) {
                        seoul_background.src = 'images/seoul-hiver.jpg';
                    }
                    else if (Math.floor(json_9.main.temp - kelvin) < 20) {
                        seoul_background.src = 'images/seoul-printemps.jpg';
                    }
                    else if (Math.floor(json_9.main.temp - kelvin) > 20) {
                        seoul_background.src = 'images/seoul-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_10 = _a.sent();
                    console.error("Error:", error_10);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
seoulWeather();
var singapour_background = document.querySelector('#singapour-background');
var singapour_temp = document.querySelector('#singapour');
function singapourWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json_10, singapour_icon_1, count_11, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=singapour', {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_10 = _a.sent();
                    singapour_icon_1 = 'images/icons/white/png/64x64/' + json_10.weather[0].icon + '.png';
                    singapour_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + singapour_icon_1 + "\" alt=\"\"> " + Math.floor(json_10.main.temp - kelvin) + "\u00B0<span>C</span> ";
                    count_11 = 0;
                    singapour_temp.addEventListener('click', function () {
                        count_11 += 1;
                        if (count_11 % 2 !== 0) {
                            singapour_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + singapour_icon_1 + "\" alt=\"\"> " + Math.floor((json_10.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
                        }
                        else {
                            singapour_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + singapour_icon_1 + "\" alt=\"\"> " + Math.floor(json_10.main.temp - kelvin) + "\u00B0<span>C</span> ";
                        }
                    });
                    //BACKGROUND CHANGE
                    if (Math.floor(json_10.main.temp - kelvin) < 10) {
                        singapour_background.src = 'images/singapour-hiver.jpg';
                    }
                    else if (Math.floor(json_10.main.temp - kelvin) < 20) {
                        singapour_background.src = 'images/singapour-printemps.jpg';
                    }
                    else if (Math.floor(json_10.main.temp - kelvin) > 20) {
                        singapour_background.src = 'images/singapour-ete.jpg';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _a.sent();
                    console.error("Error:", error_11);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
singapourWeather();
