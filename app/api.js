/**
 * Created by Necfol on 2017/4/24.
 */
if (process.env.NODE_ENV === 'production') {
  // global.HOST = location.origin;
} else {
  global.HOST = 'https://free-api.heweather.com';
}
global.KEY = '4e59a56aaa0b4982b4d8628c6a3ae5db';
export default {
  weather: `${global.HOST}/v5/weather`,
};
