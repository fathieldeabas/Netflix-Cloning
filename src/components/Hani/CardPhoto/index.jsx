import { FaPlayCircle } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import './cardphoto.css'
import { useHistory } from 'react-router-dom';

export const CardPhoto = (props) => {
  let icoColor = '#d6d4d4'
  const axios_url = props.axios_url;
  const history = useHistory();
  // handle click
  const handleClick = (event) => {
    event.preventDefault();
    history.push({ pathname: "/details", state: { axios_url: axios_url } });
  }

  const handlepreview = (event) => {
    event.preventDefault();
    history.push({ pathname: "/preview", state: { vidsrc: props.vidsrc } });
  }

  return (
    <>
      <div id='CardPhoto' className="card" >
        <video src={props.vidsrc} className="card-img-top" muted alt="" poster={props.imgsrc} />

        <div className="card-body">
          <div className='row' >

            <div className="col1 col-6" >
              <FaPlayCircle size='35px' onClick={handlepreview} style={{ color: icoColor }} />
            </div>

            <div className="col2 col-6" >
              <a onClick={handleClick} href="####">
                <IoIosArrowDropdown size='40px' style={{ color: icoColor }} />
              </a>
            </div>

          </div>
          <div className='line1' >
            <p className='match'>Rate {props.rate}/10</p>
            <p className='age'>{props.age}+</p>
            {props.season_num > 0 && <p className="season_num_p">S:{props.season_num} E:{props.eps_num}</p>}
            {props.season_num < 1 && <p className="season_num_p">Movie</p>}
            <p className='quality'>{props.quality}</p>
          </div>

          <div className='line2'>
            <p>{props.cat1}</p>
            <BsDot />
            <p>{props.cat2}</p>
            <BsDot />
            <p>{props.cat3}</p>
          </div>

        </div>
      </div>
    </>
  );
};