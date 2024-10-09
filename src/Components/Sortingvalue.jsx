import React, { useState } from 'react';

const Sortingvalue = () => {
  const [active, setActive] = useState("All");
  const initialData = [
    { Name: 'cat', Category: 'Animal' },
    { Name: 'Dog', Category: 'Animal' },
    { Name: 'Bear', Category: 'Animal' },
    { Name: 'Lion', Category: 'Animal' },
    { Name: 'Tiger', Category: 'Animal' },
    { Name: 'Lotus', Category: 'flower' },
    { Name: 'Rose', Category: 'flower' },
    { Name: 'Lily', Category: 'flower' },
    { Name: 'Iris', Category: 'flower' },
    { Name: 'Daisy', Category: 'flower' },
    { Name: 'verna', Category: 'Car' },
    { Name: 'Swift', Category: 'Car' },
    { Name: 'Thar', Category: 'Car' },
    { Name: 'Creta', Category: 'Car' },
    { Name: 'Brezza', Category: 'Car' },
    { Name: 'Parrot', Category: 'Bird' },
    { Name: 'Eagle', Category: 'Bird' },
    { Name: 'Crow', Category: 'Bird' },
    { Name: 'Peacock', Category: 'Bird' },
    { Name: 'Myna', Category: 'Bird' },
    { Name: 'Ring', Category: 'Ornament' },
    { Name: 'Hair-Pin', Category: 'Ornament' },
    { Name: 'Nose-Pin', Category: 'Ornament' },
    { Name: 'Chain', Category: 'Ornament' },
    { Name: 'Bangles', Category: 'Ornament' },
  ];

  const [data, setData] = useState(initialData);

  // Filter data based on active category
  const filteredData = active === "All" ? data : data.filter(item => item.Category === active);

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleEdit = (index) => {
    const updatedData = [...data];
    const newName = prompt("Enter the new name:", updatedData[index].Name);
    if (newName) {
      updatedData[index].Name = newName;
      setData(updatedData);
    }
  };

  const handleAdd = () => {
    const newName = prompt("Enter the new item name:");
    const newCategory = prompt("Enter the category for the new item:");
    if (newName && newCategory) {
      const updatedData = [...data];
      updatedData.push({ Name: newName, Category: newCategory });
      setData(updatedData);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Storing Value</h1>
      <h2>Category List</h2>
      <button onClick={() => setActive('All')} className={active === 'All' ? 'active' : ''}>
        All
      </button>
      <button onClick={() => setActive('Animal')} className={active === 'Animal' ? 'active' : ''}>
        Animal
      </button>
      <button onClick={() => setActive('flower')} className={active === 'flower' ? 'active' : ''}>
        Flower
      </button>
      <button onClick={() => setActive('Car')} className={active === 'Car' ? 'active' : ''}>
        Car
      </button>
      <button onClick={() => setActive('Bird')} className={active === 'Bird' ? 'active' : ''}>
        Bird
      </button>
      <button onClick={() => setActive('Ornament')} className={active === 'Ornament' ? 'active' : ''}>
        Ornament
      </button>

      <button onClick={handleAdd} style={{ marginBottom: '10px' }}>Add New Item</button>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Category</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.Name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.Category}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <button onClick={() => handleEdit(index)} style={{ marginRight: '10px' }}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sortingvalue;
