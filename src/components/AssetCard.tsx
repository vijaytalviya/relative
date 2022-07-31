import React from "react";
import "./assetCard.scss";

export interface IAssetsCard {
  url: any;
  assetsName: string;
  price: number;
  change: number;
  TVL: number;
  popularPairs: Array<any>;
}

const Label = (props: { children: string }) => (
  <span className="text-label text-sm">{props.children}</span>
);
const Value = (props: {
  children: string | React.ReactNode;
  class?: string;
}) => (
  <div
    className={`flex justify-center items-center text-primaryText bg-primary py-3 rounded-full w-4/5 text-base mb-1 ${props.class} `}
  >
    {props.children}
  </div>
);

const Wrapper = (props: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center mb-2 w-full">{props.children}</div>
);

const Curve = (props: { class: string }) => (
  <span
    className={`absolute top-10  bg-blue-300 w-8 h-8 shadow-card z-20 ${props.class}`}
  ></span>
);

export const AssetsCard: React.FC<IAssetsCard> = ({
  url,
  assetsName,
  price,
  TVL,
  change,
  popularPairs,
}) => {
  return (
    <div className=" relative flex flex-col items-center w-72 h-96 rounded-xl assetBg mt-20">
      <div className="relative  mx-auto mt-[-3.11rem] w-24 h-24 bg-[#242845] flex items-center justify-center rounded-full border-[10px] border-primary overflow-hidden cursor-pointer ">
        <img className="cursor-pointer" src={url} alt="" />
        <img className="absolute top-10 blur-[50px]" src={url} alt="" />
      </div>
      <div className=" relative mx-auto mt-[-6rem] w-24 h-24 bg-red flex items-center justify-center  rounded-full border-[10px] border-primary ">
        <Curve class="left-[-34px] rounded-tr-full" />
        <Curve class="right-[-34px] rounded-tl-full" />
      </div>
      <div className="mt-4 flex flex-col justify-around items-center w-full h-[calc(100%-66px)]">
        <div className="text-label text-sm "> {assetsName} </div>

        <Wrapper>
          <Value class="grid grid-cols-[minmax(0,1fr),1fr,1fr] justify-items-center ">
            <span></span>
            <span className="self-center ">
              ${price.toLocaleString("en-US", { maximumFractionDigits: 20 })}
            </span>
            <span
              className={`${
                change > 0 ? "text-priceInc" : "text-PriceDec "
              }  text-xs ml-1 `}
            >
              {change}%
            </span>
          </Value>
          <Label>Price</Label>
        </Wrapper>
        <Wrapper>
          <Value>${TVL}</Value>
          <Label>TVL</Label>
        </Wrapper>
        <Wrapper>
          <Value class="w-fit px-2">
            {popularPairs.map((icon) => (
              <img className="w-6 mx-1 cursor-pointer" src={icon} alt="" />
            ))}
          </Value>
          <Label>Popular pairs</Label>
        </Wrapper>
      </div>
    </div>
  );
};

export default AssetsCard;
