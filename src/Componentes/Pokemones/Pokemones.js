// const Pokemones = [
//   {
//     nombre: "Bulbasaur",
//     numero: `001`,
//     color: "#74cb48",
//     elemento: ["Gras", "Poison"],
//     peso: 6.9,
//     altura: 0.7,
//     movimiento: "Chlorophyll",
//     movimientoSecundario: "OverGrow",
//     descripcion:
//       "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
//     stats: {
//       hp: `045`,
//       atk: `049`,
//       def: `049`,
//       satk: `065`,
//       sdef: `065`,
//       spd: `045`,
//     },
//   },
//   {
//     nombre: "Charmander",
//     numero: `004`,
//     color: "#f57d31",
//     elemento: ["Fire"],
//     peso: 8.5,
//     altura: 0.6,
//     movimiento: "Mega-Punch",
//     movimientoSecundario: "Fire-Punch",
//     descripcion:
//       "It has a preference for hot things. when it rains, steam is said to spout from the tip of its tail.",
//     stats: {
//       hp: `039`,
//       atk: `052`,
//       def: `043`,
//       satk: `060`,
//       sdef: `050`,
//       spd: `065`,
//     },
//   },
//   {
//     nombre: "Squirtle",
//     numero: `007`,
//     color: "#6493eb",
//     elemento: ["Water"],
//     peso: 9.0,
//     altura: 0.5,
//     movimiento: "Torrent",
//     movimientoSecundario: "Rain-Dish",
//     descripcion:
//       "When ot retracts its long neck into its shell, it squirts out water with vigorous force.",
//     stats: {
//       hp: `044`,
//       atk: `048`,
//       def: `065`,
//       satk: `050`,
//       sdef: `064`,
//       spd: `043`,
//     },
//   },
//   {
//     nombre: "Butterfree",
//     numero: `012`,
//     color: "#a7b723",
//     elemento: ["Bug", "Flying"],
//     peso: 32.0,
//     altura: 1.1,
//     movimiento: "Compound-Eyes",
//     movimientoSecundario: "Tinted-Lens",
//     descripcion:
//       "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
//     stats: {
//       hp: `060`,
//       atk: `045`,
//       def: `050`,
//       satk: `090`,
//       sdef: `080`,
//       spd: `070`,
//     },
//   },
//   {
//     nombre: "Rattata",
//     numero: `019`,
//     color: "#aaa67f",
//     elemento: ["Normal"],
//     peso: 3.5,
//     altura: 0.3,
//     movimiento: "Run-away",
//     movimientoSecundario: "Guts",
//     descripcion:
//       "He is prone to sinking his incisors into anything that comes his way. If any are seen, there are probably forty nearby.",
//     stats: {
//       hp: `030`,
//       atk: `056`,
//       def: `035`,
//       satk: `025`,
//       sdef: `035`,
//       spd: `072`,
//     },
//   },
//   {
//     nombre: "Raticate",
//     numero: `020`,
//     color: "#aaa67f",
//     elemento: ["Normal"],
//     peso: 18.5,
//     altura: 0.7,
//     movimiento: "Run-away",
//     movimientoSecundario: "Guts",
//     descripcion:
//       "Thanks to the small membranes on its hind legs, it can swim through rivers to capture prey. If any are seen, there are probably forty nearby.",
//     stats: {
//       hp: `055`,
//       atk: `081`,
//       def: `060`,
//       satk: `050`,
//       sdef: `070`,
//       spd: `097`,
//     },
//   },
//   {
//     nombre: "Ekans",
//     numero: `023`,
//     color: "#a96fb7",
//     elemento: ["Poison"],
//     peso: 6.9,
//     altura: 2.0,
//     movimiento: "Intimidate",
//     movimientoSecundario: "Shed-skin",
//     descripcion:
//       "The length of this Pokemon increases over time. At night, it curls up in tree branches to rest.",
//     stats: {
//       hp: `035`,
//       atk: `060`,
//       def: `044`,
//       satk: `054`,
//       sdef: `055`,
//       spd: `069`,
//     },
//   },

//   {
//     nombre: "Pikachu",
//     numero: `025`,
//     color: "#f9cf30",
//     elemento: ["Electric"],
//     peso: 6.0,
//     altura: 0.4,
//     movimiento: "Pay-Day",
//     movimientoSecundario: "",
//     descripcion:
//       "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
//     stats: {
//       hp: `035`,
//       atk: `055`,
//       def: `040`,
//       satk: `050`,
//       sdef: `050`,
//       spd: 90,
//     },
//   },
//   {
//     nombre: "Primeape",
//     numero: `057`,
//     color: "#c12239",
//     elemento: ["fighting"],
//     peso: 32,
//     altura: 1,
//     movimiento: "vital-spirit",
//     movimientoSecundario: "anger-point",
//     descripcion:
//       "He only calms down when no one is around, so getting to see that moment is really hard.",
//     stats: {
//       hp: `065`,
//       atk: `105`,
//       def: `060`,
//       satk: `060`,
//       sdef: `070`,
//       spd: `095`,
//     },
//   },
//   {
//     nombre: "Kadabra",
//     numero: `064`,
//     color: "#fb5584",
//     elemento: ["Psychic"],
//     peso: 56.5,
//     altura: 1.3,
//     movimiento: "Inner-focus",
//     movimientoSecundario: "Synchronize",
//     descripcion:
//       "He sleeps suspended in the air thanks to his psychic powers. The tail, of extraordinary flexibility, acts as a pillow.",
//     stats: {
//       hp: `040`,
//       atk: `055`,
//       def: `040`,
//       satk: `050`,
//       sdef: `050`,
//       spd: `090`,
//     },
//   },
//   {
//     nombre: "Gastly",
//     numero: `092`,
//     color: "#70559b",
//     elemento: ["Ghost", "Poison"],
//     peso: 0.1,
//     altura: 1.3,
//     movimiento: "Levitate",
//     movimientoSecundario: "",
//     descripcion:
//       "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
//     stats: {
//       hp: `030`,
//       atk: `035`,
//       def: `030`,
//       satk: 100,
//       sdef: `035`,
//       spd: `080`,
//     },
//   },
//   {
//     nombre: "Gengar",
//     numero: `094`,
//     color: "#70559B",
//     elemento: ["Ghost", "Poison"],
//     peso: 40.5,
//     altura: 1.5,
//     movimiento: "Cursed-body",
//     movimientoSecundario: "",
//     descripcion:
//       "On full moon nights, this Pokémon likes to mimic people's shadows and mock their fears.",
//     stats: {
//       hp: `060`,
//       atk: `065`,
//       def: `060`,
//       satk: 130,
//       sdef: `075`,
//       spd: 110,
//     },
//   },
//   {
//     nombre: "Weezing",
//     numero: `110`,
//     color: "#70559B",
//     elemento: ["Ghost"],
//     peso: 9.5,
//     altura: 1.2,
//     movimiento: "Levitate",
//     movimientoSecundario: "Neutralizing-gas",
//     descripcion:
//       "It uses its two bodies to mix gases. Apparently, in the past copies could be found in every corner of Galar.",
//     stats: {
//       hp: `065`,
//       atk: `090`,
//       def: `0120`,
//       satk: `085`,
//       sdef: `070`,
//       spd: `060`,
//     },
//   },
//   {
//     nombre: "Magikarp",
//     numero: 129,
//     color: "#6493eb",
//     elemento: ["Water"],
//     peso: 10.0,
//     altura: 0.9,
//     movimiento: "Swift-swim",
//     movimientoSecundario: "Rattled",
//     descripcion:
//       "It is the weakest and most pathetic Pokémon that exists, with practically zero strength and speed.",
//     stats: {
//       hp: `020`,
//       atk: `010`,
//       def: `055`,
//       satk: `015`,
//       sdef: `020`,
//       spd: `080`,
//     },
//   },

//   {
//     nombre: "Ditto",
//     numero: 132,
//     color: "#aaa67f",
//     elemento: ["Normal"],
//     peso: 4.0,
//     altura: 0.3,
//     movimiento: "Limber",
//     movimientoSecundario: "Imposter",
//     descripcion:
//       "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
//     stats: {
//       hp: `048`,
//       atk: `048`,
//       def: `048`,
//       satk: `048`,
//       sdef: `048`,
//       spd: `048`,
//     },
//   },
//   {
//     nombre: "Eevee",
//     numero: 133,
//     color: "#aaa67f",
//     elemento: ["Normal"],
//     peso: 6.5,
//     altura: 0.3,
//     movimiento: "Run-away",
//     movimientoSecundario: "Adaptability",
//     descripcion:
//       "He is capable of altering his body composition to suit the environment.",
//     stats: {
//       hp: `055`,
//       atk: `055`,
//       def: `050`,
//       satk: `045`,
//       sdef: `065`,
//       spd: `055`,
//     },
//   },
//   {
//     nombre: "Snorlax",
//     numero: 143,
//     color: "#aaa67f",
//     elemento: ["Normal"],
//     peso: 460,
//     altura: 2.1,
//     movimiento: "Mega-punch",
//     movimientoSecundario: "Fire-punch",
//     descripcion:
//       "You are not satisfied until you have eaten 400 kg of food each day. When he finishes eating, he falls asleep.",
//     stats: {
//       hp: `160`,
//       atk: `110`,
//       def: `065`,
//       satk: `065`,
//       sdef: `110`,
//       spd: `030`,
//     },
//   },

//   {
//     nombre: "Zapdos",
//     numero: 145,
//     color: "#f9cf30",
//     elemento: ["Electric", "Flying"],
//     peso: 52.6,
//     altura: 1.6,
//     movimiento: "Pressure",
//     movimientoSecundario: "",
//     descripcion:
//       "He possesses the power to control electricity at will. According to popular belief, it nests hidden in dark storm clouds.",
//     stats: {
//       hp: `090`,
//       atk: `090`,
//       def: `085 `,
//       satk: `125`,
//       sdef: `90`,
//       spd: `100`,
//     },
//   },

//   {
//     nombre: "Mew",
//     numero: 152,
//     color: "#fb5584",
//     elemento: ["Psychic"],
//     peso: 4.0,
//     altura: 0.4,
//     movimiento: "Synchronize",
//     movimientoSecundario: "",
//     descripcion:
//       "When viewed through a microscope, this Pokémon's short, fine, delicate hair can be seen.",
//     stats: {
//       hp: `100`,
//       atk: `100`,
//       def: `100`,
//       satk: `100`,
//       sdef: `100`,
//       spd: `100`,
//     },
//   },
//   {
//     nombre: "Mareep",
//     numero: 179,
//     color: "#f9cf30",
//     elemento: ["Electric"],
//     peso: 7.8,
//     altura: 0.6,
//     movimiento: "Static",
//     movimientoSecundario: "",
//     descripcion:
//       "Garments made with Mareep wool are easily charged with static electricity and require special treatments.",
//     stats: {
//       hp: `055`,
//       atk: `040`,
//       def: `040`,
//       satk: `065`,
//       sdef: `045`,
//       spd: `035`,
//     },
//   },
//   {
//     nombre: "Sneasel",
//     numero: 215,
//     color: "#75574c",
//     elemento: ["Dark", "Ice"],
//     peso: 28.0,
//     altura: 0.9,
//     movimiento: "inner-focus",
//     movimientoSecundario: "keen-eye",
//     descripcion:
//       "Its legs hide extremely sharp claws, which it suddenly extends to intimidate the enemy in case of threat.",
//     stats: {
//       hp: `055`,
//       atk: `095`,
//       def: `055`,
//       satk: `035`,
//       sdef: `075`,
//       spd: `115`,
//     },
//   },
//   {
//     nombre: "Piloswine",
//     numero: 221,
//     color: "#9ad6df",
//     elemento: ["Ice", "Ground"],
//     peso: 55.8,
//     altura: 1.1,
//     movimiento: "oblivious",
//     movimientoSecundario: "snow-cloak",
//     descripcion:
//       "When he charges at an enemy, the hairs on his back stand up. It is very sensitive to sound.",
//     stats: {
//       hp: `100`,
//       atk: `100`,
//       def: `080`,
//       satk: `060`,
//       sdef: `060`,
//       spd: `050`,
//     },
//   },

//   {
//     nombre: "Aron",
//     numero: 304,
//     color: "#b7b9d0",
//     elemento: ["Steel", "Rock"],
//     peso: 60,
//     altura: 0.4,
//     movimiento: "sturdy",
//     movimientoSecundario: "Rock-Head",
//     descripcion:
//       "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
//     stats: {
//       hp: `050`,
//       atk: `070`,
//       def: 100,
//       satk: `040`,
//       sdef: `040`,
//       spd: `030`,
//     },
//   },
//   {
//     nombre: "Minum",
//     numero: 312,
//     color: "#f9cf30",
//     elemento: ["Electric"],
//     peso: 4.2,
//     altura: 0.4,
//     movimiento: "Minus",
//     movimientoSecundario: "",
//     descripcion:
//       "Minun cares more about cheering on his teammates than his own safety. To cheer up the members of his party, he short-circuits the inside of him and releases a spectacular crackling noise.",
//     stats: {
//       hp: `060`,
//       atk: `040`,
//       def: `050`,
//       satk: `075`,
//       sdef: `085`,
//       spd: `095`,
//     },
//   },
//   {
//     nombre: "Banette",
//     numero: 354,
//     color: "#70559b",
//     elemento: ["ghost"],
//     peso: 12.5,
//     altura: 1.1,
//     movimiento: "Insomnia",
//     movimientoSecundario: "frisk",
//     descripcion:
//       "This rag doll harbors great hatred for the person who abandoned him, whom he relentlessly searches for revenge.",
//     stats: {
//       hp: `064`,
//       atk: `115`,
//       def: `065`,
//       satk: `083`,
//       sdef: `063`,
//       spd: `065`,
//     },
//   },
//   {
//     nombre: "Infernape",
//     numero: 392,
//     color: "#f57d31",
//     elemento: ["Fire", "Fighting"],
//     peso: 55.0,
//     altura: 1.2,
//     movimiento: "blaze",
//     movimientoSecundario: "iron-fist",
//     descripcion:
//       "His crown of fire demonstrates his fiery nature. Nobody beats him in speed.",
//     stats: {
//       hp: `076`,
//       atk: `104`,
//       def: `071`,
//       satk: `104`,
//       sdef: `071`,
//       spd: `108`,
//     },
//   },
//   {
//     nombre: "Floatzel",
//     numero: 419,
//     color: "#f57d31",
//     elemento: ["Water"],
//     peso: 33.5,
//     altura: 1.1,
//     movimiento: "swift-swim",
//     movimientoSecundario: "",
//     descripcion:
//       "Nothing thanks to his float. Help rescue people who are drowning.",
//     stats: {
//       hp: `085`,
//       atk: `105`,
//       def: `055`,
//       satk: `085`,
//       sdef: `050`,
//       spd: `115`,
//     },
//   },
//   {
//     nombre: "Honchkrow",
//     numero: 430,
//     color: "#707070",
//     elemento: ["Sinister", "Flying"],
//     peso: 27.3,
//     altura: 0.9,
//     movimiento: "insomnia",
//     movimientoSecundario: "super-luck",
//     descripcion:
//       "He does not forgive the slightest mistake or the betrayal of his subordinates. This strict code is to preserve the integrity of your flock.",
//     stats: {
//       hp: `100`,
//       atk: `125`,
//       def: `052`,
//       satk: `105`,
//       sdef: `052`,
//       spd: `071`,
//     },
//   },

//   {
//     nombre: "Croagunk",
//     numero: 453,
//     color: "#c12239",
//     elemento: ["Fighting", "Poison"],
//     peso: 23.0,
//     altura: 0.7,
//     movimiento: "anticipation",
//     movimientoSecundario: "poison-touch",
//     descripcion:
//       "He threatens his rivals by rattling the poison bags on his cheeks and takes advantage of their stupor to inject them with toxins.",
//     stats: {
//       hp: `048`,
//       atk: `061`,
//       def: `040`,
//       satk: `061`,
//       sdef: `040`,
//       spd: `050`,
//     },
//   },
//   {
//     nombre: "Uxie",
//     numero: 480,
//     color: "#fb5584",
//     elemento: ["Psychic"],
//     peso: 0.3,
//     altura: 0.3,
//     movimiento: "Levitate",
//     movimientoSecundario: "",
//     descripcion:
//       "He is known as the Being of Wisdom. It is said that he can erase memory with a glance.",
//     stats: {
//       hp: `075`,
//       atk: `075`,
//       def: `130`,
//       satk: `075`,
//       sdef: `130`,
//       spd: `095`,
//     },
//   },
//   {
//     nombre: "Phione",
//     numero: 489,
//     color: "#6493eb",
//     elemento: ["water"],
//     peso: 3.1,
//     altura: 0.4,
//     movimiento: "hydration",
//     movimientoSecundario: "",
//     descripcion:
//       "If the temperature of the sea rises, it inflates the float on its head and floats in a group on the surface.",
//     stats: {
//       hp: `080`,
//       atk: `080`,
//       def: `080`,
//       satk: `080`,
//       sdef: `080`,
//       spd: `080`,
//     },
//   },
//   {
//     nombre: "Munna",
//     numero: 517,
//     color: "#fb5584",
//     elemento: ["Psychic"],
//     peso: 23.3,
//     altura: 0.6,
//     movimiento: "forewarn",
//     movimientoSecundario: "synchronize",
//     descripcion:
//       "It appears in the middle of the night next to people's pillows. When he devours dreams, the motifs on his body emit a dim light.",
//     stats: {
//       hp: `076`,
//       atk: `025`,
//       def: `045`,
//       satk: `067`,
//       sdef: `055`,
//       spd: `024`,
//     },
//   },

//   {
//     nombre: "Krokorok",
//     numero: 552,
//     color: "#dec16b",
//     elemento: ["Ground", "Dark"],
//     peso: 33.4,
//     altura: 1.0,
//     movimiento: "intimidate",
//     movimientoSecundario: "moxie",
//     descripcion:
//       "It is able to hunt in the middle of the night without getting lost thanks to its special eyes, which allow it to see in the dark.",
//     stats: {
//       hp: `060`,
//       atk: `082`,
//       def: `045`,
//       satk: `045`,
//       sdef: `045`,
//       spd: `074`,
//     },
//   },
//   {
//     nombre: "Tirtouga",
//     numero: 564,
//     color: "#6493eb",
//     elemento: ["Water", "Rock"],
//     peso: 16.5,
//     altura: 0.7,
//     movimiento: "solid-rock",
//     movimientoSecundario: "sturdy",
//     descripcion:
//       "It lived in the seas millions of years ago. It comes out on land to look for prey, although it can only move by crawling.",
//     stats: {
//       hp: `054`,
//       atk: `078`,
//       def: `103`,
//       satk: `053`,
//       sdef: `045`,
//       spd: `022`,
//     },
//   },
//   {
//     nombre: "Zoroark",
//     numero: 571,
//     color: "#707070",
//     elemento: ["sinister"],
//     peso: 81.1,
//     altura: 1.6,
//     movimiento: "illusion",
//     movimientoSecundario: "sturdy",
//     descripcion:
//       "Take care of your fellow man. He casts terrifying illusions to protect both his lair and his pack from his adversaries.",
//     stats: {
//       hp: `060`,
//       atk: `105`,
//       def: `060`,
//       satk: `120`,
//       sdef: `060`,
//       spd: `105`,
//     },
//   },
//   {
//     nombre: "Elgyem",
//     numero: 605,
//     color: "#fb5584",
//     elemento: ["psychic"],
//     peso: 9.0,
//     altura: 0.5,
//     movimiento: "Synchrony",
//     movimientoSecundario: "Telepathy",
//     descripcion:
//       "When you are next to a television, the screen shows images of strange landscapes. It is believed that they correspond to their place of origin.",
//     stats: {
//       hp: `055`,
//       atk: `055`,
//       def: `055`,
//       satk: `085`,
//       sdef: `050`,
//       spd: `030`,
//     },
//   },
//   {
//     nombre: "Chandelure",
//     numero: 609,
//     color: "#70559B",
//     elemento: ["Ghost", "Fire"],
//     peso: 34.3,
//     altura: 1.0,
//     movimiento: "Flame-bodyFlame-body",
//     movimientoSecundario: "Infiltrator",
//     descripcion:
//       "It establishes its abode in old buildings. He waves the flames from his arms sinisterly to mesmerize his enemies.",
//     stats: {
//       hp: `060`,
//       atk: `055`,
//       def: `090`,
//       satk: `145`,
//       sdef: `090`,
//       spd: `080`,
//     },
//   },

//   {
//     nombre: "Fennekin",
//     numero: 653,
//     color: "#f57d31",
//     elemento: ["Fire"],
//     peso: 9.4,
//     altura: 0.4,
//     movimiento: "Blaze",
//     movimientoSecundario: "",
//     descripcion:
//       "After chewing and ingesting small branches, it feels full and expels hot air through its large ears at temperatures above 200 °C. ",
//     stats: {
//       hp: `040`,
//       atk: `045`,
//       def: `040`,
//       satk: `062`,
//       sdef: `060`,
//       spd: `060`,
//     },
//   },
// ];

// export default Pokemones;
