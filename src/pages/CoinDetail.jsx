export const CoinDetail = () => {
    const {id} = useParams()
    const [coin,setCoin] = useState(null)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
loadCoinData()
    },[id])

    const loadCoinData = async () => {
        try {
                const data = await fetchCoinData(id)
                setCoin(data)
              } catch (err) {
                console.error("Error fetching crypto", err)
              } finally {
                setIsLoading(false)
              }
    }


    if(!coin) {
        return <div className="app">
            <div className="no-result">
                <p>Coin not found</p>
                <button onClick={()=>navigate("/")}>Go Back</button>
            </div>
        </div>
    }
    return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <h1>🚀 Crypto Tracker</h1>
            <p>Real-time cryptocurrency prices and market data</p>
          </div>

          <button onClick={() => navigate("/")} className="back-button">
            ← Back to List
          </button>
        </div>
      </header>
     
      
    <div className="coin-detail">
        <div className="coin-header">
          <div className="coin-title">
            <img src={coin.image.large} alt={coin.name} />
            <div>
              <h1>{coin.name}</h1>
              <p className="symbol">{coin.symbol.toUpperCase()}</p>
            </div>
          </div>
          <span className="rank">Rank #{coin.market_data.market_cap_rank}</span>
        </div>
    
     </div>
    
    )
}