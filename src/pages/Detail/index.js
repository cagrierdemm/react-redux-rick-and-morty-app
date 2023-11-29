import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import {
    Link
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function Detail() {
    const [data, setData] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${id}`).then(res => res.data).then((data) => { setData(data) });
    }, [id])

    return (
        <div className='container-fluid'>
            <nav className="navbar bg-light fixed-top">
                <div className="container ">

                <div className="navbar-brand " >
                        <Link to="/"><img src="./navLogo.jpg" alt="Logo" height="40" className="d-inline-block align-text-top" /></Link>
                    </div>
                    <div className="d-flex">
                        <span className='me-4'><Link to="/locations"><b>Locations</b></Link></span>
                        <span><Link to="/episodes"><b>Episodes</b></Link></span>
                    </div>


                </div>
            </nav>
            <div className='row py-4 mt-5 pt-5'>
                <div className='col-md-5 col-sm-12 d-flex align-items-center justify-content-md-end justify-content-sm-center justify-content-center'><img src="././logo.png" className="img-fluid rounded-start " alt="Logo" style={{ maxWidth: "320px" }} /></div>
                <div className='col-md-7 col-sm-12 ps-md-5 d-flex align-items-center justify-content-md-start justify-content-sm-center justify-content-center text-center text-md-start'>
                    <h1 className='text-light display-1 py-4 text-sm-center text-md-start fw-bold' style={{ backgroundColor: '#1b1b1b' }}>Rick and Morty<br /> Characters</h1></div>

            </div>

            <div className='row mx-5'>
                {!data ? <Loading /> :
                    <div>
                        <div className="card p-0 mx-5 boxShadow border-0 mx-auto mt-5 w-100 col-3" style={{ maxWidth: "700px" }}>
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={data.image} className="img-fluid w-100 rounded-start" alt={data.name} />
                                </div>
                                <div className="col-md-6 ps-3">
                                    <div className="card-body" >
                                        <h2 className="card-title mt-3"><strong>{data.name}</strong></h2>
                                        <p className="card-text mt-4 pt-md-4"><span className={data.status === 'Alive' ? 'green-circle me-2' : data.status === 'Dead' ? 'red-circle me-2' : 'gray-circle me-2'}></span>{data.status.charAt(0).toUpperCase() + data.status.slice(1)} - {data.species}</p>
                                        <p className='card-text mt-5 pt-md-5 mb-1'><span className="text-body-secondary">Last known location:</span></p>
                                        <h4 className="card-text">{data.location.name}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 text-center'>
                            <Link to="/"><button className='btn btn-light mt-5 mb-5 w-100 mx-auto' style={{ maxWidth: "700px" }}>Go Back To Characters</button>    </Link>
                        </div>
                    </div>
                }
            </div>
            <ScrollToTop smooth color="#000000" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} width='20' height='20'/>
            <div className="position-fixed bottom-0 start-0 mb-4 ms-5" style={{ zIndex: '1000' }}>
                <div className='mb-4 bg-black br-1' >
                    <a href='https://github.com/cagrierdemm'><img src='././github.png' alt='Github Logo' width={40}/></a>
                </div>
                <div className='bg-black mb-3 br-2'>
                    <a href='https://www.linkedin.com/in/cagrierdemm/'><img src='././linkedin.png' alt='Linkedin Logo' width={40}/></a>
                </div>
            </div>
        </div>
    )
}

export default Detail