import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const firstname = user.firstname;
  return (
    <div className="bg-secondary dark:bg-primaryDark h-screen w-full overflow-hidden">
      <div className="mt-14">
        <img
          src="/Cover.png"
          alt=""
          srcset=""
          className="object-cover h-40 lg:h-60 w-screen"
        />
      </div>
      <div
        className="w-16 h-16 md:w-24 md:h-24 lg:h-28 lg:w-28 rounded-full flex items-start ml-10 md:ml-20 lg:ml-24"
        style={{ marginTop: "-60px" }}
      >
        <img
          src={`https://avatars.dicebear.com/api/initials/${firstname}.svg`}
          alt=""
          srcset=""
          className="w-16 h-16 rounded-full md:w-24 md:h-24 lg:h-28 lg:w-28"
        />
      </div>
      <div className="ml-10 md:ml-20 lg:ml-24 text-primary dark:text-gray-400 text-lg lg:text-2xl font-medium">
        <h1>{`${firstname} ${user.lastname}`}</h1>
      </div>
      <hr className="my-4 lg:my-6 border-gray-400 dark:border-gray-700" />
      <div className="grid md:gap-8 grid-cols-2 grid-rows-3 container mx-auto">
        <div className="flex items-start justify-start flex-col text-primary dark:text-gray-400 ml-6 text-md md:text-xl md:ml-24">
          <h1 className="text-gray-500">Name:</h1>
          <h1 className="font-medium">{`${firstname} ${user.lastname}`}</h1>
        </div>
        <div className="text-primary dark:text-gray-400 text-md md:text-xl mr-11 md:mr-24">
          <h1 className="text-gray-500">Email:</h1>
          <h1 className="font-medium">{user.email}</h1>
        </div>
        <div className="flex items-start justify-start flex-col text-primary dark:text-gray-400 ml-6 text-md md:text-xl md:ml-24">
          <h1 className="text-gray-500">Contact No:</h1>
          <h1 className="font-medium">+91-{user.phone}</h1>
        </div>
        <div className="text-primary dark:text-gray-400 md:text-xl md:mr-24">
          <h1 className="text-gray-500">Department:</h1>
          <h1 className="font-medium">{user.department}</h1>
        </div>
        <div className="text-primary dark:text-gray-400 ml-6 text-md md:text-xl md:ml-24">
          <h1 className="text-gray-500">Industry</h1>
          <h1 className="font-medium">{user.industry}</h1>
        </div>
      </div>
      <Link to="/updateprofile">
        <div className="flex md:items-center justify-center md:justify-end md:mr-24 mx-12">
          <button className="px-3 py-1 md:px-4 md:py-2 bg-primary rounded-md text-white dark:bg-darkBtn dark:text-gray-300 dark:hover:bg-indigo-600">
            Edit Profile
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Profile;
