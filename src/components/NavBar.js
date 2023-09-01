import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const aLinks = links.map(link=>{
    const hrefLink = "#"+link
    return <a key={link} href={hrefLink}>{link}</a>
  })
  return <div>{aLinks}
  </div>;
}

export default NavBar;