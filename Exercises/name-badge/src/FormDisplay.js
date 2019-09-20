import React from 'react'

function FormDisplay(props){

    //check form fields
    const fields = Object.values(props).slice(0,7)
    let buttonStatus = false
    for (let i = 0; i < fields.length; i++){
        if (!fields[i]){
            buttonStatus = true
            break
        } 
    }
    const {firstName, lastName, email, birthPlace, phone, food, bio, handleChange, handleSubmit} = props;

    return(
        <div className="form-display">
            <form className="input-form" onSubmit = {handleSubmit}>

                <input type="text" name="firstName" value={firstName} onChange= {handleChange} placeholder = "First Name" />
                <input type="text" name="lastName" value={lastName} onChange= {handleChange} placeholder = "Last Name" />
                <input type="email" name="email" value={email} onChange= {handleChange} placeholder = "Email"/>
                <input type="text" name="birthPlace" value={birthPlace} onChange= {handleChange} placeholder = "Place of Birth"/>
                <input type="tel" name="phone" value={phone} onChange= {handleChange} placeholder = "Phone"/>
                <input type="text" name="food" value={food} onChange= {handleChange} placeholder = "Favorite Food"/>
                <textarea type="text" className="bio" name="bio" value={bio}  onChange= {handleChange}placeholder = "Tell us about yourself"/>
                
                {buttonStatus && <div className = 'blank-fields'>please fill out every field!</div>}
                <button type="submit" disabled= {buttonStatus}>Submit</button>
            </form>
        </div>
    )
}

export default FormDisplay