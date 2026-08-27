'use client'

import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import type { Location } from '@/data/locations'

/** Same teardrop silhouette as IconMapPin, filled solid so it reads at map-pin
 * size against varying tile backgrounds. Built once at module scope. */
const pinIcon = L.divIcon({
  className: 'starvochs-pin',
  html: `<svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" fill="#c22a2e" stroke="#fbf3df" stroke-width="1.2"/>
    <circle cx="12" cy="9.5" r="2.6" fill="#fbf3df"/>
  </svg>`,
  iconSize: [28, 28],
  iconAnchor: [14, 26],
  popupAnchor: [0, -24],
})

export default function LocationsMap({ locations }: { locations: Location[] }) {
  return (
    <MapContainer
      bounds={locations.map((l) => [l.lat, l.lng]) as [number, number][]}
      boundsOptions={{ padding: [24, 24] }}
      scrollWheelZoom={false}
      // Leaflet's own panes/controls carry z-index up to 1000, and .leaflet-container
      // never establishes its own stacking context — without `isolate` those values are
      // compared directly against the page's root stacking context and paint over the
      // sticky navbar (z-40) while scrolling. `isolate` contains them inside the map.
      className="isolate h-full w-full"
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={pinIcon}
          alt={loc.name}
          eventHandlers={{
            // divIcon renders a <div>, not an <img>, so the `alt` prop above
            // isn't picked up by accessible-name computation — set aria-label
            // directly on the marker's element once it's actually in the DOM.
            add: (e) => {
              e.target.getElement()?.setAttribute('aria-label', loc.name)
            },
          }}
        >
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
