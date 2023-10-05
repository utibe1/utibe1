import './App.css';

const Person = (props) => {
//   const ObjectTest = {
//     1: {
//         id : 1,
//         name:'ABC'
//     },
//     3: {
//         id: 3,
//         name:'DEF'
//     }
// }
  return(
    <div className="box">
      <h1>Name: {props.name}</h1>
      <h2>LastName: {props.lastname}</h2>
      <h3>Age: {props.age}</h3>
    </div>
  )
}

export default Person;