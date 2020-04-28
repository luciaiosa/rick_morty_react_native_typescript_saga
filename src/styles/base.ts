import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export const dimensions = {
  fullHeight: height,
  fullWidth: width,
  halfWidth: width * 0.5,
  halfHeight: height * 0.5
}
  
export const colors  = {
  primary: '#ff01c1', // rosa
  secondary: '#1dc9dd', // azul
  tertiary: '#696969'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const margin = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Cochin'
}