import L from 'leaflet';

export function createIcon() {
    return new L.DivIcon({
        className: 'property',
        iconSize: [10, 10],
    });
}

export function getBounds(models) {
    return models.map((model) => new L.LatLng(model.coordinates.lat, model.coordinates.lng));
}
