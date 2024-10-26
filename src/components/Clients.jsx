"use client";
import React from "react";

const Clients = () => {
  const clients = [
    { src: "img/clients/WhatsApp Image 2024-06-26 at 18.53.21.jpeg.jpg", alt: "Client 1" },
    { src: "img/clients/AAraniyam logo final design (1) (1).jpg", alt: "Client 2" },
    { src: "img/clients/KLM-_1kdxbWT.jpeg.jpg", alt: "Client 3" },
    { src: "img/clients/trinity-logo.png", alt: "Client 4" },
    { src: "img/clients/GS Innovations.png", alt: "Client 5" },
  ];

  return (
    <div className="relative  mb-10 flex items-center justify-center w-full px-4">
      <div className="flex items-center justify-center gap-6">
        {/* Map through clients to render images */}
        {clients.map((client, index) => (
          <img
            key={client.alt + index} // Unique key for each client
            src={client.src}
            alt={client.alt}
            className="w-full max-w-[50px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[150px] h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
