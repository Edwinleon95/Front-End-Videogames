import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearDetailState, getVideogameDetails } from "../../redux/actions/actions";
import { IconArrow } from "../icons/IconArrow";
import Loading from "../loading/Loading";
import './detail.css'


const VideogameDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail)
    useEffect(() => {
        dispatch(getVideogameDetails(id))
        return () => {
            dispatch(clearDetailState())
        }
    }, [dispatch, id])

    return (
        <div className="container">
            {
                Object.keys(detail).length ?
                    <main className="container-detail" >
                        <img className="image" src={detail.img} alt={detail.name}></img>

                        <Link className="link-home" to='/home'><IconArrow /></Link>

                        <section>
                            <h2>{detail.name}</h2>
                            <span className="container-genres">
                                {detail.genres.map(e => <p key={e}>{e}</p>)}
                            </span>

                            <p className="rating">⭐{detail.rating}⭐</p>
                            <p className="description">{detail.description}</p>

                            <p className="relasedate">🕚{detail.releaseDate}🕚</p>

                            <span className="footer">
                                🎮{detail.platforms.map(e => <p key={e}>{e}</p>)}🎮
                            </span>
                        </section>
                    </main>
                    : <Loading />
            }
        </div>
    )
}

export default VideogameDetail;