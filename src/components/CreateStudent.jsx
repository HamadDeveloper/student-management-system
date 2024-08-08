import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'


function CreateStudent() {
  const  [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [isCreatingStudent, setIsCreatingStudent] = useState(false)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
          setIsCreatingStudent(true)
          await addDoc(collection(db,'students'),{
            name:name,
            age:Number(age)
            
          })
          setName:('')
          setAge:('')
          setIsCreatingStudent(false)
        } catch (error) {
          console.log("Error creating user : ",error)
          setIsCreatingStudent(false)
        }
    }
  return (
    <form onSubmit={handleSubmit} className='form'>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter student name' required />
        <input type="number"value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter student age' />
        <button type='submit'>{isCreatingStudent?'Creating Student...':'Create Student'} </button>
    </form>
  )
}

export default CreateStudent
