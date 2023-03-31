import React, {useState} from 'react'



export default function Form(props){
    const handleupclick=()=>{
        // console.log('uppercase was clicked');
        let newtext= text.toUpperCase();              //fuction 1
        setText(newtext);

    }

    const handleonchange=(event)=>{                             //function 2
        // console.log('on change');
        setText(event.target.value);

    }


    const handledownclick=()=>{
        // console.log('uppercase was clicked');
        let newtext= text.toLowerCase();              //fuction 3
        setText(newtext);

    }

    

    const handleclearclick=()=>{
                    
        setText('');                                        //fuction 4

    }

    
    const[text,setText] =useState("");
    return(
        <>
        <div className='container' style={{color : props.mode==='dark' ? 'white' : '#09326f'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light' ? 'white' : 'grey', color : props.mode==='dark' ? 'white' : '#09326f'}} onChange ={handleonchange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleupclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handledownclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear all</button>
            
           

        </div>
        
        <div className='container my-3 ' style={{color : props.mode==='dark' ? 'white' : '#09326f'}}>
        <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words , {text.length} characters</p>
            <p>{0.008 *text.split(" ").length} Minutes read</p>
            <h2 className='my-3'>Preview</h2>
            <p>{text.length>0?text:"Write something to preview here..."}</p>

        </div>
        
        </>
        
       

    )

}