fetch("https://ffwjecuqbynduhcuoypv.supabase.co/rest/v1/", {
  headers: { "apikey": "sb_publishable_U7RAt7Tu1-CQLTp3Ci1JKg_vGxfpYty" }
})
.then(r => r.json())
.then(data => {
  console.log("Definitions available:", Object.keys(data.definitions || {}));
  for (const key of Object.keys(data.definitions || {})) {
    console.log(key, Object.keys(data.definitions[key].properties));
  }
})
.catch(console.error);
