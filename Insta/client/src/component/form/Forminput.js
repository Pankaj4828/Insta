// import React, { useState } from 'react'
// import axios from "axios";
// import Header from '../header/header'
// import FileBase64 from "react-file-base64";
// import "./form.css"
// const Forminput = () => {

//   const [input, setInput] = useState({name:"",image:"",location:"",description:""});
//   const [formd, setformd] = useState({file:[],});
  
  

//   const handlesubmit= async(e)=>{
//     e.preventDefault()
//   const formdata=new FormData();
//   formdata.append('name',input.name)
//   formdata.append('location',input.location)
//   formdata.append('description',input.description)
//   formdata.append('file',input.image)
//   // formdata.append('file',formd.file)
  
  

// axios.post("http://localhost:5000/upload",formdata,{
//       })
//       .then((resp) => console.warn(resp))
//       }

//   return (
//     <>
//     <Header />
//     <div className='postdata'> 
//       <div className='inputfield'>
//       <form action="#"  encType='multipart/form-data' onSubmit={handlesubmit}>
//       <FileBase64
//               type="file"
//               multiple={false}
//               onDone={({ base64 }) =>
//               setInput({ ...input, image: base64 })
//               }
//             />
//       {/* <input type="file" name='file' onChange={(e)=>setformd({...formd,file:e.target.files[0]})} />  */}
//            <br />       
//           <input type="text" name='author' placeholder='author'  onChange={(e)=>setInput({...input, name:e.target.value})} />
//             <input type="text" name='location' placeholder='Location' onChange={(e)=>setInput({...input,location:e.target.value})}  />
        
            
//             <input type="text" name='description' className='description' placeholder='Description' onChange={(e)=>setInput({...input,description:e.target.value})} />
//             <br />
//              <button type='submit'>post</button>
           

//         </form>
//       </div>
        
//         </div>
//     </>
//   )
// }

// export default Forminput