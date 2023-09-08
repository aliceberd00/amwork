import React, {useEffect, useState} from 'react';
import './App.css';
import {getAllData} from "./Requests/getAllCards";
import {IOneCardData} from "./Types/dataTypes";
import {MyColumn} from "./Components/MyColumn/MyColumn";
import Header from "./Components/Header/Header";
const App = () => {
    const [allData, setAllData] = useState<IOneCardData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllData()
            setAllData(data)
        }
        fetchData();
    }, []);


    return (
    <div className="App">
      <Header items={allData} />
      <MyColumn items={allData} />
    </div>
  );
}

export default App;
