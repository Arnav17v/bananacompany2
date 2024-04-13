import Link from "next/link";
import { SetStateAction, useContext, useState } from "react";
import IdContext from "./idContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isitthere, Setisithere] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { id, setId } = useContext(IdContext);

  const thisfunc = () => {
    Setisithere(!isitthere);
  };

  const handleInputChange = (e: any) => {
    setId(e.target.value);
  };
  console.log(id);
  const router = useRouter();
  const handleEnterKeyPress = (e: any) => {
    if (e.key === "Enter") {
      router.push(`/search/hi`);
    }
  };
  return (
    <>
      <div className="font-inter m-auto flex max-w-[88rem] items-center justify-between px-[6.25rem] pb-[4rem] pt-[2rem] text-[2rem] font-extrabold leading-normal">
        <div>
          <Link className="hover:text-yellow-400" href={"/"}>
            Banana
          </Link>
        </div>
        <div>
          <button onClick={thisfunc}>🍌</button>
          <input
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
            className={
              isitthere
                ? "w-64 rounded-xl text-black transition-all duration-500"
                : "w-0 transition-all duration-300"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
