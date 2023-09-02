import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ItsCard} from "./Card/ItsCard";
import {getAllData} from "./Requests/getAllCards";
import {IOneCardData} from "./Types/dataTypes";

function App() {
    const [allData, setAllData] = useState<IOneCardData[]>([]);
    console.log("allData")
    console.log(allData)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllData()
            setAllData(data)
        }
        fetchData();
    }, []);


    return (
    <div className="App">
      <ItsCard/>
    </div>
  );
}

export default App;
