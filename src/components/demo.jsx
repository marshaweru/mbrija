import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from '../assets';

const demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      {/*search*/}
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center" onSubmit={() =>{}}>
          <img src="linkIcon" alt="link_icon" className="absolute left-0 my-2 ml-3 w-5"/>
          <input type="text" />
        </form>
      </div>

    </section>
  )
}

export default demo