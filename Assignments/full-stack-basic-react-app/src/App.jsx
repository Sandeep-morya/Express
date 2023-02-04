import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [list, setList] = useState([])
  const [text,setText] = useState('');
  const getdata = async () => {
    const { data } = await axios.get('http://localhost:3000/');
    setList(data)
  }

  const handleAdd = async() =>{
    const data =await axios.post('http://localhost:3000/',{title:text,status:false})
		console.log(`: handleAdd -> data`, data)
    
  }

  useEffect(() => {
    getdata()
  }, [])
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {list.map(e =>
        <h3 key={e.id}>{e.title} {":"} {e.status ? 'Completed' : 'Pending'}</h3>
      )}
    </div>
  )
}

export default App