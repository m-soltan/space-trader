const jsonString: string = `{
    "game_duration": 300,
    "initial_credits": 1984,
    "items": [
        "Dwimeryt",
        "Cynamon",
        "Nuka-Cola",
        "Z\u0142oto",
        "Unobtainium",
        "Protea\u0144skie dyski",
        "Ziemniaki",
        "Lyrium",
        "Murkwie",
        "Woda"
    ],
    "planets": {
        "Alderaan": {
            "available_items": {
                "Cynamon": {
                    "available": 74,
                    "buy_price": 6,
                    "sell_price": 6
                },
                "Dwimeryt": {
                    "available": 42,
                    "buy_price": 12,
                    "sell_price": 11
                },
                "Nuka-Cola": {
                    "available": 34,
                    "buy_price": 13,
                    "sell_price": 12
                },
                "Protea\u0144skie dyski": {
                    "available": 5,
                    "buy_price": 76,
                    "sell_price": 69
                },
                "Unobtainium": {
                    "available": 23,
                    "buy_price": 33,
                    "sell_price": 31
                },
                "Woda": {
                    "available": 22,
                    "buy_price": 19,
                    "sell_price": 18
                },
                "Ziemniaki": {
                    "available": 10,
                    "buy_price": 92,
                    "sell_price": 86
                },
                "Z\u0142oto": {
                    "available": 12,
                    "buy_price": 19,
                    "sell_price": 17
                }
            },
            "x": 15,
            "y": 32
        },
        "Argoland": {
            "available_items": {
                "Dwimeryt": {
                    "available": 23,
                    "buy_price": 10,
                    "sell_price": 10
                },
                "Lyrium": {
                    "available": 39,
                    "buy_price": 9,
                    "sell_price": 8
                },
                "Murkwie": {
                    "available": 5,
                    "buy_price": 73,
                    "sell_price": 64
                },
                "Nuka-Cola": {
                    "available": 25,
                    "buy_price": 22,
                    "sell_price": 19
                },
                "Protea\u0144skie dyski": {
                    "available": 10,
                    "buy_price": 75,
                    "sell_price": 65
                },
                "Ziemniaki": {
                    "available": 6,
                    "buy_price": 69,
                    "sell_price": 61
                },
                "Z\u0142oto": {
                    "available": 12,
                    "buy_price": 34,
                    "sell_price": 30
                }
            },
            "x": 59,
            "y": 44
        },
        "Arrakis": {
            "available_items": {
                "Cynamon": {
                    "available": 59,
                    "buy_price": 8,
                    "sell_price": 7
                },
                "Lyrium": {
                    "available": 53,
                    "buy_price": 10,
                    "sell_price": 8
                },
                "Murkwie": {
                    "available": 6,
                    "buy_price": 89,
                    "sell_price": 76
                },
                "Nuka-Cola": {
                    "available": 25,
                    "buy_price": 16,
                    "sell_price": 15
                },
                "Protea\u0144skie dyski": {
                    "available": 7,
                    "buy_price": 64,
                    "sell_price": 57
                },
                "Unobtainium": {
                    "available": 12,
                    "buy_price": 36,
                    "sell_price": 33
                },
                "Woda": {
                    "available": 12,
                    "buy_price": 25,
                    "sell_price": 21
                },
                "Ziemniaki": {
                    "available": 9,
                    "buy_price": 120,
                    "sell_price": 107
                },
                "Z\u0142oto": {
                    "available": 16,
                    "buy_price": 23,
                    "sell_price": 21
                }
            },
            "x": 81,
            "y": 34
        },
        "Corellia": {
            "available_items": {
                "Dwimeryt": {
                    "available": 38,
                    "buy_price": 8,
                    "sell_price": 8
                },
                "Lyrium": {
                    "available": 63,
                    "buy_price": 8,
                    "sell_price": 7
                },
                "Murkwie": {
                    "available": 6,
                    "buy_price": 91,
                    "sell_price": 84
                },
                "Protea\u0144skie dyski": {
                    "available": 10,
                    "buy_price": 74,
                    "sell_price": 66
                },
                "Unobtainium": {
                    "available": 11,
                    "buy_price": 30,
                    "sell_price": 26
                },
                "Ziemniaki": {
                    "available": 12,
                    "buy_price": 71,
                    "sell_price": 66
                },
                "Z\u0142oto": {
                    "available": 19,
                    "buy_price": 37,
                    "sell_price": 33
                }
            },
            "x": 43,
            "y": 69
        },
        "Encja": {
            "available_items": {
                "Cynamon": {
                    "available": 59,
                    "buy_price": 6,
                    "sell_price": 5
                },
                "Dwimeryt": {
                    "available": 56,
                    "buy_price": 10,
                    "sell_price": 10
                },
                "Lyrium": {
                    "available": 51,
                    "buy_price": 9,
                    "sell_price": 8
                },
                "Murkwie": {
                    "available": 6,
                    "buy_price": 88,
                    "sell_price": 76
                },
                "Nuka-Cola": {
                    "available": 35,
                    "buy_price": 17,
                    "sell_price": 16
                },
                "Protea\u0144skie dyski": {
                    "available": 9,
                    "buy_price": 103,
                    "sell_price": 90
                },
                "Unobtainium": {
                    "available": 13,
                    "buy_price": 39,
                    "sell_price": 37
                },
                "Woda": {
                    "available": 12,
                    "buy_price": 32,
                    "sell_price": 32
                },
                "Ziemniaki": {
                    "available": 6,
                    "buy_price": 60,
                    "sell_price": 57
                },
                "Z\u0142oto": {
                    "available": 26,
                    "buy_price": 40,
                    "sell_price": 35
                }
            },
            "x": 91,
            "y": 32
        },
        "Gaia": {
            "available_items": {
                "Cynamon": {
                    "available": 80,
                    "buy_price": 6,
                    "sell_price": 6
                },
                "Dwimeryt": {
                    "available": 85,
                    "buy_price": 8,
                    "sell_price": 7
                },
                "Lyrium": {
                    "available": 41,
                    "buy_price": 10,
                    "sell_price": 9
                },
                "Protea\u0144skie dyski": {
                    "available": 9,
                    "buy_price": 102,
                    "sell_price": 94
                },
                "Woda": {
                    "available": 25,
                    "buy_price": 43,
                    "sell_price": 39
                },
                "Ziemniaki": {
                    "available": 8,
                    "buy_price": 92,
                    "sell_price": 82
                },
                "Z\u0142oto": {
                    "available": 16,
                    "buy_price": 35,
                    "sell_price": 31
                }
            },
            "x": 75,
            "y": 76
        },
        "Ksi": {
            "available_items": {
                "Cynamon": {
                    "available": 33,
                    "buy_price": 11,
                    "sell_price": 10
                },
                "Dwimeryt": {
                    "available": 80,
                    "buy_price": 6,
                    "sell_price": 6
                },
                "Lyrium": {
                    "available": 64,
                    "buy_price": 8,
                    "sell_price": 7
                },
                "Murkwie": {
                    "available": 4,
                    "buy_price": 73,
                    "sell_price": 67
                },
                "Nuka-Cola": {
                    "available": 30,
                    "buy_price": 17,
                    "sell_price": 14
                },
                "Protea\u0144skie dyski": {
                    "available": 8,
                    "buy_price": 39,
                    "sell_price": 37
                },
                "Unobtainium": {
                    "available": 12,
                    "buy_price": 41,
                    "sell_price": 39
                },
                "Woda": {
                    "available": 15,
                    "buy_price": 30,
                    "sell_price": 28
                },
                "Ziemniaki": {
                    "available": 6,
                    "buy_price": 74,
                    "sell_price": 64
                },
                "Z\u0142oto": {
                    "available": 16,
                    "buy_price": 20,
                    "sell_price": 18
                }
            },
            "x": 91,
            "y": 71
        },
        "Leonida": {
            "available_items": {
                "Cynamon": {
                    "available": 36,
                    "buy_price": 12,
                    "sell_price": 11
                },
                "Dwimeryt": {
                    "available": 50,
                    "buy_price": 8,
                    "sell_price": 7
                },
                "Lyrium": {
                    "available": 60,
                    "buy_price": 9,
                    "sell_price": 9
                },
                "Murkwie": {
                    "available": 6,
                    "buy_price": 89,
                    "sell_price": 85
                },
                "Nuka-Cola": {
                    "available": 39,
                    "buy_price": 18,
                    "sell_price": 16
                },
                "Protea\u0144skie dyski": {
                    "available": 7,
                    "buy_price": 65,
                    "sell_price": 57
                },
                "Unobtainium": {
                    "available": 9,
                    "buy_price": 38,
                    "sell_price": 33
                },
                "Ziemniaki": {
                    "available": 5,
                    "buy_price": 121,
                    "sell_price": 112
                },
                "Z\u0142oto": {
                    "available": 11,
                    "buy_price": 45,
                    "sell_price": 41
                }
            },
            "x": 32,
            "y": 5
        },
        "NowWhat": {
            "available_items": {
                "Cynamon": {
                    "available": 62,
                    "buy_price": 8,
                    "sell_price": 7
                },
                "Dwimeryt": {
                    "available": 22,
                    "buy_price": 9,
                    "sell_price": 9
                },
                "Murkwie": {
                    "available": 9,
                    "buy_price": 67,
                    "sell_price": 66
                },
                "Nuka-Cola": {
                    "available": 27,
                    "buy_price": 18,
                    "sell_price": 16
                },
                "Protea\u0144skie dyski": {
                    "available": 9,
                    "buy_price": 82,
                    "sell_price": 71
                },
                "Ziemniaki": {
                    "available": 4,
                    "buy_price": 74,
                    "sell_price": 63
                },
                "Z\u0142oto": {
                    "available": 17,
                    "buy_price": 28,
                    "sell_price": 24
                }
            },
            "x": 35,
            "y": 41
        },
        "Sur'Kesh": {
            "available_items": {
                "Cynamon": {
                    "available": 55,
                    "buy_price": 9,
                    "sell_price": 8
                },
                "Lyrium": {
                    "available": 34,
                    "buy_price": 9,
                    "sell_price": 8
                },
                "Murkwie": {
                    "available": 10,
                    "buy_price": 73,
                    "sell_price": 66
                },
                "Nuka-Cola": {
                    "available": 30,
                    "buy_price": 19,
                    "sell_price": 17
                },
                "Protea\u0144skie dyski": {
                    "available": 5,
                    "buy_price": 85,
                    "sell_price": 79
                },
                "Unobtainium": {
                    "available": 19,
                    "buy_price": 34,
                    "sell_price": 31
                },
                "Woda": {
                    "available": 21,
                    "buy_price": 23,
                    "sell_price": 20
                },
                "Ziemniaki": {
                    "available": 8,
                    "buy_price": 99,
                    "sell_price": 95
                }
            },
            "x": 39,
            "y": 31
        },
        "Tairia": {
            "available_items": {
                "Cynamon": {
                    "available": 70,
                    "buy_price": 10,
                    "sell_price": 10
                },
                "Lyrium": {
                    "available": 43,
                    "buy_price": 6,
                    "sell_price": 5
                },
                "Murkwie": {
                    "available": 8,
                    "buy_price": 97,
                    "sell_price": 84
                },
                "Nuka-Cola": {
                    "available": 32,
                    "buy_price": 20,
                    "sell_price": 19
                },
                "Unobtainium": {
                    "available": 19,
                    "buy_price": 44,
                    "sell_price": 41
                },
                "Woda": {
                    "available": 12,
                    "buy_price": 29,
                    "sell_price": 25
                },
                "Ziemniaki": {
                    "available": 6,
                    "buy_price": 123,
                    "sell_price": 103
                },
                "Z\u0142oto": {
                    "available": 14,
                    "buy_price": 37,
                    "sell_price": 34
                }
            },
            "x": 36,
            "y": 84
        },
        "Tatooine": {
            "available_items": {
                "Cynamon": {
                    "available": 60,
                    "buy_price": 11,
                    "sell_price": 10
                },
                "Dwimeryt": {
                    "available": 64,
                    "buy_price": 10,
                    "sell_price": 9
                },
                "Lyrium": {
                    "available": 45,
                    "buy_price": 8,
                    "sell_price": 7
                },
                "Murkwie": {
                    "available": 6,
                    "buy_price": 81,
                    "sell_price": 71
                },
                "Nuka-Cola": {
                    "available": 39,
                    "buy_price": 15,
                    "sell_price": 13
                },
                "Protea\u0144skie dyski": {
                    "available": 7,
                    "buy_price": 89,
                    "sell_price": 84
                },
                "Unobtainium": {
                    "available": 13,
                    "buy_price": 37,
                    "sell_price": 32
                },
                "Woda": {
                    "available": 10,
                    "buy_price": 23,
                    "sell_price": 21
                },
                "Ziemniaki": {
                    "available": 7,
                    "buy_price": 95,
                    "sell_price": 87
                },
                "Z\u0142oto": {
                    "available": 19,
                    "buy_price": 35,
                    "sell_price": 32
                }
            },
            "x": 47,
            "y": 68
        },
        "Tuchanka": {
            "available_items": {
                "Cynamon": {
                    "available": 59,
                    "buy_price": 10,
                    "sell_price": 9
                },
                "Dwimeryt": {
                    "available": 51,
                    "buy_price": 7,
                    "sell_price": 6
                },
                "Lyrium": {
                    "available": 65,
                    "buy_price": 11,
                    "sell_price": 10
                },
                "Murkwie": {
                    "available": 9,
                    "buy_price": 90,
                    "sell_price": 82
                },
                "Nuka-Cola": {
                    "available": 46,
                    "buy_price": 18,
                    "sell_price": 16
                },
                "Protea\u0144skie dyski": {
                    "available": 10,
                    "buy_price": 71,
                    "sell_price": 65
                },
                "Unobtainium": {
                    "available": 8,
                    "buy_price": 39,
                    "sell_price": 37
                },
                "Woda": {
                    "available": 15,
                    "buy_price": 28,
                    "sell_price": 24
                },
                "Ziemniaki": {
                    "available": 10,
                    "buy_price": 61,
                    "sell_price": 57
                },
                "Z\u0142oto": {
                    "available": 12,
                    "buy_price": 46,
                    "sell_price": 40
                }
            },
            "x": 27,
            "y": 76
        },
        "Ziemia": {
            "available_items": {
                "Cynamon": {
                    "available": 58,
                    "buy_price": 8,
                    "sell_price": 7
                },
                "Dwimeryt": {
                    "available": 106,
                    "buy_price": 8,
                    "sell_price": 7
                },
                "Lyrium": {
                    "available": 31,
                    "buy_price": 9,
                    "sell_price": 8
                },
                "Murkwie": {
                    "available": 7,
                    "buy_price": 82,
                    "sell_price": 75
                },
                "Nuka-Cola": {
                    "available": 30,
                    "buy_price": 18,
                    "sell_price": 17
                },
                "Unobtainium": {
                    "available": 21,
                    "buy_price": 37,
                    "sell_price": 36
                },
                "Ziemniaki": {
                    "available": 6,
                    "buy_price": 77,
                    "sell_price": 69
                },
                "Z\u0142oto": {
                    "available": 13,
                    "buy_price": 38,
                    "sell_price": 32
                }
            },
            "x": 94,
            "y": 24
        }
    },
    "starships": {
        "Axiom": {
            "cargo_hold_size": 27,
            "position": "Tatooine"
        },
        "Enterprise": {
            "cargo_hold_size": 46,
            "position": "Corellia"
        },
        "Goliath": {
            "cargo_hold_size": 33,
            "position": "Sur'Kesh"
        },
        "Hermes": {
            "cargo_hold_size": 26,
            "position": "NowWhat"
        },
        "Millenium Falcon": {
            "cargo_hold_size": 35,
            "position": "Tatooine"
        },
        "Niezwyci\u0119\u017cony": {
            "cargo_hold_size": 60,
            "position": "Argoland"
        },
        "Normandy SR-2": {
            "cargo_hold_size": 40,
            "position": "Gaia"
        },
        "Nostromo": {
            "cargo_hold_size": 25,
            "position": "Arrakis"
        },
        "Rocinante": {
            "cargo_hold_size": 30,
            "position": "Alderaan"
        },
        "\u041a\u043e\u0441\u043c\u043e\u043d\u0430\u0432\u0442 \u0410\u043b\u0435\u043a\u0441\u0435\u0301\u0439 \u041b\u0435\u043e\u0301\u043d\u043e\u0432": {
            "cargo_hold_size": 35,
            "position": "Arrakis"
        }
    }
}
`;

const timeMultiplier = 1000;
const scoreboardLimit = 10;

const boxPlayerName = "player-name";
const displayBlock = "block";
const displayNone = "none";
const displayFlex = "flex";
const listOfPrices = "market";
const listOfOffers = "offers";
const playerNameDefault = "a mysterious stranger";
const positionEnRoute = "hyperspace";
const screenBuy = "buy";
const screenGame = "game-main";
const screenGameOver = "game-over";
const screenLogin = "login";
const screenPlanet = "planet-pop-up";
const screenSell = "sell";
const screenStarshipAtPlanet = "ship-at-planet";
const screenStarshipEnRoute = "starship-en-route";
const tableStarships = "starships";

class GameState {
    public credits: number;
    public currentPlanet: string;
    public currentStarship: string;
    public items: Good;
    public planets: { [name: string]: Position; };
    public playerName: string;
    public remainingTime: number;
    public starships: { [name: string]: Starship; };

    private addPlanets() {
        for (let i in parsed.planets) {
            this.planets[i] = new Position(i);
            let items = parsed.planets[i].available_items;
            for (let j in items) {
                this.planets[i].available_items[j] = new Good(j, i);
            }
        }
    }

    private addStarships() {
        for (let i in parsed.starships) {
            this.starships[i] = new Starship(i);
        }
    }

    public constructor() {
        this.credits = parsed.initial_credits;
        this.remainingTime = parsed.game_duration;    
        this.planets = {};
        this.starships = {};
        this.addPlanets();
        this.addStarships();
    }
}

class Good {
    public name: string;
    public available: number;
    public buy_price: number;
    public sell_price: number;  

    public constructor(name: string, planet: string) {
        let items = parsed.planets[planet].available_items;
        this.name = name;
        this.available = parseInt(items[name].available);
        this.buy_price = parseInt(items[name].buy_price);
        this.sell_price = parseInt(items[name].sell_price);
    }
}

class Position {
    public name: string;
    public available_items: { [index: number]: Good };
    public x: number;
    public y: number;

    public constructor(name: string) {
        this.name = name;
        this.available_items = {};
        this.x = parsed.planets[name].x;
        this.y = parsed.planets[name].y;
    }
}

class Starship {
    public enRoute: boolean;
    public name: string; 
    public cargo: { [name: string]: number; };
    public cargoSpace: number;
    public position: string;

    public constructor(name: string) {
        let size: number;
        this.enRoute = false;
        this.name = name;
        this.cargo = {};
        size = parsed.starships[name].cargo_hold_size;
        this.cargoSpace = size;
        this.position = parsed.starships[name].position;
    }
}

let parsed = JSON.parse(jsonString);

let game: GameState;

function addScore(score: number, name: string) {
    for (let i = scoreboardLimit; i > 0; --i) {
        let scoreCode = scoreboardLimit * score + i - 1;
        if (localStorage.getItem(scoreCode.toString())) {
            continue;
        }
        localStorage.setItem(scoreCode.toString(), name);
        break;
    }
    return;
}

function arrive(starship: string) {
    if (starship === game.currentStarship) {
        if (whichScreen() === screenStarshipEnRoute) {
            showStarshipAtPlanet(starship);
        }
    }
    game.starships[starship].enRoute = false;
    let elements = document.getElementsByClassName(tableStarships);
    let position = game.starships[starship].position;
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        for (let j = 0; j < el.rows.length; ++j) {
            let children = el.rows[j].cells[0].children;
            if (children[0].textContent === starship) {
                children[1].textContent = position;
            }
        }
    }
}

function buyGoods(good: string, amount: number) {
    let items = game.planets[game.currentPlanet].available_items;
    let price = items[good].buy_price;
    let starship = game.starships[game.currentStarship];
    if (greater(price * amount, game.credits)) {
        return;
    }
    if (greater(amount, starship.cargoSpace)) {
        return;
    }
    creditsUpdate(-price * amount);
    starship.cargoSpace -= amount;
    if (typeof starship.cargo[good] === "undefined") {
        starship.cargo[good] = 0;
    }
    starship.cargo[good] += amount;
    trimOffersBuy(good);
}

function calculateDistance(diffX: number, diffY: number) {
    let squareX = diffX ** 2;
    let squareY = diffY ** 2;
    let preciseResult = Math.sqrt(squareX + squareY);
    return Math.round(preciseResult);
}

function clear(x: HTMLTableElement) {
    while (x.rows.length > 1) {
        x.deleteRow(1);
    }
}

function clickPlanet(planet: string) {
   showPlanet(planet); 
}

function clickPlay() {
    showNameChoice();
}

function clickStarship(starship: string) {
    setStarship(starship);
    if (game.starships[starship].enRoute) {
        showStarshipEnRoute(starship);
        return;
    }
    showStarshipAtPlanet(starship);
}

function clickStart() {
    prepareGame();
}

function clickTradeBackdrop() {
    showStarshipAtPlanet(game.currentStarship);
}

function closePopups() {
    let elements = document.getElementsByClassName("pop-up");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLElement> elements[i];
        el.style.display = displayNone;
    }
    listPlanets();
    listStarships();
}

function creditsUpdate(x: number) {
    game.credits += x;
    let elements = document.getElementsByClassName("credits");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLElement> elements[i];
        el.textContent = game.credits.toString();
    }
}

function depart(destination: string) {
    let starship = game.starships[game.currentStarship];
    starship.enRoute = true;
    starship.position = destination;
    showStarshipEnRoute(game.currentStarship);
    setTimeout(() => {
        arrive(game.currentStarship)
    }, timeMultiplier * getDistance(destination))
}

function gameOver() {
    addScore(game.credits, game.playerName);
    while(localStorage.length > 10) {
        trimScores();
    }
    showGameOver();
}

function getAmount(j: number) {
    if (j % 3 === 0) {
        return 10 ** Math.floor(j / 3) 
    }
    if (j % 3 === 1) {
        return 2 * 10 ** Math.floor(j / 3) 
    }
    if (j % 3 === 2) {
        return 5 * 10 ** Math.floor(j / 3) 
    }
}

function getDistance(destination: string) {
    let x = game.planets[destination].x;
    let y = game.planets[destination].y;
    let diffX = game.planets[game.currentPlanet].x - x;
    let diffY = game.planets[game.currentPlanet].y - y;
    return calculateDistance(diffX, diffY);
}

function greater(lhs: number, rhs: number) {
    return lhs > rhs;
}

function listCargo(starship: string) {
    let elements = document.getElementsByClassName("cargo");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        clear(el);
        for (let j in game.starships[starship].cargo) {
            let cell = el.insertRow().insertCell();
            let left = makeA();
            cell.appendChild(left);
            left.textContent = j;
            left.onclick = () => showSell(j);
            
            let right = makeA();
            cell.appendChild(right);
            right.textContent = game.starships[starship].cargo[j].toString();
        }
    }
}

function listGoods(planet: string) {
    let elements = document.getElementsByClassName("stockpile");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        let items = game.planets[planet].available_items
        clear(el);
        for (let j in items) {
            let cell = el.insertRow().insertCell();
            let left = makeA();
            cell.appendChild(left);
            left.textContent = j;
            left.onclick = () => showBuy(j);

            let right = makeA();
            cell.appendChild(right);
            right.textContent = game.planets[planet].available_items[j].available.toString();
        }
    }
}

function listMarket(planet: string) {
    let elements = document.getElementsByClassName(listOfPrices);
    let items = game.planets[planet].available_items;
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        clear(el);
        for (let j in items) {
            let cell = el.insertRow().insertCell();
            let left = makeA();
            cell.appendChild(left);
            left.textContent = j;
            
            let right = makeA();
            cell.appendChild(right);
            right.textContent = items[j].buy_price.toString();
            right.textContent += "/"
            right.textContent += items[j].sell_price.toString();
        }
    }
}

function listOffersBuy(good: string, price: number, amountLimit: number) {
    let elements = document.getElementsByClassName(listOfOffers);
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        clear(el);
        for (let j = 0; getAmount(j) < amountLimit; ++j) {
            let amount = getAmount(j);
            let cell = el.insertRow().insertCell();
            let left = makeA();
            cell.appendChild(left);
            left.textContent = amount.toString();
            
            let right = makeA();
            cell.appendChild(right);
            let totalPrice = amount * price;
            right.textContent = totalPrice.toString();
            left.onclick = () => buyGoods(good, amount);
        }
    }
}

function listOffersSell(good: string, price: number, amountLimit: number) {
    let elements = document.getElementsByClassName(listOfOffers);
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        clear(el);
        for (let j = 0; getAmount(j) < amountLimit; ++j) {
            let amount = getAmount(j);
            let cell = el.insertRow().insertCell();
            let left = makeA();
            cell.appendChild(left);
            left.textContent = amount.toString();
            
            let right = makeA();
            cell.appendChild(right);
            let totalPrice = amount * price;
            right.textContent = totalPrice.toString();
            left.onclick = () => sellGoods(good, amount);
        }
    }
}

function listPlanets() {
    let elements = document.getElementsByClassName("planets");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        clear(el);
        for (let j in game.planets) {
            let cell = el.insertRow().insertCell();
            let left = makeA();
            cell.appendChild(left);
            left.textContent = j;
            left.onclick = () => clickPlanet(j);

            let right = makeA();
            cell.appendChild(right);
            right.textContent = planetGetXY(game.planets[j]);
        }
    }
}

function listScores() {
    let keys: number[] = []
    for (let i = 0; i < localStorage.length; ++i) {
        let key = localStorage.key(i);
        keys.push(parseInt(key));
    }
    keys.sort((a: number, b: number) => a - b);
    let elements = document.getElementsByClassName("scoreboard");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        clear(el);
        for (let j = keys.length; j > 0; --j) {
            let cell = el.insertRow().insertCell();
            let left = makeA();
            cell.appendChild(left);
            left.textContent = localStorage.getItem(keys[j - 1].toString());

            let right = makeA();
            cell.appendChild(right);
            right.textContent = (Math.floor(keys[j - 1] / 10)).toString();
        }
    }
}

function listStarships() {
    let elements = document.getElementsByClassName(tableStarships);
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        clear(el);
        for (let j in game.starships) {
            let starship = game.starships[j];
            let cell = el.insertRow().insertCell();
            let planet = game.starships[j].position;
            let left = makeA();
            cell.appendChild(left);
            left.textContent = j;
            left.onclick = () => clickStarship(j);

            let right = makeA();
            cell.appendChild(right);
            right.textContent = planet;
            if (starship.enRoute) {
                right.textContent = positionEnRoute;
            }
            right.onclick = () => clickPlanet(planet)
        }
    }
}

function listStarshipsAt(planet: string) {
    let elements = document.getElementsByClassName("orbit");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        clear(el);
        for (let j in game.starships) {
            let planet1 = game.starships[j].position.toString();
            if (planet1 === planet) {
                let cell = el.insertRow().insertCell();
                let left = makeA();
                cell.appendChild(left);
                left.textContent = j;
                left.onclick = () => clickStarship(j);

                let right = makeA();
                cell.appendChild(right);
                right.textContent = planet;
            }
        }
    }
}

function makeA() {
    return document.createElement("a");
}

function planetGetXY(planet: Position) {
    return "".concat(planet.x.toString())
            .concat(", ")
            .concat(planet.y.toString())
}

function prepareGame() {
    game = new GameState;
    document.getElementById("welcome").style.display = displayNone;
    setPlayerName();
    document.getElementById(screenGame).style.display = displayBlock;
    let elements = document.getElementsByClassName("info-box");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLElement> elements[i];
        el.style.display = displayBlock;
    }
    closePopups();

    listPlanets();
    listStarships();
    startGame();
    creditsUpdate(0);
}

function refresh() {
    window.location.reload();
}

function sellGoods(good: string, amount: number) {
    let items = game.planets[game.currentPlanet].available_items;
    let price = items[good].sell_price;
    let starship = game.starships[game.currentStarship];
    if (greater(amount, starship.cargo[good])) {
        return;
    }
    creditsUpdate(price * amount);
    starship.cargoSpace += amount;
    starship.cargo[good] -= amount;
    trimOffersSell(good);
}

function setDefaultScores() {
    addScore(271828, "Leo E.");
    addScore(1984, "W. Smith");
    addScore(2001, "Q. Brick")
    addScore(1979, "S. Weaver");
    addScore(1865, "JGV");
}

function setPlanet(x: string) {
    game.currentPlanet = x;
    let elements = document.getElementsByClassName("planet-name");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        el.textContent = x;
    }
}

function setPlayerName() {
    let nameBox = <HTMLInputElement> document.getElementById("player-name-input");
    game.playerName = nameBox.value;
    if (game.playerName === "") {
        game.playerName = playerNameDefault;
    }
    let elements = document.getElementsByClassName(boxPlayerName);
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLElement> elements[i];
        el.textContent = game.playerName;
    }
}

function setStarship(x: string) {
    game.currentStarship = x;
    let elements = document.getElementsByClassName("starship-name");
    for (let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        el.textContent = x;
    }
}

function showBuy(good: string) {
    let items = game.planets[game.currentPlanet].available_items;
    let price = items[good].buy_price;
    let available = items[good].available;
    let space = game.starships[game.currentStarship].cargoSpace;
    let limit = space + 1;
    if (greater(limit, available + 1)) {
        limit = available + 1;
    }
    if (greater(limit, Math.floor(game.credits / price))) {
        limit = Math.floor(game.credits / price) + 1;
    }
    document.getElementById(screenBuy).style.display = displayFlex;
    listOffersBuy(good, price, limit);
}

function showGameOver() {
    closePopups();
    document.getElementById(screenGameOver).style.display = displayFlex;
}

function showNameChoice() {
    document.getElementById(screenLogin).style.display = displayFlex;
}

function showPlanet(planet: string) {
    let screen = whichScreen();
    if (screen === screenPlanet) {
        return;
    }
    if (screen === screenStarshipAtPlanet) {
        depart(planet);
        setPlanet(planet);
        return;
    }
    setPlanet(planet);
    listGoods(planet);
    listMarket(planet);
    listStarshipsAt(planet);
    document.getElementById(screenPlanet).style.display = displayFlex;
    return;
}

function showSell(good: string) {
    let starship = game.starships[game.currentStarship];
    let items = game.planets[game.currentPlanet].available_items;
    let price = items[good].sell_price;
    document.getElementById(screenSell).style.display = displayFlex;
    listOffersSell(good, price, starship.cargo[good] + 1);
}

function showStarshipAtPlanet(starship: string) {
    closePopups();
    let style = document.getElementById(screenStarshipAtPlanet).style;
    let planet: string = game.starships[starship].position;
    setPlanet(planet);
    listCargo(starship);
    listGoods(planet);
    listMarket(planet);
    style.display = displayFlex;
}

function showStarshipEnRoute(starship: string) {
    closePopups();
    let style = document.getElementById(screenStarshipEnRoute).style;
    let planet: string = game.starships[starship].position;
    setStarship(starship);
    style.display = displayFlex;
}

function startGame() {
    function updateTime() {
        let elements = document.getElementsByClassName("remaining-time");
        for (let i = 0; i < elements.length; ++i) {
            let el = <HTMLTableElement> elements[i];
            el.textContent = game.remainingTime.toString();
        }
    }
    updateTime();
    let clock = setInterval(() => {
        if (game.remainingTime === 0) {
            clearInterval(clock);
            gameOver();
            return;
        }
        --game.remainingTime;
        updateTime();
    }, 1000)
}

function trimOffersBuy(good: string) {
    let items = game.planets[game.currentPlanet].available_items;
    let available = items[good].available;
    let space = game.starships[game.currentStarship].cargoSpace;
    let limit = space + 1;
    if (greater(limit, available + 1)) {
        limit = available + 1;
    }
    let elements = document.getElementsByClassName(listOfOffers);
    for(let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        for (let j = el.rows.length - 1; j > 0; --j) {
            let amount = getAmount(j - 1);
            if (greater(amount, limit - 1)) {
                el.deleteRow(j);
                continue;
            }
            if (greater(amount * items[good].buy_price, game.credits)) {
                el.deleteRow(j);
                continue;
            }
        }
    }
}

function trimOffersSell(good: string) {
    let starship = game.starships[game.currentStarship];
    let elements = document.getElementsByClassName(listOfOffers);
    for(let i = 0; i < elements.length; ++i) {
        let el = <HTMLTableElement> elements[i];
        for (let j = el.rows.length - 1; j > 0; --j) {
            let amount = getAmount(j - 1);
            if (greater(amount, starship.cargo[good])) {
                el.deleteRow(j);
            }
        }
    }
}

function trimScores() {
    function isLowest(i: string): boolean {
        for (let j = 0; j < localStorage.length; ++j) {
            let scoreI = parseInt(i);
            let scoreJ = parseInt(localStorage.key(j));
            if (greater(scoreI, scoreJ)) {
                return false;
            }
        }
        return true;
    }
    for(let i = 0; i < localStorage.length; ++i) {
        if (isLowest(localStorage.key(i))) {
            localStorage.removeItem(localStorage.key(i));
            return;
        }
    }
}

function whichScreen() {
    function isVisible(x: string) {
        let style: CSSStyleDeclaration;
        style = document.getElementById(x).style
        return style.display === displayFlex;
    }
    if (isVisible(screenBuy)) {
        return screenBuy;
    }
    if (isVisible(screenPlanet)) {
        return screenPlanet;
    }
    if (isVisible(screenSell)) {
        return screenSell;
    }
    if (isVisible(screenStarshipAtPlanet)) {
        return screenStarshipAtPlanet;
    }
    if (isVisible(screenStarshipEnRoute)) {
        return screenStarshipEnRoute;
    }
    return "";
}

if (localStorage.length === 0) {
    setDefaultScores();
}
listScores();
