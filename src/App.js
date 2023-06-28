import {useState, useRef} from 'react';
import Nav from './Nav';
import './App.css';

function App() {

    const localData = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]

    const [list, setList] = useState(localData)
    const input = useRef("");

    const [searchQuery, setSearchQuery] = useState("")

    const search = (e) =>{
      e.preventDefault();
      setSearchQuery(e.target.value.toLowerCase())
    }

    console.log(list);
    const addToList = (e) => {
        if (input.current.value !== "") {
            setList([...list, input.current.value])
            localStorage.setItem('list',JSON.stringify([...list, input.current.value]));
            input.current.value ="";
        }
    }

    // const list1 = ["josy","Anandhi","Jonnie","Ronnie",33]
    // console.log(list1)
    // console.log(JSON.stringify(list1))
    // localStorage.setItem('list',JSON.stringify(list1));
    
    // const localData = localStorage.getItem('list')
    // console.log(localData +" ----> "+ [JSON.parse(localData)])
    // const tempList = JSON.parse(localData);
    // console.log(tempList)

    const deleteTask = (index) =>{
        const taskList = [...list];
        taskList.splice(index,1);
        setList(taskList);
        localStorage.setItem('list',JSON.stringify([...taskList]));

    }

    const updateTask = (e,index) =>{
      const taskList = [...list];
      taskList.splice(index,1,e.target.value);
      setList(taskList);
      localStorage.setItem('list',JSON.stringify([...taskList]));
    }

    const keyDetect = (e)=>{
      if(e.key === "Enter"){
        addToList(e)
      }
    }

    return (
      <>
        <Nav query={search} />
        <div className="App">
            <header className="App-header container-fluid">
                <h1>Todo List ❤️</h1>
                <div className="d-grid gap-2 col-10 col-sm-10 col-md-6 col-lg-5 col-xl-3 mx-auto">
                    <div className="input-group mb-3 mt-3">
                        <input ref={input} onKeyDown={(e)=>{keyDetect(e)}} type="text" className="form-control" placeholder="type..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <button className="btn btn-primary" onClick={addToList} type="button" id="button-addon2">Add</button>
                    </div>
                    
                        <ul className="list-group rounded">
                            {
                            list.map((value, index) => {
                              if(list[index].toLowerCase().includes(searchQuery)){
                              return (
                                        <div key={index} className="d-flex align-items-center bg-light-subtle ps-3 pe-2 py-1 border-0 border-bottom">
                                            <input onChange={(e)=>{updateTask(e,index)}}  className='border-0' value={value}/>
                                            <div className="d-flex ms-auto">
                                                <button type="button" className="btn btn-outline-primary border-0" onClick={()=>{deleteTask(index)}}>
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                    )
                              }
                                
                            })
                        } </ul>
                    
                </div>
            </header>
        </div>
    </>
    );
}

export default App;
