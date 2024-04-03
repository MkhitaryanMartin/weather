
export default function ItemWeather({ data,temp }) {
    return (
        <>
            <p>Temperature : {data?.main?.temp} {temp}</p>
            <p>Air humidity: {data?.main?.humidity}%</p>
            <p>Visibility: {data?.visibility}m</p>
            <p>Wind speed: {data?.wind?.speed}m/s</p>
            <p>Wind direction: {data?.wind?.deg}°</p>
        </>
    )
}