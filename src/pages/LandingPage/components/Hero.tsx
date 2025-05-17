import { Trophy } from "lucide-react";
import { Logo, SoccerField } from "../../../assets";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={SoccerField}
          alt="Football stadium"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Organize. Compete. <br />
              <span className="text-[#5585b5]">Own the Game.</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Whether you're hosting a local tournament or forming your dream
              team our platform makes it effortless. Create tournaments, invite
              teams, and track matches all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#142d4c] hover:cursor-pointer hover:shadow-2xl rounded-md text-white font-semibold px-4 py-2 flex items-center gap-2 text-lg">
                <Trophy className="h-5 w-5" />
                Create Your Tournament
              </button>

              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-md text-lg transition">
                Browse Tournaments
              </button>
            </div>

            <p className="text-sm text-white/70 mt-6">
              No sign-up needed to explore. Join as a player or create a team
              today.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="bg-white/5 w-10/12 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-2xl">
              <img src={Logo} alt="Logo" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
