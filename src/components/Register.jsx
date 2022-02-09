import React from "react";

const Register = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Üye Ol</h1>
            <hr />
          </div>
          <p className="text-center">Lütfen aşağıdaki bilgileri doldurunuz</p>
        </div>
        <div className="d-grid gap-2 col-9 mx-auto row d-flex justify-content-center">
          <div className="col-md-6">
            <form>
              <div class="mb-0">
                <label for="exampleForm" class="form-label"></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="İlk Adınız"
                />
              </div>

              <label for="exampleFormControlInput1" class="form-label"></label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Soy Adınız"
              />

              <label for="exampleForm" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleForm"
                placeholder="E-Posta"
              />

              <label for="exampleForm" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleForm"
                placeholder="Parola"
              />

              <div class="d-grid gap-2 col-6 mx-auto mt-3 ">
                <button type="submit" class="btn btn-warning">
                 HESABIMI OLUŞTUR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
