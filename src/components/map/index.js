import { Box, Button } from "@mui/material";

function Map({longitude,latitude, zIndex="-10", onClick}) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.188146403812!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}%2C${longitude}!5e0!3m2!1sen!2sua!4v1649132248902!5m2!1sen!2sua`;
 
  return (
    <Box
    position="absolute"
    top="0"
    left="0"
    right="0"
    bottom="0"
    zIndex={zIndex}
    sx={{background:"rgba(0, 0, 0, 0.8)"}}
    pt="250px"
    >
      {/* <iframe
      title="Google Maps"
      width="100%"
      height="90%"
      loading="lazy"
      allowFullScreen
      src={mapUrl}
    ></iframe>
    {zIndex === "2" ? <Button variant="contained" onClick={onClick}>Hidden map</Button>:""} */}
    </Box>
  );
}

export default Map;
