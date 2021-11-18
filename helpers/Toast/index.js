import React from 'react';
import { toast } from 'react-toastify';
// import './style.scss';

const Toast = ({ bgClass, content1, content2 = '' }) => (
  <div className={`toast-container ${bgClass} text-white`}>
    <i className="far fa-bell pl-2 pr-3" />
    <div className="content text-left">
      {content1}
      <br />
      {content2}
    </div>
  </div> 
);

function handleToastify(bgClass, content1, content2 = '') {
  toast(<Toast bgClass={bgClass} content1={content1} content2={content2} />, {
    position: toast.POSITION.TOP_RIGHT,
    className: `${bgClass} toastify`,
    progressClassName: 'toast-progress',
    autoClose: 4000,
    hideProgressBar: true,
    closeButton: false,
  });
}

export default handleToastify;
