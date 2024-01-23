"use client";
import blogs from "@/app/blogs.json";
import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import { useState, useEffect } from "react";

const Tarticle = ({ params }:{params:any}) => {
  const [selectedBlog, setSelectedBlog] = useState({
    "id": "0",
    "title": "Art of Photography",
    "content": "Mastering the art of photography and capturing moments.",
    "artic": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ea165b2-8225-4c88-90bc-0fccbec0fb0c/dg11qbe-bd15da2e-7da9-487e-b3f6-7a8035791deb.png/v1/fill/w_900,h_900,q_80,strp/myartstyle_com_types_of_photography_styles_by_webartgallery_dg11qbe-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlYTE2NWIyLTgyMjUtNGM4OC05MGJjLTBmY2NiZWMwZmIwY1wvZGcxMXFiZS1iZDE1ZGEyZS03ZGE5LTQ4N2UtYjNmNi03YTgwMzU3OTFkZWIucG5nIiwiaGVpZ2h0IjoiPD05MDAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzhlYTE2NWIyLTgyMjUtNGM4OC05MGJjLTBmY2NiZWMwZmIwY1wvd2ViYXJ0Z2FsbGVyeS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.WntkjNYoINZ_TsOQuXajHedGjby6foqtggayWX50MAA"
  });
  const [blogFound, setBlogFound] = useState(false);

  useEffect(() => {
    for (const blog of blogs) {
      if (blog.id === params.idd) {
        setSelectedBlog(blog);
        setBlogFound(true);
        break;
      
    }
  }},[params.id])

  if (!blogFound) {
    return <div className="text-[500px] flex items-center justify-center transform rotate-fast">🍌</div>
  }

  // Render the selected blog title
  return (
    <>
      <Navbar />
      <div className="max-w-[66rem] m-auto">
        <div className="flex justify-center text-6xl text-yellow-400 border-b-2 border-yellow-400 pb-4">{selectedBlog.title}</div>
        <img src={`${selectedBlog.img}`} alt="" className="m-auto py-6 w-[66rem]"/>
        <div className="text-2xl pt-8 max-w-[50rem] m-auto text-yellow-400">&quot{selectedBlog.content}&quot</div>
        <div className="text-xl max-w-[50rem] m-auto py-6 mt-6 text-justify">{selectedBlog.artic}</div>
      </div>
      <Footer />
    </>
  );
};

export default Tarticle;
