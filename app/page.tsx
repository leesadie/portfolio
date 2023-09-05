import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Work from "./components/work/Work";
import Work2 from "./components/work/Work2";

export default function Home() {

  return (
      <div className="gap-10">
        <Hero />
        <div className="xl:hidden">
          <Work />
        </div>
        <div className="hidden xl:block mx-8 xl:ml-36 mt-16 xl:mr-36">
          <Work2 />
        </div>
      </div>
  )
}
