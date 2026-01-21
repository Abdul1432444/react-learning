import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/PasteSlice";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        className="p-1 rounded-2xl min-w-[550px] mt-4 pl-2"
        type="search"
        placeholder="Search Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5   ">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border min-w-[550px] ">
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex flex-row gap-3 place-content-evenly">
                  <button>Edit</button>
                  <button>View</button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button>Copy</button>
                  <button>Share</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;
