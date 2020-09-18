import React from "react";


const Hotel = (props) => {
    const {name, bio, rating, rate, imgURL } = props.hotel;
    
    return (
 
        <div className="hotel-card d-flex my-4 align-items-lg-center">
			<div className="img mr-4">
				<img src={imgURL} alt="" style={{ maxWidth: "270px" }} />
			</div>
			<div className="info">
				<h4>{name}</h4>
				<p>
					{bio}
				</p>
				
				
				<p className="ratings d-flex">
					<small>
						<strong>
							{rating}({rate})
						</strong>
					</small>
					
					<del>$99 discount</del>
				</p>
			</div>
		</div>
    );
};

export default Hotel;