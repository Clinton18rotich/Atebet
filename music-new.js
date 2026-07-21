function renderMusic(c) {
  var songs = DATA.kipchambaDiscography || [];
  var songHtml = '';
  if (songs.length > 0) {
    songHtml = '<div class="card"><div class="card-title">🎵 Kipchamba Arap Tapotuk — Complete Discography</div><p style="font-size:10px;color:#8B6F5E;margin-bottom:6px">118 songs • "Father of Kipsigis Rhumba" • Koilonget Band</p>';
    for (var i = 0; i < songs.length; i++) {
      var s = songs[i];
      songHtml += '<div style="display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid #F5F0EB;font-size:10px"><span><strong>' + s.number + '.</strong> ' + esc(s.title) + (s.featuring ? ' <span style="color:#8B6F5E">ft. ' + esc(s.featuring) + '</span>' : '') + (s.notes ? ' <span style="font-size:9px">' + esc(s.notes) + '</span>' : '') + '</span><span style="color:#8B6F5E;font-size:9px">' + (s.duration||'') + '</span></div>';
    }
    songHtml += '</div>';
  }
  c.innerHTML = '<div class="card"><div class="card-title">🎵 Chepalungu — Cradle of Kalenjin Secular Music</div></div><div class="card"><strong>Wilson Kipkirui Arap Laboso (Maruchela)</strong><br><span style="font-size:10px;color:#8B6F5E">1920– | First Kalenjin Recording Artist</span></div><div class="card"><strong>Koilonget Band (1957)</strong><br><span style="font-size:10px">Kipchamba Arap Tapotuk — "Father of Kipsigis Rhumba"<br>Morris Arap Mainek — Accordion<br>Francis Sonoiya — Lead Guitar<br>Francis Koech (Chemirei) — Vocalist</span></div>' + songHtml + '<div class="card"><strong>Key Recordings</strong><br><span style="font-size:10px">• 1950 — Chemirocha (Hugh Tracey)<br>• 1952 — Chebo Moire: first recording<br>• 2015 — Repatriation to Kapkatet</span></div>';
}
