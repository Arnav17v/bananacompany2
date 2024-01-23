import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isitthere, Setisithere] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const thisfunc = () => {
    Setisithere(!isitthere);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      // Navigate to the search result page
      window.location.href = `/search/${encodeURIComponent(searchQuery)}`;
    }
  };
  return (
    <>
      <div className="m-auto max-w-[88rem] px-[6.25rem] pt-[2rem] pb-[4rem] flex items-center justify-between font-inter text-[2rem] font-extrabold leading-normal">
        <div>
          <Link className="hover:text-yellow-400" href={"../"}>Banana</Link>
        </div>
        <div>
        <button onClick={thisfunc}>🍌</button>
          <input
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
            className={
              isitthere
                ? "rounded-xl w-64 text-black transition-all duration-500"
                : "w-0 transition-all duration-300"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
