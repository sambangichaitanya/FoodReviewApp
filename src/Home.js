import React ,{ useState , useEffect } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { collection , onSnapshot, orderBy, query } from 'firebase/firestore';
import db from './firebase';
import { Button } from '@mui/material';


function Home() {
    const [ recipes , setRecipes ] = useState([]);
    let array = [];
    const [ array1 , setArray1 ] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const q = query(collection(db,"recipes"),orderBy("timestamp",'desc'));
          onSnapshot(q,(snapshot)=>{
            setRecipes((snapshot.docs.map(doc=>({id:doc.id,users:doc.data()}))));
          })
      },[]);
      console.log(recipes);
      recipes.map((key)=>{
        array.push([key.users.HotelName,key.users.Location,key.users.ItemName,key.users.cost,key.users.Review,key.users.Rating])
      })
      console.log(array)
    
    useEffect(()=>{
      setArray1(array);
    },[]);
    const go1 = async()=>{
        navigate('/Upload')
    }
    const myFunc = (event) =>{
        let input = document.getElementById('myInput');
        let filter = input.value.toUpperCase();
        if(filter!=="")
          array = array.filter(item=>item[1].toUpperCase().indexOf(filter)>-1)
          setArray1(array);
    }
  return (
    <div className='Home'>
        <div className='vip'>
            <h1>Food Review Platform</h1>
            <div className='top'>
                <Button onClick={go1} color='secondary' variant='contained'>Upload Your experience</Button>
                <input type="text" onKeyUp={myFunc} id="myInput" placeholder="Search by location" title="Type in a name"></input>
            </div>
        </div>
        <div className='bottom'>
        <table id='myTable' border={"5px solid black"}>

                <tr className='header'><th><h2>Hotel Name</h2></th><th><h2>Location</h2></th><th><h2>Item Name</h2></th><th><h2>Cost</h2></th><th><h2>Review</h2></th><th><h2>Rating out of 10</h2></th></tr>
            {
              array1.map((key)=>{
                let input = document.getElementById('myInput');
                let filter = input.value.toUpperCase();
                if(key[1].toUpperCase().indexOf(filter)>-1)
                {
                  return <tr><td>{key[0]}</td><td>{key[1]}</td><td>{key[2]}</td><td>{key[3]}</td><td>{key[4]}</td><td>{key[5]}</td></tr>
                }
              })
            }
            <h5>{array1.length} items found</h5>
            <h5>All Items</h5>
            <tr className='header'><th><h2>Hotel Name</h2></th><th><h2>Location</h2></th><th><h2>Item Name</h2></th><th><h2>Cost</h2></th><th><h2>Review</h2></th><th><h2>Rating out of 10</h2></th></tr>
            
            {
              recipes.map((key)=>{
                return <tr><td>{key.users.HotelName}</td><td>{key.users.Location}</td><td>{key.users.ItemName}</td><td>{key.users.cost}</td><td>{key.users.Review}</td><td>{key.users.Rating}</td></tr>
              })
            }
            </table>
        </div>
    </div>
  )
}

export default Home