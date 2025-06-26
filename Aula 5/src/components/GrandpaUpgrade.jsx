function GrandpaUpgrade({ onUpgrade, UpgradeValue }) {
    return (
        <button 
            onClick={onUpgrade}
            style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}
        >
            Comprar Upgrade de vovô ({UpgradeValue} cookies)
        </button>
    )
}

export default GrandpaUpgrade
