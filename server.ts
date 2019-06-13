const initial_data_str  = `{
    "game_duration": 300,
    "initial_credits": 1984,
    "items": [
        "Dwimeryt",
        "Cynamon",
        "Nuka-Cola",
        "Złoto",
        "Unobtainium",
        "Proteańskie dyski",
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Proteańskie dyski": {
                    "available": 10,
                    "buy_price": 75,
                    "sell_price": 65
                },
                "Ziemniaki": {
                    "available": 6,
                    "buy_price": 69,
                    "sell_price": 61
                },
                "Złoto": {
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Proteańskie dyski": {
                    "available": 9,
                    "buy_price": 82,
                    "sell_price": 71
                },
                "Ziemniaki": {
                    "available": 4,
                    "buy_price": 74,
                    "sell_price": 63
                },
                "Złoto": {
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Proteańskie dyski": {
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
                "Złoto": {
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
                "Złoto": {
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
        "Niezwyciężony": {
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
        "Космонавт Алексе́й Лео́нов":{
            "cargo_hold_size":	35,
            "position":	"Arrakis"
        }
    }
}`;

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const server_name = "space-trader0"
const session = require('express-session');
const app = express();
const port = 3000;

// let database = new sqlite3.Database('space-trader.db');

// app.get('/getMaps', function(req : any, res : any) {
//     database = new sqlite3.Database('space-trader.db');
//     console.log("GET /getMaps -> Returning all available maps for the server.");
//     sqlite3.verbose();
//     let maps = [];
//     database.all(`SELECT name, desc FROM maps where servname like '${servername}';`, [], (err : any, rows : any) => {
//         rows.forEach((row : any) => {
//             maps.push({"name": row.name, "desc": row.desc});
//         });
//         res.json(maps);
//     });
// });

app.use(express.urlencoded({
    extended: true
}));

app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: "5th9p4hr83q4",
        cookie: { secure: false }
    }
));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.static(__dirname));

function createDBIfNotExists() {
    // Create db only if such db does not exist
    if (!fs.existsSync('baza.db')) {
        console.log('NEW DATABASE');
        database = new sqlite3.Database('baza.db');
        database.serialize(() => {
            // Create all requieed tables, and insert some default data.
            database.run('CREATE TABLE user (name VARCHAR(255), password VARCHAR(255));');
            database.run('CREATE TABLE maps (name VARCHAR(255), description VARCHAR(255), server_name VARCHAR(255), obj VARCHAR);');
            database.run('CREATE TABLE highscore (name VARCHAR(255), score NUMBER );');
            
            let stmt = database.prepare
            ('INSERT INTO maps (name, description, server_name, obj) values (?, ?, ?, ?);');
            stmt.run('default', 'original version of the Space Merchant', server_name, initial_data_str);

            stmt = database.prepare('INSERT INTO user (name, password) values (?, ?);');
            stmt.run('root', 'root')
            stmt.run('admin1', 'admin1');
            stmt.run('user1', '1234');
            stmt.run('user2', '1234');
            stmt.run('user3', '1234');

            stmt = database.prepare('INSERT INTO highscore (name, score) values (?, ?);');
            stmt.run('root', '1234');
            stmt.run('admin1', '999'); 
        });
        console.log("Database " + 'baza.db' + " created with defult scenario");
    }
    else
    {
        database = new sqlite3.Database('baza.db');
        console.log("Database " + 'baza.db' + " already exists");
    }
}

createDBIfNotExists();

var database = new sqlite3.Database('baza.db', (err) =>{
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to database');
});

app.get('/',function (request, responce){
    responce.send('Hello World');
});

app.listen ( port, function() {
    console.log('Server listening on port : ' + port );
}); 

app.post('/uploadScenario', function (req, res) {
    try {req.body = Object.keys(req.body)[0];}
    catch{};
    let reqObj = JSON.parse(JSON.parse(JSON.stringify(req.body)));
    console.log("POST /uploadScenario/ -> uploading scenario", console.log(typeof reqObj));

    console.log(reqObj['name'], reqObj['description'], server_name, reqObj['fileData']);
    let stmt = database.prepare('INSERT INTO maps (name, description, server_name, obj) values (?, ?, ?, ?);');
    stmt.run(reqObj['name'], reqObj['description'], server_name, reqObj['fileData']);

    res.json("Hello, there");
});

app.get('/getMaps', function(req, res) {
    console.log("GET /getMaps -> Returning all available maps for the server.");
    console.log(`SELECT name, description FROM maps where server_name like '${server_name}';`);
    sqlite3.verbose();
    let maps = [];
    database.all(
        `SELECT name, description FROM maps where server_name like '${server_name}';`, [], 
    (err, rows) => {
        rows.forEach((row) => {
            console.log ("name: " + row.name +"description :" + row.description);
            maps.push({"name": row.name, "description": row.description});
        });
        res.json(maps);
    });
});
