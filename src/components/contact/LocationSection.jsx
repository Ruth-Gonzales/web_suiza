import { useState, useEffect } from 'react';
import { MapPin, Navigation, Footprints, Bus, LocateFixed, AlertCircle } from 'lucide-react';

const INSTITUTE_COORDS = { lat: -8.3866, lng: -74.5497 };

function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function LocationSection({ t }) {
  const loc = t.contact?.location || {};
  const { locationDenied, locationError, detectLocation, calculating, driving, walking, transit, distanceLabel, title, references, address, openInMaps, getDirections } = loc;
  const [userCoords, setUserCoords] = useState(null);
  const [geoStatus, setGeoStatus] = useState('idle');
  const [geoError, setGeoError] = useState('');

  const mapAddress = encodeURIComponent(loc.address || 'Carretera Federico Basadre Km 5.700 Pucallpa');
  const googleMapsUrl = `https://www.google.com/maps?q=${mapAddress}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address || '')}`;

  useEffect(() => {
    if (geoStatus === 'detecting') {
      if (!navigator.geolocation) {
        setGeoError('Geolocalización no soportada');
        setGeoStatus('error');
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setGeoStatus('success');
        },
        (err) => {
          setGeoError(err.code === 1 ? locationDenied : locationError);
          setGeoStatus('error');
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }
  }, [geoStatus, locationDenied, locationError]);

  const distance = userCoords ? haversineDistance(userCoords.lat, userCoords.lng, INSTITUTE_COORDS.lat, INSTITUTE_COORDS.lng) : 0;

  return (
    <section id="map" className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
        {title || '¿Cómo llegar al IESTP Suiza?'}
      </h2>
      <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-8 max-w-xl mx-auto">
        {references}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-primary/10 dark:border-white/8 shadow-sm h-[320px] md:h-[400px] bg-white dark:bg-dark-card relative">
          <iframe
            title="IESTP Suiza Ubicación"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapAddress}&zoom=15`}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-primary/10 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-medium text-slate-text dark:text-white">IESTP Suiza</span>
          </div>
        </div>

        {/* Side panel */}
        <div className="space-y-4">
          {/* Address card */}
          <div className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-5 shadow-sm">
            <h3 className="font-bold text-sm text-slate-text dark:text-white mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Dirección
            </h3>
            <p className="text-xs text-slate-text/70 dark:text-dark-text/70 leading-relaxed">{address}</p>
            <p className="text-[10px] text-slate-text/50 dark:text-dark-text/50 mt-2">{references}</p>
          </div>

          {/* Geolocation */}
          <div className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-5 shadow-sm">
            {geoStatus === 'idle' && (
              <button
                onClick={() => setGeoStatus('detecting')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-semibold text-xs hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all duration-300"
              >
                <LocateFixed className="w-4 h-4" />
                {detectLocation || 'Detectar mi ubicación'}
              </button>
            )}

            {geoStatus === 'detecting' && (
              <div className="flex items-center justify-center gap-2 py-3 text-xs text-slate-text/60 dark:text-dark-text/60">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                {calculating || 'Calculando distancia...'}
              </div>
            )}

            {geoStatus === 'success' && userCoords && (
              <div>
                <p className="text-[10px] font-bold text-primary/60 dark:text-secondary/60 uppercase tracking-wider mb-3">
                  {distanceLabel || 'Distancia desde tu ubicación'}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-primary/5 dark:bg-primary/10">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-3.5 h-3.5 text-primary" />
                      <span className="text-[11px] text-slate-text/70 dark:text-dark-text/70">{driving || 'Automóvil'}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-text dark:text-white">{(distance / 40 * 60).toFixed(0)} min</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-primary/5 dark:bg-primary/10">
                    <div className="flex items-center gap-2">
                      <Footprints className="w-3.5 h-3.5 text-primary" />
                      <span className="text-[11px] text-slate-text/70 dark:text-dark-text/70">{walking || 'Caminando'}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-text dark:text-white">{(distance / 5 * 60).toFixed(0)} min</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-primary/5 dark:bg-primary/10">
                    <div className="flex items-center gap-2">
                      <Bus className="w-3.5 h-3.5 text-primary" />
                      <span className="text-[11px] text-slate-text/70 dark:text-dark-text/70">{transit || 'Transporte público'}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-text dark:text-white">{(distance / 20 * 60).toFixed(0)} min</span>
                  </div>
                  <p className="text-[10px] text-slate-text/40 dark:text-dark-text/40 text-center pt-1">
                    ~{distance.toFixed(1)} km de distancia
                  </p>
                </div>
              </div>
            )}

            {geoStatus === 'error' && (
              <div className="flex items-start gap-2 text-xs text-amber-600 dark:text-amber-400 py-1">
                <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <p>{geoError}</p>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-white font-bold text-xs hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              <MapPin className="w-4 h-4" />
              {openInMaps || 'Abrir en Google Maps'}
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-primary text-primary font-semibold text-xs hover:bg-primary/10 transition-all duration-300"
            >
              <Navigation className="w-4 h-4" />
              {getDirections || 'Cómo llegar'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
