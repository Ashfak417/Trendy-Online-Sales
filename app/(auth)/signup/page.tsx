"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
//import Link from "next/link";
import React from "react"; 
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupFormSchema = z.object({
  name:z.string().min(5,"name must Minimum 5 characters"),
  email:z.email("Invalid Email Address"),
  password:z.string().min(6,"Minimum 6 characters"),
  confirmPassword:z.string(),
}).refine((data)=> data.password === data.confirmPassword,{
  message:"password does not match",
  path:["confirmPassword"],

});

// const FormValidation = SignupFormSchema.safeParse({
//   name:"Jonew",
//   email:"ahg@gmail.com",
//   password:"111111",
//   confirmPassword:"111111"

// })

// console.log( "ZORD VALIDATION ",FormValidation.success );
// // some untrusted data...
// const input = { /* stuff */ };
 
// // the parsed result is validated and type safe!
// const data = SignupFormSchema.parse(input);
 
// so you can use it with confidence :)
// console.log(data.name);

type SignupFormData = z.infer<typeof SignupFormSchema>;

// //how this work 
// const ob ={
//   age : 20
// }

// type Ob = typeof ob;

function Page() {


  const {register,handleSubmit,formState:{errors}} = useForm<SignupFormData>({
    resolver: zodResolver(SignupFormSchema),
  })
  
  //console.log("FORM ERRORS ",errors);

  const FormSubmit =  (data) =>{
    
        console.log("SUPPLIED data  ",data)
        
  }
  
  return (
    <div className="h-screen bg-blue-200 flex items-center justify-center">
      
   <div className="flex flex-raw gap-10">
      <div className="flex items-center justify-center gap-5 flex-col">
       <Image
      src="/1.png"
      alt="trendy online sales"
      width={170}
      height={170}
      />

      <h1 className="text-3xl font-bold">Welcom to Trendy Online Sales</h1>
      <p className="text-muted-foreground">Imported clothing brand</p>

     </div>

     <div>
      
      <form onSubmit={handleSubmit()} className="flex gap-2 flex-col w-75">

        <div className="flex flex-col gap-2.5">
          <label className="ml-2 font-semibold">Name</label>
          <Input {...register("name")}></Input>
          <p className="text-red-400">
            {errors.name && errors.name.message}
          </p>
        </div>


        <div className="flex flex-col gap-2.5">
          <label className="ml-2 font-semibold">Email</label>
          <Input {...register("email")}></Input>
          <p className="text-red-400">
            {errors.email && errors.email.message}
          </p>
        </div>


        <div className="flex flex-col gap-2.5">
          <label className="ml-2 font-semibold">Password</label>
          <Input {...register("password")}></Input>
          <p className="text-red-400">
            {errors.password && errors.password.message}
          </p>
        </div>


        <div className="flex flex-col gap-2.5">
          <label className="ml-2 font-semibold">Confirm password</label>
          <Input {...register("confirmPassword")}></Input>
          <p className="text-red-400">
            {errors.confirmPassword && errors.confirmPassword.message}
          </p>
        </div>


        <div>
          <Button className="bg-[#12ac75] hover:bg-[#0f7260] w-full">Sign Up</Button>
        </div>




      </form>
     </div>
   </div>

    </div>
  )
}
export default Page;