import properties from './properties.json';

export default function (_, response) {
    return response.json(properties.slice(0, 5));
}
