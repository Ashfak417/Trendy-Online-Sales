import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react"; 

export default function page() {
  return (
    <div className="h-screen bg-blue-200 flex items-center justify-center">
      
     <div className="flex items-center justify-center gap-5 flex-col">
       <Image
      src="/1.png"
      alt="trendy online sales"
      width={170}
      height={170}
      />

      <h1 className="text-3xl font-bold">Welcom to Trendy Online Sales</h1>
      <p className="text-muted-foreground">Imported clothing brand</p>



      <div className ="flex item-center justify-center gap-4">

      <Link href="/signup">
      <Button className="bg-[#12ac75] hover:bg-[#0f7260]">Sign Up</Button>
      </Link>
      
      <Link href="/signin">
      <Button className="hover:bg-white hover:text-black">Sign In</Button>
      </Link>
      
     </div>

     </div>

    </div>
  )
}