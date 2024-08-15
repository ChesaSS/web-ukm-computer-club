import { useState } from 'react';

function Test() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold leading-tight text-black lg:text-3xl">
            Pertanyaan yang sering ditanyakan
          </h2>
          <p>Yuk cek, siapa tau pertanyaan ada disini 😊</p>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 flex flex-col">

          {questions.map((item, index) => (
            <div key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleAnswer(index)}
              >
                <span className="flex text-lg font-semibold text-black">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openQuestion === index ? 'rotate-0' : 'rotate-180'}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${openQuestion === index ? 'block' : 'hidden'}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 textbase mt-9">
          Still have questions?
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline"> Contact our support </span>
        </p>
      </div>
    </section>
  );
}

export default Test;
