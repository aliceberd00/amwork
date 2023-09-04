import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ItsCard} from "./Card/ItsCard";
import {getAllData} from "./Requests/getAllCards";
import {IOneCardData} from "./Types/dataTypes";
import {MyColumn} from "./Components/MyColumn/MyColumn";
import Header from "./Components/Header/Header";

const App = () => {
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
      <Header/>
      <MyColumn items={allData} />
    </div>
  );
}

export default App;
