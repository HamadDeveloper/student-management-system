
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateStudent from './components/CreateStudent'
import StudentList from './components/StudentList'
import { getDocs,collection } from 'firebase/firestore'
import { db } from './firebaseConfig';
import React, { useState, useEffect } from 'react';


function App() {
  const [students, setStudents] = useState([]);
  const studentCollection = collection(db, 'students');

  const getStudents = async () => {
    const studentSnapshot = await getDocs(studentCollection);
    const studentList = studentSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    setStudents(studentList);  
};

useEffect(() => {
  getStudents(); 
}, []); 

  return (
    <div className='app-container'>
     <h1 className='app-title'>Student Management system</h1>
     <CreateStudent getStudents = {getStudents}/>
     <StudentList students = {students} setStudents = {setStudents} getStudents= {getStudents}/>
       
    </div>
  )
}

export default App
