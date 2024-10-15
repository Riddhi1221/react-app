import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

const Searchdata = () => {
  const [active, setActive] = useState("All");
  const initialData = [
    { Name: 'Cat', Category: 'Animal' },
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
  const handleSearch = () => {
    const searchCategory = prompt("Enter the Searching category:");
    if (searchCategory) {
      const updatedData = data.filter((item) => item.Category === searchCategory);
      setData(updatedData);
    }
  };
  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Storing Value</h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '30px 0px' }}>
        <thead>
          <tr>
      <th style={{ border: '1px solid black', padding: '8px' }}><button onClick={() => setActive('All')} className={active === 'All' ? 'active' : ''}
         style={{
          backgroundColor: active === 'All' ? 'red' : 'white',color: active === 'All' ? 'white' : 'black', border: active === 'All' ?'none' : 'none',
        }}>
        All
      </button></th>
      <th style={{ border: '1px solid black', padding: '8px' }}><button onClick={() => setActive('Animal')} className={active === 'Animal' ? 'active' : ''}     style={{
                backgroundColor: active === 'Animal' ? 'red' : 'white',color: active === 'Animal' ? 'white' : 'black', border: active === 'Animal' ?'none' : 'none',
              }}>
        Animal
      </button></th>
      <th style={{ border: '1px solid black', padding: '8px' }}><button onClick={() => setActive('flower')} className={active === 'flower' ? 'active' : ''}
         style={{
          backgroundColor: active === 'flower' ? 'red' : 'white',color: active === 'flower' ? 'white' : 'black', border: active === 'flower' ?'none' : 'none',
        }}>
        Flower
      </button></th>
      <th style={{ border: '1px solid black', padding: '8px' }}><button onClick={() => setActive('Car')} className={active === 'Car' ? 'active' : ''}
       style={{
        backgroundColor: active === 'Car' ? 'red' : 'white',color: active === 'Car' ? 'white' : 'black', border: active === 'Car' ?'none' : 'none',
      }}>
        Car
      </button></th>
      <th style={{ border: '1px solid black', padding: '8px' }}><button onClick={() => setActive('Bird')} className={active === 'Bird' ? 'active' : ''}
       style={{
        backgroundColor: active === 'Bird' ? 'red' : 'white',color: active === 'Bird' ? 'white' : 'black', border: active === 'Bird' ?'none' : 'none',
      }}>
        Bird
      </button></th>
      <th style={{ border: '1px solid black', padding: '8px' }}><button onClick={() => setActive('Ornament')} className={active === 'Ornament' ? 'active' : ''}
       style={{ padding:'10px 20px',
        backgroundColor: active === 'Ornament' ? 'red' : 'white',color: active === 'Ornament' ? 'white' : 'black', border: active === 'Ornament' ?'none' : 'none',
      }}>
      Ornament
      </button></th>

      <th style={{ border: '1px solid black', padding: '8px' }}><button onClick={handleAdd} style={{ marginBottom: '10px',
        backgroundColor: active === 'handleAdd' ? 'red' : 'white',color: active === 'handleAdd' ? 'white' : 'black', border: active === 'handleAdd' ?'none' : 'none',
      }}>Add New Item</button>
      </th>
      <th style={{ border: '1px solid black', padding: '8px' }}><button onClick={handleSearch} style={{ marginBottom: '10px',
        backgroundColor: active === 'handlesearch' ? 'red' : 'white',color: active === 'handlesearch' ? 'white' : 'black', border: active === 'handlesearch' ?'none' : 'none',
      }}><SearchIcon sx={{fontSize: '30px 0px'}}/></button>
      </th>

      </tr>
        </thead>
        </table>
        <h2 >Category List</h2>
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
                <button onClick={() => handleEdit(index)} style={{ marginRight: '10px',background:'none',border:'0px' }}><CreateIcon  sx={{fontSize: '30px 0px'}}/></button>
                <button  onClick={() => handleDelete(index)} style={{background:'none',border:'0px' }}><DeleteIcon sx={{fontSize: '30px 0px'}}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Searchdata;
