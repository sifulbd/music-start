import React from 'react'

function Course(props) {
    const{title, img, info, fee, instructor, durations} = props.course;
    const handleCourse = props.handleClick;
    return (
        <div className='col-lg-4 courseSingle'>
            <div className="courseContent">
                <img className='img-fluid' src={img} alt=""/>
                <h2>{title}</h2>
                <p>{info}</p>
                <p><span>${fee}</span> <i>{durations}</i></p>
                <h4><small>Instructor</small> <span>{instructor}</span></h4>
                <button onClick={() => handleCourse(props.course)} className='btn btn-block'> Enroll Now</button>
            </div>
        </div>

    )
}

export default Course;
