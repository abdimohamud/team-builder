import React  from 'react'


function Form (props) {
    const {values, update, submit} = props

    const onChange = evt => {
    
        const { name, value } = evt.target
       
        update(name, value)
      }
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return(
        <div className="form">
            <form className='form container' onSubmit={onSubmit}>
    <div className='form-group submit'>
      <h2>Add a Team Member:</h2>
     
      
    </div>

    <div className='form-group inputs'>
      

      <div className="user">
      <label>Username:&nbsp;
        
        <input
          value={values.username}
          onChange={onChange}
          name='username'
          placeholder='type username'
          maxLength='20'
          type="text"
        />
      </label>
      </div>
      <div className="email">
      <label>Email:&nbsp;
       
        <input
          value={values.email}
          onChange={onChange}
          name='email'
          placeholder='type email'
          maxLength='30'
          type='email'
        />
      </label>


      </div >
      
      <div className="role">

      <label>Role:&nbsp;
       
        <select onChange={onChange} value={values.role} name="role">
          <option value="">-- Select a Role --</option>
          <option value="frontend">Front-End</option>
          <option value="backend">Team Lead</option>
          <option value="fullstack">Alumni</option>
        </select>
      </label>
      </div>
      

      
     
     
    </div>
    <button disabled={!values.username || !values.email || !values.role ? true : false}>submit</button>
  </form>
        </div>
    )
}
export default Form;