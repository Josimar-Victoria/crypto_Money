import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import baseEndPoint from "../Service/coinGecko"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import { useSelector, useDispatch } from "react-redux";
import { ADD_CRYPTO, selectCrypto } from "../Features/CryptoSlice";

export const AddCoin = () => {
const classes = useStyles();
const [selected, setSelect] = useState("");
const [list, setlist] = useState([])
const crypto = useSelector(selectCrypto)
const dispatch = useDispatch()

    useEffect(() => {
        const FetchData = async () => {
            const result = await baseEndPoint.get("/coins/list",{
                params: {
                    include_platform: false,
                }
            })
            setlist(result.data)
            console.log('lista',result);
    }
    FetchData()

},[])

return (
    <div>
    <FormControl variant="filled" className={classes.formControl}>
            <InputLabel className={classes.inputLabel} id="demo-simple-select-filled-label"> <AddCircleIcon/> Add cryptoCurrency</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={selected}
                onChange={(e) => {
                if(crypto.indexOf(e.target.value) === -1) {
                    //si bitbay no esta en la lista, entonces la añadiremos
                    dispatch(ADD_CRYPTO([...crypto, e.target.value]))
                }
                }}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    list.slice(800,900).map((item) => (
                        <MenuItem key={item.id} value={item.id} >
                            {item.name}
                        </MenuItem>
                    ))
                }
            </Select>
    </FormControl>
    </div>
);
};

const useStyles = makeStyles((theme) => ({
formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
},
selectEmpty: {
    marginTop: theme.spacing(2),
},
inputLabel: {
    width:"300px",
    display: 'flex',
    alignItems: 'center'
}
}));
