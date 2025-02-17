"use strict";

var PATHS = {
  dome: [[{
    "x": 429.1,
    "y": 800
  }, {
    "x": 429.1,
    "y": 166.8
  }, {
    "x": 427.1806640625,
    "y": 140.12155151367188
  }, {
    "x": 418.9756774902344,
    "y": 111.32439422607422
  }, {
    "x": 404.6184387207031,
    "y": 85.05990600585938
  }, {
    "x": 384.50262451171875,
    "y": 62.89876937866211
  }, {
    "x": 359.87664794921875,
    "y": 45.86775588989258
  }, {
    "x": 332.3680725097656,
    "y": 33.99788284301758
  }, {
    "x": 303.31475830078125,
    "y": 26.619970321655273
  }, {
    "x": 273.5633239746094,
    "y": 22.882917404174805
  }, {
    "x": 248.70000000000002,
    "y": 22
  }, {
    "x": 243.5844268798828,
    "y": 22.00000762939453
  }, {
    "x": 213.5844268798828,
    "y": 22.0000057220459
  }, {
    "x": 183.5844268798828,
    "y": 22.000001907348633
  }, {
    "x": 155.3,
    "y": 22
  }, {
    "x": 153.58456420898438,
    "y": 22.017057418823242
  }, {
    "x": 124.00062561035156,
    "y": 26.54591178894043
  }, {
    "x": 95.87208557128906,
    "y": 36.86521530151367
  }, {
    "x": 69.91197967529297,
    "y": 51.82741165161133
  }, {
    "x": 47.06711196899414,
    "y": 71.20167541503906
  }, {
    "x": 28.680097579956055,
    "y": 94.82915496826172
  }, {
    "x": 16.266464233398438,
    "y": 122.05882263183594
  }, {
    "x": 10.792069435119629,
    "y": 151.4821014404297
  }, {
    "x": 10.5,
    "y": 160.4
  }, {
    "x": 10.50002670288086,
    "y": 181.4757080078125
  }, {
    "x": 10.500025749206543,
    "y": 211.4757080078125
  }, {
    "x": 10.500024795532227,
    "y": 241.4757080078125
  }, {
    "x": 10.500022888183594,
    "y": 271.4757080078125
  }, {
    "x": 10.500021934509277,
    "y": 301.4757080078125
  }, {
    "x": 10.500020027160645,
    "y": 331.4757080078125
  }, {
    "x": 10.500019073486328,
    "y": 361.4757080078125
  }, {
    "x": 10.500018119812012,
    "y": 391.4757080078125
  }, {
    "x": 10.500016212463379,
    "y": 421.4757080078125
  }, {
    "x": 10.500015258789062,
    "y": 451.4757080078125
  }, {
    "x": 10.500014305114746,
    "y": 481.4757080078125
  }, {
    "x": 10.500012397766113,
    "y": 511.4757080078125
  }, {
    "x": 10.500011444091797,
    "y": 541.4757080078125
  }, {
    "x": 10.500009536743164,
    "y": 571.4757080078125
  }, {
    "x": 10.500008583068848,
    "y": 601.4757080078125
  }, {
    "x": 10.500007629394531,
    "y": 631.4757080078125
  }, {
    "x": 10.500005722045898,
    "y": 661.4757080078125
  }, {
    "x": 10.500004768371582,
    "y": 691.4757080078125
  }, {
    "x": 10.500003814697266,
    "y": 721.4757080078125
  }, {
    "x": 10.500001907348633,
    "y": 751.4757080078125
  }, {
    "x": 10.500000953674316,
    "y": 781.4757080078125
  }, {
    "x": 10.5,
    "y": 800
  }, {
    "x": 0,
    "y": 800
  }, {
    "x": 0,
    "y": 0
  }, {
    "x": 440,
    "y": 0
  }, {
    "x": 440,
    "y": 800
  }]],
  apronLeft: [[{
    "x": 0,
    "y": 74.87
  }, {
    "x": 4.6899999999999995,
    "y": 84.12
  }, {
    "x": 20.17449188232422,
    "y": 95.59259033203125
  }, {
    "x": 31.55,
    "y": 104.2
  }, {
    "x": 103.15,
    "y": 154
  }, {
    "x": 107.5,
    "y": 152.62
  }, {
    "x": 114.62,
    "y": 142
  }, {
    "x": 114.74482727050781,
    "y": 141.822265625
  }, {
    "x": 107.11,
    "y": 131.71
  }, {
    "x": 93.5338134765625,
    "y": 122.321044921875
  }, {
    "x": 68.94650268554688,
    "y": 105.13199615478516
  }, {
    "x": 46.18,
    "y": 89.16
  }, {
    "x": 44.256595611572266,
    "y": 88.11470031738281
  }, {
    "x": 24.353452682495117,
    "y": 66.29253387451172
  }, {
    "x": 20.669999999999998,
    "y": 48.809999999999995
  }, {
    "x": 20.54,
    "y": 20.459999999999994
  }, {
    "x": 20.54,
    "y": 15.58
  }, {
    "x": 20.401752471923828,
    "y": 6.8097686767578125
  }, {
    "x": 19.14,
    "y": 1.3399999999999999
  }, {
    "x": 7.08,
    "y": 3.51
  }, {
    "x": 1.54,
    "y": 8.85
  }, {
    "x": 0.3061417043209076,
    "y": 11.558106422424316
  }, {
    "x": 0,
    "y": 15.78
  }, {
    "x": 0.05858016386628151,
    "y": 41.537742614746094
  }, {
    "x": 0.007791639771312475,
    "y": 71.53770446777344
  }]],
  apronRight: [[{
    "x": 94.48,
    "y": 7
  }, {
    "x": 94.48,
    "y": 2.11
  }, {
    "x": 96.06,
    "y": 0
  }, {
    "x": 98.06,
    "y": 3.5
  }, {
    "x": 98.25810241699219,
    "y": 21.21230125427246
  }, {
    "x": 98.5984878540039,
    "y": 51.21036911010742
  }, {
    "x": 98.85000000000001,
    "y": 73.32
  }, {
    "x": 96.65,
    "y": 75.7
  }, {
    "x": 96.65,
    "y": 78.7
  }, {
    "x": 96.75138854980469,
    "y": 80.29641723632812
  }, {
    "x": 93.55000000000001,
    "y": 83.85000000000001
  }, {
    "x": 83.46000000000001,
    "y": 90.77000000000001
  }, {
    "x": 11.860000000000014,
    "y": 140.62
  }, {
    "x": 7.51,
    "y": 139.19
  }, {
    "x": 2.024590492248535,
    "y": 130.68222045898438
  }, {
    "x": 0.39,
    "y": 128.51
  }, {
    "x": 7.8999999999999995,
    "y": 118.22
  }, {
    "x": 19.067655563354492,
    "y": 110.51028442382812
  }, {
    "x": 43.66639709472656,
    "y": 93.33757781982422
  }, {
    "x": 68.23295593261719,
    "y": 76.11888885498047
  }, {
    "x": 68.83,
    "y": 75.7
  }, {
    "x": 89.3792495727539,
    "y": 55.455963134765625
  }, {
    "x": 94.34,
    "y": 35.34
  }]],
  bumperLeft: [[{
    "x": 32.45,
    "y": 94.05
  }, {
    "x": 3.5700000000000003,
    "y": 75.66
  }, {
    "x": 0,
    "y": 58.05
  }, {
    "x": 0.05993081256747246,
    "y": 50.59791564941406
  }, {
    "x": 0.049559950828552246,
    "y": 20.59798812866211
  }, {
    "x": 0,
    "y": 9.2
  }, {
    "x": 0,
    "y": 9.2
  }, {
    "x": 13.505423545837402,
    "y": 0.8488255143165588
  }, {
    "x": 17.61,
    "y": 5.64
  }, {
    "x": 25.25155258178711,
    "y": 27.880142211914062
  }, {
    "x": 35.06423568725586,
    "y": 56.229949951171875
  }, {
    "x": 43.72,
    "y": 81.2
  }, {
    "x": 44.527557373046875,
    "y": 84.67375946044922
  }, {
    "x": 42.54,
    "y": 92.67
  }]],
  bumperRight: [[{
    "x": 12.22,
    "y": 94.05
  }, {
    "x": 41.1,
    "y": 75.66
  }, {
    "x": 44.660000000000004,
    "y": 58.05
  }, {
    "x": 44.60005187988281,
    "y": 50.59437942504883
  }, {
    "x": 44.61045455932617,
    "y": 20.59445571899414
  }, {
    "x": 44.660000000000004,
    "y": 9.199999999999996
  }, {
    "x": 44.660000000000004,
    "y": 9.199999999999996
  }, {
    "x": 31.15298843383789,
    "y": 0.8440084457397461
  }, {
    "x": 27.05,
    "y": 5.64
  }, {
    "x": 19.42302894592285,
    "y": 27.878543853759766
  }, {
    "x": 9.603832244873047,
    "y": 56.2260856628418
  }, {
    "x": 0.9400000000000001,
    "y": 81.2
  }, {
    "x": 0.13412584364414215,
    "y": 84.66767883300781
  }, {
    "x": 2.13,
    "y": 92.67
  }]],
  fixtureTopLeft: [[{
    "x": 34.1,
    "y": 246.63
  }, {
    "x": 57.392356872558594,
    "y": 227.7251739501953
  }, {
    "x": 80.76889038085938,
    "y": 208.92259216308594
  }, {
    "x": 104.16026306152344,
    "y": 190.13845825195312
  }, {
    "x": 120.86000000000001,
    "y": 176.74
  }, {
    "x": 121.60879516601562,
    "y": 168.90098571777344
  }, {
    "x": 121.60879516601562,
    "y": 168.90098571777344
  }, {
    "x": 121.60879516601562,
    "y": 168.90098571777344
  }, {
    "x": 123.63932800292969,
    "y": 144.00271606445312
  }, {
    "x": 125.88000000000002,
    "y": 114.63000000000002
  }, {
    "x": 125.83209228515625,
    "y": 114.2082748413086
  }, {
    "x": 113.92887878417969,
    "y": 86.80526733398438
  }, {
    "x": 94.16910552978516,
    "y": 64.47216033935547
  }, {
    "x": 66.3285140991211,
    "y": 54.695125579833984
  }, {
    "x": 62.880000000000024,
    "y": 54.760000000000026
  }, {
    "x": 64.23157501220703,
    "y": 35.89217758178711
  }, {
    "x": 86.62000000000002,
    "y": 16.760000000000026
  }, {
    "x": 87.01554107666016,
    "y": 16.498184204101562
  }, {
    "x": 114.1181411743164,
    "y": 3.810519218444824
  }, {
    "x": 121.96000000000002,
    "y": 0.410000000000025
  }, {
    "x": 102.64962005615234,
    "y": 0.11058934032917023
  }, {
    "x": 73.33213806152344,
    "y": 5.909043312072754
  }, {
    "x": 47.12397384643555,
    "y": 20.27707862854004
  }, {
    "x": 32.29000000000002,
    "y": 33.64000000000002
  }, {
    "x": 25.723316192626953,
    "y": 41.19304656982422
  }, {
    "x": 10.210899353027344,
    "y": 66.77276611328125
  }, {
    "x": 1.7135432958602905,
    "y": 95.46200561523438
  }, {
    "x": 0.07,
    "y": 122.8
  }, {
    "x": 0.07235515117645264,
    "y": 125.36814880371094
  }, {
    "x": 0.6125897169113159,
    "y": 155.36109924316406
  }, {
    "x": 1.1300000000000001,
    "y": 162.63
  }, {
    "x": 19.849999999999998,
    "y": 236.74
  }]],
  hsBottom: [[{
    "x": 39.25,
    "y": 127.07
  }, {
    "x": 47.16,
    "y": 44.25
  }, {
    "x": 47.767757415771484,
    "y": 37.48103713989258
  }, {
    "x": 38.316444396972656,
    "y": 9.782041549682617
  }, {
    "x": 25.159999999999997,
    "y": 1
  }, {
    "x": 22.9,
    "y": 1
  }, {
    "x": 13.21473217010498,
    "y": 7.664139747619629
  }, {
    "x": 1.025464415550232,
    "y": 34.17484664916992
  }, {
    "x": 1.8,
    "y": 43.46
  }, {
    "x": 10.5,
    "y": 127.07
  }]],
  hsTop: [[{
    "x": 117.83,
    "y": 147.64
  }, {
    "x": 115.30870819091797,
    "y": 117.74629974365234
  }, {
    "x": 112.44682312011719,
    "y": 87.88333129882812
  }, {
    "x": 110.17999999999999,
    "y": 67.19999999999999
  }, {
    "x": 108.95646667480469,
    "y": 58.08963394165039
  }, {
    "x": 101.40254974365234,
    "y": 29.136438369750977
  }, {
    "x": 82.54932403564453,
    "y": 6.51446533203125
  }, {
    "x": 59,
    "y": 1
  }, {
    "x": 53.4658088684082,
    "y": 1.2619128227233887
  }, {
    "x": 27.106170654296875,
    "y": 14.036081314086914
  }, {
    "x": 13.571599960327148,
    "y": 40.51664352416992
  }, {
    "x": 8.084772109985352,
    "y": 69.97682189941406
  }, {
    "x": 8,
    "y": 70.71
  }, {
    "x": 4.991590976715088,
    "y": 99.8164291381836
  }, {
    "x": 2.376677989959717,
    "y": 129.7020263671875
  }, {
    "x": 1,
    "y": 147.64
  }]],
  wallTopRightInner: [[{
    "x": 18.75,
    "y": 0
  }, {
    "x": 33.898738861083984,
    "y": 25.84745216369629
  }, {
    "x": 43.8665657043457,
    "y": 54.07842254638672
  }, {
    "x": 45.93,
    "y": 79.52
  }, {
    "x": 45.56668472290039,
    "y": 83.88335418701172
  }, {
    "x": 42.384239196777344,
    "y": 113.71123504638672
  }, {
    "x": 37.137428283691406,
    "y": 143.23680114746094
  }, {
    "x": 28.13,
    "y": 170.51999999999998
  }, {
    "x": 27.616640090942383,
    "y": 171.6265411376953
  }, {
    "x": 14.650897026062012,
    "y": 198.6792449951172
  }, {
    "x": 8,
    "y": 212
  }, {
    "x": 1.2699999999999996,
    "y": 214.38
  }, {
    "x": 0.81733638048172,
    "y": 207.35498046875
  }, {
    "x": 1.2699999999999996,
    "y": 206.07
  }, {
    "x": 14.338896751403809,
    "y": 180.59225463867188
  }, {
    "x": 26.112571716308594,
    "y": 153.0144500732422
  }, {
    "x": 28.96,
    "y": 143.56
  }, {
    "x": 34.091129302978516,
    "y": 124.10477447509766
  }, {
    "x": 40.46439743041992,
    "y": 94.81499481201172
  }, {
    "x": 41.19,
    "y": 75.16
  }, {
    "x": 40.503482818603516,
    "y": 64.88191223144531
  }, {
    "x": 35.50232696533203,
    "y": 35.36855697631836
  }, {
    "x": 23.445297241210938,
    "y": 7.962780952453613
  }]],
  triPegLeft: [[{
    "x": 19.7,
    "y": 71.19
  }, {
    "x": 42,
    "y": 10.91
  }, {
    "x": 38.47,
    "y": 4.2
  }, {
    "x": 28.47,
    "y": 0.4500000000000002
  }, {
    "x": 22.42776107788086,
    "y": 1.547141671180725
  }, {
    "x": 21.13,
    "y": 3.77
  }, {
    "x": 11.926412582397461,
    "y": 29.588581085205078
  }, {
    "x": 1.892570972442627,
    "y": 57.86085891723633
  }, {
    "x": 0.58,
    "y": 61.56
  }, {
    "x": 2.7,
    "y": 67.56
  }, {
    "x": 16.27,
    "y": 73.28
  }, {
    "x": 19.59482765197754,
    "y": 71.42855834960938
  }, {
    "x": 19.59482765197754,
    "y": 71.42855834960938
  }]],
  triPegRight: [[{
    "x": 22.57,
    "y": 71.19
  }, {
    "x": 0.32,
    "y": 10.91
  }, {
    "x": 3.84,
    "y": 4.2
  }, {
    "x": 13.89,
    "y": 0.45
  }, {
    "x": 19.88222885131836,
    "y": 1.5943611860275269
  }, {
    "x": 21.130000000000003,
    "y": 3.77
  }, {
    "x": 30.360313415527344,
    "y": 29.650922775268555
  }, {
    "x": 40.39887619018555,
    "y": 57.92152404785156
  }, {
    "x": 41.69,
    "y": 61.56
  }, {
    "x": 39.57,
    "y": 67.56
  }, {
    "x": 26,
    "y": 73.3
  }, {
    "x": 22.653732299804688,
    "y": 71.3880844116211
  }, {
    "x": 22.653732299804688,
    "y": 71.3880844116211
  }]],
  wallLowLeft: [[{
    "x": 0,
    "y": 99.79
  }, {
    "x": 11.431523323059082,
    "y": 72.46109008789062
  }, {
    "x": 21.36,
    "y": 64.48
  }, {
    "x": 37.208553314208984,
    "y": 57.88080596923828
  }, {
    "x": 42.73,
    "y": 38.37
  }, {
    "x": 40.494102478027344,
    "y": 32.9691276550293
  }, {
    "x": 30,
    "y": 9.51
  }, {
    "x": 0,
    "y": 0
  }]],
  wallTopLeft: [[{
    "x": 53.63,
    "y": 226.42
  }, {
    "x": 49.720157623291016,
    "y": 196.67861938476562
  }, {
    "x": 44.088504791259766,
    "y": 167.2203369140625
  }, {
    "x": 40.09,
    "y": 153.48999999999998
  }, {
    "x": 34.57319641113281,
    "y": 138.79974365234375
  }, {
    "x": 23.948131561279297,
    "y": 110.7445068359375
  }, {
    "x": 14.161092758178711,
    "y": 82.38922882080078
  }, {
    "x": 9,
    "y": 63.3
  }, {
    "x": 7.050705432891846,
    "y": 53.26955795288086
  }, {
    "x": 2.638596773147583,
    "y": 23.59898567199707
  }, {
    "x": 0,
    "y": 0
  }, {
    "x": 0,
    "y": 214.68
  }]],
  wallTopRight: [[{
    "x": 4.45,
    "y": 231.27
  }, {
    "x": 0.76,
    "y": 207.15
  }, {
    "x": 1.9251903295516968,
    "y": 202.13760375976562
  }, {
    "x": 10.634893417358398,
    "y": 173.43954467773438
  }, {
    "x": 17.91,
    "y": 153.87
  }, {
    "x": 21.267061233520508,
    "y": 145.38999938964844
  }, {
    "x": 32.02847671508789,
    "y": 117.38729858398438
  }, {
    "x": 41.846031188964844,
    "y": 89.0417709350586
  }, {
    "x": 49.9980583190918,
    "y": 60.1779899597168
  }, {
    "x": 54.996070861816406,
    "y": 30.62649917602539
  }, {
    "x": 55.36,
    "y": 22
  }, {
    "x": 61.03793716430664,
    "y": 2.0249133110046387
  }, {
    "x": 82.78,
    "y": 7.24
  }, {
    "x": 75.4,
    "y": 222.46
  }]]
};
apronLeft = new StaticObject(void 0, 90, 658, 'apronLeft');
apronRight = new StaticObject(void 0, 340, 680, 'apronRight');
bumperLeft = new StaticObject(void 0, 120, 622, 'bumperLeft');
bumperRight = new StaticObject(void 0, 314, 622, 'bumperRight');
fixtureTopLeft = new StaticObject(void 0, 90, 165, 'fixtureTopLeft');
hsBottom = new StaticObject(void 0, 215, 115, 'hsBottom');
hsTop = new StaticObject(void 0, 215, 110, 'hsTop');
triPegLeft = new StaticObject(void 0, 40, 445, 'triPegLeft');
triPegRight = new StaticObject(void 0, 400, 428, 'triPegRight');
pegA = (void 0).matter.add.image(0, 0, 'pegA');
pegA.x = 312;
pegA.y = 60;
pegB = (void 0).matter.add.image(0, 0, 'pegB');
pegB.x = 370;
pegB.y = 109;
pegC = (void 0).matter.add.image(0, 0, 'pegC');
pegC.x = 298;
pegC.y = 135;
pegs = [pegA, pegB, pegC];

for (var i = 0; i < pegs.length; i++) {
  pegs[i].frictionStatic = frictionAmount;
  pegs[i].setBounce(2);
  pegs[i].setCircle(24).setStatic(true);
} //Walls


wallTopLeft = new StaticObject(void 0, 27, 345, 'wallTopLeft');
wallTopRight = new StaticObject(void 0, 426, 305, 'wallTopRight');
wallTopRightInner = new StaticObject(void 0, 385, 220, 'wallTopRightInner');
wallLowLeft = new StaticObject(void 0, 26, 510, 'wallLowLeft');
//# sourceMappingURL=pathsold.js.map
