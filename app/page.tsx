import Body from "@/components/Body";
import Card from "@/components/Card";
import Question from "@/components/Question";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <Body />
      <div>
        <h1 className=" text-4xl text-center font-bold mt-5">
          Here is our content
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <h1 className=" text-4xl text-center font-bold mt-10 mb-10 underline">FAQ</h1>
      <div>
        <Question />
      </div>
    </div>
  );
}
