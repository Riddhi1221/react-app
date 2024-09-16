import './App.css';
import Result from './Components/Result'

function App() {
  return (
    <table border="1" cellSpacing="5" cellPadding="10">
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
      <Result no="1" name="reena" Sub1="40" Sub2="60" Sub3="80" Sub4="90" Sub5="70"  />
      <Result no="2" name="feni" Sub1="40" Sub2="60" Sub3="80" Sub4="90" Sub5="70" />
      <Result no="3" name="harmi" Sub1="40" Sub2="60" Sub3="80" Sub4="90" Sub5="70" />
      <Result no="4" name="janvi" Sub1="40" Sub2="60" Sub3="80" Sub4="90" Sub5="70" />
      <Result no="5" name="chandrika" Sub1="40" Sub2="60" Sub3="80" Sub4="90" Sub5="70" />
      <Result no="6" name="riddhi" Sub1="40" Sub2="60" Sub3="80" Sub4="90" Sub5="70" />

    </table>
  );
};

export default App;

