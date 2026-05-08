// Cannes 2026 - 79th Festival International du Film de Cannes
// May 12-23, 2026

window.VENUES = [
  // ── Palais des Festivals (all halls share the same building) ──────────────
  { id: 'GTL', name: 'Grand Théâtre Lumière', shortName: 'GTL', lat: 43.55060, lng: 7.01680, address: 'Palais des Festivals, 1 Bd de la Croisette', section: 'competition', group: 'palais' },
  { id: 'DE',  name: 'Salle Debussy',         shortName: 'DE',  lat: 43.55060, lng: 7.01680, address: 'Palais des Festivals, 1 Bd de la Croisette', section: 'un-certain-regard', group: 'palais' },
  { id: 'AV',  name: 'Salle Agnès Varda',     shortName: 'AV',  lat: 43.55060, lng: 7.01680, address: 'Palais des Festivals, 1 Bd de la Croisette', section: 'hors-competition', group: 'palais' },
  { id: 'BU',  name: 'Salle Buñuel',          shortName: 'BU',  lat: 43.55060, lng: 7.01680, address: 'Palais des Festivals, 1 Bd de la Croisette', section: 'cannes-classics', group: 'palais' },
  { id: 'BA',  name: 'Salle Bazin',           shortName: 'BA',  lat: 43.55060, lng: 7.01680, address: 'Palais des Festivals, 1 Bd de la Croisette', section: 'cinema-de-demain', group: 'palais' },
  // ── La Croisette ──────────────────────────────────────────────────────────
  { id: 'CRO', name: 'Théâtre Croisette / JW Marriott', shortName: 'CRO', lat: 43.54993, lng: 7.02545, address: '50 Bd de la Croisette', section: 'quinzaine', group: 'croisette' },
  { id: 'MIR', name: 'Espace Miramar',        shortName: 'MIR', lat: 43.54891, lng: 7.02906, address: '47 Bd de la Croisette', section: 'semaine-critique', group: 'croisette' },
  // ── City centre cinemas ───────────────────────────────────────────────────
  { id: 'OLY', name: 'Olympia',               shortName: 'OLY', lat: 43.55252, lng: 7.01653, address: '5 Rue de la Pompe', section: 'quinzaine', group: 'ville' },
  { id: 'AR',  name: 'Les Arcades',           shortName: 'AR',  lat: 43.55223, lng: 7.01540, address: '77 Rue Félix Faure', section: 'quinzaine', group: 'ville' },
  { id: 'ST',  name: 'Studio 13',             shortName: 'ST',  lat: 43.55020, lng: 7.00213, address: '23 Av. du Dr Raymond Picaud', section: 'acid', group: 'ville' },
  // ── Eastern / Palm Beach area ─────────────────────────────────────────────
  { id: 'AL',  name: 'Alexandre III',         shortName: 'AL',  lat: 43.54733, lng: 7.03658, address: '19 Bd Alexandre III', section: 'acid', group: 'ville' },
  // ── La Bocca (west Cannes) ────────────────────────────────────────────────
  { id: 'RAI', name: 'Le Raimu',              shortName: 'RAI', lat: 43.57220, lng: 6.97140, address: 'Chemin de la Frayère, MJC Ranguin', section: 'acid', group: 'ville' },
  // ── Le Cineum (all screens share the same building) ───────────────────────
  { id: 'CI-I',name: 'Le Cineum IMAX',        shortName: 'CI-I',lat: 43.55010, lng: 7.01114, address: '13 Av. Maurice Chevalier', section: 'reprise', group: 'cineum' },
  { id: 'CI-A',name: 'Le Cineum Aurore',      shortName: 'CI-A',lat: 43.55010, lng: 7.01114, address: '13 Av. Maurice Chevalier', section: 'reprise', group: 'cineum' },
  { id: 'CI-X',name: 'Le Cineum Screen X',    shortName: 'CI-X',lat: 43.55010, lng: 7.01114, address: '13 Av. Maurice Chevalier', section: 'reprise', group: 'cineum' },
  { id: 'CI-3',name: 'Le Cineum Salle 3',     shortName: 'CI-3',lat: 43.55010, lng: 7.01114, address: '13 Av. Maurice Chevalier', section: 'reprise', group: 'cineum' },
  // ── Beach ─────────────────────────────────────────────────────────────────
  { id: 'PLAGE',name: 'Cinéma de la Plage (Plage Macé)', shortName: 'PLAGE', lat: 43.54999, lng: 7.02149, address: 'Plage Macé, Bd de la Croisette', section: 'plage', group: 'plage' },
];

// Helper: parse duration string like "1h50", "2h", "15'", "3h16" → minutes
function parseDuration(s) {
  if (!s) return null;
  s = s.trim();
  const mOnly = s.match(/^(\d+)'$/);
  if (mOnly) return parseInt(mOnly[1]);
  const hm = s.match(/^(\d+)h(\d+)?$/);
  if (hm) return parseInt(hm[1]) * 60 + (hm[2] ? parseInt(hm[2]) : 0);
  return null;
}

function s(id, title, titleEn, director, section, venue, date, startTime, dur, flags, extra) {
  return Object.assign({
    id, title, titleEn: titleEn || null, director,
    section, venue,
    date: '2026-05-' + String(date).padStart(2,'0'),
    startTime,
    durationMin: parseDuration(dur),
    flags: flags || [],
    isFree: false, isProgramme: false, films: []
  }, extra || {});
}

window.SCREENINGS = [

  // ─── COMPÉTITION — Grand Théâtre Lumière ───────────────────────────────────
  // Opening night
  s('gtl-12-venus-2000','La Vénus Électrique','','Pierre Salvadori','competition','GTL',12,'20:00','2h02',['opening-film','hors-competition']),

  // May 13
  s('gtl-13-nagi-1500','Nagi Notes (Quelques Jours à Nagi)','Nagi Notes','Fukada Koji','competition','GTL',13,'15:00','1h50',[]),
  s('gtl-13-woman-1830','La Vie d\'une Femme','A Woman\'s Life','Charline Bourgeois-Tacquet','competition','GTL',13,'18:30','1h38',[]),

  // May 14
  s('gtl-14-woman-0930','La Vie d\'une Femme','A Woman\'s Life','Charline Bourgeois-Tacquet','competition','GTL',14,'9:30','1h38',[]),
  s('gtl-14-nagi-1230','Nagi Notes (Quelques Jours à Nagi)','Nagi Notes','Fukada Koji','competition','GTL',14,'12:30','1h50',[]),
  s('gtl-14-fatherland-1800','Fatherland','','Pawel Pawlikowski','competition','GTL',14,'18:00','1h22',[]),
  s('gtl-14-paralleles-2030','Histoires Parallèles','Parallel Tales','Asghar Farhadi','competition','GTL',14,'20:30','2h20',[]),

  // May 15
  s('gtl-15-fatherland-0830','Fatherland','','Pawel Pawlikowski','competition','GTL',15,'8:30','1h22',[]),
  s('gtl-15-paralleles-1030','Histoires Parallèles','Parallel Tales','Asghar Farhadi','competition','GTL',15,'10:30','2h20',[]),
  s('gtl-15-soudain-1400','Soudain','All of a Sudden','Hamaguchi Ryusuke','competition','GTL',15,'14:00','3h16',[]),
  s('gtl-15-gentle-2200','Gentle Monster','','Marie Kreutzer','competition','GTL',15,'22:00','1h54',[]),

  // May 16
  s('gtl-16-soudain-0800','Soudain','All of a Sudden','Hamaguchi Ryusuke','competition','GTL',16,'8:00','3h16',[]),
  s('gtl-16-gentle-1200','Gentle Monster','','Marie Kreutzer','competition','GTL',16,'12:00','1h54',[]),
  s('gtl-16-sheep-1500','Sheep in the Box','','Koreeda Hirokazu','competition','GTL',16,'15:00','2h06',[]),
  s('gtl-16-beloved-1815','El Ser Querido','The Beloved','Rodrigo Sorogoyen','competition','GTL',16,'18:15','2h15',[]),
  s('gtl-16-tiger-2145','Paper Tiger','','James Gray','competition','GTL',16,'21:45','1h55',[]),

  // May 17
  s('gtl-17-tiger-0830','Paper Tiger','','James Gray','competition','GTL',17,'8:30','1h55',[]),
  s('gtl-17-beloved-1130','El Ser Querido','The Beloved','Rodrigo Sorogoyen','competition','GTL',17,'11:30','2h15',[]),
  s('gtl-17-moulin-1500','Moulin','','László Nemes','competition','GTL',17,'15:00','2h10',[]),
  s('gtl-17-garance-1830','Garance','','Jeanne Herry','competition','GTL',17,'18:30','2h',[]),
  s('gtl-17-hope-2130','Hope','','Na Hong-Jin','competition','GTL',17,'21:30','2h40',[]),

  // May 18
  s('gtl-18-garance-0830','Garance','','Jeanne Herry','competition','GTL',18,'8:30','2h',[]),
  s('gtl-18-hope-1130','Hope','','Na Hong-Jin','competition','GTL',18,'11:30','2h40',[]),
  s('gtl-18-inconnue-1530','L\'Inconnue','The Unknown','Arthur Harari','competition','GTL',18,'15:30','2h19',[]),
  s('gtl-18-fjord-1900','Fjord','','Cristian Mungiu','competition','GTL',18,'19:00','2h26',[]),

  // May 19
  s('gtl-19-inconnue-0830','L\'Inconnue','The Unknown','Arthur Harari','competition','GTL',19,'8:30','2h19',[]),
  s('gtl-19-fjord-1145','Fjord','','Cristian Mungiu','competition','GTL',19,'11:45','2h26',[]),
  s('gtl-19-minotaur-1530','Minotaur','','Andreï Zviaguintsev','competition','GTL',19,'15:30','2h15',[]),
  s('gtl-19-navidad-1815','Amarga Navidad','','Pedro Almodóvar','competition','GTL',19,'19:00','1h52',[]),

  // May 20
  s('gtl-20-minotaur-0830','Minotaur','','Andreï Zviaguintsev','competition','GTL',20,'8:30','2h15',[]),
  s('gtl-20-navidad-1145','Amarga Navidad','','Pedro Almodóvar','competition','GTL',20,'11:45','1h52',[]),
  s('gtl-20-notresalut-1500','Notre Salut','','Emmanuel Marre','competition','GTL',20,'15:00','2h45',[]),
  s('gtl-20-manlove-2230','The Man I Love','','Ira Sachs','competition','GTL',20,'22:30','1h35',[]),

  // May 21
  s('gtl-21-manlove-0830','The Man I Love','','Ira Sachs','competition','GTL',21,'8:30','1h35',[]),
  s('gtl-21-notresalut-1100','Notre Salut','','Emmanuel Marre','competition','GTL',21,'11:00','2h45',[]),
  s('gtl-21-manlove-1500','The Man I Love','','Ira Sachs','competition','GTL',21,'15:00','1h35',[]),
  s('gtl-21-bolenegra-1800','La Bola Negra','','Javier Calvo & Javier Ambrossi','competition','GTL',21,'18:00','2h45',[]),
  s('gtl-21-coward-2200','Coward','','Lukas Dhont','competition','GTL',21,'22:00','2h',[]),

  // May 22
  s('gtl-22-bolenegra-0830','La Bola Negra','','Javier Calvo & Javier Ambrossi','competition','GTL',22,'8:30','2h45',[]),
  s('gtl-22-coward-1200','Coward','','Lukas Dhont','competition','GTL',22,'12:00','2h',[]),
  s('gtl-22-getraumt-1500','Das Geträumte Abenteuer','The Dreamed Adventure','Valeska Grisebach','competition','GTL',22,'15:00','2h47',[]),
  s('gtl-22-nuit-1900','Histoires de la Nuit','The Birthday Party','Léa Mysius','competition','GTL',22,'19:00','1h54',[]),

  // ─── HORS COMPÉTITION / CANNES PREMIÈRE / SÉANCES SPÉCIALES ───────────────
  // May 12
  s('av-12-venus-0900','La Vénus Électrique','','Pierre Salvadori','hors-competition','AV',12,'9:00','2h02',[]),

  // May 13
  s('de-13-jackson-1100','Rendez-vous avec Peter Jackson','','Peter Jackson','seance-speciale','DE',13,'11:00','1h30',['rendez-vous']),
  s('gtl-13-match-0900','The Match','','Juan Cabral & Santiago Franco','seance-speciale','GTL',13,'9:00','1h31',['seance-speciale']),
  s('bu-13-ceniza-1545','Ceniza en la Boca','','Diego Luna','seance-speciale','BU',13,'15:45','1h42',[]),
  s('av-13-groundswell-1845','Groundswell','','Josh Tickell & Rebecca Tickell','seance-speciale','AV',13,'18:45','1h48',[]),
  s('gtl-13-abandon-2130','L\'Abandon','Forsaken','Vincent Garenq','seance-speciale','GTL',13,'21:30','1h40',[]),
  s('gtl-13-fastandfurious-2345','The Fast and the Furious','Fast and Furious','Rob Cohen','cannes-classics','GTL',13,'23:45','1h47',['seance-minuit']),

  // May 14
  s('av-14-tangles-1830','Tangles','','Leah Nelson','seance-speciale','AV',14,'18:30','1h42',['seance-speciale']),
  s('av-14-caprices-2100','Les Caprices de l\'Enfant Roi','Molière, Cyrano and the Young King','Michel Leclerc','seance-speciale','AV',14,'21:00','1h58',[]),
  s('de-14-madeleine-2130','Marie Madeleine','','Géssica Géneus','cannes-premiere','DE',14,'21:30','1h43',['cannes-premiere']),
  s('gtl-14-sanguine-0000','Sanguine','','Marion Le Corroller','seance-speciale','GTL',14,'0:00','1h43',['seance-minuit']),

  // May 15
  s('av-15-cantona-1430','Cantona','','David Tryhorn & Ben Nicholas','seance-speciale','AV',15,'14:30','1h55',[]),
  s('de-15-karma-1830','Karma','','Guillaume Canet','cannes-premiere','DE',15,'18:30','2h29',[]),
  s('bu-15-propeller-2105','Propeller One-Way Night Coach','Vol de Nuit pour Los Angeles','John Travolta','seance-speciale','BU',15,'21:05','1h01',['cannes-premiere']),
  s('av-15-lennon-1945','John Lennon: The Last Interview','','Steven Soderbergh','seance-speciale','AV',15,'19:45','1h40',[]),
  s('av-15-situpenses-2130','Si tu Penses Bien','Think Good','Géraldine Nakache','seance-speciale','AV',15,'21:30','1h34',['seance-speciale']),
  s('gtl-15-gunche-0030','Gun-Che','Colony','Yeon Sang-Ho','seance-speciale','GTL',15,'0:30','2h03',['seance-minuit']),

  // May 16
  s('av-16-rehearsals-1515','Rehearsals for a Revolution','','Pegah Ahangarani','seance-speciale','AV',16,'15:15','1h35',[]),
  s('de-16-heimsuchung-1915','Heimsuchung','Visitation','Volker Schlöndorff','cannes-premiere','DE',16,'19:15','1h58',["cannes-premiere"]),
  s('av-16-matins-1930','Les Matins Merveilleux','','Avril Besson','seance-speciale','AV',16,'19:30','1h27',[]),
  s('gtl-16-fullphil-0030','Full Phil','','Quentin Dupieux','seance-speciale','GTL',16,'0:30','1h18',['seance-minuit']),

  // May 17
  s('bu-17-blanchett-1430','Rendez-vous avec Cate Blanchett','','Cate Blanchett','seance-speciale','BU',17,'14:30','1h30',['rendez-vous']),
  s('av-17-avedon-1845','Avedon','','Ron Howard','seance-speciale','AV',17,'18:45','1h44',[]),
  s('de-17-troisieme-1915','La Troisième Nuit','When the Night Falls','Daniel Auteuil','cannes-premiere','DE',17,'19:15','1h40',['cannes-premiere']),
  s('gtl-17-jimqueen-0030','Jim Queen','','Marco Nguyen & Nicolas Athané','seance-speciale','GTL',17,'0:30','1h25',['seance-minuit']),

  // May 18
  s('av-18-vesna-1600','Vesna','','Rostislav Kirpičenko','seance-speciale','AV',18,'16:00','1h33',['seance-speciale']),
  s('av-18-marieclaure-1915','L\'Affaire Marie-Claire','Women on Trial','Lauriane Escaffre & Yvo Muller','seance-speciale','AV',18,'19:15','1h42',[]),
  s('de-18-aqui-2000','Aqui','','Tiago Guedes','cannes-premiere','DE',18,'20:00','3h23',['cannes-premiere']),
  s('gtl-18-privateehell-2230','Her Private Hell','','Nicolas Winding Refn','seance-speciale','GTL',18,'22:30','1h49',[]),

  // May 19
  s('av-19-lucylost-1830','Lucy Lost','','Olivier Clert','seance-speciale','AV',19,'18:30','1h25',['seance-speciale']),
  s('av-19-triangle-2000','Le Triangle d\'Or','','Hélène Rosselet-Ruiz','seance-speciale','AV',19,'20:00','1h30',['seance-speciale']),
  s('de-19-kokurojo-2000','Kokurojo','Le Château d\'Arioka / The Samurai and the Prisoner','Kurosawa Kiyoshi','cannes-premiere','DE',19,'20:00','2h27',['cannes-premiere']),
  s('gtl-19-diamond-2200','Diamond','','Andy Garcia','seance-speciale','GTL',19,'22:00','1h58',[]),

  // May 20
  s('av-20-bataille-1845','La Bataille de Gaulle: L\'Âge de Fer','','Antonin Baudry','seance-speciale','AV',20,'18:45','2h40',[]),
  s('bu-20-survivants-2100','Les Survivants du Che','Che Guevara: The Last Companions','Christophe Dimitri Reveille','seance-speciale','BU',20,'21:00','1h38',[]),
  s('de-20-mariage-1930','Mariage au Goût d\'Orange','','Christophe Honoré','cannes-premiere','DE',20,'19:30','1h55',['cannes-premiere']),
  s('gtl-20-romaelastica-0030','Roma Elastica','','Bertrand Mandico','seance-speciale','GTL',20,'0:30','1h47',['seance-minuit']),

  // May 21
  s('bu-21-swinton-1430','Rendez-vous avec Tilda Swinton','','Tilda Swinton','seance-speciale','BU',21,'14:30','1h30',['rendez-vous']),
  s('de-21-endofit-1930','The End of It','','Maria Martínez Bayona','cannes-premiere','DE',21,'19:30','1h42',['cannes-premiere']),

  // May 22
  s('gtl-22-objetdelit-2200','L\'Objet du Délit','Crescendo','Agnès Jaoui','seance-speciale','GTL',22,'22:00','2h43',[]),

  // ─── UN CERTAIN REGARD — Salle Debussy ────────────────────────────────────
  s('de-13-miasma-1915','Teenage Sex and Death at Camp Miasma','','Jane Schoenbrun','un-certain-regard','DE',13,'19:15','1h46',['opening-film']),

  s('de-14-amour-1130','Quelques Mots d\'Amour','','Rudi Rosenberg','un-certain-regard','DE',14,'11:30','1h35',[]),
  s('de-14-deshielo-1400','El Deshielo','Dégel / The Meltdown','Manuela Martelli','un-certain-regard','DE',14,'14:00','1h48',[]),

  s('de-15-congoboy-1100','Congo Boy','','Rafiki Fariala','un-certain-regard','DE',15,'11:00','1h35',[]),
  s('de-15-clubkid-1415','Club Kid','','Jordan Firstman','un-certain-regard','DE',15,'14:15','2h06',[]),

  s('de-16-memoirefille-1115','Mémoire de Fille','A Girl\'s Story','Judith Godréche','un-certain-regard','DE',16,'11:15','1h57',[]),
  s('de-16-siemsoy-1400','Siempre Soy Tu Animal Materno','Forever Your Maternal Animal','Valentina Maurel','un-certain-regard','DE',16,'14:00','1h40',[]),

  s('de-17-alllovers-1100','All the Lovers in the Night','','Sode Yukiko','un-certain-regard','DE',17,'11:00','2h19',[]),
  s('de-17-illbegone-1400','I\'ll Be Gone in June','','Katharina Rivilis','un-certain-regard','DE',17,'14:00','2h05',[]),

  s('de-18-everytime-1130','Everytime','','Sandra Wollner','un-certain-regard','DE',18,'11:30','2h01',[]),
  s('de-18-masdulce-1430','La Más Dulce','Strawberries','Laïla Marrakchi','un-certain-regard','DE',18,'14:30','1h41',[]),

  s('de-19-benimana-1100','Ben\'imana','','Marie-Clémentine Dusabejambo','un-certain-regard','DE',19,'11:00','1h36',[]),
  s('de-19-corset-1400','Le Corset','Iron Boy','Louis Clichy','un-certain-regard','DE',19,'14:00','1h29',[]),

  s('de-20-elephants-1100','Elephants in the Fog','Les Éléphants dans la Brume','Abinash Bikram Shah','un-certain-regard','DE',20,'11:00','1h43',[]),
  s('de-20-yesterday-1400','Yesterday the Eye Didn\'t Sleep','','Rakan Mayasi','un-certain-regard','DE',20,'14:00','1h40',[]),
  s('de-20-titanic-1630','Titanic Océan','','Konstantina Kotzamani','un-certain-regard','DE',20,'16:30','2h10',[]),

  s('de-21-ula-1100','Ula','Ulya','Viesturs Kairiss','un-certain-regard','DE',21,'11:00','1h42',[]),
  s('de-21-victorian-1400','Victorian Psycho','','Zachary Wigon','un-certain-regard','DE',21,'14:00','1h30',[]),

  // Closing ceremony + film
  s('de-22-ulysse-close','Ulysse','','Laetitia Masson','hors-competition','DE',22,'20:15','1h37',['closing-film']),

  // ─── CANNES CLASSICS ───────────────────────────────────────────────────────
  s('de-12-panslabyrinth-1430','Pan\'s Labyrinth','Le Labyrinthe de Pan','Guillermo Del Toro','cannes-classics','DE',12,'14:30','1h58',[]),

  s('bu-13-tilai-1130','Tilaï','','Idrissa Ouedraogo','cannes-classics','BU',13,'11:30','1h21',[]),
  s('av-13-moonlighting-1530','Moonlighting','Travail au Noir','Jerzy Skolimowski','cannes-classics','AV',13,'15:30','1h53',[]),
  s('bu-13-bawang-1900','Bawang Bieji','Farewell My Concubine','Chen Kaige','cannes-classics','BU',13,'19:00','2h50',[]),

  s('bu-14-manofIron-1500','Człowiek z Żelaza','Man of Iron','Andrzej Wajda','cannes-classics','BU',14,'15:00','2h33',[]),
  s('av-14-golden-1600','L\'Âge d\'Or','The Golden Age','Bérenger Thouin','cannes-classics','AV',14,'16:00','1h53',[]),
  s('bu-14-manifeste-1845','Une Vie Manifeste','A Life, a Manifesto','Jean-Gabriel Périot','cannes-classics','BU',14,'18:45','1h26',[]),
  s('bu-14-devils-2115','Ken Russell\'s The Devils','','Ken Russell','cannes-classics','BU',14,'21:15','1h54',[]),

  s('bu-15-cannes1947-1315','Festival de Cannes 1947','','Adrien Fred Maury','cannes-classics','BU',15,'13:15','1h',[]),
  s('bu-15-pelechian-1445','Pelechian Project','','Artavazd Pelechian','cannes-classics','BU',15,'14:45','1h30',[]),
  s('bu-15-sanshiro-1645','Sanshiro Sugata','La Légende du Grand Judo','Akira Kurosawa','cannes-classics','BU',15,'16:45','1h31',[]),
  s('bu-15-documentary-1900','The Story of Documentary Film (The 1970s)','','Mark Cousins','cannes-classics','BU',15,'19:00','1h59',[]),

  s('bu-16-casaangel-1400','La Casa del Ángel','The House of the Angel','Leopoldo Torre Nilsson','cannes-classics','BU',16,'14:00','1h16',[]),
  s('bu-16-amma-1545','Amma Ariyan','Report to Mother','John Abraham','cannes-classics','BU',16,'15:45','1h55',[]),
  s('bu-16-desica-1830','Vittorio de Sica - La Vita in Scena','Staging Life','Francesco Zippel','cannes-classics','BU',16,'18:30','1h40',[]),
  s('bu-16-ciociara-2045','La Ciociara','Two Women','Vittorio De Sica','cannes-classics','BU',16,'20:45','1h41',[]),

  s('av-17-sierra-1515','Sierra de Teruel','Espoir','André Malraux','cannes-classics','AV',17,'15:15','1h30',[]),
  s('bu-17-dullice-1630','The Dull-Ice Flower','','Yang Li-Kuo','cannes-classics','BU',17,'16:30','1h40',[]),
  s('bu-17-maverick-1900','Maverick - The Epic Adventures of David Lean','','Barnaby Thompson','cannes-classics','BU',17,'19:00','1h45',[]),

  s('bu-18-sacem-1400','SACEM - La Leçon de Musique','','Amine Bouhafa','cannes-classics','BU',18,'14:00','1h30',[]),
  s('bu-18-eva-1600','Eva','Eve','Maria Plyta','cannes-classics','BU',18,'16:00','1h30',[]),
  s('bu-18-nostalgia-1800','Nostalgia for the Future','Nostalgie du Futur','Brecht Debackere','cannes-classics','BU',18,'18:00','1h15',[]),
  s('bu-18-metti-1945','Metti Una Sera a Cena','Love Circle','Giuseppe Patroni Griffi','cannes-classics','BU',18,'19:45','2h05',[]),

  s('bu-19-stranger-1845','The Stranger','Le Criminel','Orson Welles','cannes-classics','BU',19,'18:45','1h35',[]),
  s('de-19-duling-1800','Du Ling Zhi Ying / Goodnight Lamby / Zamine Bazi','Torino Shadow / Playground','Jia Zhang-Ke & Dustin Yellin & Amirhossein Shojaei','cannes-classics','DE',19,'18:00','1h02',[]),
  s('bu-19-linnocente-2100','L\'Innocente','The Innocent','Luchino Visconti','cannes-classics','BU',19,'21:00','2h40',[]),

  s('bu-20-symphonie-1630','La Symphonie Pastorale','Pastoral Symphony','Jean Delannoy','cannes-classics','BU',20,'16:30','1h37',[]),
  s('bu-20-dernsie-1900','Dernsie: The Amazing Life of Bruce Dern','','Mike Mendez','cannes-classics','BU',20,'19:00','1h51',[]),

  s('av-21-moncoluche-1630','Mon Coluche à Moi','My Coluche','Michel Denisot & Julie Lazare & Camille Bruère','cannes-classics','AV',21,'16:30','1h36',[]),
  s('bu-21-machinegun-2000','Machine Gun Kelly','','Roger Corman','cannes-classics','BU',21,'20:00','1h24',[]),

  s('bu-22-derive-1030','La Dérive','The Drift','Paula Delsol','cannes-classics','BU',22,'10:30','1h23',[]),
  s('av-22-meeuwen-1915','Meeuwen Sterven in de Haven','Seagulls Die in the Harbour','Rik Kuypers & Roland Verhavert & Ivo Michiels','cannes-classics','AV',22,'19:15','1h27',[]),
  s('bu-22-hommage-2000','Hommage Pierre Angénieux à Akiko Ashizawa','','Various','cannes-classics','BU',22,'20:00','1h45',[]),

  // ─── CINÉMA DE DEMAIN ─────────────────────────────────────────────────────
  s('bu-19-cinef1-1430','Sélection La Cinef — Programme 1','','Various','cinema-de-demain','BU',19,'14:30','1h26',[],{isProgramme:true,films:['Onde Nascem os Pirilampos','Silent Voices','Trakcje (Axles)','Left Behind, Still Standing','Laser-Gato']}),
  s('bu-20-cinef2-1115','Sélection La Cinef — Programme 2','','Various','cinema-de-demain','BU',20,'11:15','1h21',[],{isProgramme:true,films:['Will It Rain Again Today','Tú, Yo Y La Vaca','Photograph of an Insane Woman...','Over the Threshold','Shadows of the Moonless Nights']}),
  s('bu-20-cinef3-1430','Sélection La Cinef — Programme 3','','Various','cinema-de-demain','BU',20,'14:30','1h47',[],{isProgramme:true,films:['Somewhere I Belong','Sunday\'s Children','Growing Stones, Flying Papers','Aldrig Nok']}),
  s('bu-21-cinef4-1100','Sélection La Cinef — Programme 4','','Various','cinema-de-demain','BU',21,'11:00','1h45',[],{isProgramme:true,films:['Tian Tian de Mi Mi','Pickled','Always Wanted to Be God...','Bird Rhapsody','TJ28']}),
  s('de-22-courtsmetres-1100','Courts Métrages en Compétition','','Various','cinema-de-demain','DE',22,'11:00','2h28',[],{isProgramme:true}),
  s('bu-22-courtsmetres-1400','Courts Métrages en Compétition','','Various','cinema-de-demain','BU',22,'14:00','2h28',[],{isProgramme:true}),

  // ─── SÉANCES DU LENDEMAIN ─────────────────────────────────────────────────
  s('av-13-venus-1100','La Vénus Électrique','','Pierre Salvadori','seances-du-lendemain','AV',13,'11:00','2h02',[]),

  s('de-14-miasma-0830','Teenage Sex and Death at Camp Miasma','','Jane Schoenbrun','seances-du-lendemain','DE',14,'8:30','1h46',[]),
  s('av-14-nagi-0900','Nagi Notes (Quelques Jours à Nagi)','Nagi Notes','Fukada Koji','seances-du-lendemain','AV',14,'9:00','1h50',[]),
  s('av-14-woman-1130','La Vie d\'une Femme','A Woman\'s Life','Charline Bourgeois-Tacquet','seances-du-lendemain','AV',14,'11:30','1h38',[]),
  s('av-14-match-1400','The Match','','Juan Cabral & Santiago Franco','seances-du-lendemain','AV',14,'14:00','1h31',[]),

  s('de-15-deshielo-0830','El Deshielo','The Meltdown','Manuela Martelli','seances-du-lendemain','DE',15,'8:30','1h48',[]),
  s('av-15-paralleles-0830','Histoires Parallèles','Parallel Tales','Asghar Farhadi','seances-du-lendemain','AV',15,'8:30','2h20',[]),
  s('av-15-fatherland-1115','Fatherland','','Pawel Pawlikowski','seances-du-lendemain','AV',15,'11:15','1h22',[]),
  s('av-15-madeleine-1715','Marie Madeleine','','Géssica Géneus','seances-du-lendemain','AV',15,'17:15','1h43',[]),
  s('ba-15-amour-1815','Quelques Mots d\'Amour','','Rudi Rosenberg','seances-du-lendemain','BA',15,'18:15','1h35',[]),

  s('de-16-clubkid-0830','Club Kid','','Jordan Firstman','seances-du-lendemain','DE',16,'8:30','2h06',[]),
  s('av-16-situpenses-1300','Si tu Penses Bien','Think Good','Géraldine Nakache','seances-du-lendemain','AV',16,'13:00','1h34',[]),
  s('ba-16-propeller-1600','Propeller One-Way Night Coach','Vol de Nuit pour Los Angeles','John Travolta','seances-du-lendemain','BA',16,'16:00','1h01',[]),

  s('av-16-gentle-2130','Gentle Monster','','Marie Kreutzer','seances-du-lendemain','AV',16,'21:30','1h54',[]),

  s('de-17-siemsoy-0830','Siempre Soy Tu Animal Materno','Forever Your Maternal Animal','Valentina Maurel','seances-du-lendemain','DE',17,'8:30','1h40',[]),
  s('av-17-memoirefille-0830','Mémoire de Fille','A Girl\'s Story','Judith Godréche','seances-du-lendemain','AV',17,'8:30','1h57',[]),
  s('av-17-sheep-1030','Sheep in the Box','','Koreeda Hirokazu','seances-du-lendemain','AV',17,'10:30','2h06',[]),
  s('av-17-heimsuchung-2100','Heimsuchung','Visitation','Volker Schlöndorff','seances-du-lendemain','AV',17,'21:00','1h58',[]),

  s('de-18-illbegone-0830','I\'ll Be Gone in June','','Katharina Rivilis','seances-du-lendemain','DE',18,'8:30','2h05',[]),
  s('av-18-garance-0830','Garance','','Jeanne Herry','seances-du-lendemain','AV',18,'8:30','2h',[]),
  s('av-18-moulin-1100','Moulin','','László Nemes','seances-du-lendemain','AV',18,'11:00','2h10',[]),
  s('av-18-troisieme-1345','La Troisième Nuit','When the Night Falls','Daniel Auteuil','seances-du-lendemain','AV',18,'13:45','1h40',[]),
  s('ba-18-alllovers-1100','All the Lovers in the Night','','Sode Yukiko','seances-du-lendemain','BA',18,'11:00','2h19',[]),
  s('av-18-hope-2115','Hope','','Na Hong-Jin','seances-du-lendemain','AV',18,'21:15','2h40',[]),

  s('de-19-masdulce-0830','La Más Dulce','Strawberries','Laïla Marrakchi','seances-du-lendemain','DE',19,'8:30','1h41',[]),
  s('av-19-fjord-1100','Fjord','','Cristian Mungiu','seances-du-lendemain','AV',19,'11:00','2h26',[]),
  s('ba-19-everytime-2030','Everytime','','Sandra Wollner','seances-du-lendemain','BA',19,'20:30','2h01',[]),
  s('av-19-inconnue-2135','L\'Inconnue','The Unknown','Arthur Harari','seances-du-lendemain','AV',19,'21:35','2h19',[]),

  s('de-20-corset-0830','Le Corset','Iron Boy','Louis Clichy','seances-du-lendemain','DE',20,'8:30','1h29',[]),
  s('ba-20-benimana-1845','Ben\'imana','','Marie-Clémentine Dusabejambo','seances-du-lendemain','BA',20,'18:45','1h36',[]),
  s('av-20-kokurojo-2130','Kokurojo','The Samurai and the Prisoner','Kurosawa Kiyoshi','seances-du-lendemain','AV',20,'21:30','2h27',[]),

  s('de-21-yesterday-0830','Yesterday the Eye Didn\'t Sleep','','Rakan Mayasi','seances-du-lendemain','DE',21,'8:30','1h40',[]),
  s('av-21-mariage-1400','Mariage au Goût d\'Orange','','Christophe Honoré','seances-du-lendemain','AV',21,'14:00','1h55',[]),
  s('ba-21-titanic-1400','Titanic Océan','','Konstantina Kotzamani','seances-du-lendemain','BA',21,'14:00','2h10',[]),
  s('ba-21-elephants-2015','Elephants in the Fog','Les Éléphants dans la Brume','Abinash Bikram Shah','seances-du-lendemain','BA',21,'20:15','1h43',[]),
  s('av-21-notresalut-2200','Notre Salut','','Emmanuel Marre','seances-du-lendemain','AV',21,'22:00','2h45',[]),

  s('de-22-victorian-0830','Victorian Psycho','','Zachary Wigon','seances-du-lendemain','DE',22,'8:30','1h30',[]),
  s('av-22-coward-0830','Coward','','Lukas Dhont','seances-du-lendemain','AV',22,'8:30','2h',[]),
  s('av-22-bolenegra-1115','La Bola Negra','','Javier Calvo & Javier Ambrossi','seances-du-lendemain','AV',22,'11:15','2h45',[]),
  s('av-22-endofit-1430','The End of It','','Maria Martínez Bayona','seances-du-lendemain','AV',22,'14:30','1h42',[]),
  s('av-22-ula-1645','Ula','Ulya','Viesturs Kairiss','seances-du-lendemain','AV',22,'16:45','1h42',[]),

  // ─── QUINZAINE DES CINÉASTES ────────────────────────────────────────────────
  // May 13
  s('cro-13-butterfly-1000','Butterfly Jam','','Kantemir Balagov','quinzaine','CRO',13,'10:00','1h42',[]),
  s('cro-13-carosse-1400','Carrosse d\'Or: J\'ai Pas Sommeil (I Can\'t Sleep) + Masterclass','I Can\'t Sleep','Claire Denis','quinzaine','CRO',13,'14:00','1h47',[],{isProgramme:true}),
  s('cro-13-butterfly-1830','Butterfly Jam','','Kantemir Balagov','quinzaine','CRO',13,'18:30','1h42',['opening-film']),

  // May 14
  s('cro-14-aliens-0845','We Are Aliens','','Kohei Kadowaki','quinzaine','CRO',14,'8:45','1h57',[]),
  s('cro-14-gabin-1200','Gabin','','Maxence Voiseux','quinzaine','CRO',14,'12:00','2h45',[]),
  s('cro-14-merci-1500','Merci d\'Être Venu','Thanks for Coming','Alain Cavalier','quinzaine','CRO',14,'15:00','1h22',[]),

  // May 15
  s('cro-15-atonement-0845','Atonement','L\'Apaisement','Reed Van Dyk','quinzaine','CRO',15,'8:45','1h58',[]),
  s('ar-15-gabin-1130','Gabin','','Maxence Voiseux','quinzaine','AR',15,'11:30','1h45',[]),
  s('cro-15-journal-1200','Le Journal d\'une Femme de Chambre','The Diary of a Chambermaid','Radu Jude','quinzaine','CRO',15,'12:00','1h34',[]),
  s('cro-15-merci-1500','Merci d\'Être Venu','Thanks for Coming','Alain Cavalier','quinzaine','CRO',15,'15:00','1h22',[]),
  s('ar-15-aliens-2230','We Are Aliens','','Kohei Kadowaki','quinzaine','AR',15,'22:30','1h57',[]),

  // May 16
  s('cro-16-shana-0845','Shana','','Lila Pinell','quinzaine','CRO',16,'8:45','1h23',[]),
  s('cro-16-clarissa-1130','Clarissa','','Arie & Chuko Esiri','quinzaine','CRO',16,'11:30','2h05',[]),
  s('ar-16-journal-1130','Le Journal d\'une Femme de Chambre','The Diary of a Chambermaid','Radu Jude','quinzaine','AR',16,'11:30','1h34',[]),
  s('cro-16-doublefreedom-1500','Double Freedom','La Libertad Doble','Lisandro Alonso','quinzaine','CRO',16,'15:00','1h40',[]),
  s('ar-16-atonement-2230','Atonement','L\'Apaisement','Reed Van Dyk','quinzaine','AR',16,'22:30','1h58',[]),

  // May 17
  s('cro-17-dora-0845','Dora','','July Jung','quinzaine','CRO',17,'8:45','2h17',[]),
  s('ar-17-shana-1000','Shana','','Lila Pinell','quinzaine','AR',17,'10:00','1h23',[]),
  s('cro-17-esplosive-1215','L\'Espèce Explosive','Too Many Beasts','Sarah Arnold','quinzaine','CRO',17,'12:15','1h35',[]),
  s('cro-17-doublefreedom-1515','Double Freedom','La Libertad Doble','Lisandro Alonso','quinzaine','CRO',17,'15:15','1h40',[]),
  s('ar-17-doublefreedom-2230','Double Freedom','La Libertad Doble','Lisandro Alonso','quinzaine','AR',17,'22:30','1h40',[]),

  // May 18
  s('cro-18-harlem-0845','Once Upon a Time in Harlem','','William & David Greaves','quinzaine','CRO',18,'8:45','1h40',[]),
  s('ar-18-esplosive-1130','L\'Espèce Explosive','Too Many Beasts','Sarah Arnold','quinzaine','AR',18,'11:30','1h35',[]),
  s('cro-18-laperra-1145','La Perra','','Dominga Sotomayor','quinzaine','CRO',18,'11:45','1h52',[]),
  s('cro-18-carmen-1500','Carmen, l\'Oiseau Rebelle','Viva Carmen','Sébastien Laudenbach','quinzaine','CRO',18,'15:00','1h30',[]),
  s('ar-18-clarissa-2230','Clarissa','','Arie & Chuko Esiri','quinzaine','AR',18,'22:30','2h05',[]),

  // May 19
  s('cro-19-lowexp-0845','Low Expectations','Lave Forventninger','Eivind Landsvik','quinzaine','CRO',19,'8:45','1h45',[]),
  s('ar-19-harlem-1100','Once Upon a Time in Harlem','','William & David Greaves','quinzaine','AR',19,'11:00','1h40',[]),
  s('cro-19-9temples-1145','9 Temples to Heaven','','Sompot Chidgasornpongse','quinzaine','CRO',19,'11:45','2h20',[]),
  s('cro-19-carmen-1520','Carmen, l\'Oiseau Rebelle','Viva Carmen','Sébastien Laudenbach','quinzaine','CRO',19,'15:20','1h30',[]),
  s('oly-19-carmen-2030','Carmen, l\'Oiseau Rebelle','Viva Carmen','Sébastien Laudenbach','quinzaine','OLY',19,'20:30','1h30',[]),

  // May 20
  s('cro-20-buildings-0845','I See Buildings Fall Like Lightning','Je Vois des Immeubles Tomber comme la Foudre','Clio Barnard','quinzaine','CRO',20,'8:45','1h49',[]),
  s('ar-20-laperra-1200','La Perra','','Dominga Sotomayor','quinzaine','AR',20,'12:00','1h52',[]),
  s('cro-20-deathnomaste-1200','Death Has No Master','La Muerte no Tiene Dueño','Jorge Thielen Armand','quinzaine','CRO',20,'12:00','1h44',[]),
  s('cro-20-lesroches-1500','Les Roches Rouges','Red Rocks','Bruno Dumont','quinzaine','CRO',20,'15:00','1h31',[]),
  s('ar-20-lowexp-2230','Low Expectations','Lave Forventninger','Eivind Landsvik','quinzaine','AR',20,'22:30','1h45',[]),

  // May 21
  s('cro-21-vertige-0845','Le Vertige','Vertiginous','Quentin Dupieux','quinzaine','CRO',21,'8:45','1h07',[]),
  s('cro-21-vertige-1130','Le Vertige','Vertiginous','Quentin Dupieux','quinzaine','CRO',21,'11:30','1h07',[]),
  s('oly-21-buildings-1200','I See Buildings Fall Like Lightning','','Clio Barnard','quinzaine','OLY',21,'12:00','1h49',[]),
  s('cro-21-programme2-1500','Programme Courts 2','','Various','quinzaine','CRO',21,'15:00','1h49',[],{isProgramme:true}),
  s('cro-21-closing-1900','Clôture / Closing: Le Vertige + Death Has No Master','','','quinzaine','CRO',21,'19:00','2h51',[],{isProgramme:true}),
  s('oly-21-deathnomaste-2030','Death Has No Master','La Muerte no Tiene Dueño','Jorge Thielen Armand','quinzaine','OLY',21,'20:30','1h44',[]),

  // May 22
  s('cro-22-merci-0845','Merci d\'Être Venu','Thanks for Coming','Alain Cavalier','quinzaine','CRO',22,'8:45','1h22',[]),
  s('oly-22-prixalpine-1100','Prix Alpine: Conversation avec Alice Winocour','','','quinzaine','OLY',22,'11:00','1h30',[]),
  s('cro-22-lesroches-1200','Les Roches Rouges','Red Rocks','Bruno Dumont','quinzaine','CRO',22,'12:00','1h31',[]),
  s('cro-22-aliens-1335','We Are Aliens','','Kohei Kadowaki','quinzaine','CRO',22,'13:35','1h57',[]),
  s('cro-22-atonement-1600','Atonement','L\'Apaisement','Reed Van Dyk','quinzaine','CRO',22,'16:00','1h58',[]),
  s('oly-22-lesroches-1830','Les Roches Rouges','Red Rocks','Bruno Dumont','quinzaine','OLY',22,'18:30','1h31',[]),
  s('oly-22-9temples-2030','9 Temples to Heaven','','Sompot Chidgasornpongse','quinzaine','OLY',22,'20:30','2h20',[]),
  s('cro-22-butterfly-2100','Butterfly Jam','','Kantemir Balagov','quinzaine','CRO',22,'21:00','1h42',[]),

  // ─── SEMAINE DE LA CRITIQUE — Espace Miramar ──────────────────────────────
  // May 13
  s('mir-13-inwaves-0845','In Waves','','Phuong Mai Nguyen','semaine-critique','MIR',13,'8:45','1h31',[]),
  s('mir-13-dua-1130','Dua','','Blerta Basholli','semaine-critique','MIR',13,'11:30','1h41',[]),
  s('mir-13-inwaves-2030','In Waves (Ouverture)','','Phuong Mai Nguyen','semaine-critique','MIR',13,'20:30','1h31',['opening-film']),

  // May 14
  s('mir-14-dua-0845','Dua','','Blerta Basholli','semaine-critique','MIR',14,'8:45','1h41',[]),
  s('mir-14-viva-1130','Viva (Alive)','','Aïna Clotet','semaine-critique','MIR',14,'11:30','1h53',[]),
  s('mir-14-invitation-1530','Invitation Next Step Studio Indonesia + Courts Métrages','','Various','semaine-critique','MIR',14,'15:30','1h01',[],{isProgramme:true}),

  // May 15
  s('mir-15-viva-0830','Viva (Alive)','','Aïna Clotet','semaine-critique','MIR',15,'8:30','1h53',[]),
  s('mir-15-wumingnu-1115','Wu Ming Nü Hai','A Girl Unknown','Zou Jing','semaine-critique','MIR',15,'11:15','2h08',[]),
  s('mir-15-lafrappe-1430','La Frappe','The Blow','Julien Gaspar-Oliveri','semaine-critique','MIR',15,'14:30','1h46',[]),

  // May 16
  s('mir-16-wumingnu-0800','Wu Ming Nü Hai','A Girl Unknown','Zou Jing','semaine-critique','MIR',16,'8:00','2h08',[]),
  s('mir-16-lagradiva-1100','La Gradiva','','Marine Atlan','semaine-critique','MIR',16,'11:00','2h25',[]),
  s('mir-16-dufiol-1430','Du Fiol dans les Artères','Flesh and Fuel','Pierre Le Gall','semaine-critique','MIR',16,'14:30','1h31',[]),

  // May 17
  s('mir-17-lagradiva-0815','La Gradiva','','Marine Atlan','semaine-critique','MIR',17,'8:15','2h25',[]),
  s('mir-17-almahatta-1130','Al Mahatta','The Station','Sara Ishaq','semaine-critique','MIR',17,'11:30','1h52',[]),
  s('mir-17-courts-1600','Courts Métrages — Séance Spéciale','','Various','semaine-critique','MIR',17,'16:00','1h23',[],{isProgramme:true}),

  // May 18
  s('mir-18-almahatta-0830','Al Mahatta','The Station','Sara Ishaq','semaine-critique','MIR',18,'8:30','1h52',[]),
  s('mir-18-tincastle-1130','Tin Castle','Irish Travellers','Alexander Murphy','semaine-critique','MIR',18,'11:30','1h46',[]),
  s('mir-18-courts1-1430','Courts Métrages — Compétition 1','','Various','semaine-critique','MIR',18,'14:30','1h31',[],{isProgramme:true}),

  // May 19
  s('mir-19-tincastle-0845','Tin Castle','Irish Travellers','Alexander Murphy','semaine-critique','MIR',19,'8:45','1h46',[]),
  s('mir-19-seismeses-1130','Seis Meses en el Edificio Rosa con Azul','Six Months in a Pink and Blue Building','Bruno Santamaría Razo','semaine-critique','MIR',19,'11:30','1h45',[]),
  s('mir-19-courts2-1430','Courts Métrages — Compétition 2','','Various','semaine-critique','MIR',19,'14:30','1h43',[],{isProgramme:true}),

  // May 20
  s('mir-20-seismeses-0845','Seis Meses en el Edificio Rosa con Azul','Six Months in a Pink and Blue Building','Bruno Santamaría Razo','semaine-critique','MIR',20,'8:45','1h45',[]),
  s('mir-20-adieu-1130','Adieu Monde Cruel','Goodbye Cruel World','Félix de Givry','semaine-critique','MIR',20,'11:30','4h33',[]),
  s('mir-20-palmares-1800','Cérémonie de Remise des Prix','','','semaine-critique','MIR',20,'18:00','1h',[]),

  // ─── ACID ─────────────────────────────────────────────────────────────────
  // May 13
  s('ar-13-mauvaisetoile-2000','Mauvaise Étoile','Under a Bad Star','Lola Cambouriex & Yann Berlier','acid','AR',13,'20:00','2h05',[]),

  // May 14
  s('rai-14-coeurSecret-1100','Cœur Secret','A Secret Heart','Tom Fontenille','acid','RAI',14,'11:00','1h28',[]),
  s('st-14-gueule-1100','Dans la Gueule de l\'Ogre','Into the Jaws of the Ogre','Mahsa Karampour','acid','ST',14,'11:00','1h26',[]),
  s('al-14-detention-1400','La Détention','Detention','Guillaume Massart','acid','AL',14,'14:00','2h12',[]),
  s('al-14-blaise-1645','Blaise','','Dimitri Planchon & Jean-Paul Guigue','acid','AL',14,'16:45','1h22',[]),
  s('ar-14-gueule-2000','Dans la Gueule de l\'Ogre','Into the Jaws of the Ogre','Mahsa Karampour','acid','AR',14,'20:00','1h26',[]),

  // May 15
  s('st-15-blaise-1100','Blaise','','Dimitri Planchon & Jean-Paul Guigue','acid','ST',15,'11:00','1h22',[]),
  s('al-15-coeurSecret-1630','Cœur Secret','A Secret Heart','Tom Fontenille','acid','AL',15,'16:30','1h28',[]),
  s('rai-15-mauvaisetoile-1900','Mauvaise Étoile','Under a Bad Star','Lola Cambouriex & Yann Berlier','acid','RAI',15,'19:00','2h05',[]),
  s('ar-15-blaise-2000','Blaise','','Dimitri Planchon & Jean-Paul Guigue','acid','AR',15,'20:00','1h22',[]),

  // May 16
  s('st-16-virages-1100','Virages','Summer Drift','Céline Carridroit & Aline Suter','acid','ST',16,'11:00','1h29',[]),
  s('al-16-promised-1630','Promised Spaces','','Ivan Marković','acid','AL',16,'16:30','1h36',[]),
  s('ar-16-virages-2000','Virages','Summer Drift','Céline Carridroit & Aline Suter','acid','AR',16,'20:00','1h29',[]),

  // May 17
  s('st-17-barcazou-1100','Barça Zou','Rewind Barcelona','Paul Nouhet','acid','ST',17,'11:00','1h26',[]),
  s('al-17-mauvaisetoile-1630','Mauvaise Étoile','Under a Bad Star','Lola Cambouriex & Yann Berlier','acid','AL',17,'16:30','2h05',[]),
  s('rai-17-gueule-1900','Dans la Gueule de l\'Ogre','Into the Jaws of the Ogre','Mahsa Karampour','acid','RAI',17,'19:00','1h26',[]),
  s('ar-17-barcazou-2000','Barça Zou','Rewind Barcelona','Paul Nouhet','acid','AR',17,'20:00','1h26',[]),

  // May 18
  s('st-18-promised-1100','Promised Spaces','','Ivan Marković','acid','ST',18,'11:00','1h36',[]),
  s('al-18-livingtwice-1630','Living Twice, Dying Thrice','','Karim Lakzadeh','acid','AL',18,'16:30','1h43',[]),
  s('ar-18-promised-2000','Promised Spaces','','Ivan Marković','acid','AR',18,'20:00','1h36',[]),

  // May 19
  s('st-19-detention-1030','La Détention','Detention','Guillaume Massart','acid','ST',19,'10:30','2h12',[]),
  s('al-19-barcazou-1630','Barça Zou','Rewind Barcelona','Paul Nouhet','acid','AL',19,'16:30','1h26',[]),
  s('rai-19-virages-1900','Virages','Summer Drift','Céline Carridroit & Aline Suter','acid','RAI',19,'19:00','1h29',[]),
  s('ar-19-detention-2000','La Détention','Detention','Guillaume Massart','acid','AR',19,'20:00','2h12',[]),

  // May 20
  s('st-20-coeurSecret-1100','Cœur Secret','A Secret Heart','Tom Fontenille','acid','ST',20,'11:00','1h28',[]),
  s('al-20-blaise-1630','Blaise','','Dimitri Planchon & Jean-Paul Guigue','acid','AL',20,'16:30','1h22',[]),
  s('ar-20-coeurSecret-2000','Cœur Secret','A Secret Heart','Tom Fontenille','acid','AR',20,'20:00','1h28',[]),

  // May 21
  s('st-21-livingtwice-1100','Living Twice, Dying Thrice','','Karim Lakzadeh','acid','ST',21,'11:00','1h43',[]),
  s('al-21-gueule-1630','Dans la Gueule de l\'Ogre','Into the Jaws of the Ogre','Mahsa Karampour','acid','AL',21,'16:30','1h26',[]),
  s('rai-21-livingtwice-1900','Living Twice, Dying Thrice','','Karim Lakzadeh','acid','RAI',21,'19:00','1h43',[]),

  // May 22
  s('st-22-mauvaisetoile-1100','Mauvaise Étoile','Under a Bad Star','Lola Cambouriex & Yann Berlier','acid','ST',22,'11:00','2h05',[]),
  s('al-22-virages-1630','Virages','Summer Drift','Céline Carridroit & Aline Suter','acid','AL',22,'16:30','1h29',[]),

  // ─── REPRISE DE LA SÉLECTION — Le Cineum ─────────────────────────────────
  // May 14
  s('ci-i-14-venus-0900','La Vénus Électrique','','Pierre Salvadori','reprise','CI-I',14,'9:00','2h02',[]),
  s('ci-i-14-nagi-1145','Nagi Notes','','Fukada Koji','reprise','CI-I',14,'11:45','1h50',[]),
  s('ci-i-14-woman-1415','La Vie d\'une Femme','A Woman\'s Life','Charline Bourgeois-Tacquet','reprise','CI-I',14,'14:15','1h38',[]),
  s('ci-i-14-abandon-1630','L\'Abandon','Forsaken','Vincent Garenq','reprise','CI-I',14,'16:30','1h40',[]),

  // May 15
  s('ci-i-15-fatherland-0845','Fatherland','','Pawel Pawlikowski','reprise','CI-I',15,'8:45','1h22',[]),
  s('ci-a-15-woman-0845','La Vie d\'une Femme','A Woman\'s Life','Charline Bourgeois-Tacquet','reprise','CI-A',15,'8:45','1h38',[]),
  s('ci-x-15-match-0915','The Match','','Juan Cabral & Santiago Franco','reprise','CI-X',15,'9:15','1h31',[]),
  s('ci-i-15-paralleles-1045','Histoires Parallèles','Parallel Tales','Asghar Farhadi','reprise','CI-I',15,'10:45','2h20',[]),
  s('ci-a-15-nagi-1100','Nagi Notes','','Fukada Koji','reprise','CI-A',15,'11:00','1h50',[]),
  s('ci-x-15-ceniza-1115','Ceniza en la Boca','','Diego Luna','reprise','CI-X',15,'11:15','1h42',[]),
  s('ci-x-15-miasma-1315','Teenage Sex and Death at Camp Miasma','','Jane Schoenbrun','reprise','CI-A',15,'13:15','1h46',[]),
  s('ci-a-15-tangles-1330','Tangles','','Leah Nelson','reprise','CI-X',15,'13:30','1h42',[]),
  s('ci-3-15-sanguine-1345','Sanguine','','Marion Le Corroller','reprise','CI-I',15,'13:45','1h43',[]),
  s('ci-a-15-quelquesmots-1545','Quelques Mots d\'Amour','','Rudi Rosenberg','reprise','CI-A',15,'15:45','1h35',[]),
  s('ci-x-15-deshielo-1545b','El Deshielo','The Meltdown','Manuela Martelli','reprise','CI-X',15,'15:45','1h48',[]),
  s('ci-i-15-madeleine-1600','Marie Madeleine','','Géssica Géneus','reprise','CI-I',15,'16:00','1h43',[]),

  // May 16
  s('ci-i-16-gentle-0845','Gentle Monster','','Marie Kreutzer','reprise','CI-I',16,'8:45','1h54',[]),
  s('ci-a-16-fatherland-0845','Fatherland','','Pawel Pawlikowski','reprise','CI-A',16,'8:45','1h22',[]),
  s('ci-x-16-congoboy-0915','Congo Boy','','Rafiki Fariala','reprise','CI-3',16,'9:15','1h35',[]),
  s('ci-3-16-cantona-0915','Cantona','','David Tryhorn & Ben Nicholas','reprise','CI-X',16,'9:15','1h55',[]),
  s('ci-i-16-paralleles-1115','Histoires Parallèles','Parallel Tales','Asghar Farhadi','reprise','CI-A',16,'11:15','2h20',[]),
  s('ci-3-16-gunche-1130','Gun-Che','Colony','Yeon Sang-Ho','reprise','CI-I',16,'11:30','2h03',[]),
  s('ci-a-16-karma-1130','Karma','','Guillaume Canet','reprise','CI-3',16,'11:30','2h29',[]),
  s('ci-x-16-lennon-1145','John Lennon: The Last Interview','','Steven Soderbergh','reprise','CI-X',16,'11:45','1h40',[]),
  s('ci-a-16-situpenses-1400','Si tu Penses Bien','Think Good','Géraldine Nakache','reprise','CI-A',16,'14:00','1h34',[]),
  s('ci-x-16-quelquesmots-1400','Quelques Mots d\'Amour','','Rudi Rosenberg','reprise','CI-X',16,'14:00','1h35',[]),
  s('ci-a-16-soudain-1430','Soudain','All of a Sudden','Hamaguchi Ryusuke','reprise','CI-I',16,'14:30','3h16',[]),
  s('ci-3-16-clubkid-1430','Club Kid','','Jordan Firstman','reprise','CI-3',16,'14:30','2h06',[]),
  s('ci-x-16-deshielo-1600','El Deshielo','The Meltdown','Manuela Martelli','reprise','CI-X',16,'16:00','1h48',[]),
  s('ci-a-16-sanguine-1600','Sanguine','','Marion Le Corroller','reprise','CI-A',16,'16:00','1h43',[]),
  s('ci-x-16-miasma-1750','Teenage Sex and Death at Camp Miasma','','Jane Schoenbrun','reprise','CI-3',16,'17:15','1h46',[]),
  s('ci-3-16-propeller-1815','Propeller One-Way Night Coach','','John Travolta','reprise','CI-3',16,'18:15','1h01',[]),
  s('ci-a-16-woman-1815','La Vie d\'une Femme','A Woman\'s Life','Charline Bourgeois-Tacquet','reprise','CI-X',16,'18:15','1h38',[]),
  s('ci-i-16-nagi-1815','Nagi Notes','','Fukada Koji','reprise','CI-A',16,'18:15','1h50',[]),

  // May 17 (Reprise)
  s('ci-i-17-sheep-0845','Sheep in the Box','','Koreeda Hirokazu','reprise','CI-I',17,'8:45','2h06',[]),
  s('ci-a-17-gentle-0845','Gentle Monster','','Marie Kreutzer','reprise','CI-A',17,'8:45','1h54',[]),
  s('ci-x-17-memoirefille-0915','Mémoire de Fille','A Girl\'s Story','Judith Godréche','reprise','CI-3',17,'9:15','1h57',[]),
  s('ci-x-17-rehearsals-for-915','Rehearsals for a Revolution','','Pegah Ahangarani','reprise','CI-X',17,'9:15','1h35',[]),
  s('ci-a-17-soudain-1115','Soudain','All of a Sudden','Hamaguchi Ryusuke','reprise','CI-A',17,'11:15','3h16',[]),
  s('ci-3-17-siemsoy-1130','Siempre Soy Tu Animal Materno','Forever Your Maternal Animal','Valentina Maurel','reprise','CI-3',17,'11:30','1h40',[]),
  s('ci-x-17-les-matins-merv-1130','Les Matins Merveilleux','','Avril Besson','reprise','CI-X',17,'11:30','1h27',[]),
  s('ci-x-17-elsquerido-1145','El Ser Querido','The Beloved','Rodrigo Sorogoyen','reprise','CI-I',17,'11:45','2h15',[]),
  s('ci-3-17-congoboy-1330','Congo Boy','','Rafiki Fariala','reprise','CI-X',17,'13:30','1h35',[]),
  s('ci-i-17-fullphil-1235','Full Phil','','Quentin Dupieux','reprise','CI-3',17,'14:15','1h18',[]),
  s('ci-x-17-papertiger-1430','Paper Tiger','','James Gray','reprise','CI-I',17,'14:30','1h55',[]),
  s('ci-a-17-heimsuchung-1435','Heimsuchung','Visitation','Volker Schlöndorff','reprise','CI-A',17,'15:00','1h58',[]),
  s('ci-i-17-fatherland-1100','Fatherland','','Pawel Pawlikowski','reprise','CI-X',17,'15:30','1h22',[]),
  s('ci-3-17-clubkid-1615','Club Kid','','Jordan Firstman','reprise','CI-3',17,'16:15','2h06',[]),
  s('ci-a-17-karma-1700','Karma','','Guillaume Canet','reprise','CI-I',17,'17:00','2h29',[]),
  s('ci-x-17-paralleles-1715','Histoires Parallèles','Parallel Tales','Asghar Farhadi','reprise','CI-X',17,'17:15','2h20',[]),
  s('ci-i-17-gunche-1400','Gun-Che','Colony','Yeon Sang-Ho','reprise','CI-A',17,'17:30','2h03',[]),

  // May 18 (Reprise)
  s('ci-i-18-moulin-0845','Moulin','','László Nemes','reprise','CI-I',18,'8:45','2h10',[]),
  s('ci-a-18-sheep-0845','Sheep in the Box','','Koreeda Hirokazu','reprise','CI-A',18,'8:45','2h06',[]),
  s('ci-x-18-memoirefille-0915','Mémoire de Fille','A Girl\'s Story','Judith Godréche','reprise','CI-X',18,'9:15','1h57',[]),
  s('ci-a-18-alllovers-1100','All the Lovers in the Night','','Sode Yukiko','reprise','CI-3',18,'9:15','2h19',[]),
  s('ci-x-18-elsquerido-1130','El Ser Querido','The Beloved','Rodrigo Sorogoyen','reprise','CI-A',18,'11:30','2h15',[]),
  s('ci-i-18-garance-1145','Garance','','Jeanne Herry','reprise','CI-I',18,'11:45','2h',[]),
  s('ci-x-18-siempre-soy-tu-1145','Siempre Soy Tu Animal Materno','Forever Your Maternal Animal','Valentina Maurel','reprise','CI-X',18,'11:45','1h40',[]),
  s('ci-i-18-illbegone-1350','I\'ll Be Gone in June','','Katharina Rivilis','reprise','CI-3',18,'12:00','2h05',[]),
  s('ci-x-18-avedon-1420','Avedon','','Ron Howard','reprise','CI-X',18,'14:00','1h44',[]),
  s('ci-a-18-hope-1430','Hope','','Na Hong-Jin','reprise','CI-I',18,'14:30','2h40',[]),
  s('ci-3-18-papertiger-1430','Paper Tiger','','James Gray','reprise','CI-A',18,'14:30','1h55',[]),
  s('ci-i-18-troisieme-1700','La Troisième Nuit','When the Night Falls','Daniel Auteuil','reprise','CI-3',18,'14:45','1h40',[]),
  s('ci-a-18-fullphil-1715','Full Phil','','Quentin Dupieux','reprise','CI-A',18,'17:00','1h18',[]),
  s('ci-3-18-gentle-1715','Gentle Monster','','Marie Kreutzer','reprise','CI-3',18,'17:15','1h54',[]),
  s('ci-x-18-jimqueen-1645','Jim Queen','','Marco Nguyen & Nicolas Athané','reprise','CI-I',18,'17:45','1h25',[]),

  // May 19 (Reprise)
  s('ci-i-19-inconnue-0845','L\'Inconnue','The Unknown','Arthur Harari','reprise','CI-I',19,'8:45','2h19',[]),
  s('ci-a-19-moulin-0845','Moulin','','László Nemes','reprise','CI-A',19,'8:45','2h10',[]),
  s('ci-3-19-aqui-0915','Aqui','','Tiago Guedes','reprise','CI-3',19,'9:15','3h23',[]),
  s('ci-x-19-alllovers-0915','All the Lovers in the Night','','Sode Yukiko','reprise','CI-X',19,'9:15','2h19',[]),
  s('ci-a-19-garance-1130','Garance','','Jeanne Herry','reprise','CI-A',19,'11:30','2h',[]),
  s('ci-i-19-fjord-1145','Fjord','','Cristian Mungiu','reprise','CI-I',19,'11:45','2h26',[]),
  s('ci-x-19-garance-1145','Garance','','Jeanne Herry','reprise','CI-X',19,'11:45','2h',[]),
  s('ci-a-19-marieclaure-1100','L\'Affaire Marie-Claire','Women on Trial','Lauriane Escaffre & Yvo Muller','reprise','CI-X',19,'12:00','1h42',[]),
  s('ci-3-19-everytime-1315','Everytime','','Sandra Wollner','reprise','CI-3',19,'13:15','2h01',[]),
  s('ci-a-19-hope-1400','Hope','','Na Hong-Jin','reprise','CI-A',19,'14:00','2h40',[]),
  s('ci-i-19-illbegone-1415','I\'ll Be Gone in June','','Katharina Rivilis','reprise','CI-X',19,'14:15','2h05',[]),
  s('ci-i-19-privateehell-1625','Her Private Hell','','Nicolas Winding Refn','reprise','CI-I',19,'16:45','1h49',[]),
  s('ci-x-19-masdulce-1645','La Más Dulce','Strawberries','Laïla Marrakchi','reprise','CI-3',19,'15:45','1h41',[]),
  s('ci-3-19-jimqueen-1715','Jim Queen','','Marco Nguyen & Nicolas Athané','reprise','CI-X',19,'16:45','1h25',[]),
  s('ci-x-19-papertiger-1400','Paper Tiger','','James Gray','reprise','CI-I',19,'17:15','1h55',[]),
  s('ci-a-19-sheep-1715b','Sheep in the Box','','Koreeda Hirokazu','reprise','CI-A',19,'17:15','2h06',[]),
  s('ci-3-19-elsquerido-1845','El Ser Querido','The Beloved','Rodrigo Sorogoyen','reprise','CI-3',19,'18:00','2h15',[]),

  // May 20 (Reprise) — in PDF order
  s('ci-i-20-minotaur-0845','Minotaur','','Andreï Zviaguintsev','reprise','CI-I',20,'8:45','2h45',[]),
  s('ci-a-20-inconnue-0845','L\'Inconnue','The Unknown','Arthur Harari','reprise','CI-A',20,'8:45','2h19',[]),
  s('ci-x-20-everytime-0915','Everytime','','Sandra Wollner','reprise','CI-X',20,'9:15','2h01',[]),
  s('ci-3-20-benimana-0915','Ben\'imana','','Marie-Clémentine Dusabejambo','reprise','CI-3',20,'9:15','1h36',[]),
  s('ci-3-20-corset-1130','Le Corset','Iron Boy','Louis Clichy','reprise','CI-3',20,'11:30','1h29',[]),
  s('ci-i-20-navidad-1145','Amarga Navidad','Bitter Christmas','Pedro Almodóvar','reprise','CI-I',20,'11:45','1h52',[]),
  s('ci-a-20-fjord-1145','Fjord','','Cristian Mungiu','reprise','CI-A',20,'11:45','2h26',[]),
  s('ci-x-20-masdulce-1150','La Más Dulce','The Sweetest One','Laïla Marrakchi','reprise','CI-X',20,'11:50','1h41',[]),
  s('ci-3-20-moulin-1400','Moulin','','László Nemes','reprise','CI-3',20,'14:00','2h10',[]),
  s('ci-i-20-diamond-1415','Diamond','','Andy Garcia','reprise','CI-I',20,'14:15','1h58',[]),
  s('ci-x-20-lucylost-1415','Lucy Lost','','Olivier Clert','reprise','CI-X',20,'14:15','1h25',[]),
  s('ci-a-20-triangle-1445','Le Triangle d\'Or','','Hélène Rosselet-Ruiz','reprise','CI-A',20,'14:45','1h30',[]),
  s('ci-a-20-privateehell-1630','Her Private Hell','','Nicolas Winding Refn','reprise','CI-A',20,'16:30','1h49',[]),
  s('ci-3-20-kokurojo-1645','Kokurojo','The Samurai and the Prisoner','Kurosawa Kiyoshi','reprise','CI-3',20,'16:45','2h27',[]),
  s('ci-i-20-garance-1700','Garance','','Jeanne Herry','reprise','CI-I',20,'17:00','2h',[]),
  s('ci-x-20-garance-1700b','Garance','','Jeanne Herry','reprise','CI-X',20,'17:00','2h',[]),
  s('ci-a-20-hope-1845','Hope','','Na Hong-Jin','reprise','CI-A',20,'18:45','2h40',[]),

  // May 21 (Reprise) — in PDF order
  s('ci-i-21-manlove-0845','The Man I Love','','Ira Sachs','reprise','CI-I',21,'8:45','1h35',[]),
  s('ci-a-21-minotaur-0845','Minotaur','','Andreï Zviaguintsev','reprise','CI-A',21,'8:45','2h45',[]),
  s('ci-x-21-romaelastica-0915','Roma Elastica','','Bertrand Mandico','reprise','CI-X',21,'9:15','1h47',[]),
  s('ci-3-21-elephants-0915','Elephants in the Fog','','Abinash Bikram Shah','reprise','CI-3',21,'9:15','1h43',[]),
  s('ci-i-21-notresalut-1100','Notre Salut','','Emmanuel Marre','reprise','CI-I',21,'11:00','2h35',[]),
  s('ci-3-21-corset-1130','Le Corset','Iron Boy','Louis Clichy','reprise','CI-3',21,'11:30','1h29',[]),
  s('ci-a-21-elephants-1145','Elephants in the Fog','','Abinash Bikram Shah','reprise','CI-A',21,'11:45','1h43',[]),
  s('ci-x-21-navidad-1145','Amarga Navidad','Bitter Christmas','Pedro Almodóvar','reprise','CI-X',21,'11:45','1h52',[]),
  s('ci-x-21-survivants-1345','Les Survivants du Che','','Christophe Dimitri Reveille','reprise','CI-X',21,'13:45','1h38',[]),
  s('ci-a-21-diamond-1415','Diamond','','Andy Garcia','reprise','CI-A',21,'14:15','1h58',[]),
  s('ci-i-21-bataille-1415','La Bataille de Gaulle: L\'Âge de Fer','','Antonin Baudry','reprise','CI-I',21,'14:15','2h40',[]),
  s('ci-3-21-yesterday-1415','Yesterday the Eye Didn\'t Sleep','','Rakan Mayasi','reprise','CI-3',21,'14:15','1h40',[]),
  s('ci-x-21-titanic-1600','Titanic Océan','','Konstantina Kotzamani','reprise','CI-X',21,'16:00','2h10',[]),
  s('ci-3-21-inconnue-1630','L\'Inconnue','The Unknown','Arthur Harari','reprise','CI-3',21,'16:30','2h19',[]),
  s('ci-i-21-mariage-1715','Mariage au Goût d\'Orange','','Christophe Honoré','reprise','CI-I',21,'17:15','1h55',[]),
  s('ci-a-21-fjord-1845','Fjord','','Cristian Mungiu','reprise','CI-A',21,'18:45','2h26',[]),

  // May 22 (Reprise) — in PDF order
  s('ci-i-22-coward-0845','Coward','','Lukas Dhont','reprise','CI-I',22,'8:45','2h',[]),
  s('ci-a-22-manlove-0845','The Man I Love','','Ira Sachs','reprise','CI-A',22,'8:45','1h35',[]),
  s('ci-x-22-elephants-0915','Elephants in the Fog','','Abinash Bikram Shah','reprise','CI-X',22,'9:15','1h43',[]),
  s('ci-3-22-ula-0915','Ula','Ulya','Viesturs Kairiss','reprise','CI-3',22,'9:15','1h42',[]),
  s('ci-i-22-notresalut-1100','Notre Salut','','Emmanuel Marre','reprise','CI-I',22,'11:00','2h35',[]),
  s('ci-a-22-minotaur-1100','Minotaur','','Andreï Zviaguintsev','reprise','CI-A',22,'11:00','2h45',[]),
  s('ci-3-22-victorian-1130','Victorian Psycho','','Zachary Wigon','reprise','CI-3',22,'11:30','1h30',[]),
  s('ci-x-22-bolenegra-1145','La Bola Negra','','Javier Calvo & Javier Ambrossi','reprise','CI-X',22,'11:45','2h45',[]),
  s('ci-3-22-yesterday-1345','Yesterday the Eye Didn\'t Sleep','','Rakan Mayasi','reprise','CI-3',22,'13:45','1h40',[]),
  s('ci-i-22-bolenegra-1415','La Bola Negra','','Javier Calvo & Javier Ambrossi','reprise','CI-I',22,'14:15','2h45',[]),
  s('ci-a-22-endofit-1515','The End of It','','Maria Martínez Bayona','reprise','CI-A',22,'15:15','1h42',[]),
  s('ci-x-22-navidad-1630','Amarga Navidad','Bitter Christmas','Pedro Almodóvar','reprise','CI-X',22,'16:30','1h52',[]),
  s('ci-3-22-navidad-1630b','Amarga Navidad','Bitter Christmas','Pedro Almodóvar','reprise','CI-3',22,'16:30','1h52',[]),
  s('ci-a-22-vesna-1705','Vesna','','Rostislav Kirpičenko','reprise','CI-A',22,'17:05','1h33',[]),

  // May 23 (Reprise) — in PDF order
  s('ci-i-23-nuit-0845','Histoires de la Nuit','The Birthday Party','Léa Mysius','reprise','CI-I',23,'8:45','1h54',[]),
  s('ci-a-23-coward-0845','Coward','','Lukas Dhont','reprise','CI-A',23,'8:45','2h',[]),
  s('ci-x-23-ula-0915','Ula','Ulya','Viesturs Kairiss','reprise','CI-X',23,'9:15','1h42',[]),
  s('ci-3-23-manlove-0915','The Man I Love','','Ira Sachs','reprise','CI-3',23,'9:15','1h35',[]),
  s('ci-3-23-victorian-1130','Victorian Psycho','','Zachary Wigon','reprise','CI-3',23,'11:30','1h30',[]),
  s('ci-x-23-bolenegra-1130','La Bola Negra','','Javier Calvo & Javier Ambrossi','reprise','CI-X',23,'11:30','2h35',[]),
  s('ci-i-23-notresalut-1145','Notre Salut','','Emmanuel Marre','reprise','CI-I',23,'11:45','2h35',[]),
  s('ci-a-23-getraumt-1145','Das Geträumte Abenteuer','The Dreamed Adventure','Valeska Grisebach','reprise','CI-A',23,'11:45','2h47',[]),
  s('ci-3-23-endofit-1345','The End of It','','Maria Martínez Bayona','reprise','CI-3',23,'13:45','1h42',[]),
  s('ci-a-23-coward-1430','Coward','','Lukas Dhont','reprise','CI-A',23,'14:30','2h',[]),
  s('ci-i-23-objetdelit-1500','L\'Objet du Délit','Crescendo','Agnès Jaoui','reprise','CI-I',23,'15:00','2h43',[]),
  s('ci-x-23-endofit-1530','The End of It','','Maria Martínez Bayona','reprise','CI-X',23,'15:30','1h42',[]),
  s('ci-3-23-navidad-1530','Amarga Navidad','Bitter Christmas','Pedro Almodóvar','reprise','CI-3',23,'15:30','1h52',[]),

  // ─── CINÉMA DE LA PLAGE ───────────────────────────────────────────────────
  s('plage-13-topgun-2130','Top Gun','','Tony Scott','plage','PLAGE',13,'21:30','1h49',[],{isFree:true}),
  s('plage-14-superexpress-2130','Super Express 103 (The Bullet Train)','','Various','plage','PLAGE',14,'21:30','1h49',[],{isFree:true}),
  s('plage-15-shinkansen-2130','Shinkansen Daibakuha','','Junya Sato','plage','PLAGE',15,'21:30','2h',[],{isFree:true}),
  s('plage-16-moliere-2130','Molière','','Ariane Mnouchkine','plage','PLAGE',16,'21:30','2h10',[],{isFree:true}),
  s('plage-17-caprices-2130','Les Caprices de l\'Enfant Roi','Molière, Cyrano and the Young King','Michel Leclerc','plage','PLAGE',17,'21:30','1h58',[],{isFree:true}),
  s('plage-18-unhomme-2130','Un Homme et une Femme','A Man and a Woman','Claude Lelouch','plage','PLAGE',18,'21:30','1h42',[],{isFree:true}),
  s('plage-19-leshommes-2130','Les Hommes du Président','All the President\'s Men','Alan J. Pakula','plage','PLAGE',19,'21:30','2h18',[],{isFree:true}),
  s('plage-20-vivamaria-2130','Viva Maria!','','Louis Malle','plage','PLAGE',20,'21:30','2h',[],{isFree:true}),
  s('plage-21-landoffreedom-2130','Land and Freedom','','Ken Loach','plage','PLAGE',21,'21:30','1h49',[],{isFree:true}),
  s('plage-22-criacuervos-2130','Cría Cuervos','','Carlos Saura','plage','PLAGE',22,'21:30','1h49',[],{isFree:true}),
  s('plage-23-cesmessieurs-2130','Ces Messieurs Dames','Signore & Signori','Pietro Germi','plage','PLAGE',23,'21:30','1h42',[],{isFree:true}),

]
// Section metadata
window.SECTIONS = {
  'competition':         { label: 'Compétition',           color: '#C9A84C', bg: '#1a1200' },
  'hors-competition':    { label: 'Hors Compétition',      color: '#E8D5A3', bg: '#1a1800' },
  'cannes-premiere':     { label: 'Cannes Première',       color: '#D4AF70', bg: '#1a1500' },
  'seance-speciale':     { label: 'Séance Spéciale',       color: '#B8860B', bg: '#1a1000' },
  'un-certain-regard':   { label: 'Un Certain Regard',     color: '#E8A0B4', bg: '#1a0010' },
  'cannes-classics':     { label: 'Cannes Classics',       color: '#9B59B6', bg: '#0d0020' },
  'cinema-de-demain':    { label: 'Cinéma de Demain',      color: '#3498DB', bg: '#00101a' },
  'seances-du-lendemain':{ label: 'Séances du Lendemain',  color: '#85C1E9', bg: '#001018' },
  'quinzaine':           { label: 'Quinzaine des Cinéastes',color: '#E74C3C', bg: '#1a0000' },
  'semaine-critique':    { label: 'Semaine de la Critique', color: '#F39C12', bg: '#1a0e00' },
  'acid':                { label: 'ACID',                  color: '#27AE60', bg: '#001a0a' },
  'reprise':             { label: 'Reprise de la Sélection',color: '#95A5A6', bg: '#0a0a0a' },
  'plage':               { label: 'Cinéma de la Plage',    color: '#1ABC9C', bg: '#001a15' },
};

window.FESTIVAL_DAYS = Array.from({length: 12}, (_, i) => {
  const d = new Date(2026, 4, 12 + i); // May is month 4 (0-indexed)
  return {
    date: `2026-05-${String(12 + i).padStart(2, '0')}`,
    label: `${12 + i} May`,
    dayName: ['Tue','Wed','Thu','Fri','Sat','Sun','Mon','Tue','Wed','Thu','Fri','Sat'][i]
  };
});
