"use client";
import React from "react";

const Clients = () => {
  const clients = [
    { id: 1, src: "img/clients/WhatsApp Image 2024-06-26 at 18.53.21.jpeg.jpg", alt: "Client 1 - WhatsApp Image" },
    { id: 2, src: "img/clients/AAraniyam logo final design (1) (1).jpg", alt: "Client 2 - AAraniyam Logo" },
    { id: 3, src: "img/clients/KLM-_1kdxbWT.jpeg.jpg", alt: "Client 3 - KLM" },
    { id: 4, src: "img/clients/trinity-logo.png", alt: "Client 4 - Trinity Logo" },
    { id: 5, src: "img/clients/GS Innovations.png", alt: "Client 5 - GS Innovations" },
  ];

  return (
    <div className="relative mb-10 flex items-center justify-center w-full px-4">
      <div className="flex items-center justify-center gap-6">
        {clients.map((client) => (
          <img
            key={client.id} // Using id for unique keys
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
