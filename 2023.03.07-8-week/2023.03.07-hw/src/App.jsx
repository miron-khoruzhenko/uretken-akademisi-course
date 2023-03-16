import { useEffect, useState } from "react"



function App() {
  const [coins, setCoins] = useState([])
  const [fileteredCoins, setFilteredCoins] = useState([])

  useEffect(() => {
    const url = 'https://api.coingecko.com/api/v3/coins/';

    fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setCoins(data)
      setFilteredCoins(data)
    })
    .catch(err => console.log(err))
  }, [])

  function filterCoins(e){
    const search = e.target.value.toLowerCase();

    // if (search === "")
    //   setFilteredCoins(coins)

    setFilteredCoins(
      coins.filter(coin => 
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search) ||
        coin.market_data.market_cap_rank.toString().includes(search)
      )
    )

  }

  // const coin = {
  //   "id": "bitcoin",
  //   "symbol": "btc",
  //   "name": "Bitcoin",
  //   "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  //   "current_price": 22334,
  //   "market_cap": 431172982664,
  //   "market_cap_rank": 1,
  //   "fully_diluted_valuation": 468883665991,
  //   "total_volume": 25546138526,
  //   "high_24h": 22559,
  //   "low_24h": 22120,
  //   "price_change_24h": -168.2942763865176,
  //   "price_change_percentage_24h": -0.7479,
  //   "market_cap_change_24h": -3171066175.6483154,
  //   "market_cap_change_percentage_24h": -0.73008,
  //   "circulating_supply": 19311043,
  //   "total_supply": 21000000,
  //   "max_supply": 21000000,
  //   "ath": 69045,
  //   "ath_change_percentage": -67.66186,
  //   "ath_date": "2021-11-10T14:24:11.849Z",
  //   "atl": 67.81,
  //   "atl_change_percentage": 32827.47809,
  //   "atl_date": "2013-07-06T00:00:00.000Z",
  //   "roi": null,
  //   "last_updated": "2023-03-07T18:08:01.753Z"
  // }
  return (
    <>
      <h1 className="font-semibold text-center text-4xl text-zinc-800 my-4">Crypto Tracker</h1>
      <input type="text" id="search" className="container max-w-2xl w-full h-8 mx-auto my-5 py-5 px-4 border-0 bg-zinc-100 focus:bg-white rounded block" placeholder={'Search...'} onChange={filterCoins}/>

      <table className="w-full container mx-auto">
        <thead className="">
          <tr className="cursor-pointer">
            <th className="py-2 text-left w-8">#</th>
            <th className="py-2 text-left px-4">Coin</th>
            <th className="py-2 ">Price</th>
            <th className="py-2 w-32">24h Change</th>
            <th className="py-2 w-min px-2 text-right">Min</th>
            <th className="py-2 w-min text-left">Max</th>
            <th className="py-2 text-right w-1/6">24h Volume</th>
            <th className="py-2 text-right w-1/6">Mkt Cap</th>
          </tr>
        </thead>
        <tbody className="">
          {
            fileteredCoins.map((coin, index) => {
              return (<tr className="space-x-4 border-y hover:bg-zinc-100" key={coin.id}>
              <td className="py-2">{coin.market_data.market_cap_rank}</td>
              <td className="py-2 flex justify-start items-center">
                <img className="w-5" src={coin.image.small} alt={coin.name} />
                <span className="mx-2 font-semibold">{coin.name}</span>
                <span className="uppercase text-xs">{coin.symbol}</span>
              </td>
              <td className="py-2 text-center">
                <span className="text-sm">${coin.market_data.current_price.usd}</span>
              </td>
              <td className={
                `${coin.market_data.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}` +
                ' text-center py-2 '
                }>
                {(coin.market_data.price_change_percentage_24h).toFixed(2)}%
              </td>
              <td className="py-2 text-right w-14">
                <span className="text-sm mx-2">${coin.market_data.low_24h.usd}</span>
              </td>
              <td className="py-2 text-left w-14">
                <span className="text-sm">${coin.market_data.high_24h.usd}</span>
              </td>
              <td className="text-right">
                <span className="text-sm">${(coin.market_data.total_volume.usd).toLocaleString()}</span>
              </td>
              <td className="text-right w-min">
                <span className="text-sm">${(coin.market_data.market_cap.usd).toLocaleString()}</span>
              </td>
            </tr>)
            })
  
          }

        </tbody>
      </table>
    </>
  );
}

export default App;
