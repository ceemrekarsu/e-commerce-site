import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Hakkımızda</h1>
                        <p className="lead mb-4">
                        "Kendine gelmek için 'unutulmak' gibisi yoktur. Bizimle önemli olan arasına girmek için kimse gelmez. Başkaları bizden ne kadar yüz çevirirse, o kadar bizim kusursuzluğumuz için çalışırlar. Bizi terk ederek bizi kurtarırlar."
                        Yeni Tanrılar, Emil Michel Cioran

                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Bize Ulaşın</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.jpg" alt="About Us" height="550" width="auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About