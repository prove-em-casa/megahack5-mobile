import Geocoder from 'react-native-geocoding';
import { REACT_APP_GEOCODING_API } from '@env';

Geocoder.init(REACT_APP_GEOCODING_API, {});

export default Geocoder;
