import { useEffect, useState } from "react";
import api from "../configs/axios";

export const useItems = () => {
    const [data, setData] = useState([]);

    const getItems = () => {
        api.get("/items").then((response) => {
            setData(response);
        });
    };

    useEffect(() => {
        getItems()
    }, [])

    return { data, getItems }
}