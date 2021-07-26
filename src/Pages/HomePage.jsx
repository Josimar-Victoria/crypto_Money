import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import baseEndPoint from "../Service/coinGecko";
import { useSelector } from "react-redux";
import { selectCrypto } from "../Features/CryptoSlice";

import styled from "styled-components";
import { CoinRow } from "../Components/CoinRow/CoinRow";
import { Spinner } from "../Components/Spinner";

export const HomePage = () => {
  const crypto = useSelector(selectCrypto);
  const [coins, setCoins] = useState([]);
  const [isloading, setIsloading] = useState(false);
  // con un useEffect, vamos a hacer un http request ala API de CoinGecko.com
  //Le vamos a solicitar que nos pase los dato de cotizacion de las diferentes monedas
  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const result = await baseEndPoint.get("/coins/markets", {
            params: {
            vs_currency: "usd",
            ids: crypto.join(),
            },
        });
        setCoins(result.data);
        setIsloading(false);
        } catch (err) {
        console.log(err);
        }
    };
    if(crypto.length){
        fetchData()
    }else{
        setCoins([])
    }
}, [crypto]);

    if (isloading) {
    return <Spinner/>;
}

return (
    <TableContainer component={Paper}>
     <Table sizes="small" aria-label="a dense table">
        <TableHead>
            <TableRow>
                <HeaderCell>Image</HeaderCell>
                <HeaderCell>Symbol</HeaderCell>
                <HeaderCell>MKtcap-Rank</HeaderCell>
                <HeaderCell>Current-price</HeaderCell>
                <HeaderCell>Charts</HeaderCell>
                <HeaderCell>Price-1-day-%</HeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <CoinRow key={coin.id} data={coin} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const HeaderCell = styled(TableCell)({
  fontWeight: 800,
  fontSize: "16px",
  fontStyle: "italic",
});
