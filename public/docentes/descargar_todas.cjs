const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const downloads = [
  // Admin
  { folder: 'admin', file: '1.-Roli-Ramirez.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Roli-Ramirez.jpg' },
  { folder: 'admin', file: '2.-Maura-Villanueva.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Maura-Villanueva.jpg' },
  { folder: 'admin', file: '3.-Carlos-Bardales.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Carlos-Bardales.jpg' },
  { folder: 'admin', file: '7.-Clay-Saavedra.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Clay-Saavedra.jpg' },
  { folder: 'admin', file: '4.-Jose-Tejada.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Jose-Tejada.jpg' },
  { folder: 'admin', file: '8.-Alejandrina-Tuesta.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Alejandrina-Tuesta.jpg' },
  { folder: 'admin', file: '5.-Segundo-Cardenas.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Segundo-Cardenas.jpg' },
  { folder: 'admin', file: '9.-Jose-Meza.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/9.-Jose-Meza.jpg' },
  { folder: 'admin', file: '6.-Pedro-Diaz.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Pedro-Diaz.jpg' },
  { folder: 'admin', file: '10.-Zelita-Tejada.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/10.-Zelita-Tejada.jpg' },
  { folder: 'admin', file: '11.-Anna-Rodriguez.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/11.-Anna-Rodriguez.jpg' },
  { folder: 'admin', file: '12.-Diana-Hidalgo.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/12.-Diana-Hidalgo.jpg' },
  { folder: 'admin', file: '13.-Ursula-Hidalgo.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/13.-Ursula-Hidalgo.jpg' },
  // Turismo
  { folder: 'turismo', file: 'Betty-Ruiz.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2023/09/DSC_9904-683x1024.jpg' },
  { folder: 'turismo', file: '6.-Alejandra-Siguenas.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Alejandra-Siguenas.jpg' },
  { folder: 'turismo', file: '2.-Jose-Cartagena.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Jose-Cartagena.jpg' },
  { folder: 'turismo', file: '3.-Pedro-Berrospi.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Pedro-Berrospi.jpg' },
  { folder: 'turismo', file: '4.-Teolinda-Torres.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Teolinda-Torres.jpg' },
  // Asist
  { folder: 'asist', file: '1.-Suselva-Sanchez.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Suselva-Sanchez.jpg' },
  { folder: 'asist', file: '2.-Patricia-Castagne.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Patricia-Castagne.jpg' },
  { folder: 'asist', file: '3.-Silvia-Alvarado.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Silvia-Alvarado.jpg' },
  { folder: 'asist', file: '4.-Escarlet-Escobar.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Escarlet-Escobar.jpg' },
  { folder: 'asist', file: '5.-Elmer-Huaraca.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Elmer-Huaraca.jpg' },
  { folder: 'asist', file: '6.-Laura-Cardenas.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Laura-Cardenas.jpg' },
  { folder: 'asist', file: '7.-Lucila-Soria.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Lucila-Soria.jpg' },
  // Cont
  { folder: 'cont', file: '1.-Graciela-Roca.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Graciela-Roca.jpg' },
  { folder: 'cont', file: '2.-Rosa-Farias.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Rosa-Farias.jpg' },
  { folder: 'cont', file: '3.-Maria-Castillo.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Maria-Castillo.jpg' },
  { folder: 'cont', file: '4.-Silvia-Virginia.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Silvia-Virginia.jpg' },
  { folder: 'cont', file: '5.-Marden-Vasquez.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Marden-Vasquez.jpg' },
  { folder: 'cont', file: '6.-Carlos-Miguel.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Carlos-Miguel.jpg' },
  { folder: 'cont', file: '7.-Jimmy-Silva.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Jimmy-Silva.jpg' },
  { folder: 'cont', file: '8.-Lud-Andres.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Lud-Andres.jpg' },
  { folder: 'cont', file: '9.-Jose-Bardales.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/9.-Jose-Bardales.jpg' },
  // Civil
  { folder: 'civil', file: '1.-Estuardo-Lizarzaburu.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Estuardo-Lizarzaburu.jpg' },
  { folder: 'civil', file: '2.-Charo-Vela.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Charo-Vela.jpg' },
  { folder: 'civil', file: '3.-Vemny-Granda.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Vemny-Granda.jpg' },
  { folder: 'civil', file: '4.-Harrizon-Rios.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Harrizon-Rios.jpg' },
  { folder: 'civil', file: '5.-Daniel-Ramos.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Daniel-Ramos.jpg' },
  { folder: 'civil', file: '6.-Tussi-Quio.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Tussi-Quio.jpg' },
  { folder: 'civil', file: '7.-Pablo-Ortiz.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Pablo-Ortiz.jpg' },
  // Sistemas
  { folder: 'sistemas', file: '1.-Gil-Torres.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Gil-Torres.jpg' },
  { folder: 'sistemas', file: '2.-Lisnairi-Tuanama.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Lisnairi-Tuanama.jpg' },
  { folder: 'sistemas', file: 'Ruber-Torres.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/Ruber-Torres.jpg' },
  { folder: 'sistemas', file: '4.-Christian-Puyo.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Christian-Puyo.jpg' },
  { folder: 'sistemas', file: '5.-John-Saboya.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-John-Saboya.jpg' },
  // Electrica
  { folder: 'electrica', file: '1.-Luis-Lecca.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Luis-Lecca.jpg' },
  { folder: 'electrica', file: '2.-Criz-Diaz.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Criz-Diaz.jpg' },
  { folder: 'electrica', file: '3.-Cristhian-Pichiule.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Cristhian-Pichiule.jpg' },
  { folder: 'electrica', file: '4.-Julio-Cuentas.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Julio-Cuentas.jpg' },
  { folder: 'electrica', file: '5.-Jeperson-Vela.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Jeperson-Vela.jpg' },
  { folder: 'electrica', file: '6.-Joel-Amaro.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Joel-Amaro.jpg' },
  { folder: 'electrica', file: '7.-Jose-Aranda.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Jose-Aranda.jpg' },
  { folder: 'electrica', file: '8.-Julio-Ochavano.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Julio-Ochavano.jpg' },
  // Enfermeria
  { folder: 'enfermeria', file: '1.-Orfilia-Navarro.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Orfilia-Navarro.jpg' },
  { folder: 'enfermeria', file: '2.-Kristell-Diaz.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Kristell-Diaz.jpg' },
  { folder: 'enfermeria', file: '3.-Gladys-Prada.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Gladys-Prada.jpg' },
  { folder: 'enfermeria', file: '7.-Oscar-Ruiz.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Oscar-Ruiz.jpg' },
  { folder: 'enfermeria', file: '11.-Sadith-Aspajo.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/11.-Sadith-Aspajo.jpg' },
  { folder: 'enfermeria', file: '4.-Cayo-Leveau.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Cayo-Leveau.jpg' },
  { folder: 'enfermeria', file: '8.-Eulalia-Condor.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Eulalia-Condor.jpg' },
  { folder: 'enfermeria', file: '12.-Carlos-Ramos.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/12.-Carlos-Ramos.jpg' },
  { folder: 'enfermeria', file: '5.-Rosio-Tafur.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Rosio-Tafur.jpg' },
  { folder: 'enfermeria', file: '9.-Kathleen-Solis.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/9.-Kathleen-Solis.jpg' },
  { folder: 'enfermeria', file: '13.-Norma-Vela.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/13.-Norma-Vela.jpg' },
  { folder: 'enfermeria', file: '6.-Roxana-Montoya.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Roxana-Montoya.jpg' },
  { folder: 'enfermeria', file: '10.-Karla-Vela.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/10.-Karla-Vela.jpg' },
  { folder: 'enfermeria', file: '14.-Marvin-Amasifuen.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/14.-Marvin-Amasifuen.jpg' },
  { folder: 'enfermeria', file: '15.-Pedro-Tarazona.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/15.-Pedro-Tarazona.jpg' },
  { folder: 'enfermeria', file: '16.-Diana-Romero.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/16.-Diana-Romero.jpg' },
  // Forestal
  { folder: 'forestal', file: '1.-Merly-Cabanillas.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Merly-Cabanillas.jpg' },
  { folder: 'forestal', file: '2.-Anita-Gomez.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Anita-Gomez-711x1024.jpg' },
  { folder: 'forestal', file: '3.-William-Bar.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-William-Bar.jpg' },
  { folder: 'forestal', file: '4.-Angel-Egoavil.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Angel-Egoavil.jpg' },
  { folder: 'forestal', file: '5.-Horatio-Cordova.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Horatio-Cordova.jpg' },
  { folder: 'forestal', file: '6.-Shoyleer-Rios.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Shoyleer-Rios.jpg' },
  // Mecatronica
  { folder: 'mecatronica', file: '1.-Cesar-Cauper.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Cesar-Cauper.jpg' },
  { folder: 'mecatronica', file: '2.-Lucita-Soplin.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Lucita-Soplin.jpg' },
  { folder: 'mecatronica', file: '3.-Armando-Vasquez.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Armando-Vasquez.jpg' },
  { folder: 'mecatronica', file: '7.-Juan-Alvarez.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Juan-Alvarez.jpg' },
  { folder: 'mecatronica', file: '4.-Noe-Albornoz.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Noe-Albornoz.jpg' },
  { folder: 'mecatronica', file: '8.-Segundo-Katayama.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Segundo-Katayama.jpg' },
  { folder: 'mecatronica', file: '5.-Davis-Panaifo.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Davis-Panaifo.jpg' },
  { folder: 'mecatronica', file: '9.-Dennis-Chavez.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/9.-Dennis-Chavez.jpg' },
  { folder: 'mecatronica', file: '6.-Wagner-Rios.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Wagner-Rios.jpg' },
  { folder: 'mecatronica', file: '10.-Jack-Flores.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/10.-Jack-Flores.jpg' },
  // Agro
  { folder: 'agro', file: '1.-Jose-Diaz.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Jose-Diaz.jpg' },
  { folder: 'agro', file: '2.-Gueybi-Bartra.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Gueybi-Bartra.jpg' },
  { folder: 'agro', file: '3.-Carmen-Flores.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Carmen-Flores.jpg' },
  { folder: 'agro', file: '4.-Nicolas-Rodriguez.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Nicolas-Rodriguez.jpg' },
  { folder: 'agro', file: '5.-Vicente-Rivera.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Vicente-Rivera.jpg' },
  { folder: 'agro', file: '6.-Jorge-Diaz.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Jorge-Diaz.jpg' },
  { folder: 'agro', file: '7.-Katherine-Navarro.jpg', url: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Katherine-Navarro.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(resolve); });
    }).on('error', reject);
  });
}

async function main() {
  let ok = 0, fail = 0;
  for (const d of downloads) {
    const dir = path.join(__dirname, d.folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const dest = path.join(dir, d.file);
    if (fs.existsSync(dest)) { ok++; continue; }
    try {
      await download(d.url, dest);
      console.log('OK:', d.folder + '/' + d.file);
      ok++;
    } catch (e) {
      console.log('FAIL:', d.folder + '/' + d.file, e.message);
      fail++;
    }
  }
  console.log('\nTotal: ' + ok + ' ok, ' + fail + ' fail');
}

main();
