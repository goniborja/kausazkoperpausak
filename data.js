// ==========================================
// KAUSAZKO PERPAUSAK — DATUAK
// ==========================================

// ------------------------------------------
// FUSIOA ARIKETAK (16)
// m = menderagailua, p = perpausa, e = erantzuna,
// l = laguntza, k = errore-kategoria
// ------------------------------------------
const FUSIOA = [
  // -(e)lako (5)
  {m:'-(e)lako', p:'Saloura joango gara, hondartza _____ (eder + da).', e:'ederra delako', l:'da + -(e)lako = delako', k:'fk'},
  {m:'-(e)lako', p:'Port Aventurara joan nahi dut, montaña rusak _____ (gustatu + zaizkit).', e:'gustatzen zaizkidalako', l:'Aditz perifrastikoa: gustatzen zaizkidalako', k:'fk'},
  {m:'-(e)lako', p:'Autobusa hartu behar dugu, _____ (urrun + dago).', e:'urrun dagoelako', l:'dago + -(e)lako = dagoelako', k:'fk'},
  {m:'-(e)lako', p:'Barcelonara joango gara, Sagrada Familia _____ (ikusi nahi + dut).', e:'ikusi nahi dudalako', l:'dut + -(e)lako = dudalako', k:'fk'},
  {m:'-(e)lako', p:'Pirinioetara igoko gara, _____ (elurra + dago).', e:'elurra dagoelako', l:'dago + -(e)lako = dagoelako', k:'fk'},

  // -(e)la-eta (3)
  {m:'-(e)la-eta', p:'Eguzkitako krema erosi behar dugu, _____ (eguzkia + dago).', e:'eguzkia dagoela-eta', l:'dago + -(e)la-eta = dagoela-eta', k:'fe'},
  {m:'-(e)la-eta', p:'Arropa freskoa eramango dut, _____ (beroa + egiten du).', e:'beroa egiten duela-eta', l:'du + -(e)la-eta = duela-eta', k:'fe'},
  {m:'-(e)la-eta', p:'Goiz jaiki behar dugu, _____ (autobusa + goizekoa + da).', e:'autobusa goizekoa dela-eta', l:'da + -(e)la-eta = dela-eta', k:'fe'},

  // -eta (3)
  {m:'-eta', p:'Pozik nago, Saloura joango _____ (gara).', e:'gara-eta', l:'gara + -eta = gara-eta (zuzenean)', k:'ft'},
  {m:'-eta', p:'Ez dut lo egingo, bihar irteera _____ (da).', e:'da-eta', l:'da + -eta = da-eta (zuzenean)', k:'ft'},
  {m:'-eta', p:'Dirua aurreztu behar dut, opariak erosi nahi _____ (ditut).', e:'ditut-eta', l:'ditut + -eta = ditut-eta (zuzenean)', k:'ft'},

  // bait- (5)
  {m:'bait-', p:'Itsasora joango gara, _____ (beroa + da).', e:'beroa baita', l:'bait- + da = baita (T+D→T)', k:'fb'},
  {m:'bait-', p:'Pozik gaude, _____ (bidaia + da).', e:'bidaia baita', l:'bait- + da = baita (T+D→T)', k:'fb'},
  {m:'bait-', p:'Kataluniara joango gara, _____ (ikusi nahi + dugu).', e:'ikusi nahi baitugu', l:'bait- + dugu = baitugu (T+D→T)', k:'fb'},
  {m:'bait-', p:'Denok joango gara, _____ (lagunak + gara).', e:'lagunak baikara', l:'bait- + gara = baikara (T+G→K)', k:'fb'},
  {m:'bait-', p:'Ez naiz nekatuko, _____ (ondo lo egin + dut).', e:'ondo lo egin baitut', l:'bait- + dut = baitut (T+D→T)', k:'fb'}
];

// ------------------------------------------
// POSIZIOA ARIKETAK (10)
// pn = perpaus nagusia, pm = perpaus mendekoa,
// e = erantzun osoa, az = azalpena
// ------------------------------------------
const POSIZIOA = [
  {m:'-(e)lako', pos:'atzetik', pn:'Pozik gaude', pm:'Saloura joango (gara + -(e)lako)', e:'Pozik gaude Saloura joango garelako.', az:'-(e)lako perpausak ATZETIK doaz. gara + -(e)lako = garelako', k:'pk'},
  {m:'-(e)lako', pos:'atzetik', pn:'Autobusa hartu behar dugu', pm:'geltokia urrun (dago + -(e)lako)', e:'Autobusa hartu behar dugu geltokia urrun dagoelako.', az:'-(e)lako perpausak ATZETIK doaz. dago + -(e)lako = dagoelako', k:'pk'},
  {m:'-eta', pos:'atzetik', pn:'Autobusa hartuko dugu', pm:'urrun (dago + -eta)', e:'Autobusa hartuko dugu, urrun dago-eta.', az:'-eta perpausak ATZETIK doaz. dago + -eta = dago-eta', k:'pt'},
  {m:'bait-', pos:'atzetik', pn:'Itsasora joango gara', pm:'beroa (bait- + da)', e:'Itsasora joango gara, beroa baita.', az:'bait- perpausak ATZETIK doaz. bait- + da = baita (T+D→T)', k:'pb'},
  {m:'-(e)la-eta', pos:'aurretik', pn:'krema eramango dut', pm:'Eguzkia (dago + -(e)la-eta)', e:'Eguzkia dagoela-eta, krema eramango dut.', az:'-(e)la-eta perpausak AURRETIK doaz. dago + -(e)la-eta = dagoela-eta', k:'pe'},
  {m:'-(e)la-eta', pos:'aurretik', pn:'goiz jaiki behar dugu', pm:'Bidaia luzea (da + -(e)la-eta)', e:'Bidaia luzea dela-eta, goiz jaiki behar dugu.', az:'-(e)la-eta perpausak AURRETIK doaz. da + -(e)la-eta = dela-eta', k:'pe'},
  {m:'bait-', pos:'atzetik', pn:'Ez naiz nekatuko', pm:'ondo lo egin (bait- + dut)', e:'Ez naiz nekatuko, ondo lo egin baitut.', az:'bait- perpausak ATZETIK doaz. bait- + dut = baitut (T+D→T)', k:'pb'},
  {m:'-eta', pos:'atzetik', pn:'Ez dut lo egingo', pm:'pozik (nago + -eta)', e:'Ez dut lo egingo, pozik nago-eta.', az:'-eta perpausak ATZETIK doaz. nago + -eta = nago-eta', k:'pt'},
  {m:'bait-', pos:'atzetik', pn:'Denok joango gara', pm:'taldea (bait- + gara)', e:'Denok joango gara, taldea baikara.', az:'bait- perpausak ATZETIK doaz. bait- + gara = baikara (T+G→K)', k:'pb'},
  {m:'-(e)lako', pos:'atzetik', pn:'Urduri nago', pm:'bidaia luzea (da + -(e)lako)', e:'Urduri nago bidaia luzea delako.', az:'-(e)lako perpausak ATZETIK doaz. da + -(e)lako = delako', k:'pk'}
];

// ------------------------------------------
// FUSIO-TAULAK
// ------------------------------------------
const T_ELAKO = [
  ['da','delako'], ['du','duelako'], ['naiz','naizelako'], ['dut','dudalako'],
  ['gara','garelako'], ['dira','direlako'], ['dute','dutelako'],
  ['zara','zarelako'], ['ditut','ditudalako'], ['ditu','dituelako'],
  ['zen','zelako'], ['zuen','zuelako'], ['dago','dagoelako']
];

const T_ELAETA = [
  ['da','dela-eta'], ['du','duela-eta'], ['naiz','naizela-eta'], ['dut','dudala-eta'],
  ['gara','garela-eta'], ['dira','direla-eta'], ['dute','dutela-eta'],
  ['zara','zarela-eta'], ['ditu','dituela-eta'],
  ['zen','zela-eta'], ['zuen','zuela-eta'], ['dago','dagoela-eta']
];

const T_ETA = [
  ['da','da-eta'], ['du','du-eta'], ['naiz','naiz-eta'], ['dut','dut-eta'],
  ['gara','gara-eta'], ['dira','dira-eta'], ['dute','dute-eta'],
  ['zara','zara-eta'], ['ditut','ditut-eta'], ['ditu','ditu-eta'],
  ['zen','zen-eta'], ['zuen','zuen-eta'], ['dago','dago-eta'], ['nago','nago-eta']
];

const T_BAIT = [
  ['da','baita','T+D→T'], ['du','baitu','T+D→T'], ['naiz','bainaiz','T+N→N'],
  ['dut','baitut','T+D→T'], ['gara','baikara','T+G→K'], ['dira','baitira','T+D→T'],
  ['dute','baitute','T+D→T'], ['zara','baitzara','T+Z→TZ'],
  ['ditut','baititut','T+D→T'], ['ditu','baititu','T+D→T'],
  ['zen','baitzen','T+Z→TZ'], ['zuen','baitzuen','T+Z→TZ'],
  ['dago','baitago','T+D→T'], ['dugu','baitugu','T+D→T']
];

// ------------------------------------------
// ERRORE-KATEGORIAK
// ------------------------------------------
const ERRKATS = {
  fk: {iz:'Fusioa: -(e)lako', ar:'Bokalez amaitzen bada → -la-; kontsonantez → -ela-. Adib.: da → delako, dago → dagoelako.'},
  fe: {iz:'Fusioa: -(e)la-eta', ar:'Arau bera -(e)lako bezala. Adib.: da → dela-eta, dago → dagoela-eta.'},
  ft: {iz:'Fusioa: -eta', ar:'Zuzenean gehitu: da-eta, du-eta, gara-eta...'},
  fb: {iz:'Fusioa: bait-', ar:'T+D→T (baita, baitu), T+G→K (baikara), T+Z→TZ (baitzara), T+N→N (bainaiz).'},
  pk: {iz:'Posizioa: -(e)lako', ar:'-(e)lako perpausak ATZETIK doaz.'},
  pe: {iz:'Posizioa: -(e)la-eta', ar:'-(e)la-eta perpausak AURRETIK doaz.'},
  pt: {iz:'Posizioa: -eta', ar:'-eta perpausak ATZETIK doaz.'},
  pb: {iz:'Posizioa: bait-', ar:'bait- perpausak ATZETIK doaz.'}
};
