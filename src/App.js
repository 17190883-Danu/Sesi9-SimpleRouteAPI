import './App.css';
import { useEffect, useState, state } from 'react';
import axios from 'axios';
const api = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [data, setData] = useState([])
    const  fetchData = async () =>  {
  try{
    const response = await axios.get(api);
    // console.log('response ===>', response);
    setData(response.data);
  } catch (error) {
    console.log('error', error)
  }
}
useEffect(() => {
  fetchData();
}, [])

  return (
    <div className="App">
      <table>
        <thead>
        <tr>
            <td>Hallo</td>
            <td>Guys</td>
            </tr>
        </thead>
      <tbody>
      {data && Object.keys(data).map((item) => (
             <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
             </tr>
             
            //  <td>{(data.id[key])}</td>
            //  <td>{(data.title[key])}</td>
            //  <td>{(data.body[key])}</td> */}
            // </tr>
        ))}
         </tbody>
      </table>
    </div>
  );
}

export default App;
