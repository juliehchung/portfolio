import React from 'react';

function Skills(props) {
  return (
    <div className="d-flex flex-column justify-content-center py-5" id="skills">
      <div className="container mx-auto pt-5">
        <h1 className="heading col-12 text-center pb-3">SKILLS</h1>
        <div className="row py-5">
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-javascript-plain colored"></i>
            <h5 className="m-3">JavaScript</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-react-original colored"></i>
            <h5 className="m-3">React.js</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-nodejs-plain colored"></i>
            <h5 className="m-3">Node.js</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-express-original colored"></i>
            <h5 className="m-3">Express</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-typescript-plain colored"></i>
            <h5 className="m-3">TypeScript</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <span className="icon iconify d-block m-auto" data-icon="logos-aurelia"></span>
            <h5 className="m-3">Aurelia</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-angularjs-plain colored"></i>
            <h5 className="m-3">Angular</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-sass-original colored"></i>
            <h5 className="m-3">SASS</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <span className="icon iconify d-block m-auto" data-icon="logos:c-sharp" data-inline="false"></span>
            <h5 className="m-3">C#</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-php-plain colored"></i>
            <h5 className="m-3">PHP</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-postgresql-plain colored"></i>
            <h5 className="m-3">PostgreSQL</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon mysql devicons devicons-mysql"></i>
            <h5 className="m-3">MySQL</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon jquery devicons devicons-jquery"></i>
            <h5 className="m-3">jQuery</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-bootstrap-plain colored"></i>
            <h5 className="m-3">Bootstrap 4</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-html5-plain colored"></i>
            <h5 className="m-3">HTML5</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-css3-plain colored"></i>
            <h5 className="m-3">CSS3</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
