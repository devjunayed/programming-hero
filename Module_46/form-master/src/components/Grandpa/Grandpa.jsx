import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import { createContext, useState } from "react";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


export const AssetContext = createContext();
export const MoneyContext = createContext(1000);


const Grandpa = () => {
    const {money, setMoney} = useState(1000);
    const asset = 'diamond';
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <MoneyContext.Provider value={[money, setMoney]}>
            <AssetContext.Provider value="golds">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API
 */