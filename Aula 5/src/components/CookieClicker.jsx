import { useState, useEffect } from "react"
import Cookie from "./Cookie"
import CursorUpgrade from "./CursorUpgrade"
import GrandpaUpgrade from "./GrandpaUpgrade"

function CookieClicker() {
    const [cookies, setCookies] = useState(0)
    const [clickPower, setClickPower] = useState(1)
    const [autoPower, setAutoPower] = useState(0)
    const [CursorUpgradeCost, setCursorUpgradeCost] = useState(10)
    const [GrandpaUpgradeCost, setGrandpaUpgradeCost] = useState(25)

    // AutoClicker com useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setCookies(prev => prev + autoPower)
        }, 1000/autoPower) // a cada 1 segundo

        return () => clearInterval(interval) // limpa quando o componente desmontar
    }, [autoPower]) // só recria o intervalo quando autoPower mudar

    const handleClick = () => {
        setCookies(cookies + clickPower)
    }

    const upgradeClick = () => {
        if (cookies >= CursorUpgradeCost) {
            setCookies(cookies - CursorUpgradeCost)
            setCursorUpgradeCost(CursorUpgradeCost*1.5)
            setClickPower(clickPower + 1)
        }
    }

    const UpgradeGrandpa = () => {
        if (cookies >= GrandpaUpgradeCost) {
            setCookies(cookies - GrandpaUpgradeCost)
            setGrandpaUpgradeCost(GrandpaUpgradeCost*2)
            setAutoPower(autoPower + 1)
        }
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>🍪 Cookies: {cookies}</h1>
            <Cookie onClick={handleClick} />
            <CursorUpgrade onUpgrade={upgradeClick} UpgradeValue={CursorUpgradeCost} />
            <GrandpaUpgrade onUpgrade={UpgradeGrandpa} UpgradeValue={GrandpaUpgradeCost} />
            <p>🔧 Poder de clique: {clickPower}</p>
            <p>👴 Vovôs: {autoPower} (1 cookie/s cada)</p>
        </div>
    )
}

export default CookieClicker
