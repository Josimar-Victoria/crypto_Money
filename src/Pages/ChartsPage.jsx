import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { PriceChart } from "../Components/PriceChart"
import { Spinner } from "../Components/Spinner"
import { VolumeChart } from "../Components/VolumeChart"
import baseEndPoint from "../Service/coinGecko"
export const ChartsPage = () => {

    const {id} = useParams()
    const [prices, setPrices] = useState({})
    const [volumes, setVolumes] = useState({})
    const [isloading, setIsloading] = useState(true)

    const formatData = data => {
        return data.map((coord) => {
            return {
                t: coord[0],
                y: coord[1]
            }
        })
    }
    useEffect(() => {
    const fetchData = async () => {
        const [ day, week, year ] = await Promise.all([
            baseEndPoint.get(`/coins/${id}/market_chart/`,{
                params:{
                    vs_currency: 'usd',
                    days: '1'
                }
            }),
            baseEndPoint.get(`/coins/${id}/market_chart/`,{
                params:{
                    vs_currency: 'usd',
                    days: '7'
                }
            }),
            baseEndPoint.get(`/coins/${id}/market_chart/`,{
                params:{
                    vs_currency: 'usd',
                    days: '365'
                }
            })
        ])
        setPrices({
            dailyPrices: formatData(day.data.prices),
            weeklyPrices: formatData(week.data.prices),
            yearlyPrices: formatData(year.data.prices),
        })
        setVolumes({
            dailyVolumes: day.data.volumes,
            weekVolumes: week.data.volume,
            yearVolumes: year.data.prices        })
        setIsloading(false)

        console.log(prices.dailyPrices);
    }
    fetchData();
    },[id])
    return (
        <>
            {
                isloading ? <Spinner/> :(
                    <div>
                        <PriceChart prices={prices} id={id}/>
                        <VolumeChart volumes={volumes} id={id}/>
                    </div>
                )
            }
        </>
    )
}
