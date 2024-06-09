'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import LinkCard from '@/components/LinkCard';
import "remixicon/fonts/remixicon.css";
import Link from 'next/link';

const Links = () => {
  return (
    <main className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          Links
        </h2>
        <Link href={"/"}>
          <Button
            variant={"lArrowCircle"}
            size={"lArrowCircle"}
          >
            <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
          </Button>
        </Link>
        <Button
          variant={"plusCircle"}
          size={"plusCircle"}
          onClick={() => {}}
        >
          <i className="ri-add-circle-fill text-fuchsia-900 text-[90px]" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4">
        
        <LinkCard
          link_id={1}
          title="Google Link"
          link="google.com"
        />

        <LinkCard
          link_id={2}
          title="Github Link"
          link="github.com"
        />
      </div>
    </main>
  );
}

export default Links