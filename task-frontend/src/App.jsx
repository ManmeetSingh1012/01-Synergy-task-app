import { useEffect, useState } from 'react'
import Todobox from './components/todobox';
import axios from 'axios';


function App() {
  const [count, setCount] = useState(0)

  const [login, setLogin] = useState(false)
  const [id, setId] = useState()
  const [todo, settodo] = useState([])

  const [change,setchange] = useState(false)

  const [error, seterror] = useState("")




  useEffect(() => {


    const data = localStorage.getItem('user_id')
    console.log('Data:', data)

    
    const fetchtodo = async () => { 

      try{

        await axios.get(`http://localhost:3000/api/v1/data/get/${data}`).
        then((response)=>{
          console.log('Data fetched',response.data.get)
          settodo(response.data.get)
          
          
        }).catch((err)=>{ 
          console.log(err.response.data)
          
        })

      }catch(error)
      {
        console.log(error)
      }
    }
    fetchtodo()



   }

  
  
  ,[change])


  console.log("data",todo)

  useEffect(() => { 

    const data = localStorage.getItem('user_id')
    if (!data) {
      console.log('No data found')
      setLogin(false)
    }
    else {
      console.log('Data found', data)
      setId(data)
      setLogin(true)
      console.log('Login:', id)
    }

  },[])


  
    



   
    
  



  

  const [newtodo, setnewtodo] = useState('')

  const handlesubmit = (e) => {

    e.preventDefault()
    console.log('Task:', newtodo)
    const id = localStorage.getItem('user_id')


    const settodo = async () => {
      try {
        await axios.post(`http://localhost:3000/api/v1/data/create/${id}`, { content : newtodo, currentstatus: 'uncomplete' }).
          then((response) => {
            console.log(response.data)
setchange(!change)
            console.log('Task Added',response.data)
            

          }).catch((err) => {
            console.log(err.response.data)
            seterror(err.response.data)
          })


      } catch (e) {
        console.log(e.message)
        seterror(err.message)
      }
      // You can add more logic here, like form validation or sending data to a server

    }

    settodo()
  

  }


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const registeruser = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);



    const setuser = async () => {

      try {
        await axios.post('http://localhost:3000/api/v1/user/register', { name: name, email: email }).
          then((response) => {
            console.log(response.data)

            setLogin(true)
            setId(response.data._id)
            localStorage.setItem('user_id', response.data._id)

          }).catch((err) => {
            console.log(err.response.data)
            seterror(err.response.data)
          })


      } catch (e) {
        console.log(e.message)
        seterror(err.response.message)
      }
      // You can add more logic here, like form validation or sending data to a server


    }

    setuser()
    

  }

  const loginuser = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);



    const setuser = async () => {

      try {
        await axios.post('http://localhost:3000/api/v1/user/login', { email: email }).
          then((response) => {
            console.log(response.data)

            

            console.log(response.data.user._id)
            localStorage.setItem('user_id', response.data.user._id)
            setId(response.data.user._id)

            setLogin(true)

          }).catch((err) => {
            console.log(err.response.data.message)
            seterror(err.response.data.message)
          })


      } catch (e) {
        console.log(e.message)
        seterror(err.message)
      }
      // You can add more logic here, like form validation or sending data to a server

     
    }

    setuser()

    const id = localStorage.getItem('user_id')
    console.log(id)

  }
 

  const [register, setRegister] = useState(false)


  const handledelete = (id) => {

    try {
      axios.delete(`http://localhost:3000/api/v1/data/delete/${id}`).
       then((response) => {
         console.log(response.data)
         setchange(!change)
         


       }).catch((err) => {
         console.log(err.response.data)
         seterror(err.response.data)
       })


   } catch (e) {
     console.log(e.message)
     seterror(err.message)
   }
   // You can add more logic here, like form validation or sending data to a server

 
 
  }

  if (!login) {


    if(register)
    {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <span className='text-red-600 text-center my-2'>{error}</span>
            <form onSubmit={registeruser}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>

              <p className="text-center mt-1" onClick={()=>setRegister(!register)}>Login</p>


            </form>
          </div>
        </div>
      );
    }else
    {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <span className='text-red-600 text-center my-2'>{error}</span>

            <form onSubmit={loginuser}>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>

              <p className="text-center mt-1" onClick={()=>setRegister(!register)}>Register</p>
            </form>
          </div>
        </div>
      );
    }
    




  } else {
    return (
      <div className='w-full'>


        
          

          <div className='flex flex-row flex-wrap justify-end items-center m-2'>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

            <button type='button' onClick={()=>{
              localStorage.removeItem('user_id')
              setLogin(false)
              settodo([])
              setchange(!change)
            }} className='rounded-xl bg-blue-500 text-white p-2 m-1'>LogOut</button>
          </div>

          <h1 className=' text-gray-800 text-center text-xl mt-3 mb-3'>Welcome to Task App</h1>
        





        <form onSubmit={handlesubmit}>
          <div className='flex flex-row flex-wrap justify-center '>
            <input type='text' onChange={(e) => setnewtodo(e.target.value)} placeholder='Add Task' className='border rounded-xl border-gray-400 p-2' ></input>
            <button type='submit' className='rounded-xl bg-blue-500 text-white p-2 m-1'>Add Task</button>
          </div>

        </form>


        <div class="w-full mt-5  px-5  mb-5">
          <hr class="border-t border-gray-300 h-[2px]"></hr>
        </div>

        <div className='flex flex-row flex-wrap justify-evenly'>

          <div className='flex flex-wrap  flex-col items-center'>

            <div className='flex flex-row items-center'>


              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>

              <h1 className='text-gray-800 text-center text-lg '>In Complete</h1>

            </div>


            {
  todo.map((content, index) => (
    <Todobox 
      key={index} 
      status={"In Complete"} 
      data={content.content}
      deletetodo={()=>handledelete(content._id)}
    />
  ))
}
            

            
          </div>

          <div className='flex flex-wrap  flex-col items-center'>

            <div className='flex flex-row items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>

              <h1 className='text-gray-800 text-center text-lg'>In Progress</h1>
            </div>

            <Todobox status={"Progress"} />

          </div>

          <div className='flex flex-wrap  flex-col items-center'>

            <div className='flex flex-wrap flex-row align-middle justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              <h1 className='text-gray-80<Todobox status={"In Complete"}/>0 text-center text-lg '>Completed</h1>
            </div>

            <Todobox status={"Completed"} />

          </div>
        </div>


      </div>

    )
  }

}

export default App;
