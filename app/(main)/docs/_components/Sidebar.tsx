"use client";

import { Button } from "@/components/ui/button";
import { useMenuToggle } from "@/hooks/use-menu-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Sidebar = () => {
  const { isSidebarOpen } = useMenuToggle();

  return (
    <div className={cn("block", isSidebarOpen && "hidden")}>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Programming
          </h2>
          <div className='space-y-1'>
            <Button variant='ghost' className='w-full justify-start' asChild>
              <Link href='/c_lang'>C</Link>
            </Button>
            <Button variant='ghost' className='w-full justify-start' asChild>
              <Link href='/javascript'>JavaScript</Link>
            </Button>
            <Button variant='ghost' className='w-full justify-start' asChild>
              <Link href='/rust'>Rust</Link>
            </Button>
          </div>
        </div>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Library
          </h2>
          <div className='space-y-1'>
            <Button variant='ghost' className='w-full justify-start'>
              Playlists
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              Songs
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              Made for You
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              Artists
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              Albums
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
