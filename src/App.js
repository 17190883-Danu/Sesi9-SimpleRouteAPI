import './App.css';
import { useEffect, useState} from 'react';
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
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
            </tr>
        </thead>
      <tbody>
      {data && data.map((item) => (
              <tr key={item.userId}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
             </tr>
        ))}
         </tbody>
      </table>
    </div>
  );
}

export default App;
