import React, { useEffect } from "react";
import Faq from "../components/Faq";
import axios from "axios";

export default function FaqSearch() {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);

  const getFaqData = async () => {
    await axios({
      method: "get",
      url: "/api/v1/faqs",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setData(response.data.faq);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFaqData();
  }, []);

  // const filteredFaqs =  if (search.length === 0) {
  //   return data;
  // } else {
  const filteredFaqs = data.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mt-16">
        <div className="relative py-16 bg-cover flex justify-center items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white border-gray-500 ">
              How can we help you?
            </h1>
            <div className="bg-background rounded relative mt-6 lg:mt-14 py-4 pl-4 flex items-center w-full">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search for answers"
                className=" ml-4 w-full bg-transparent text-base leading-none text-black placeholder-black focus:outline-none"
                data-test="faq-search"
              />
            </div>
          </div>
        </div>
      </div>
      {filteredFaqs.map((item) => (
        <Faq question={item.question} answer={item.answer} key={item._id}/>
      ))}
    </>
  );
}
