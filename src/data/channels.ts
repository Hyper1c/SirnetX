import type { Channel } from '../types/channel';
  
  export const channels: Channel[] = [
    // Canales Nacionales Principales
    { name: 'Caracol TV', url: 'https://cdn1.intercom.cdn.moderntv.eu/intercom/stream/CARACOL/20-hls/live-media.m3u8', category: 'nacional', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Caracol_Televisi%C3%B3n_logo.svg/512px-Caracol_Televisi%C3%B3n_logo.svg.png', description: 'Caracol Televisión' },
    { name: 'Canal 1', url: 'https://mdstrm.com/live-stream-playlist/5a5e1c2568b1910913db5fe2.m3u8', category: 'nacional', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Channel_1_%28Colombia%29_-_2017_logo.svg/512px-Channel_1_%28Colombia%29_-_2017_logo.svg.png', description: 'Canal 1 Colombia' },
    { name: 'Tro', url: 'https://play.cdn.enetres.net/6E5C615AA5FF4123ACAF0DAB57B7B8DC021/022/playlist.m3u8', category: 'nacional', icon: 'https://i.imgur.com/39hy97J.png', description: 'Telepacifico' },
    { name: 'Mundo Mas', url: 'https://edge.teveo.net/live/AeAAAgA_AALTA1IAyADIUDAAAAGAAAAAAmg03eFAIAByAAAA/playlist.m3u8', category: 'nacional', icon: 'https://i.imgur.com/CREs19T.png', description: 'Mundo Mas' },
    { name: 'Enlace Television', url: 'https://edge.teveo.net/live/AeAAAgAFAADLA1IAyADIQCAAAAAAAAAAAmg0131AIAByAAAA/playlist.m3u8', category: 'nacional', icon: 'https://cdn.colombia.com/canales/enlace-television-3301.jpg', description: 'Enlace Television' },
    
    { name: 'RCN', url: 'http://177.253.232.83:9088/play/a00m/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'RCN Televisión' },
    { name: 'RCN 2', url: 'http://177.253.232.83:9088/play/a00l/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'RCN 2' },
    { name: 'SU Colombia', url: 'http://177.253.232.83:9088/play/a00g/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Señal U Colombia' },
    { name: 'Tele Yolombo', url: 'http://177.253.232.83:9088/play/a00d/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Tele Yolombo' },
    { name: 'UC Colombia', url: 'http://177.253.232.83:9088/play/a008/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'UC Colombia' },
    { name: 'Nuestra Tele', url: 'http://177.253.232.83:9088/play/a02j/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Nuestra Tele' },

     // Noticias
    { name: 'DW - Envia', url: 'http://177.253.232.83:9088/play/a01z/index.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'Deutsche Welle' },
    { name: 'DW - Recibe', url: 'http://177.253.232.83:9088/play/a021/index.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'Deutsche Welle' },
    
    { name: 'Canal 2 Alpavisión Neiva', url: 'https://stmv1.voxtvhd.com.br/alpavision/alpavision/playlist.m3u8', category: 'regional', icon: 'https://i.imgur.com/Yv8XIGW.png', description: 'Canal 2 Alpavisión Neiva' },
    { name: 'Canal 8 TV+', url: 'https://movil.ejeserver.com/live/canal8tv.m3u8', category: 'regional', icon: 'https://i.imgur.com/peOIG1F.png', description: 'Canal 8 TV+' },
    { name: 'Canal 10 SOL TV', url: 'http://190.211.140.89:8081/SVTranscoder/SOLTVabr.stream/playlist.m3u8', category: 'regional', icon: 'https://i.imgur.com/kAbrHqt.jpeg', description: 'Canal 10 SOL TV' },
    { name: 'Canal 14 Codazzi', url: 'https://eu1.servers10.com:8081/8056/index.m3u8', category: 'regional', icon: 'https://i.imgur.com/wNSUMhJ.png', description: 'Canal 14 Codazzi' },
    { name: 'Canal Más Televisión', url: 'https://movil.ejeserver.com/live/teledoradahd.m3u8', category: 'regional', icon: 'https://i.imgur.com/ODMa27W.jpg', description: 'Canal Más Televisión' },
    { name: 'Canal Nets', url: 'https://movil.ejeserver.com/live/nets.m3u8', category: 'regional', icon: 'https://i.imgur.com/edaAexc.png', description: 'Canal Nets' },
    { name: 'CNC Santander de Quilichao', url: 'https://movil.ejeserver.com/live/cncsantander.m3u8', category: 'regional', icon: 'https://i.imgur.com/LNl2o9q.jpg', description: 'CNC Santander de Quilichao' },
    { name: 'Tele San Jacinto', url: 'https://movil.ejeserver.com/live/telesanjacinto.m3u8', category: 'regional', icon: 'https://i.imgur.com/t8aT4eT.png', description: 'Tele San Jacinto' },
    { name: 'TV Peñol', url: 'https://stmv1.voxtvhd.com.br/tvpenol/tvpenol/playlist.m3u8', category: 'regional', icon: 'https://i.imgur.com/Zm4934Z.png', description: 'TV Peñol' },
    { name: 'TV San Jorge', url: 'https://asucap.com/livestream/asucap_envivo.m3u8', category: 'regional', icon: 'https://i.imgur.com/vLU4Tcu.png', description: 'TV San Jorge' },
    { name: 'Vive TV Colombia', url: 'http://192.144.113.132:1935/live/ViveTV/playlist.m3u8', category: 'regional', icon: 'https://i.imgur.com/25CFHpB.png', description: 'Vive TV Colombia' },
    { name: 'Zoom', url: 'https://canalzoom.smoothcloud.co:3027/live/canalzoombr1live.m3u8', category: 'regional', icon: 'https://i.postimg.cc/508cvGGr/zoom.png', description: 'Canal Zoom' },
    { name: 'Suram TV', url: 'https://livetv.305streamhd.com:3111/live/suramtvlive.m3u8', category: 'regional', icon: 'https://i.imgur.com/2N9LCES.png', description: 'Suram TV' },
    { name: 'Oasis TV', url: 'https://5e85d90130e77.streamlock.net/6020/6020/playlist.m3u8', category: 'regional', icon: 'https://i.imgur.com/VKYzFpZ.png', description: 'Oasis TV' },
    { name: 'NSTV', url: 'http://138.186.23.7:22281/nstv/nstv/playlist.m3u8', category: 'regional', icon: 'https://i.imgur.com/ES6xFAv.png', description: 'NSTV' },
    { name: 'Cosmovision', url: 'https://videohls2.cosmovision.tv/hls/sd.m3u8', category: 'regional', icon: 'https://i.imgur.com/QlvYfEJ.png', description: 'Cosmovision' },
    { name: 'Telepetroleo', url: 'https://edge.teveo.net/live/AeAAAgAIAAE7A1IAyADIUCAAAAAAAAAAAmg0285AIAByAAAA/playlist.m3u8', category: 'regional', icon: 'https://i.imgur.com/lvlzOCs.png', description: 'Telepetroleo' },

    // Canales Religiosos
    { name: 'Avivamiento TV', url: 'https://s1.abntelevision.com/avivamientoabr/stream/avivamientohd/avivamientohd/playlist.m3u8', category: 'religioso', icon: 'https://i.imgur.com/MsQLaQG.png', description: 'Avivamiento TV' },
    { name: 'Canal Telefamilia', url: 'https://stmv2.voxtvhd.com.br/telefamilia/telefamilia/playlist.m3u8', category: 'religioso', icon: 'https://i.imgur.com/D1s1Q3k.png', description: 'Canal Telefamilia' },
    { name: 'CMB Television', url: 'https://catv.cmbcolombia.tv/bethesda/bethesda/chunklist.m3u8', category: 'religioso', icon: 'https://i.imgur.com/akGKPsk.png', description: 'CMB Television' },
    { name: 'Frecuencia F TV', url: 'https://tv.frecuenciaf.com/live/envivo.m3u8', category: 'religioso', icon: 'https://i.imgur.com/Cw5k96N.png', description: 'Frecuencia F TV' },
    { name: 'Tu Universo TV', url: 'https://5bf8041cb3fed.streamlock.net/TUUNIVERSOTV/TUUNIVERSOTV/playlist.m3u8', category: 'religioso', icon: 'https://i.imgur.com/e6esjLZ.jpg', description: 'Tu Universo TV' },

    // Canales de Música
    { name: 'La Hermandad Salsera', url: 'https://streamlov.alsolnet.com/hermandadsalsera/live/playlist.m3u8', category: 'musica', icon: 'https://i.imgur.com/7Wlt6bc.png', description: 'La Hermandad Salsera' },
    { name: 'Luna Estéreo 106.4 FM', url: 'https://servervideo.intermediacolombia.com:19360/kychbbfhdz/kychbbfhdz.m3u8', category: 'musica', icon: 'https://i.imgur.com/cESeD6R.png', description: 'Luna Estéreo 106.4 FM' },
    { name: 'MasMusica FM', url: 'https://movil.ejeserver.com/live/masmusica.m3u8', category: 'musica', icon: 'https://i.imgur.com/tCg7owd.png', description: 'MasMusica FM' },
    { name: 'Reyali', url: 'https://eu1.servers10.com:8081/8090/index.m3u8', category: 'musica', icon: 'https://i.imgur.com/YmFjnsF.png', description: 'Reyali' },
    { name: 'Salsa Gorda Television', url: 'https://www.televinterserver.com:19360/salsagordatv/salsagordatv.m3u8', category: 'musica', icon: 'https://i.imgur.com/3IhYd7G.jpg', description: 'Salsa Gorda Television' },
    { name: 'Vallenato Internacional', url: 'https://59a564764e2b6.streamlock.net/vallenato/vallenatom/playlist.m3u8', category: 'musica', icon: 'https://i.imgur.com/rVKroNW.png', description: 'Vallenato Internacional' },
    { name: 'Ondambiental TV', url: 'https://stmv4.voxtvhd.com.br/ondastereo/ondastereo/playlist.m3u8', category: 'musica', icon: 'https://i.imgur.com/u5804Au.jpg', description: 'Ondambiental TV' },

    // Canales de Noticias
    { name: 'Red+', url: 'https://inforedvos.lcdn.claro.net.co/Content/HLS_HLS_DIR/Live/channel(REDMASHDWEB)/master.m3u8', category: 'noticias', icon: 'https://i.imgur.com/kuqkTMC.png', description: 'Red+' },
    { name: 'Discovery Channel', url: 'http://177.253.232.83:9088/play/a01a/index.m3u8', category: 'entretenimiento', icon: 'fas fa-compass', description: 'Discovery Channel' },
    { name: 'Discovery H&H', url: 'http://177.253.232.83:9088/play/a019/index.m3u8', category: 'entretenimiento', icon: 'fas fa-home', description: 'Discovery H&H' },
    { name: 'Discovery Theater', url: 'http://177.253.232.83:9088/play/a016/index.m3u8', category: 'entretenimiento', icon: 'fas fa-theater-masks', description: 'Discovery Theater' },
    { name: 'Discovery Turbo', url: 'http://177.253.232.83:9088/play/a015/index.m3u8', category: 'entretenimiento', icon: 'fas fa-car', description: 'Discovery Turbo' },
    { name: 'Comedy Central', url: 'http://177.253.232.83:9088/play/a01c/index.m3u8', category: 'entretenimiento', icon: 'fas fa-laugh', description: 'Comedy Central' },
    { name: 'DHE', url: 'http://177.253.232.83:9088/play/a01b/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'DHE' },
    { name: 'EI', url: 'http://177.253.232.83:9088/play/a02w/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'EI' },
    { name: 'FX', url: 'http://177.253.232.83:9088/play/a003/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'FX' },
    { name: 'Food', url: 'http://177.253.232.83:9088/play/a00t/index.m3u8', category: 'entretenimiento', icon: 'fas fa-utensils', description: 'Food Network' },
    { name: 'Global Media', url: 'http://177.253.232.83:9088/play/a00s/index.m3u8', category: 'entretenimiento', icon: 'fas fa-globe', description: 'Global Media' },
    { name: 'ID', url: 'http://177.253.232.83:9088/play/a00q/index.m3u8', category: 'entretenimiento', icon: 'fas fa-search', description: 'Investigation Discovery' },
    { name: 'FMH', url: 'http://177.253.232.83:9088/play/a02s/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'FMH' },
    { name: 'Paramount Network', url: 'http://177.253.232.83:9088/play/a00n/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'Paramount Network' },
    { name: 'Start Channel', url: 'http://177.253.232.83:9088/play/a00h/index.m3u8', category: 'entretenimiento', icon: 'fas fa-play', description: 'Start Channel' },
    { name: 'TLC', url: 'http://177.253.232.83:9088/play/a00a/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'TLC' },
    { name: 'Telemundo', url: 'http://177.253.232.83:9088/play/a02v/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'Telemundo' },
    { name: 'USA Latam', url: 'http://177.253.232.83:9088/play/a007/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'USA Latinoamérica' },
    { name: 'Venevision', url: 'http://177.253.232.83:9088/play/a006/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'Venevisión' },

    // Canales de Deportes
    { name: 'ESPN', url: 'http://177.253.232.83:9088/play/a011/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN' },
    { name: 'ESPN 2', url: 'http://177.253.232.83:9088/play/a010/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 2' },
    { name: 'ESPN 4', url: 'http://177.253.232.83:9088/play/a00z/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 4' },
    { name: 'ESPN 5', url: 'http://177.253.232.83:9088/play/a00y/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 5' },
    { name: 'ESPN 6', url: 'http://177.253.232.83:9088/play/a00x/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 6' },
    { name: 'ESPN 7', url: 'http://177.253.232.83:9088/play/a00w/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 7' },
    { name: 'ESPN 8', url: 'http://177.253.232.83:9088/play/a00v/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 8' },
    { name: 'TyC Sports', url: 'http://177.253.232.83:9088/play/a009/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'TyC Sports' },
    { name: 'WinSport Bk', url: 'http://177.253.232.83:9088/play/a01r/index.m3u8', category: 'deportes', icon: 'fas fa-basketball-ball', description: 'WinSport Baloncesto' },
    { name: 'WinSport Prin', url: 'http://177.253.232.83:9088/play/a01q/index.m3u8', category: 'deportes', icon: 'fas fa-trophy', description: 'WinSport Principal' },
    

    // Canales de Entretenimiento
    { name: 'Bum Televisión', url: 'https://movil.ejeserver.com/live/visiondorada.m3u8', category: 'entretenimiento', icon: 'https://i.imgur.com/TerY4iM.png', description: 'Bum Televisión' },

    // Canales de Películas
    { name: 'A3 CINE', url: 'http://177.253.232.83:9088/play/a02q/index.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Canal de películas 24/7' },
    { name: 'Cine Canal', url: 'http://177.253.232.83:9088/play/a01s/index.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Cine de calidad' },
    { name: 'Cine Familiar HD', url: 'http://177.253.232.83:9088/play/a01f/index.m3u8', category: 'peliculas', icon: 'fas fa-users', description: 'Películas para toda la familia' },
    { name: 'Cine Hispano HD', url: 'http://177.253.232.83:9088/play/a01e/index.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Cine en español' },
    { name: 'Cine Latino', url: 'http://177.253.232.83:9088/play/a02p/index.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Películas latinas' },
    { name: 'Cine Premium HD', url: 'http://177.253.232.83:9088/play/a01d/index.m3u8', category: 'peliculas', icon: 'fas fa-star', description: 'Cine premium' },
    { name: 'Multipremier', url: 'http://177.253.232.83:9088/play/a02l/index.m3u8', category: 'peliculas', icon: 'fas fa-star', description: 'Estrenos de películas' },


      // Música
    { name: 'Mi Musica HD Popular', url: 'http://177.253.232.83:9088/play/a00i/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Música Popular' },
    { name: 'MiMusica HD Reggaeton', url: 'http://177.253.232.83:9088/play/a001/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Reggaeton' },
    { name: 'MiMusica HD Regional', url: 'http://177.253.232.83:9088/play/a00k/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Música Regional' },
    { name: 'MiMusica HD Salsa', url: 'http://177.253.232.83:9088/play/a002/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Salsa' },
    { name: 'Nick Music', url: 'http://177.253.232.83:9088/play/a00o/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Nick Music' },

    
    // Canales Infantiles
    { name: 'Baby TV', url: 'http://177.253.232.83:9088/play/a01i/index.m3u8', category: 'infantil', icon: 'fas fa-baby', description: 'TV para bebés' },
    { name: 'Canal Infantil HD', url: 'http://177.253.232.83:9088/play/a01h/index.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Contenido infantil' },
    { name: 'Disney Channel', url: 'http://177.253.232.83:9088/play/a014/index.m3u8', category: 'infantil', icon: 'fas fa-magic', description: 'Disney Channel' },
    { name: 'Disney Junior', url: 'http://177.253.232.83:9088/play/a013/index.m3u8', category: 'infantil', icon: 'fas fa-magic', description: 'Disney Junior' },
    { name: 'Dreamworks Latam', url: 'http://177.253.232.83:9088/play/a012/index.m3u8', category: 'infantil', icon: 'fas fa-dragon', description: 'Dreamworks Latinoamérica' },
    { name: 'Discovery Kids', url: 'http://177.253.232.83:9088/play/a018/index.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Discovery Kids' },
    { name: 'Discovery Kits', url: 'http://177.253.232.83:9088/play/a017/index.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Discovery Kits' },
    { name: 'Nick Jr', url: 'http://177.253.232.83:9088/play/a00p/index.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Nick Jr' },

    // Canales Educativos
    { name: 'Eduvision', url: 'https://stmv3.voxtvhd.com.br/conex2/conex2/playlist.m3u8', category: 'educacion', icon: 'https://i.imgur.com/ppBdqel.png', description: 'Eduvision' },
  ];
  
  export const categories = [
    { id: 'all', name: 'Todos los Canales', icon: 'fas fa-tv' },
    { id: 'nacional', name: 'Nacional', icon: 'fas fa-flag' },
    { id: 'regional', name: 'Regional', icon: 'fas fa-map-marker-alt' },
    { id: 'religioso', name: 'Religioso', icon: 'fas fa-cross' },
    { id: 'musica', name: 'Música', icon: 'fas fa-music' },
    { id: 'noticias', name: 'Noticias', icon: 'fas fa-newspaper' },
    { id: 'deportes', name: 'Deportes', icon: 'fas fa-futbol' },
    { id: 'entretenimiento', name: 'Entretenimiento', icon: 'fas fa-tv' },
    { id: 'peliculas', name: 'Películas', icon: 'fas fa-film' },
    { id: 'infantil', name: 'Infantil', icon: 'fas fa-child' },
    { id: 'educacion', name: 'Educación', icon: 'fas fa-graduation-cap' },
  ];
  
  export const getChannelsByCategory = (category: string) => {
    if (category === 'all') return channels;
    return channels.filter(channel => channel.category === category);
  };
  
  export const getFeaturedChannels = () => {
    return channels.slice(0, 12);
  };
