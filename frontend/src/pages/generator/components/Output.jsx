import React, { useState } from 'react'
import edit from '../../../assets/Edit.jpg'
import './Output.css'
import { jsPDF } from "jspdf";

const Output = () => {
  const[Edit,setEdit]=useState(false);
  const[content,setContent] =useState(
    
    
    `
Mens Hostel, Thrikkara
[Date]

To, 
The Principal, 
Model Engineering College, Thrikkara

Subject: [Subject of the Letter]

Dear Principal,

I hope this letter finds you in the best of health and spirits. I am writing to formally request [describe the purpose of the letter here]. 

[Provide more details about the purpose of the letter here. Explain why you are writing and add more important details.]

I assure you that [provide assurances if any]. I understand the importance of [mention the importance] and I am committed to [mention your commitment].

I kindly request your understanding and support during this [mention the situation or phase]. I am committed to my studies and have maintained good grades throughout, which can be verified from the school records.

Thank you for your attention to this matter. I look forward to your positive response.

Sincerely,
[Your Name]

    `
     );
  


  const handleEdit =() =>{
    setEdit(true)
  }
  // Landscape export, 2×4 inches
  const handleGeneratePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'in',
    format: [21, 30]
    });

    
    // Add text to the PDF
    doc.text(content, 2, 2);

    // Save the PDF
    doc.save('output.pdf');
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className='Output_Main'>
    <div className='Output_Main_upper'>     
    <div className='Dowload_Main'>
        <div className='Download_Main_Left'>
            <div  className='Download_Main_Left_Contents'>
                <button onClick={handleEdit} >Edit as per Your Choises<img src={edit} alt="" /></button>
                
            </div>       
        </div>
        <div className='Download_right'>
            <div className='Download_Format_div'>
            <button onClick={handleGeneratePDF}>hello</button>
                <select name="Dowload_Format" id="Download_Format">
                    <option value="selct method">Download</option>
                    <option>
                    <button  onClick={handleGeneratePDF} value="PDF">PDF</button>
                    </option>
                    <option value="Word">Written Format</option>
                </select>
            </div>
            
            {/*<div className='Download_right_columnwise'>
                <div className='Download_button'><h2>Download</h2></div>
                <button>Download</button>
             </div>*/}
            </div>
        </div> 
    </div>
    <div contentEditable={Edit} className='Output_Container_Rowwise'>
        <div className='Output_Container'>
          <div className='Language_selector_main'>
              <div className='Language_selector_button'>
                <button>MAL</button>
              </div>
          </div>
          <div className='Generating_container'> <p>
           <textarea
           value={content}
           onChange={handleContentChange} 
             contentEditable={handleEdit}
            >

           </textarea>      
           
          </p>
        </div>
        </div>  
    </div>
</div>
  )
}

export default Output
