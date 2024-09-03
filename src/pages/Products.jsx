import React from "react";
import Title from "../components/Title";
import { FaGithub } from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";

function Products() {
  const myProducts = [
    {
      name: "Users",
      type: "js",
      description: "Random users",
      githubLink: "https://github.com/Abdullohn001/random-user",
      vercelLink: "https://random-user-lilac.vercel.app/",
    },
    {
      name: "Tickets",
      type: "redux",
      description: "Tickets Master is todos",
      githubLink: "https://github.com/Abdullohn001/Tickets_master/tree/main",
      vercelLink: "https://tickets-master.vercel.app/",
    },
    {
      name: "Advice",
      type: "html",
      description: "This site give you free advice",
      githubLink: "https://github.com/Abdullohn001/Free-advice",
      vercelLink: "https://free-advice-three.vercel.app/",
    },
    {
      name: "GitHub Users",
      type: "js",
      description: "You find you would like GitHub users from this site",
      githubLink: "https://github.com/Abdullohn001/GitHub_User",
      vercelLink: "https://git-hub-user-snowy.vercel.app/",
    },
    {
      name: "Shop",
      type: "react",
      description: "You find you want things",
      githubLink: "https://github.com/Abdullohn001/7oy-imtihon",
      vercelLink: "https://7oy-imtihon-iota.vercel.app/",
    },
    {
      name: "Shop",
      type: "redux",
      description: "",
      githubLink: "https://github.com/Abdullohn001/Store-in-Redux",
      vercelLink: "https://store-in-redux.vercel.app/",
    },
  ];

  return (
    <div>
      <Title text="My Products" />
      <div className="p-2 mt-10">
        <div className="flex flex-wrap mt-6 gap-5">
          {myProducts &&
            myProducts.map((prod) => {
              return (
                <div
                  key={prod.name}
                  className="card overflow-hidden bg-neutral mx-auto  text-neutral-content w-[200px]"
                >
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{prod.name}</h2>
                    <p>{prod.description}</p>

                    <div className="card-actions justify-end">
                      <a
                        href={prod.githubLink}
                        className="btn bg-base-200 btn-ghost"
                      >
                        <FaGithub size="25px" />
                      </a>
                      <a
                        href={prod.vercelLink}
                        className="btn bg-base-200 btn-ghost"
                      >
                        <TbBrandVercel size="25px" />
                      </a>
                    </div>
                  </div>
                  <div
                    className={`${prod.type} indicator-item w-full max-w-24 border-rounded ml-auto indicator-bottom indicator-end `}
                  >
                    {prod.type}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Products;
