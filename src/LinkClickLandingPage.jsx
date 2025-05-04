import React from "react";
import { Button } from "./components/ui/button";

const LinkClickLandingPage = () => {
  return (
    <div className="font-sans text-black">
      {/* Header */}
      <header className="flex flex-col items-center py-4">
        <img src="/api/placeholder/200/100" alt="LinkClick Logo" className="w-40 mb-2" />
        <h1 className="text-4xl font-serif">LinkClick</h1>
        <p className="italic text-sm">simple.secure.for everyone</p>
      </header>
      
      {/* Login Form */}
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-xl font-semibold">Get Started ➤➤</h2>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="mt-4 px-4 py-2 border rounded w-72"
        />
        <input
          type="password"
          placeholder="Enter your PIN"
          className="mt-2 px-4 py-2 border rounded w-72"
        />
        <Button className="mt-4 w-72">Login</Button>
      </div>
      
      {/* Why Section */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-serif">Why LinkClick?</h2>
        <p className="text-3xl">⬇</p>
      </section>
      
      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
        <div className="flex gap-4 items-start">
          <img src="/api/placeholder/128/128" alt="Government Services" className="w-32 h-32 object-cover" />
          <div>
            <h3 className="text-lg font-bold">Government Services</h3>
            <p className="text-sm">
              One-stop access to essential online services, including pension schemes,
              insurance management, and bill payments.
            </p>
            <a href="/government-services">
              <Button size="sm" className="mt-2">Read More</Button>
            </a>
          </div>
        </div>
        
        <div className="flex gap-4 items-start">
          <img src="/api/placeholder/128/128" alt="Tutorials" className="w-32 h-32 object-cover" />
          <div>
            <h3 className="text-lg font-bold">Tutorials</h3>
            <p className="text-sm">
              Step-by-step guides for using WhatsApp, YouTube, and government services,
              plus tips on online safety and cybersecurity.
            </p>
            <a href="/tutorials">
              <Button size="sm" className="mt-2">Read More</Button>
            </a>
          </div>
        </div>
        
        <div className="flex gap-4 items-start">
          <img src="/api/placeholder/128/128" alt="Reminders" className="w-32 h-32 object-cover" />
          <div>
            <h3 className="text-lg font-bold">Reminders</h3>
            <p className="text-sm">
              Health and wellness support, such as medication and appointment reminders.
            </p>
            <a href="/reminders">
              <Button size="sm" className="mt-2">Read More</Button>
            </a>
          </div>
        </div>
        
        <div className="flex gap-4 items-start">
          <img src="/api/placeholder/128/128" alt="Online Services" className="w-32 h-32 object-cover" />
          <div>
            <h3 className="text-lg font-bold">Easy Online Services</h3>
            <p className="text-sm">
              Ordering food from mobile apps and booking rides through platforms like Ola and Uber.
            </p>
            <a href="/easy-online-services">
              <Button size="sm" className="mt-2">Read More</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkClickLandingPage;