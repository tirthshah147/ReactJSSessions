import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      input: '',
      isEditing: false,
      progress:0
    }
  }

  componentDidMount(){
    let all = localStorage.getItem("items") !== null ? JSON.parse(localStorage.getItem("items")) : [];
    this.setState({items : all})
    
  }

  componentDidUpdate(){
    localStorage.setItem("items",JSON.stringify(this.state.items));
    // localStorage.setItem("progress",this.state.progress);
  }

  onEditing = () => {
    this.setState({isEditing : true});
   }
  onChange = e => { 
    this.setState({input : e.target.value})
  }
  onSubmit = e => {
    e.preventDefault();
    if (this.state.input.length === 0 ) {
      alert("Pls enter something!");
      return 0;
    }
    const items = {id: new Date().getTime(), text : this.state.input, isCompleted:false};
    this.setState({items : this.state.items.concat(items), input:""},() => this.setProgress(this.state.items));
   }

  onClick = id => {
      console.log(id);
      let updated = this.state.items.map(item => {
        if(item.id === id){
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
      this.setState({items : updated}, () => this.setProgress(this.state.items));
   }


  onDelete = (id) => { 
    let filtered = this.state.items.filter(item => {
      return item.id != id;
    })
    this.setState({items : filtered}, () => this.setProgress(this.state.items));
    // this.setProgress(this.state.items);
  }

  setProgress = items => {
    let checked = items.filter(item => {return item.isCompleted})
    let progress = checked.length/items.length
    this.setState({progress : Math.floor(progress * 100)})
  }

  render() {
    return (
      <form id="todo-list" onSubmit={this.onSubmit}>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style={{width: this.state.progress + "%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.state.progress + "%"}</div>
        </div> 

        { this.state.items.length > 0 ?
        this.state.items.map((item,i) => {
          return(
            <span className="todo-wrap" key={i}>
            <span onClick={() => this.onClick(item.id)}>
              <input type="checkbox" checked={item.isCompleted}/>
              <label className="todo" ><i className="fa fa-check"></i>{item.text}</label>
            </span>

            <span className="delete-item" title="remove" onClick={() => this.onDelete(item.id)}>
              <i className="fa fa-times-circle"></i>
            </span> 
          </span>
          )
        }) : <p></p>
        }

        {this.state.isEditing ? <span className="todo-wrap" ><input onChange={this.onChange} value={this.state.input}/></span> : ""}
        
        <div id="add-todo" onClick={this.onEditing}><i className="fa fa-plus"></i> &nbsp; Add an Item</div>

      </form>
    );
  }
}

export default App;
