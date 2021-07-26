import { TableCell } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const CryptoImageCell = styled(TableCell)({
    "& img":{
        height:'40px'
    }
})

export const CrytoDeleteCell = styled(TableCell)({
    position: 'relative',
    "& .deleteCrypto": {
        position: 'absolute',
        right:'20%',
        top:'40%',
        display: 'none'
    },
    "& div": {
        display: 'flex'
    }
})