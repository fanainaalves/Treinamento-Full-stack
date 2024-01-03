import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"

import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"
import HookUseRef from "../components/HookUseRef"
import HookUseCallBack from "../components/HookUseCallBack"
import HookUseMemo from "../components/HookUseMemo"

const Home = () => {
    const { contextValue } = useContext(SomeContext)

    return (
        <div>
            <h1>Home</h1>
            <HookUseState/>
            <HookUseReducer/>
            <HookUseEffect/>
            <h2>useContext</h2>
            <p>Valor do contexto: {contextValue}</p>
            <hr />
            <HookUseRef/>
            <HookUseCallBack/>
            <HookUseMemo/>
        </div>
    )
}

export default Home