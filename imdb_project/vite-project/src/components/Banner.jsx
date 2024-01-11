import React from "react";

const bannerUrls = [
  {
    backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
  },
  {
    backdrop_path: "/rVJfabCz1ViynQCEz54MRqdZig1.jpg",
  },
  {
    backdrop_path: "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
  },
  {
    backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
  },
  {
    backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  },
  {
    backdrop_path: "/uKP0B8HUJ08fas7NF77Xwu0bolJ.jpg",
  },
  {
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
  },
  {
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
  },
  {
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
  },
  {
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
  },
];


function Banner() {
 

    let idx = Math.floor(Math.random() * 10) // 0 to 9

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original/${bannerUrls[idx].backdrop_path})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">
        Avenger Endgame
      </div>
    </div>
  );
}

export default Banner;
