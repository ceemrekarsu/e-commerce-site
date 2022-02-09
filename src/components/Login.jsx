import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Oturum Aç</h1>
                        <hr />
                    </div>
                    <p  className="text-center">Lütfen e-posta adresinizi ve şifrenizi giriniz</p>
                </div>
                <div className="d-grid gap-2 col-9 mx-auto row d-flex justify-content-center">
                  
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">E-Posta</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="E-Posta"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Parola</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Parola"/>
                                
                                <button type="button" class=" btn btn-light mt-4 d-grid gap-2 col-8 mx-auto" id="exampleFormControlInput1" placeholder="Parola" data-action="toggle-recover-form">Parolanızı mı unuttunuz?</button>
</div>
                            <div class="d-grid gap-2 col-6 mx-auto ">
                                <button type="submit" class="btn btn-warning">GİRİŞ YAP</button>
                                </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Login