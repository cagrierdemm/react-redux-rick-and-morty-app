import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Link
} from "react-router-dom";
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { fetchEpisodes } from '../../redux/episodesSlice';
import ScrollToTop from "react-scroll-to-top";


function Episodes() {
    const episodes = useSelector((state) => state.episodes.items);
    const status = useSelector((state) => state.episodes.status);
    const hasNextPage = useSelector((state) => state.episodes.hasNextPage);
    const error = useSelector((state) => state.episodes.error);
    const num = useSelector((state) => state.episodes.num);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchEpisodes());
        }

    }, [dispatch, status])

    if (status === "failed") {
        return <Error message={error} />;
    }

    if (!episodes) {
        return null;
    }
    
  return (
    <div>
        <div className='container-fluid'>
            <nav className="navbar bg-light fixed-top">
                <div className="container ">
                    
                <div className="navbar-brand d-flex align-items-center">
                        <div className='d-inline-block'>
                            <Link to="/"><img src="./navLogo.jpg" alt="Logo" height="40" className="d-inline-block align-text-top" /></Link>
                        </div>
                        <div className="thinLine d-inline-block ms-3">&nbsp;</div>
                        <div className='d-inline-block'>
                            <span className='d-block ms-3'><b>Episodes</b></span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <span className='me-4'><Link to="/"><b>Characters</b></Link></span>
                        <span><Link to="/locations"><b>Locations</b></Link></span>
                    </div>
                    
                    
                </div>
            </nav>
            <div className='row py-4 mt-5 pt-5'>
                <div className='col-md-5 col-sm-12 d-flex align-items-center justify-content-md-end justify-content-sm-center justify-content-center'><img src="./logo.png" className="img-fluid rounded-start " alt="Logo" style={{ maxWidth: "320px" }} /></div>
                <div className='col-md-7 col-sm-12 ps-md-5 d-flex align-items-center justify-content-md-start justify-content-sm-center justify-content-center text-center text-md-start'>
                    <h1 className='text-light display-1 py-4 text-sm-center text-md-start fw-bold' style={{ backgroundColor: '#1b1b1b' }}>Rick and Morty<br /> Episodes</h1></div>


            </div>
            <div className='row mx-5'>

                {episodes.map(episode => (

                    <div key={episode.id} className="card p-0 mx-5 boxShadow border-0 mx-auto mt-md-5 mb-md-0 mb-5 w-100 col-3" style={{ maxWidth: "400px" }}>
                            <div className="row g-0">
                                <div className="col-md-12">
                                    <div className="card-body ms-2" >
                                        <h3 className="card-title mt-2"><strong>{episode.name}</strong></h3>
                                        <p className='card-text mt-4 mb-1'><small className="text-body-secondary">Episode:</small></p>
                                        <h6 className="card-text">{episode.episode}</h6>
                                        <p className='card-text mt-4 mb-1'><small className="text-body-secondary">Air Date:</small></p>
                                        <h6 className="card-text">{episode.air_date}</h6>
                                        
                                    </div>
                                </div>
                            </div>
                    </div>

                ))}

            </div>
            {status === "loading" && <Loading />}
            {hasNextPage && status !== "loading" && <div className='row my-5  d-flex justify-content-center align-content-center'>
                <button className='btn btn-light w-25' onClick={() => dispatch(fetchEpisodes(num))}>Load More</button>
            </div>}
            {!hasNextPage && <div className='row my-5  d-flex justify-content-center align-content-center'>
                <button className='btn btn-light w-25' disabled>There is nothing to be shown</button>
            </div>}

            </div>
            <ScrollToTop smooth color="#000000" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} width='20' height='20'/>
            <div className="position-fixed bottom-0 start-0 mb-4 ms-5" style={{ zIndex: '1000' }}>
                <div className='mb-4 bg-black br-1' >
                    <a href='https://github.com/cagrierdemm'><img src='./github.png' alt='Github Logo' width={40}/></a>
                </div>
                <div className='bg-black mb-3 br-2'>
                    <a href='https://www.linkedin.com/in/cagrierdemm/'><img src='./linkedin.png' alt='Linkedin Logo' width={40}/></a>
                </div>
            </div>
    </div>
  )
}

export default Episodes;