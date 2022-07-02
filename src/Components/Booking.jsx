import React from 'react'
import { useParams } from 'react-router-dom';
import "../styles/booking.css"

export default function Booking() {
    const { id } = useParams();
    const [data, setdata] = React.useState([])

    React.useEffect(() => {
        fetch(` http://localhost:8080/movies/${id}`)
            .then((res) => res.json())
            .then((res) => setdata(res))
            .catch((err) => console.log(err));
    }, [id]);
    console.log(data)

    return (
        <div>
          <div>
          <img className='bookingimg' src={data.poster_path}></img>
            <h2>Title:{data.title}</h2>
            <h3>OrginalLanguage : {data.original_language}</h3>
            <h2> originalTitle : {data.originaltitle}</h2>
            <p  style={{width:"40%",margin:"auto"}}>dataOverview :{data.overview}</p>
            <p>Popularity : {data.popularity}</p>
            <button className='bookbtn'>Book Ticket</button>
          </div>



        </div>
    )
}
