"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className='max-w-5xl mx-auto'>
      <div className='grid grid-cols-2 justify-items-stretch p-20 gap-10'>
        <Card className='w-full'>
          <CardHeader>
            <Image
              src='/apko_title.png'
              width='100'
              height='100'
              className='object-contain'
              alt='apko'
            />
            <CardTitle>OMI (Oh! My Idols)</CardTitle>
            <CardDescription className='py-[10px]'>
              아이돌 팬들을 위한 커뮤니티 서비스 및 블록체인 기반 NFT 티켓팅, 굿즈 플랫폼
            </CardDescription>
            <CardFooter className='flex justify-center items-center'>
              <Button asChild>
                <Link href='/omi'>Go to Docs</Link>
              </Button>
            </CardFooter>
          </CardHeader>
        </Card>
        <Card className='w-full'>
          <CardHeader>
            <Image
              src='/apko_title.png'
              width='100'
              height='100'
              className='object-contain'
              alt='apko'
            />
            <CardTitle>Thales Luna HSM Korean Guide</CardTitle>
            <CardDescription className='py-[10px]'>
              탈레스 사 Luna HSM Series에 대한 한글 가이드 문서
            </CardDescription>
            <CardFooter className='flex justify-center items-center'>
              <Button asChild>
                <Link href=''>Go to Docs</Link>
              </Button>
            </CardFooter>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default page;