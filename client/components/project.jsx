import React from 'react';

function Project(props) {
  const textColor = props.current === 1 || props.current === 2 ? 'text-white' : null;
  const liveCode = props.current !== 0 ? <a className={`${textColor} my-5 mr-3`} href={props.projects[props.current].gitLink}>
    {props.projects[props.current].gitTitle }
    <i className = "fas fa-external-link-alt ml-2"></i>
  </a> : null;
  return (
    <>
      <h3 className={`${textColor} mb-3 pt-3`}>{props.projects[props.current].title}</h3>
      <h5 className={`${textColor} my-3`}>{props.projects[props.current].description}</h5>
      {liveCode}
      <a className={`${textColor} my-5`} href={props.projects[props.current].link}>
        {props.projects[props.current].linkName}
        <i className="fas fa-external-link-alt ml-2"></i>
      </a>
    </>
  );

}

export default Project;
