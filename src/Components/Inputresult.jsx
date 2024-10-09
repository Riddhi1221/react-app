import React, { useState } from 'react';

// Student Result CRUD Component
function App() {
  const [name, setName] = useState('');
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [subject3, setSubject3] = useState('');
  const [subject4, setSubject4] = useState('');
  const [subject5, setSubject5] = useState('');
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const s1 = Number(subject1);
    const s2 = Number(subject2);
    const s3 = Number(subject3);
    const s4 = Number(subject4);
    const s5 = Number(subject5);
    const total = s1 + s2 + s3 + s4 + s5;
    const percentage = total / 5;
    const min = Math.min(s1, s2, s3, s4, s5);
    const max = Math.max(s1, s2, s3, s4, s5);
    const grade = percentage >= 90 ? 'A' : percentage >= 80 ? 'B' : percentage >= 70 ? 'C' : percentage >= 60 ? 'D' : 'F';
    const passFail = [s1, s2, s3, s4, s5].every(score => score >= 35) ? 'Pass' : 'Fail';

    const newStudent = { name, subject1: s1, subject2: s2, subject3: s3, subject4: s4, subject5: s5, total, percentage, min, max, grade, passFail };

    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = newStudent;
      setStudents(updatedStudents);
      setEditingIndex(null);
    } else {
      const updatedStudents = [...students];
      updatedStudents.push(newStudent);
      setStudents(updatedStudents);
    }

    // Clear input fields
    setName('');
    setSubject1('');
    setSubject2('');
    setSubject3('');
    setSubject4('');
    setSubject5('');
  };

  const handleEdit = (index) => {
    const student = students[index];
    setEditingIndex(index);
    setName(student.name);
    setSubject1(student.subject1);
    setSubject2(student.subject2);
    setSubject3(student.subject3);
    setSubject4(student.subject4);
    setSubject5(student.subject5);
  };

  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
    console.log();
    
     
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Result CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Student Name" required />
        <input type="number" value={subject1} onChange={(e) => setSubject1(e.target.value)} placeholder="Subject 1" required />
        <input type="number" value={subject2} onChange={(e) => setSubject2(e.target.value)} placeholder="Subject 2" required />
        <input type="number" value={subject3} onChange={(e) => setSubject3(e.target.value)} placeholder="Subject 3" required />
        <input type="number" value={subject4} onChange={(e) => setSubject4(e.target.value)} placeholder="Subject 4" required />
        <input type="number" value={subject5} onChange={(e) => setSubject5(e.target.value)} placeholder="Subject 5" required />
        <button type="submit">{editingIndex !== null ? 'Update' : 'Add'}</button>
      </form>

      <h2>Student List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Subject 1</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Subject 2</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Subject 3</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Subject 4</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Subject 5</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Total</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Percentage</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Min</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Max</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Grade</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Pass/Fail</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.subject1}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.subject2}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.subject3}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.subject4}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.subject5}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.total}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.percentage.toFixed(2)}%</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.min}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.max}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.grade}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.passFail}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;