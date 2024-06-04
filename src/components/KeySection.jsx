
const questions = [
  {
    logo: "/key_logo1.svg",
    question: "What to order",
    answer:
      "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
  },
  {
    logo: "/key_logo1.svg",

    question: "What to order",
    answer:
      "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
  },
  {
    logo: "/key_logo1.svg",
    question: "What to order",
    answer:
      "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
  },
  {
    logo: "/key_logo1.svg",
    question: "What to order",
    answer:
      "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
  },
];

function KeySection() {
  return (
    <div className="borders pt-24 md:pt-36 pb-20 md:pb-44">
      <div className="bg-red-200s">
        <div className="text-[26px] md:text-4xl lg:text-[55px] font-extrabold text-center">
          Four key questions answered by Crest
        </div>
        {/*  */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4 mt-20 lg:mt-36 tracking-wider flex-wrap justify-items-center">
          {questions.map((e, index) => (
            <div
              key={index}
              className="bg-purple-300/30 flex flex-col px-7 md:px-10 pt-10 pb-14 gap-5 rounded-xl max-w-[350px]"
            >
              <div>
                <img src={e.logo} alt="" className="h-14 w-14" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold tracking-wide">
                {e.question}
              </div>
              <div className="text-lg">{e.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeySection;
