import { useEffect, useState } from "react";
import axios from "axios";
import AssetCard from "./components/AssetCard";
import Header from "./components/Header";
import { data } from "./assets/contant.js";
import Bitcoin from "./assets/Bitcoin.svg";
import Solana from "./assets/Solana.svg";
import Ethereum from "./assets/Ethereum.svg";
import Binance from "./assets/Binance.svg";
import Shiba from "./assets/Shiba.svg";
import Activity from "./assets/activity.svg";

function App() {
  const [dataAPI, setDataAPI] = useState<Array<any>>([]);
  const URL = "https://trending-assets-api.onrender.com/trendingAssets";

  useEffect(() => {
    axios.get(URL).then((res) => {
      assets = addArray(assets, res.data);
      setDataAPI(assets);
    });
  }, []);

  const icon = [Bitcoin, Solana, Ethereum, Binance, Shiba];
  const pair = [
    [Solana, Ethereum, Bitcoin],
    [Bitcoin, Ethereum, Binance],
    [Solana, Bitcoin, Binance],
    [Solana, Ethereum, Binance],
    [Solana, Ethereum, Binance],
  ];

  let assets = data.map((item, index) => ({
    ...item,
    url: icon[index],
    popularPairs: pair[index],
  }));

  const addArray = (firstArray: Array<any>, secArray: Array<any>) =>
    firstArray.map((i) => ({
      ...secArray.find((item) => item.slug === i.slug && item),
      ...i,
    }));

  return (
    <div className="px-10 py-4">
      <Header text="Trending Assets" icon={Activity} />

      {dataAPI && (
        <div className="flex justify-between flex-wrap">
          {dataAPI.map((asset, index) => (
            <AssetCard
              key={asset.slug}
              slug={asset.slug}
              url={asset.url}
              assetsName={asset.slug}
              price={asset.Price}
              change={asset.change}
              TVL={asset.tvl}
              popularPairs={asset.popularPairs}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
