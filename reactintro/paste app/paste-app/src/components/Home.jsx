import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row place-content-between mt-2">
        <input
          className="p-1 rounded-2xl mt-3 min-w-[66%] pl-3"
          type="text"
          placeholder="Enter Your Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="p-1 rounded-2xl mt-3" onClick={createPaste}>
          {pasteId ? "Update my paste" : "Create my paste"}
        </button>
      </div>

      <div>
        <textarea
          className="rounded-2xl p-1 min-w-[500px] mt-6 pl-3"
          placeholder="Enter Your Value"
          value={value}
          rows={20}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;
