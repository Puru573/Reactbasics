import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[
                {id:1,task:"Revise JS"},
                {id:2,task:"Revise DSA level-1"},
            ],
            currTask:"",
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            currTask:e.target.value,
        });
    };
    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:""
        })
        
    }
    handleDelete=(id)=>{
        let narr=[];
        narr=this.state.tasks.filter((taskobj)=>{
            return taskobj.id!=id
        });
        this.setState({
            tasks:[...narr]
        });
    };
  render() {
    console.log("render method is called");
    return (//jsx start
        <div>
            <input type="text" value={this.state.currTask}onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Submit</button>
            {//use when we need to write js in jsx
                this.state.tasks.map((taskobj)=>{ //arrow fn apane parent ka this leta he
                    return(
                        <li key={taskobj.id}>
                            <p>{taskobj.task}</p>
                            <button onClick={()=>this.handleDelete(taskobj.id)}>Delete</button>
                        </li>//humne function expression ko store kra lya ek dusre fn ke andar and jb vo call hoga than first fn chal jayega
                    );
                })
            }
            
            
          
        </div>
    );
  }
}
