import React, { useState, useEffect } from "react";
import edit from "../../../assets/Edit.jpg";
import "./Output.css";
import jsPDF from "jspdf";
import axios from "axios";
import dload from "../../../assets/downloadbtn.png";
const Output = () => {
  const [content, setContent] = useState("");
  const [Edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/llm-output");
        setContent(response.data.output.replace(/\n/g, "<br>"));
        console.log(response.data.text);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const handleContent = () => {
    setEdit(true);
    setContent(content);
  };

  const handlePdf = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: [20, 20],
    });
    const contentWithoutBr = content.replace(/<br>/g, "\n");
    doc.text(contentWithoutBr, 1, 1);

    doc.save("two-by-four.pdf");
  };

  return (
    <div className="Output_Main">
      <div className="Output_Main_upper">
        <div className="Dowload_Main">
          <div className="Download_Main_Left">
            <div className="Download_Main_Left_Contents">
              <button onClick={handleContent}>
                Edit as per Your Choises
                <img src={edit} alt="" />
              </button>
            </div>
          </div>
          <div className="Download_right">
            <div className="Download_Format_div">
              <select name="Dowload_Format" id="Download_Format">
                <option value="selct method">Choose Format</option>
                <option value="PDF">PDF</option>
                <option value="Word">Written Format</option>
              </select>
            </div>
            <img
              src={dload}
              alt="download"
              className="w-[100px] h[100px] mr-2"
              onClick={handlePdf}
            />
          </div>
        </div>
      </div>
      <div className="Output_Container_Rowwise">
        <div className="Output_Container">
          <div className="Language_selector_main"></div>
          <div
            contentEditable={Edit}
            onClick={handleContent}
            onChange={handleContent}
            className="Generating_container"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Output;
