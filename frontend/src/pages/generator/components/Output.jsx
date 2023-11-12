import React, { useState, useEffect } from "react";
import edit from "../../../assets/Edit.jpg";
import "./Output.css";
import jsPDF from "jspdf";
import axios from "axios";
import dload from "../../../assets/downloadbtn.png";

// ... (imports)

const Output = () => {
  const [content, setContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/llm-output");
        const output = response.data.output.replace(/\n/g, "<br>");
        setContent(output);
        setOriginalContent(output);
        console.log(response.data.text);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
    if (!editMode) {
      setContent(originalContent);
    }
  };

  const handleBlur = () => {
    setOriginalContent(document.getElementById("editableDiv").innerHTML);
  };

  const handlePdf = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: [20, 20],
      margin: [10, 10, 10, 10],
    });

    const contentWithoutBr = originalContent.replace(/<br>/g, "\n"); // Use original content for PDF
    doc.text(contentWithoutBr, 1, 1);

    doc.save("form.pdf");
  };

  return (
    <div className="Output_Main">
      <div className="Output_Main_upper">
        <div className="Dowload_Main">
          <div className="Download_Main_Left">
            <div className="Download_Main_Left_Contents">
              <button onClick={handleToggleEditMode}>
                {editMode ? "Save Changes" : "Edit as per Your Choices"}
                <img src={edit} alt="" />
              </button>
            </div>
          </div>
          <div className="Download_right">
            <div className="Download_Format_div">
              <button
                name="Download_Format"
                id="Download_Format"
                onClick={handlePdf}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Output_Container_Rowwise">
        <div className="Output_Container">
          <div className="Language_selector_main"></div>
          <div
            contentEditable={editMode}
            onBlur={handleBlur}
            id="editableDiv"
            className="Generating_container"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Output;
