import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetailState, getVideogameDetails } from "../../redux/actions/actions";
import Loading from "../loading/Loading";
import Nav from "../nav/Nav";
import './detail.css'


const VideogameDetail = () =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const detail = useSelector((state)=>state.detail)
    useEffect(()=>{
        dispatch(getVideogameDetails(id))
        return () => {
            dispatch(clearDetailState())   
        }
    },[dispatch,id])
return (
    <div>
        <div>
            <Nav/>
        </div>
        {Object.keys(detail).length ? (
            <main className="container-detail">
                <header className="header">
                <img className="image" src={detail.img} alt={detail.name}></img>
                </header>

                <section>
                    <h2>{detail.name}</h2>
                    <ul>
                    {detail.genres.map(e=><li>{e}</li>)}
                    </ul>
                    <p>{detail.description}</p>
                    
                    <p>🕚{detail.releaseDate}🕚</p>
                    <p>⭐{detail.rating}⭐</p>
                </section>

                <footer>
                   <ul>🎮{detail.platforms.map(e => <li>{e}</li>)}🎮</ul>
                </footer>           
            </main>
           
           
        ):( <div><Loading/></div>
        )}
       
    </div>
   
)
}

export default VideogameDetail;