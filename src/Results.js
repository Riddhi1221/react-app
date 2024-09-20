import './App.css';
import Result from './Components/Result'; 


function App() {
  let data=[
    {
      no : '1',
      name : 'kalu',
      sub1 : 59,
      sub2 : 69,
      sub3 : 90,
      sub4 : 60,
      sub5 : 70
    },
    {
      no : '2',
      name : 'balu',
      sub1 : 90,
      sub2 : 69,
      sub3 : 98,
      sub4 : 60,
      sub5 : 70
    },
    {
      no : '3',
      name : 'lalu',
      sub1 : 60,
      sub2 : 69,
      sub3 : 70,
      sub4 : 60,
      sub5 : 70
    },
  ]
    return (
      <table border="1" cellSpacing="5" cellPadding="10">
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>sub1</th>
            <th>sub2</th>
            <th>sub3</th>
            <th>sub4</th>
            <th>sub5</th>
            <th>Total</th>
            <th>avg</th>
            <th>min</th>
            <th>max</th>
          </tr>
          </thead>
          <tbody>
           {
           data.map((el,i) => {
            return  <Result no={el.no} name={el.name} sub1={el.sub1} sub2={el.sub2} sub3={el.sub3} sub4={el.sub4} sub5={el.sub5} key ={i} />
           }) } 
          {/* <Result no="1" name="reena" sub1="40" sub2="60" sub3="80" sub4="90" sub5="70" />
          <Result no="2" name="feni" sub1="40" sub2="60" sub3="80" sub4="90" sub5="70" />
          <Result no="3" name="harmi" sub1="40" sub2="60" sub3="80" sub4="90" sub5="70" />
          <Result no="4" name="janvi" sub1="40" sub2="60" sub3="80" sub4="90" sub5="70" />
          <Result no="5" name="chandrika" sub1="40" sub2="60" sub3="80" sub4="90" sub5="70" />
          <Result no="6" name="riddhi" sub1="40" sub2="60" sub3="80" sub4="90" sub5="70" /> */}
          </tbody>
      </table>
    );
  }
  
  export default App;