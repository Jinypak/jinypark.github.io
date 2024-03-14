"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const pathname = useParams();
  return <div>{pathname.id}</div>;
};

export default Page;