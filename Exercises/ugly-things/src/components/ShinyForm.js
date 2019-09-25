import React from 'react';

export default function ShinyForm(props){

    return (
        <form onSubmit = {props.handleSubmit}>
            <input 
                name = "title"
                value = {props.title}
                onChange= {props.handleChange}
                type="text"
                placeholder="Title"/>
            <input 
                name = "description"
                value = {props.description}
                onChange= {props.handleChange}
                type="text"
                placeholder="Description"/>
            <input 
                name = "imgUrl"
                value = {props.imgUrl}
                onChange= {props.handleChange}
                type="text"
                placeholder="Image URL"/>
            <button>Submit</button>
        </form>
    )
}

