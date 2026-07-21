import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
        <main className="z-10">
           
             {/* Hero Section */}
             <section className="bg-dark-brown text-black px-5 md:px-10 py-16 md:py-24 flex flex-col-reverse lg:flex-row items-center gap-10">
               <div className="flex-1 text-center lg:text-left">
                 <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">
                   WE GIVE THE BEST &{" "}
                   <span className="text-brand-yellow">MADE TO LOVE.</span>
                 </h1>
       
                 <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-gray-300">
                   Crispy outside, juicy inside. Every bite is prepared fresh with
                   premium ingredients and unforgettable flavor.
                 </p>
       
                 <button className="mt-6 bg-brand-red px-6 py-3 border  border-black rounded-full cursor-pointer font-semibold hover:scale-105 transition">
                   ORDER NOW
                 </button>
               </div>
       
               <div className="flex-1 flex justify-center">
                 <Image
                   src="/burger.png"
                   alt="Burger"
                   width={600}
                   height={600}
                   priority
                   className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                 />
               </div>
             </section>
       
             {/* About Section */}
             <section className="bg-cream px-5 md:px-10 py-16">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                 <div>
                   <Image
                     src="/burger2.png"
                     alt="Fresh Burger"
                     width={700}
                     height={700}
                     className="rounded-2xl shadow-lg w-full"
                   />
                 </div>
       
                 <div>
                   <h2 className="font-heading text-3xl md:text-5xl">
                     FRESH • HOT & MADE TO{" "}
                     <span className="text-brand-red">CRAVE</span>
                   </h2>
       
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                     <div className="flex gap-3">
                       <span className="text-3xl">🍔</span>
       
                       <div>
                         <h3 className="font-semibold">Handmade Daily</h3>
                         <p className="text-gray-600 text-sm">
                           Freshly prepared every day with love.
                         </p>
                       </div>
                     </div>
       
                     <div className="flex gap-3">
                       <span className="text-3xl">❤️</span>
       
                       <div>
                         <h3 className="font-semibold">Premium Ingredients</h3>
                         <p className="text-gray-600 text-sm">
                           Only quality meats, vegetables and sauces.
                         </p>
                       </div>
                     </div>
       
                     <div className="flex gap-3">
                       <span className="text-3xl">🔥</span>
       
                       <div>
                         <h3 className="font-semibold">Always Fresh</h3>
                         <p className="text-gray-600 text-sm">
                           Served hot straight from our kitchen.
                         </p>
                       </div>
                     </div>
       
                     <div className="flex gap-3">
                       <span className="text-3xl">🥤</span>
       
                       <div>
                         <h3 className="font-semibold">Perfect Combos</h3>
                         <p className="text-gray-600 text-sm">
                           Burgers, fries and drinks made for every craving.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
       
               {/* Promo Card */}
               <div className="bg-brand-yellow rounded-3xl mt-14 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                 <div>
                   <h3 className="font-heading text-3xl">SPECIAL DEAL</h3>
       
                   <p className="mt-2">
                     Get your favorite burger with fries and a drink at an amazing
                     price.
                   </p>
                 </div>
       
                 <Image
                   src="/pizza.png"
                   alt="Pizza"
                   width={500}
                   height={500}
                   className="w-100"
                 />
               </div>
             </section>
       
             {/* CTA Section */}
             <section className="bg-brand-yellow-light px-5 md:px-10 py-16 md:py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
               <div className="flex-1 text-center lg:text-left">
                 <h2 className="font-heading text-3xl md:text-5xl">
                   EXPERIENCE OUR{" "}
                   <span className="text-brand-red">SIGNATURE BURGERS</span>
                 </h2>
       
                 <p className="mt-4 max-w-md mx-auto lg:mx-0">
                   Every burger is grilled to perfection and packed with rich flavors
                   you ll never forget.
                 </p>
       
                 <button className="mt-6 bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                   VIEW MENU
                 </button>
               </div>
       
               <div className="flex-1 flex justify-center">
                 <Image
                   src="/burger3.png"
                   alt="Burger Combo"
                   width={600}
                   height={600}
                   className="w-full max-w-md"
                 />
               </div>
             </section>
       
            
           </main>
    </div>
  )
}

