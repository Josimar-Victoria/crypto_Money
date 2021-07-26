import { TableCell, TableRow } from '@material-ui/core'
import BarChartIcon from "@material-ui/icons/BarChart"
import { CryptoImageCell, CrytoDeleteCell} from './style'
import accounting from 'accounting'
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import DeleteIcon from "@material-ui/icons/Delete"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCrypto, DELETE_CRYPTO } from '../../Features/CryptoSlice'

export const CoinRow = ({data: {id, image,symbol,current_price,market_cap_rank,price_change_percentage_24h}}) => {
    const crypto = useSelector(selectCrypto)
    const dispatch = useDispatch()
    
    const DeleteCrypto = (e, id) => {
        e.preventDefault()
        const _crypto = crypto.filter((item) => item !== id)
        dispatch(DELETE_CRYPTO(_crypto))
    }
    return (
    <TableRow className='tableRow'>
        <CryptoImageCell><img src={image} alt={id} /></CryptoImageCell>
        <TableCell>{symbol}</TableCell>
        <TableCell>{market_cap_rank}</TableCell>
        <TableCell>{accounting.formatMoney(current_price)}</TableCell>
        <TableCell>
        <Link to={`/cryptocurrency/${id}`}>
            <BarChartIcon/>
        </Link>
        </TableCell>
        <CrytoDeleteCell>-
        {price_change_percentage_24h > 0 ? (
            <div>
                <ArrowDropUpIcon style={{color:'#00ff00'}} />
                <span style={{color:'#00ff00'}} >
                {price_change_percentage_24h}
                </span>
            </div>
        ):price_change_percentage_24h === 0 ? (
            <div>
                {price_change_percentage_24h}
            </div>
        ):(
            <div>
                <ArrowDropDownIcon style={{color:'#ff0000'}} />
                <span style={{color:'#ff0000'}}>
                {price_change_percentage_24h}
                </span>
            </div>
        )
        }
        <span className="deleteCrypto" style={{color:'gray', cursor:'pointer'}}
        onClick={e => DeleteCrypto(e,id)}>
        <DeleteIcon/> 
        </span>
        </CrytoDeleteCell>
    </TableRow>
    )
}


