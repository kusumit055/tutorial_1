import React from 'react'
//import TodoItem from './TodoItem';
//import TodoList from './TodoList';
//import Comp from './Comp';
 class Classes extends React.Component{
   
constructor(){
 super()
 this.state = {
  firstName : "",
  lastName : "",
  age : "",
  gender : "",
  destenation : "",
    isVegan : false,
    isKosher : false,
    isLoctoseFree  : false

 }
 this.headerChange = this.headerChange.bind(this)
}
headerChange(event){
  const {name, value,type,checked} = event.target
 type === "checkbox" ? 
  this.setState({
    [name] : checked
  })
  :
  this.setState({
[name] : value
  })
}

    render() {
     
   return (
    <div>
<form>

<input type='text' name='firstName' 
value={this.state.firstName}
 placeholder='First name'
  onChange={this.headerChange} />
<br />
<br />
<label>
<input type='text' name='lastName' 
value={this.state.lastName}
placeholder='Last name'
onChange={this.headerChange} />


</label>
<br />
<br />
<label>
<input name='age' value={this.state.age}
placeholder='age' onChange={this.headerChange} />

</label>
<br />
<br />
<label>
<input type='radio'
name='gender'
value='male'
onChange={this.headerChange}
checked = {this.state.gender === "male"} /> Male

</label>
<br />
<br />
<input type='radio' 
name='gender'
value='female'
onChange={this.headerChange}
checked = { this.state.gender === 'female'} /> Female

<br />
<br />
<select value={this.state.destenation} 
name='destenation'
 onChange={this.headerChange}>
<option value="germany">germany</option>
<option value="norway">germany</option>
<option value="north pole">north pole</option>
<option value="south pole">south pole</option>
</select>

<br />

<input type='checkbox'
    name='isVegan'
    checked={this.state.isVegan}
    onChange={this.headerChange} /> isVegan ?
<br />

<input type='checkbox'
    name='isKosher'
    checked={this.state.isKosher}
    onChange={this.headerChange} /> isKosher ?
<br />

<input type='checkbox'
    name='isLoctoseFree'
    checked={this.state.isLoctoseFree}
    onChange={this.headerChange} /> isLoctoseFree ?
<br />
<button>Submit</button>
<h1>Entered Information :</h1>
<p>Your Name : {this.state.firstName} {this.state.lastName}</p>
<p>Your Age: {this.state.age}</p>
<p>Your Gender: {this.state.gender}</p>
<p>Your destenation: {this.state.destenation} </p>

 <p>Your Dietary Restrictions : </p>
 <p>Vegan: {this.state.isVegan ? 'yes' : 'no' } </p> 
<p>Kosher: {this.state.isKosher ? 'yes' : 'no'} </p>
 <p>Loctose Free: {this.state.isLoctoseFree ? 'yes' : 'no'} </p> 
</form>
    </div>
   )
    }
 }
    export default Classes;
