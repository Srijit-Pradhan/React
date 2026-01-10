import React from "react";

const card = (props) => {
  return (
    <div className="one-card h-100 w-80 bg-amber-50 m-10 rounded-lg shadow-lg overflow-hidden">
      <div className="images relative">
        <img
          className="h-30 w-screen"
          src={props.user.bannerImage}
          alt=""
        />
        <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
          <img
            src={props.user.profileImage}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-14 px-4">
        <div className="profile">
          <h4 className=" text-black text-3xl font-bold text-center">{props.user.name}</h4>
          <h1 className=" text-black px-4 text-center">{props.user.username}</h1>
        </div>
        <p className="text-black text-center">
          {props.user.bio}
        </p>
      </div>
      <div className="followers flex justify-around mt-6 px-4">
        <div className="media-count text-black text-center">
          <h1 className="font-bold text-xl">{props.user.media}</h1>
          <h5>Media</h5>
        </div>
        <div className="followers-count text-black text-center">
          <h1 className="font-bold text-xl">{props.user.followers}</h1>
          <h5>Followers</h5>
        </div>
        <div className="following-count text-black text-center">
          <h1 className="font-bold text-xl">{props.user.following}</h1>
          <h5>Following</h5>
        </div>
      </div>
    </div>
  );
};

export default card;
