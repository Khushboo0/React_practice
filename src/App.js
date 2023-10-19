import logo from './logo.svg';
import './App.css';
import { TopNav } from './myComps/TopNav';
import { ToDoContainer } from './myComps/ToDoContainer';

function App() {
  const onDel = (arr)=>{
    console.log('Delete button clicked!!',arr);
  };
  let todoArr=[{
    sno:1,
    title: 'list1',
    desc: 'desc 1'
  },{
    sno:2,
    title: 'list2',
    desc: 'desc 2'
  },{
    sno:3,
    title: 'list3',
    desc: 'desc 3'
  }]
  return (
    <>
    
    <TopNav title='test' searchBar={true}/>
    <ToDoContainer todoarr={todoArr} onDel={onDel}/>
    </>
  );
}

export default App;
