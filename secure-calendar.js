/* Plaintext family calendar. Canonical editable source; no password or encryption required. */
let PEOPLE={
  "penelope":{"name":"Penelope","color":"#846BB8"},
  "timothy":{"name":"Timothy","color":"#4F88BD"},
  "josie":{"name":"Josie","color":"#F28C28"},
  "chad":{"name":"Chad","color":"#4F9478"},
  "zanthia":{"name":"Zanthia","color":"#B46A8A"},
  "parent":{"name":"Parent","color":"#7C8794"},
  "family":{"name":"Family","color":"#6786A8"},
  "alemannia":{"name":"Alemannia","color":"#F4D03F"}
};
let ONCE=[
  {"date":"2026-09-05","title":"Quentin’s birthday party","person":"timothy","start":"12:00"},
  {"date":"2026-09-08","title":"Ballet","person":"penelope","start":"15:45","end":"16:30","note":"Take ballet things to school · Change into ballet clothes at OGS"},
  {"date":"2026-09-09","title":"Gogo leaves","person":"family","timeLabel":"Morning · Time TBC","responsible":"Chad","linkedTitle":"Gogo · Airport"},
  {"date":"2026-09-12","title":"Alemannia vs Jahn Regensburg","person":"alemannia","start":"16:30"},
  {"date":"2026-09-14","title":"Pick up Penelope for swimming","person":"chad","start":"15:00"},
  {"date":"2026-09-14","title":"Arrive for swimming (15 minutes early)","person":"chad","start":"16:00","end":"16:15"},
  {"date":"2026-09-15","title":"Pick up at Moss","person":"parent","start":"17:45"},
  {"date":"2026-09-15","title":"Parents’ evening","person":"josie","start":"19:30"},
  {"date":"2026-09-17","title":"Head Acoustics birthday party","person":"josie","timeLabel":"Until late"},
  {"date":"2026-09-19","title":"Alemannia vs Fortuna Düsseldorf","person":"alemannia","start":"14:00"},
  {"date":"2026-09-21","title":"Kindergarten-Mitgliederversammlung","person":"josie","start":"19:00","location":"Summerlong"},
  {"date":"2026-09-23","title":"OGS Elternabend","person":"josie","start":"19:00"},
  {"date":"2026-09-30","title":"No school or OGS","person":"penelope"},
  {"date":"2026-09-30","title":"Pick up the kids","person":"chad"},
  {"date":"2026-10-03","title":"Apple picking in Wurmtal – KGS school","person":"penelope","timeLabel":"09:45","note":"Meet at 09:45, Wiesenstraße"},
  {"date":"2026-10-07","title":"Kita VL & Elternabend","person":"josie","timeLabel":"18:00"},
  {"date":"2026-10-19","title":"Pick up Penelope","person":"chad","start":"15:00"},
  {"date":"2026-10-20","title":"Pick up Penelope","person":"chad","start":"15:00"},
  {"date":"2026-10-21","title":"Pick up Penelope","person":"chad","start":"15:00"},
  {"date":"2026-10-22","title":"Pick up Penelope","person":"chad","start":"15:00"},
  {"date":"2026-10-23","title":"Pick up Penelope","person":"chad","start":"15:00"},
  {"date":"2026-11-13","title":"Kita St. Martin’s Umzug","person":"timothy","timeLabel":"17:45"},
  {"date":"2026-10-03","title":"Amsterdam","person":"chad","timeLabel":"Afternoon departure","note":"Away in Amsterdam Saturday and Sunday. Expected back Sunday afternoon."},
  {"date":"2026-10-04","title":"Amsterdam – return home","person":"chad","timeLabel":"Expected back in the afternoon"},
  {"date":"2026-10-13","title":"Finn’s birthday party","person":"timothy","start":"15:00","end":"18:00","location":"Ballorig"},
  {"date":"2026-10-24","title":"Luana’s birthday party","person":"penelope","start":"13:00","end":"16:00"},
  {"date":"2026-11-24","title":"Vereinstreffen KGS","person":"josie","timeLabel":"19:00","note":"Treffen im Musikraum"},
  {"date":"2026-10-01","title":"Playdate with Milan","person":"timothy","timeLabel":"15:30"},
  {"date":"2026-09-30","title":"No school or OGS","person":"penelope"},
  {"date":"2026-08-31","title":"Planungstag OGS Team – OGS geschlossen","person":"penelope"},
  {"date":"2026-09-01","title":"Gemeinsamer Planungstag ganze Schule – OGS geschlossen","person":"penelope"},
  {"date":"2026-09-02","title":"1. Schultag – Unterrichtsende für alle 11:45 Uhr","person":"penelope","timeLabel":"11:45"},
  {"date":"2026-09-03","title":"Einschulung","person":"penelope"},
  {"date":"2026-09-08","title":"Regelbesprechung in den Gruppen","person":"penelope"},
  {"date":"2026-09-30","title":"Pädagogischer Ganztag – kein Unterricht + OGS geschlossen","person":"penelope"},
  {"date":"2026-10-08","title":"Mitgliederversammlung des Fördervereins der OGS Sonnenschein e. V.","person":"penelope"},
  {"date":"2026-10-13","title":"OGS Sprecher Wahl","person":"penelope","timeLabel":"16:00","note":"Kinder sollen bis 16:00 Uhr in der OGS bleiben"},
  {"date":"2026-10-19","title":"Herbstferien – OGS geöffnet","person":"penelope","note":"Ferienbetreuung"},
  {"date":"2026-10-31","title":"Herbstferien – letzter Ferientag / OGS Ferienbetreuung","person":"penelope"},
  {"date":"2026-11-06","title":"Gemeinschaftsabend","person":"penelope"},
  {"date":"2026-11-09","title":"Martinszug","person":"penelope","timeLabel":"18:00"},
  {"date":"2026-11-11","title":"St. Martinsfeier in den Gruppen","person":"penelope"},
  {"date":"2026-12-04","title":"Adventfeier OGS mit Kindern und Eltern","person":"penelope","note":"SAVE THE DATE"},
  {"date":"2026-12-07","title":"Pädagogischer Ganztag – kein Unterricht + OGS geschlossen","person":"penelope"},
  {"date":"2026-12-22","title":"Letzter Schultag vor den Ferien – OGS normal geöffnet","person":"penelope"},
  {"date":"2026-12-23","title":"Weihnachtsferien – OGS geschlossen","person":"penelope","note":"23.12.2026–06.01.2027"},
  {"date":"2027-01-06","title":"Weihnachtsferien – letzter Ferientag / OGS geschlossen","person":"penelope"},
  {"date":"2027-01-11","title":"Reinigungsvormittag OGS Team","person":"penelope","timeLabel":"08:00","note":"Bis 11:45 Uhr"},
  {"date":"2027-02-04","title":"Karneval Altweiber – OGS geöffnet","person":"penelope","timeLabel":"11:11","note":"OGS von 11:11 bis 16:00 Uhr"},
  {"date":"2027-02-05","title":"Karnevalsfreitag – Schule + OGS geschlossen","person":"penelope"},
  {"date":"2027-02-08","title":"Rosenmontag – Schule + OGS geschlossen","person":"penelope"},
  {"date":"2027-02-09","title":"Karnevalsdienstag – normale Schule + OGS","person":"penelope"},
  {"date":"2027-02-18","title":"Karneval Karnevalsparty in der OGS Sonnenschein","person":"penelope","note":"Infos folgen"},
  {"date":"2027-02-22","title":"Bezugserziehertreffen","person":"penelope"},
  {"date":"2027-03-22","title":"Osterferien – OGS geöffnet","person":"penelope","note":"Ferienbetreuung bis 03.04.2027"},
  {"date":"2027-04-03","title":"Osterferien – letzter Ferientag / OGS Ferienbetreuung","person":"penelope"},
  {"date":"2027-04-12","title":"AG Start","person":"penelope"},
  {"date":"2027-04-24","title":"Schulfest","person":"penelope"},
  {"date":"2027-05-06","title":"Feiertag Christi Himmelfahrt – OGS geschlossen","person":"penelope"},
  {"date":"2027-05-07","title":"Beweglicher Ferientag – Schule + OGS geschlossen","person":"penelope"},
  {"date":"2027-05-17","title":"Feiertag Pfingstmontag – OGS geschlossen","person":"penelope"},
  {"date":"2027-05-18","title":"Beweglicher Ferientag – Schule + OGS geschlossen","person":"penelope"},
  {"date":"2027-05-21","title":"Kennenlernen mit den neuen Erstis","person":"penelope"},
  {"date":"2027-05-27","title":"Feiertag Fronleichnam – Schule + OGS geschlossen","person":"penelope"},
  {"date":"2027-05-28","title":"Beweglicher Ferientag – Schule + OGS geschlossen","person":"penelope"},
  {"date":"2027-05-31","title":"Pädagogischer Ganztag (Teamtag) – Schule + OGS geschlossen","person":"penelope"},
  {"date":"2027-07-09","title":"Abschluss der 4. Klässler","person":"penelope"},
  {"date":"2027-07-15","title":"Letzter OGS Tag mit Abschlussfeier und Aufführung","person":"penelope"},
  {"date":"2027-07-16","title":"Letzter Schultag – OGS geschlossen","person":"penelope"},
  {"date":"2027-08-09","title":"OGS wieder geöffnet – Ferienbetreuung","person":"penelope","timeLabel":"08:00","note":"08:00–16:00 (15:00)"},
  {"date":"2027-01-01","title":"Feiertag – Kita geschlossen","person":"timothy"},
  {"date":"2027-01-04","title":"Teamtag – Kita geschlossen","person":"timothy"},
  {"date":"2027-02-04","title":"Fettdonnerstag – Kita ab 13:00 Uhr geschlossen","person":"timothy","timeLabel":"11:00","note":"Feier ab 11:00 Uhr mit Eltern"},
  {"date":"2027-02-05","title":"Brückentag – Kita geöffnet für angemeldete Kinder","person":"timothy","timeLabel":"07:30","note":"Bis 15:00 Uhr"},
  {"date":"2027-02-08","title":"Rosenmontag – Kita geschlossen","person":"timothy"},
  {"date":"2027-03-17","title":"Elternsprechtag – Kita geschlossen","person":"timothy"},
  {"date":"2027-03-25","title":"Osterfrühstück und Spaziergang mit Eltern","person":"timothy"},
  {"date":"2027-03-26","title":"Karfreitag – Kita geschlossen","person":"timothy"},
  {"date":"2027-03-29","title":"Ostermontag – Kita geschlossen","person":"timothy"},
  {"date":"2027-05-06","title":"Christi Himmelfahrt – Kita geschlossen","person":"timothy"},
  {"date":"2027-05-07","title":"Brückentag – Kita geöffnet für angemeldete Kinder","person":"timothy","timeLabel":"07:30","note":"Bis 15:00 Uhr"},
  {"date":"2027-05-17","title":"Pfingstmontag – Kita geschlossen","person":"timothy"},
  {"date":"2027-05-27","title":"Fronleichnam – Kita geschlossen","person":"timothy"},
  {"date":"2027-05-28","title":"Brückentag – Kita geöffnet für angemeldete Kinder","person":"timothy","timeLabel":"07:30","note":"Bis 15:00 Uhr"},
  {"date":"2027-07-02","title":"Abschlussfahrt der alten Hasen","person":"timothy"},
  {"date":"2027-07-09","title":"Abschlussfeier der alten Hasen","person":"timothy","timeLabel":"17:00","note":"Für Kinder mit Eltern"},
  {"date":"2027-07-23","title":"Betriebsausflug – Kita geschlossen","person":"timothy"},
  {"date":"2027-08-06","title":"Teamtag – Kita geschlossen","person":"timothy"},
  {"date":"2027-08-09","title":"Sommerferien","person":"timothy","note":"09.08.–27.08.2027"},
  {"date":"2027-08-27","title":"Sommerferien – letzter Ferientag","person":"timothy"},
  {"date":"2027-08-30","title":"Erster Kitatag nach den Ferien","person":"timothy"},
  {"date":"2027-09-15","title":"Elternabend für alle Eltern","person":"timothy","start":"19:00"},
  {"date":"2027-10-01","title":"Lagerfeuerfest Abenteuerspielplatz","person":"timothy","start":"17:00","note":"17:00–19:00 Uhr, wenn Platz verfügbar"},
  {"date":"2027-11-01","title":"Feiertag – Kita geschlossen","person":"timothy"},
  {"date":"2027-11-12","title":"St. Martin – Treffen Parkplatz Bergerstraße","person":"timothy","start":"18:00"},
  {"date":"2027-12-24","title":"Weihnachtsferien","person":"timothy","note":"24.12.–31.12.2027"},
  {"date":"2027-12-31","title":"Weihnachtsferien – letzter Ferientag","person":"timothy"},
  {"date":"2026-10-10","title":"Parent-teacher meeting","person":"penelope","start":"09:45","location":"School"},
  {"date":"2026-10-06","title":"Tilda play date after ballet","person":"penelope","start":"16:30"},
  {"date":"2026-10-12","title":"Elternsitzung OGS","person":"josie","start":"19:00"}
];
let BIRTHDAYS=[{"md":"09-09","title":"Dale’s birthday"},{"md":"09-10","title":"Grumps’s birthday"},{"md":"09-10","title":"Diane’s birthday"},{"md":"09-14","title":"Bradford’s birthday"}];
let REPEATS=[
  {"from":"2026-09-25","to":"2026-12-31","weekday":5,"title":"Pick up the kids","person":"josie"},
  {"from":"2026-09-24","to":"2026-12-31","weekday":4,"title":"Pick up the kids","person":"josie"},
  {"from":"2026-09-16","to":"2026-12-31","weekday":3,"title":"Pick up the children","person":"zanthia"},
  {"from":"2026-09-21","to":"2026-12-31","weekday":1,"title":"Pick up Penelope for swimming","person":"chad","start":"15:30","end":"16:15","excludedDates":["2026-10-19","2026-10-26"]},
  {"from":"2026-09-08","to":"2026-12-31","weekday":2,"title":"Pick up Timothy","person":"chad","start":"15:10","end":"15:30"},
  {"from":"2026-09-08","to":"2026-12-31","weekday":2,"title":"Pick up Penelope for ballet","person":"chad","start":"15:30","end":"15:45"},
  {"from":"2026-09-15","to":"2026-12-31","weekday":2,"title":"Ballet","person":"penelope","start":"15:45","end":"16:30","note":"Take ballet things to school · Change into ballet clothes at OGS"},
  {"from":"2026-09-15","to":"2026-12-31","weekday":2,"title":"Pick up Penelope from ballet","person":"josie","start":"16:30"},
  {"from":"2026-09-14","to":"2026-12-31","weekday":1,"title":"Swimming lesson","person":"penelope","start":"16:15","end":"17:00","excludedDates":["2026-10-19","2026-10-26"]},
  {"from":"2026-09-14","to":"2026-12-31","weekday":1,"title":"Pick up Penelope from swimming","person":"josie","start":"17:00","excludedDates":["2026-10-19","2026-10-26"]},
  {"from":"2026-09-21","to":"2026-12-31","weekday":1,"title":"Football","person":"timothy","start":"17:30","end":"18:30","responsible":"Chad","linkedTitle":"Timothy · Football","excludedDates":["2026-10-12"],"overrides":{"2026-10-05":{"start":"16:15","end":"17:15"}}},
  {"from":"2026-09-18","to":"2026-12-31","weekday":5,"title":"Football","person":"timothy","start":"16:30","end":"17:30","responsible":"Chad","linkedTitle":"Timothy · Football","excludedDates":["2026-10-12"],"overrides":{"2026-10-05":{"start":"16:15","end":"17:15"}}}
];
let SETTINGS={"weather":{"latitude":50.7753,"longitude":6.0839,"timezone":"Europe/Berlin","forecastDays":16},"holidays":{"2026-01-01":"Neujahr","2026-04-03":"Karfreitag","2026-04-06":"Ostermontag","2026-05-01":"Tag der Arbeit","2026-05-14":"Christi Himmelfahrt","2026-05-25":"Pfingstmontag","2026-06-04":"Fronleichnam","2026-10-03":"Tag der Deutschen Einheit","2026-11-01":"Allerheiligen","2026-12-25":"1. Weihnachtstag","2026-12-26":"2. Weihnachtstag","2027-01-01":"Neujahr","2027-03-26":"Karfreitag","2027-03-29":"Ostermontag","2027-05-01":"Tag der Arbeit","2027-05-06":"Christi Himmelfahrt","2027-05-17":"Pfingstmontag","2027-05-27":"Fronleichnam","2027-10-03":"Tag der Deutschen Einheit","2027-11-01":"Allerheiligen","2027-12-25":"1. Weihnachtstag","2027-12-26":"2. Weihnachtstag","2028-01-01":"Neujahr","2028-04-14":"Karfreitag","2028-04-17":"Ostermontag","2028-05-01":"Tag der Arbeit","2028-05-25":"Christi Himmelfahrt","2028-06-05":"Pfingstmontag","2028-06-15":"Fronleichnam","2028-10-03":"Tag der Deutschen Einheit","2028-11-01":"Allerheiligen","2028-12-25":"1. Weihnachtstag","2028-12-26":"2. Weihnachtstag","2029-01-01":"Neujahr","2029-03-30":"Karfreitag","2029-04-02":"Ostermontag","2029-05-01":"Tag der Arbeit","2029-05-10":"Christi Himmelfahrt","2029-05-21":"Pfingstmontag","2029-05-31":"Fronleichnam","2029-10-03":"Tag der Deutschen Einheit","2029-11-01":"Allerheiligen","2029-12-25":"1. Weihnachtstag","2029-12-26":"2. Weihnachtstag","2030-01-01":"Neujahr","2030-04-19":"Karfreitag","2030-04-22":"Ostermontag","2030-05-01":"Tag der Arbeit","2030-05-30":"Christi Himmelfahrt","2030-06-10":"Pfingstmontag","2030-06-20":"Fronleichnam","2030-10-03":"Tag der Deutschen Einheit","2030-11-01":"Allerheiligen","2030-12-25":"1. Weihnachtstag","2030-12-26":"2. Weihnachtstag"}};

// One-off October 2026 calendar changes.
const removeForDate=(date,predicate)=>{
  ONCE=ONCE.filter(item=>!(item.date===date&&predicate(item)));
  REPEATS=REPEATS.map(repeat=>{
    if(predicate(repeat))return {...repeat,excludedDates:[...new Set([...(repeat.excludedDates||[]),date])]};
    return repeat;
  });
};
const titleHas=(...terms)=>item=>terms.some(term=>(item.title||'').toLowerCase().includes(term));
removeForDate('2026-10-13',item=>['chad','josie'].includes(item.person)&&titleHas('pick up','drop off','pickup','dropoff')(item));
removeForDate('2026-10-13',item=>item.person==='penelope'&&titleHas('ballet')(item));
removeForDate('2026-10-27',item=>(item.person==='penelope'&&titleHas('ballet')(item))||(item.person==='josie'&&titleHas('pick up','pickup')(item)));
removeForDate('2026-10-28',item=>item.person==='zanthia'&&titleHas('pick up','pickup')(item));
removeForDate('2026-10-29',item=>item.person==='josie'&&titleHas('pick up','pickup')(item));
removeForDate('2026-10-30',item=>item.person==='josie'&&titleHas('pick up','pickup')(item));
ONCE.push({date:'2026-10-25',title:'Josie & Penelope fly to Spain',person:'family'});
ONCE.push({date:'2026-11-01',title:'Josie & Penelope return from Spain',person:'family'});
ONCE.push({date:'2026-10-19',title:'Wax',person:'josie',start:'18:00'});
async function unlockCalendar(){return true;}
const pad=n=>String(n).padStart(2,'0'),iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()),parse=s=>new Date(s+'T12:00:00'),monday=d=>{d=new Date(d);d.setHours(12,0,0,0);d.setDate(d.getDate()-((d.getDay()+6)%7));return d},mins=s=>{let[h,m]=s.split(':').map(Number);return h*60+m},dur=(a,b)=>{if(!a||!b)return'';let n=mins(b)-mins(a);return n>=60?Math.floor(n/60)+'h'+(n%60?' '+n%60+'m':''):n+'m'};
function holidayFor(date){return (SETTINGS.holidays||{})[iso(date)]||''}
function itemsFor(date){const key=iso(date),items=ONCE.filter(item=>item.date===key).map(item=>({...item}));for(const birthday of BIRTHDAYS)if(key.slice(5)===birthday.md)items.push({date:key,title:birthday.title,person:'family',birthday:true});for(const repeat of REPEATS){const {excludedDates=[],overrides={},...event}=repeat;if(date.getDay()===repeat.weekday&&date>=parse(repeat.from)&&date<=parse(repeat.to)&&!excludedDates.includes(key))items.push({...event,...(overrides[key]||{}),date:key});}return items.sort((a,b)=>(a.start||'').localeCompare(b.start||''));}
function weatherIcon(code){if(code===0)return'☀️';if(code<=2)return'🌤️';if(code===3)return'☁️';if(code===45||code===48)return'🌫️';if(code>=51&&code<=67)return'🌧️';if(code>=71&&code<=77)return'🌨️';if(code>=80&&code<=82)return'🌦️';if(code>=85&&code<=86)return'🌨️';if(code>=95)return'⛈️';return'🌡️'}
async function getWeather(){const config=SETTINGS.weather||{};const params=new URLSearchParams({latitude:config.latitude,longitude:config.longitude,daily:'weather_code,temperature_2m_max,temperature_2m_min',timezone:config.timezone||'auto',forecast_days:config.forecastDays||16});const data=await fetch('https://api.open-meteo.com/v1/forecast?'+params).then(r=>{if(!r.ok)throw new Error('weather');return r.json()});const weather={};data.daily.time.forEach((date,i)=>weather[date]={icon:weatherIcon(data.daily.weather_code[i]),high:Math.round(data.daily.temperature_2m_max[i]),low:Math.round(data.daily.temperature_2m_min[i])});return weather}
function scheduleDashboardRefresh(){const now=new Date(),next=new Date(now);next.setSeconds(0,0);next.setMinutes(0);next.setHours(now.getHours()+1);if(next.getHours()>22){next.setDate(next.getDate()+1);next.setHours(7,0,0,0)}else if(next.getHours()<7){next.setHours(7,0,0,0)}setTimeout(()=>location.reload(),Math.max(1000,next-now))}
function refreshWhenVisible(){let wasHidden=false;document.addEventListener('visibilitychange',()=>{if(document.hidden){wasHidden=true}else if(wasHidden){location.reload()}});window.addEventListener('pageshow',event=>{if(event.persisted)location.reload()})}
