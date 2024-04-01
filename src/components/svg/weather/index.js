import CloudDayIcon from "./cloud-day";
import CloudNightIcon from "./cloud-night";
import RainIcon from "./rain";
import SunIcon from "./sun";
import SunRainIcon from "./sun-rine";
import ThunderIcon from "./thunder";
import MoonIcon from "./moon-icon";
import CloudIcon from "./cloud";


export const icons = {
    ["clear sky"]: (day)=> day ? <SunIcon/> : <MoonIcon/>,
    ["few clouds"]: (day)=> day ? <CloudDayIcon/> : <CloudNightIcon/>,
    ["scattered clouds"]: (day)=>  day ? <CloudDayIcon/> : <CloudNightIcon/>,
    ["overcast clouds"]: ()=> <CloudIcon/>
}