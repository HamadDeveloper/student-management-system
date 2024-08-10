import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function StudentList() {
    const [students, setStudents] = useState([]);
    const studentCollection = collection(db, 'students');

    useEffect(() => {
        const getStudents = async () => {
            const studentSnapshot = await getDocs(studentCollection);
            const studentList = studentSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setStudents(studentList);  
        };

        getStudents(); 
    }, [students]); 

    return (
        <>
            <h1>Student List</h1>
            <div className="students-list">
                {students.map((student) => (
                    <div key={student.id} className="student">
                        <h2>{student.name}</h2>
                        <p>Age: {student.age}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default StudentList;
