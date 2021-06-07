// import React,{Component} from 'react';

// class App extends Component {
//   state = { 
//     courses:[{}],
//     newCoursename:""
//     // author:""
//    }

//    async componentDidMount(){
//      let response = await fetch('http://localhost:5000/api/courses');
//      let resp = await response.json();
//      this.setState({courses : resp});
//      console.log(resp);
//    }

//    handleInputChange = (event) => {
//     let input_name = event.target.name;
//     let val = event.target.value;
//     if (input_name === "name") {
//       this.setState({newCoursename : val})
//     }
//     // }else if(input_name === "author"){
//     //   this.setState({author : val})
//     // }
//    }

//    deleteCourse = (id) => {
//      console.log(id);
//     //  fetch('http://localhost:5000/api/courses/' + id,{
//     //    method:"DELETE"
//     //  })

//     //  let response = await fetch('http://localhost:5000/api/courses');
//     //  let resp = await response.json();
//     //  this.setState({courses : resp});

//    }

//    submit = async() => {
//       if (this.state.name === "") {
//         alert("Enter name & then submit!");
//         return;
//       }
//       let data = {name : this.state.name};
//       let response = await fetch('http://localhost:5000/api/courses',{
//         method : "POST",
//         mode:"cors",
//         credentials:"same-origin",
//         headers:{
//           "Content-type" : "application/json"
//         },
//         redirect:"follow",
//         referrerPolicy:"no-referrer",
//         body: JSON.stringify(data)
//       })
//       let resp = await response.json();
//       console.log(resp);
//    }

//   render() { 
//     return ( 
//       <>
//         <label htmlFor="name">Enter Course Name:</label>
//         <input type="text" name="name" onChange={this.handleInputChange}/>
//         {/* <input type="text" name="author" onChange={this.handleInputChange}/> */}
//         <button type="button" onClick={this.submit}>Submit</button>
//         {this.state.courses.map((course,i) => <h1 key={i} onClick={() => this.deleteCourse(course._id)}>{course.name}</h1>)}
//       </>
      
//      );
//   }
// }
 
// export default App;



import {useState} from 'react';
import axios from 'axios';

export default function App(){
  const [file,setFile] = useState();
  const [description,setDescription] = useState("");
  const [imagePath,setImagePath] = useState();

  const submit = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image",file);
    formData.append("description",description);



    const result = await axios.post('http://localhost:8080/images',formData,{ headers:
    {'Content-Type' : "multipart/form-data"}
  })

  console.log(result);
  setImagePath(result.data.imagePath);
  

// backend -> genrate name -> storing image -> get the pathof image for accesing -> send this path to frotnend 

  }



  return(
    <div>
      <form onSubmit={submit}>
        <input
        type="file" 
        accept="image/*"  
        filename={file} 
        onChange = {e => setFile(e.target.files[0])}
        />
        <input 
        onChange={e => setDescription(e.target.value)}
        type="text" 
        />
        <button type="submit">Submit</button>
      </form>
      
      {imagePath ? <img src={"http://localhost:8080/" + imagePath} /> : "" }
    </div>
  );
  

}


