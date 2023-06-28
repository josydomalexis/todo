import {useState, useRef} from 'react';
import Nav from './Nav';
import './App.css';
import Checked from './Checked';

function App() {

    const localData = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]

    const [list, setList] = useState(localData)
    const input = useRef({});

    const [searchQuery, setSearchQuery] = useState("")


    console.log(list);
    const addToList = (e) => {
        if (input.current.value !== "") {
            let newTask = {task:input.current.value,status:false}
            setList([...list, newTask])
            localStorage.setItem('list',JSON.stringify([...list, newTask]));
            input.current.value ="";
        }
    }

    const keyDetect = (e)=>{
        if(e.key === "Enter"){
          addToList(e)
        }
    }

    const deleteTask = (index) =>{
        const taskList = [...list];
        taskList.splice(index,1);
        setList(taskList);
        localStorage.setItem('list',JSON.stringify([...taskList]));

    }

    const updateTask = (e,index) =>{
        const taskList = [...list];
        console.log(e.target.value)
        taskList[index].task = e.target.value;
        setList(taskList);
        localStorage.setItem('list',JSON.stringify([...taskList]));
    }

    const search = (e) =>{
        e.preventDefault();
        setSearchQuery(e.target.value.toLowerCase())
    }

    const checkTask = (index) =>{
        const taskList = [...list];

        if(list[index].status === true){
            taskList[index].status=false
            setList(taskList)
            localStorage.setItem('list',JSON.stringify([...taskList]));
        }
        else{
            taskList[index].status=true
            setList(taskList)
            localStorage.setItem('list',JSON.stringify([...taskList]));
        }
    }

    return (
    <>
        <Nav query={search} />
        <div className="App">
            <header className="App-header container-fluid">
                <h1>Todo List ❤️</h1>
                <div className="d-grid gap-2 col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3 mx-auto">
                    <div className="input-group mb-3 mt-3">
                        <input ref={input} onKeyDown={(e)=>{keyDetect(e)}} type="text" className="form-control form-control-lg" placeholder="type..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <button className="btn btn-primary" onClick={addToList} type="button" id="button-addon2">Add</button>
                    </div>
                    <ul className="list-group rounded">
                        {
                            list.map((value, index) => {
                                if(list[index].task.toLowerCase().includes(searchQuery)){
                                    return (
                                        <div key={index} className="d-flex align-items-center bg-light-subtle ps-3 pe-2 py-1 border-0 border-bottom">
                                            <input onChange={(e)=>{updateTask(e,index)}}  className={list[index].status===true?"border-0 strike":"border-0"} value={list[index].task}/>
                                            <div className="d-flex ms-auto">
                                                <Checked status={list[index].status} index={index} updateStatus={()=>{checkTask(index)}}/>
                                                <button type="button" className="btn btn-outline-primary border-0 btn-lg" onClick={()=>{deleteTask(index)}}>
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                                
                            })
                        } 
                    </ul>
                </div>
            </header>
        </div>
    </>
    );
}

export default App;
