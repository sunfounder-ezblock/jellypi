/**
 * create a object of JellyPi and contain it's id and name
 */
var JellyPi = {};
JellyPi.id = 'jellypi';
JellyPi.seriesClass = 'jellyPiSeries';
JellyPi.kits = {
    'jelly': Jelly,
}
JellyPi.seriesImg = './device/jellypi/img/树莓派-大.png';
JellyPi.serieSmallImg = './device/jellypi/img/树莓派-小.png';
JellyPi.img = CORE_DIR + '/device/' + JellyPi.id + '/img/' + JellyPi.id + '_board' + '.png';
JellyPi.width = 96;
JellyPi.height = 72;
JellyPi.active = 'active';

JellyPi.functions = [
    "iot",
    "remote",
    "routing",
    "bluetooth",
    "play",
]

JellyPi.routingOffset = {
    x: 2.3,
    y: 2.2,
}

JellyPi.pins = [{
        'id': 1,
        'name': 'OUT0',
        'x': 53,
        'y': 20,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 2,
        'name': 'OUT1',
        'x': 47,
        'y': 20,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 3,
        'name': 'OUT2',
        'x': 40.7,
        'y': 20,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 4,
        'name': 'OUT3',
        'x': 34.7,
        'y': 20,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 5,
        'name': 'I2C0',
        'x': 34.7,
        'y': 30.8,
        'isSource': false,
        'property': ["i2c"],
        'type': 'com',
    },
    {
        'id': 6,
        'name': 'I2C1',
        'x': 34.7,
        'y': 41.2,
        'isSource': false,
        'property': ["i2c"],
        'type': 'com',
    },
    {
        'id': 7,
        'name': 'IN3',
        'x': 34.7,
        'y': 52.3,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 8,
        'name': 'IN2',
        'x': 40.7,
        'y': 52.3,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 9,
        'name': 'IN1',
        'x': 47,
        'y': 52.3,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 10,
        'name': 'IN0',
        'x': 53,
        'y': 52.3,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
]

JellyPi.init = function() {
    JellyPi.name = MSG.catJellyPi;
    JellyPi.description = MSG.jellypi_description;
}

// JellyPi.ab2str = function (buf) {
// 	return String.fromCharGUI.apply(null, new Uint8Array(buf));
// }

// JellyPi.str2ab = function (str) {
// 	var buf = new ArrayBuffer(str.length); // 2 bytes for each char
// 	var bufView = new Uint8Array(buf);
// 	for (var i = 0, strLen = str.length; i < strLen; i++) {
// 		bufView[i] = str.charGUIAt(i);
// 	}
// 	return bufView;
// }