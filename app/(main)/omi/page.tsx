import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center font-bold text-[40px] py-[10px]">
        OMI Project
      </h1>
      <div>
        <p className="text-center">
          OMI is a community service for idol fans and a blockchain-based NFT
          ticketing and goods platform.
        </p>
        <div>
          <Image
            src={"https://picsum.photos/250/250"}
            width={300}
            height={300}
            alt="SAMPLE IMAGE"
          />
        </div>
      </div>
    </div>
  );
};

export default page;