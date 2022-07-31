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
  const icon = [Bitcoin, Solana, Ethereum, Binance, Shiba];
  const pair = [
    [Solana, Ethereum, Bitcoin],
    [Bitcoin, Ethereum, Binance],
    [Solana, Bitcoin, Binance],
    [Solana, Ethereum, Binance],
    [Solana, Ethereum, Binance],
  ];
  const assets = data.map((item, index) => ({
    ...item,
    url: icon[index],
    popularPairs: pair[index],
  }));

  return (
    <div className="px-10 py-4">
      <Header text="Trending Assets" icon={Activity} />

      <div className="flex justify-between flex-wrap">
        {assets.map((asset, index) => (
          <AssetCard
            key={index}
            url={asset.url}
            assetsName={asset.currencyName}
            price={asset.Price}
            change={asset.change}
            TVL={asset.TVL}
            popularPairs={asset.popularPairs}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
