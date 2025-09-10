import GptSearchBar from "./GptSearchBar";
import { Logo } from "utils/constants";

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="h-[62rem]" src={Logo} alt="logo" />
      </div>
      <GptSearchBar />
      {/* GPT Search bar
      GPT MovieSuggestions */}
    </div>
  );
}

export default GptSearch;
