!async function(a="New York",o="imperial"){const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?units=${o}&q=${a}&APPID=a4b3f65b2dbd15c2b33875e013b2dc1b`,{mode:"cors"}),t=await e.json();console.log(t)}("London");