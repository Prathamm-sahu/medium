import { ChangeEvent, FC, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../config/url";
import { useNavigate } from "react-router-dom";

interface PublishProps {}

const Publish: FC<PublishProps> = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center pt-16">
        <div className="w-screen max-w-screen-lg">
          <h1 className="text-3xl font-bold pt-2 pb-4">Create Blog</h1>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-10 mt-4"
            placeholder="Title"
          />
          <TextEditor onChange={(e) => setDescription(e.target.value)} />
          <button
            onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description
              },{
                headers: {
                  Authorization: localStorage.getItem("token")
                }
              })

              navigate(`/blog/${response.data.id}`)
            }}
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200"
          >
            Publish Blog
          </button>
        </div>
      </div>
    </>
  );
};

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <form>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
        <div className="px-2 py-2 bg-white rounded-b-lg ">
          <label className="sr-only">Publish post</label>
          <textarea
            id="editor"
            onChange={onChange}
            rows={8}
            className="block w-full px-0 text-sm outline-none text-gray-800 bg-white border-0 d"
            placeholder="Write an article..."
            required
          />
        </div>
      </div>
    </form>
  );
}

export default Publish;
