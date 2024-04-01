export default function isDaytime(sunriseTime, sunsetTime) {
    const currentTime = Date.now();
  
    return currentTime > sunriseTime * 1000 && currentTime < sunsetTime * 1000;
  }
  


  