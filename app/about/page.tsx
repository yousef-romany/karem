import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";

export default function AboutPage() {
  // WIP: content is undefiend
  return (
    <div className="w-full p-10 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className={title()}>
          About ZoeHolidays: Your Gateway to Egypt's Treasures
        </h1>
        <p>
          Welcome to ZoeHolidays, your premier travel partner for exploring the
          wonders of Egypt! Our journey takes you through the ancient cities of
          Luxor and Aswan, the vibrant capital of Cairo, the sun-kissed beaches
          of Hurghada, and the breathtaking landscapes of Sharm El Sheikh. At
          ZoeHolidays, we are passionate about showcasing the rich cultural
          heritage, stunning natural beauty, and diverse experiences that Egypt
          has to offer.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className={title()}>Luxor: The World's Greatest Open-Air Museum</h1>
        <Image
          src="https://res.cloudinary.com/dir8ao2mt/image/upload/v1722522912/_1991e8d3-66dc-465c-a78b-36db1742d3ad_mf9irq.jpg"
          alt="image about"
          className="max-w-[350px] h-auto"
        />
        <p>
          Luxor is often called the world's greatest open-air museum, and for
          good reason. It is home to the Valley of the Kings, where the tombs of
          ancient pharaohs reveal their secrets. The grandeur of the Karnak and
          Luxor Temples is a testament to ancient Egyptian architecture and
          engineering. As you stroll along the Nile or take a hot air balloon
          ride at sunrise, Luxor offers a unique blend of history and
          breathtaking scenery.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className={title()}>Aswan: The Gateway to Nubia</h1>
        <Image
          src="https://res.cloudinary.com/dir8ao2mt/image/upload/v1722523149/_0d8a4251-3536-46d9-b59a-94f610f85a2d_obmtje.jpg"
          alt="image about"
          className="max-w-[350px] h-auto"
        />
        <p>
          Aswan, with its picturesque Nile views and rich Nubian culture, is a
          must-visit destination. Explore the stunning Philae Temple, dedicated
          to the goddess Isis, and marvel at the engineering feat of the Aswan
          High Dam. Don't miss a trip to Abu Simbel, where the colossal statues
          of Ramses II stand as a testament to Egypt's ancient greatness.
          Aswan's vibrant markets and tranquil islands provide a glimpse into
          the local way of life.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className={title()}>Cairo: The City of a Thousand Minarets</h1>
        <Image
          src="https://res.cloudinary.com/dir8ao2mt/image/upload/v1722523304/_34b83f11-503c-4cb5-9562-e65e3db6e05b_nvdjmc.jpg"
          alt="image about"
          className="max-w-[350px] h-auto"
        />
        <p>
          Cairo, Egypt's bustling capital, is a city where the past and present
          coexist in harmony. From the awe-inspiring Pyramids of Giza and the
          enigmatic Sphinx to the treasures of the Egyptian Museum, Cairo is
          steeped in history. Explore the city's vibrant markets, historic
          mosques, and cultural landmarks. Whether you're wandering through the
          bustling Khan El Khalili bazaar or enjoying the serenity of Al-Azhar
          Park, Cairo is a city of endless discovery.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className={title()}>Hurghada: The Red Sea's Paradise</h1>
        <Image
          src="https://res.cloudinary.com/dir8ao2mt/image/upload/v1722523393/_73a48c67-b6b1-430e-aed8-a5b287b4a1cb_gb0goz.jpg"
          alt="image about"
          className="max-w-[350px] h-auto"
        />
        <p>
          Hurghada, located on the Red Sea coast, is a haven for water sports
          enthusiasts and beach lovers. Dive into the crystal-clear waters to
          explore vibrant coral reefs and marine life or relax on the pristine
          beaches. Hurghada's bustling marina, luxury resorts, and lively
          nightlife make it a perfect destination for both adventure and
          relaxation. Experience the beauty of the Eastern Desert with a
          thrilling safari or immerse yourself in local culture.
        </p>
      </div>
      <div className="flex flex-col gap-4 !w-full items-center">
        <h1 className={title()}>Sharm El Sheikh: The Jewel of the Sinai</h1>
        <Image
          src="https://res.cloudinary.com/dir8ao2mt/image/upload/v1722523795/_e01d1d96-ac02-452c-8d46-3dbb940f5e23_n7rtv5.jpg"
          alt="image about"
          className="max-w-[350px] h-auto"
        />
        <p>
          Sharm El Sheikh, at the southern tip of the Sinai Peninsula, is known
          for its stunning underwater landscapes and vibrant coral reefs. The
          Ras Mohammed National Park is a must-visit for divers and snorkelers,
          offering a glimpse into one of the world's richest marine ecosystems.
          On land, explore the rugged beauty of the Sinai Desert, from towering
          mountains to sweeping dunes. Sharm El Sheikh also offers luxurious
          resorts, exciting outdoor activities, and a vibrant nightlife.
        </p>
      </div>
      <h1>
        At ZoeHolidays, we are dedicated to creating unforgettable travel
        experiences that showcase the best of Egypt. Whether you're seeking
        adventure, cultural immersion, or relaxation, our expert team is here to
        make your dream vacation a reality. Discover the wonders of Luxor,
        Aswan, Cairo, Hurghada, and Sharm El Sheikh with ZoeHolidays, and let us
        take you on a journey of a lifetime!
      </h1>
    </div>
  );
}
