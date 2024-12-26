import MezList from "./_layouts/MezList";
import { Navbar } from "./_layouts/Navbar";
import Services from "./_layouts/Services";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-tr from-stone-300/10 to-stone-700/70">
      <Navbar />
      <div className="px-20 pt-16 pb-1 h-screen absolute flex justify-center items-center top-0 left-0 w-full">
        <div className="w-1/3 h-full flex flex-col justify-center items-center gap-5">
          <div className="h-1/4 w-full flex  items-center">
            <p className="font-mono text-6xl font-semibold">
              Welcome User <br />
              To FriendMez
            </p>
          </div>
          <div className="h-3/4 w-full flex flex-col gap-2">
            <div>
              <p>Avelleble Mezes-</p>
            </div>
            <Services />
          </div>
        </div>
        <div className="w-2/3 h-full">
          <MezList />
        </div>
      </div>
    </div>
  );
}
