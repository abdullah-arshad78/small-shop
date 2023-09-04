import React, { useRef, useEffect, useState } from "react";
import aboutImg2 from "../assets/about-img-2.jpg";
import { AiFillSafetyCertificate, AiFillCustomerService } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
import { roles } from "../content";
import RoleItem from "../components/RoleItem";
const FEATURES_ARR = [
  {
    id: "f1",
    icon: (
      <AiFillCustomerService
        fill="#DB005B"
        className="w-[5rem] h-[5rem]  lg:w-[3rem] lg:h-[3rem]"
      />
    ),
    title: "Top Notch Customer Service",
  },
  {
    id: "f2",
    icon: (
      <AiFillSafetyCertificate
        fill="#F29727"
        className="w-[5rem] h-[5rem]  lg:w-[3rem] lg:h-[3rem]"
      />
    ),
    title: "Quality Products",
  },
  {
    id: "f3",
    icon: (
      <ImEarth
        fill="#539165"
        className="w-[5rem] h-[5rem]  lg:w-[3rem] lg:h-[3rem]"
      />
    ),
    title: "Delivering Worldwide",
  },
];

const AboutPage = () => {
  const [height, setHeight] = useState(0);
  const paraRef = useRef(null);

  useEffect(() => {
    const resizeHandler = () => {
      setHeight(paraRef.current.clientHeight);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const featuresItem = FEATURES_ARR.map((feature) => (
    <div
      key={feature.id}
      className="flex flex-col md:flex-row my-4 lg:my-0 space-y-2 space-x-2 items-center justify-center"
    >
      <>{feature.icon}</>
      <h3 className=" text-[1.5rem] lg:text-[1.3rem]">{feature.title}</h3>
    </div>
  ));

  const roleItems = roles.map((role) => <RoleItem key={role.id} {...role} />);
  return (
    <div className="pt-[7rem] pb-8 px-2 md:px-[2rem] text-gray-600 ">
      <h1 className="secondary-heading text-[2.2rem] text-center text-slate-600">
        About Us
      </h1>
      <div className="grid grid-rows-2 text-sm sm:text-basic md:text-lg lg:grid-cols-2 lg:grid-rows-none mt-4">
        <div className="px-4">
          <p
            ref={paraRef}
            className="my-4  font-light text-center lg:text-left"
          >
            We established our e-commerce store fifty years ago, driven by a
            collective vision and belief in technology's transformative
            potential. Through a steadfast commitment to exceptional customer
            service and high-quality products, we built a loyal following and
            experienced steady growth. Embracing emerging technologies, we
            utilized the internet's reach to connect with customers worldwide,
            offering a user-friendly website and seamless ordering experience.
            Our product range expanded to cater to diverse consumer demands,
            spanning electronics, fashion, home decor, and beauty. Investing in
            a robust logistics network, we prioritized swift and reliable
            delivery, earning the trust and loyalty of our customers. Our
            dedication to sustainability and ethical practices resonated with
            environmentally conscious shoppers, solidifying our position in the
            market. Today, celebrating our golden jubilee, our e-commerce store
            stands as a testament to our visionary leadership and unwavering
            pursuit of excellence. With a global presence and an extensive
            customer base, we continue to shape the retail landscape, inspiring
            future generations of entrepreneurs to harness the boundless
            possibilities of e-commerce.
          </p>
        </div>
        <div style={{ height }}>
          <img
            src={aboutImg2}
            alt="cameras on table"
            className="w-full h-full object-cover"
          ></img>
        </div>
      </div>
      <h2 className="secondary-heading mt-8 mb-2   text-[2.2rem] text-center text-slate-600">
        Our Features
      </h2>
      <div className="grid  grid-rows-3 lg:grid-cols-3 lg:grid-rows-none p-4 rounded-full drop-shadow w-full">
        {featuresItem}
      </div>
      <h2 className="secondary-heading mt-8 mb-2  text-[2.2rem] text-center text-slate-600">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12 mt-6">
        {roleItems}
      </div>
    </div>
  );
};

export default AboutPage;
