import React from 'react'
import edit from '../../../assets/Edit.jpg'
import './Output.css'
const Output = () => {
  return (
    <div className='Output_Main'>
    <div className='Output_Main_upper'>     
    <div className='Dowload_Main'>
        <div className='Download_Main_Left'>
            <div className='Download_Main_Left_Contents'>
                <button>Edit as per Your Choises<img src={edit} alt="" /></button>
                
            </div>       
        </div>
        <div className='Download_right'>
            <div className='Download_Format_div'>
                <select name="Dowload_Format" id="Download_Format">
                    <option value="selct method">Download</option>
                    <option value="PDF">PDF</option>
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
    <div className='Output_Container_Rowwise'>
        <div className='Output_Container'>
          <div className='Language_selector_main'>
              <div className='Language_selector_button'>
                <button>MAL</button>
              </div>
          </div>
          <div className='Generating_container'> <p>Mens Hostel, Thrikkara <br />
        [Date]<br/>
To,<br /> 
The Principal,<br /> 
Model Engineering College, Thrikkara <br />
Subject: Leave Application for Malaria <br />
Respected Sir, <br />
I hope this letter finds you in the best of health and spirits. I am writing to formally request a leave of absence from college for a period of 30 days due to a recent diagnosis of malaria. My name is Alan John Chacko, and I am a student residing at the Men's Hostel in Thrikkara.
  I regret to inform you that I have been diagnosed with malaria, which requires immediate medical attention and a significant period of rest for a full recovery. My doctor has advised me to undergo a comprehensive treatment plan, which includes medication and adequate rest. As a result, I will be unable to attend classes or fulfill my academic responsibilities during this time.</p>
        </div>
        </div>  
    </div>
</div>
  )
}

export default Output
