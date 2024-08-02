import { useState,useEffect } from 'react'
import './App.css';
function App() {
      
      const [expense,setExpense] = useState(0);
      const [income,setIncome] = useState(0);
      const [balance,setBalance] = useState(0);
      const [amount,setAmount] = useState();
      const [date,setDate] = useState("");
      const [description,setDescription] = useState("");
      const [type,setType] = useState("");
      const [transactions,setTransactions] = useState([]);

      
      useEffect(() => {
        setBalance(income - expense);
      }, [income, expense]);

      function handlesubmit(e){
        e.preventDefault();
        if(amount && date && description && type && type !== 'None' ){
        const newTransaction ={
            amount:parseFloat(amount),
            date,
            description,
            type
        }
      
        setTransactions([...transactions,newTransaction]);
        if(type === "Income"){
            setIncome(income=>income+newTransaction.amount);
           
        }
        else if(type === "Expense"){
             setExpense(expense=>expense+newTransaction.amount);
             
            }
        }
        setAmount(0);
    setDate('');
    setDescription('');
    setType('');
      }
        
      
      
  return (
    <>
      <div className='bg-teal-100 rounded-lg {{ fontFamily: Poppins }}'>
        <h1 className='text-2xl mb-5 font-medium'>Finance Tracker</h1>
        <h2 className='text-4xl font-black'>${balance}.00</h2>
        <div className='m-3 flex'>
        <div className='flex-1'>
          <h3>Income</h3>
          <p className='text-green-600 font-bold text-xl'>${income}.00</p>
        </div>
        <div className='flex-1'>
          <h3>Expense</h3>
          <p className='text-red-600 font-bold text-xl'>${expense}.00</p>
        </div>
        </div>
        <form className='' onSubmit={handlesubmit} >
          <div className="pt-3">
          <input className='shadow-xl rounded p-4 h-7 w-2/5' type="number" placeholder='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
          <input className='shadow-xl rounded h-7 p-4 w-2/5 ml-2'type="date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
          </div>
          <div className='mt-2 relative'>
          <input className=" rounded h-7 ml-3 w-2/5 p-4  shadow-xl  " type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
          <select className='w-1/5  shadow-xl rounded p-1 mr-20 ml-2 ' value={type} onChange={(e)=>setType(e.target.value)}>
            <option>None</option>
            <option>Income</option>
            <option>Expense</option>
          </select>
          </div>
          <button className= 'bg-blue-500 hover:bg-blue-700 text-white mt-5 font-bold p-2 text-sm rounded'>Add Transaction</button>
        </form>
        <div className='mt-10'>
        <h2 className='text-xl text-violet-700  hover:text-violet-950 font-bold mb-4'>Transaction List</h2>
          <ul className='space-y-2'>
            {transactions.map((transaction, index) => (
              <li key={index} className='flex justify-between border border-slate-700  rounded bg-gray-200 hover:bg-gray-300'>
                <span className='flex-1 font-bold text-green-700'>${transaction.amount}</span>
                <span className='flex-1 font-semibold text-orange-600'>{transaction.type}</span>
                <span className='flex-1 text-left font-semibold text-sky-500 pl-4'>{transaction.description}</span>
                <span className='flex-1 text-right pr-8 '>{transaction.date}</span>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
