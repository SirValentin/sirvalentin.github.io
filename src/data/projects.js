import appPaises from '../img/app-paises.jpg';
import appIpTracker from '../img/app-ipTracker.jpg';
import appGiphy from '../img/app-giphy.jpg';

export const projects = [
    {
        id: 1,
        img: appPaises,
        link: 'https://sirvalentin.github.io/api-paises-reactjs/#/',
        titulo: 'App Paises con API y Dark Mode',
        descripcion: 'En esta aplicacion use HTML, CSS, JS y tambien mis primeros conocimientos de REACT JS los aplique aqui y consumi la API de restcountries.eu.'
    },
    {
        id: 2,
        img: appIpTracker,
        link: 'https://sirvalentin.github.io/api-ip-tracker/#/',
        titulo: 'App IP Tracker con API y Mapa',
        descripcion: 'Para esta aplicacion use HTML, CSS, JS, lo poco que se de VUE JS, Axios para consumir la API de geo.ipify y tambien utilice Vue2Leaflet para hacer el mapa.'
    },
    {
        id: 3,
        img: appGiphy,
        link: 'https://sirvalentin.github.io/react-gifexpertapp/',
        titulo: 'App Gif by Giphy',
        descripcion: 'Para esta aplicacion use HTML, CSS, JS, REACT JS y consumi la API de GIPHY.'
    }
]