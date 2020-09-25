
import React, {Component} from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import defaultBcg from '../images/room-2.jpeg';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';

 export default class SingleRoom extends Component {
  constructor(props){
    super(props)
   // console.log(this.props);
    this.state ={
      slug:this.props.match.params.slug,
      defaultBcg

    };
  }
  static contextType = RoomContext;

    render() {
      const { getRoom } = this.context;
      const room = getRoom(this.state.slug);
      if (!room ){
        return(
           <div className="error">
          <h3> no such room could be found....</h3>
          <Link to="/rooms/" className="btn-primary">Return to Rooms</Link>
        </div>
        );
      }
      const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
    return (
      <>
      <StyledHero  img={images[0] || this.state.defaultBcg}>
        <Banner title={`${name}room`}>
          <Link to ="/rooms/" className="btn-primary">Back to Rooms</Link>
        </Banner>
      </StyledHero>


<section className="single-room">

<div className="single-room-images">
  {images.map((item,index)=>{
    return <img key={index} src={item} alt={name}/>;
  })}

</div>
<div className="single-room-info">
  <article className="desc">
    <h3>details</h3>
<p>{description}</p>
  </article>

  <article className="info">
    <h3>info</h3>
<h6>price:{price}</h6>
<h6>size:{size}</h6>
<h6> 
  max capacity :{" "}
  {capacity >1 ? `${capacity} people`:`${capacity} person`}

</h6>
<h6> {pets ? "pets allowed":"no pets allowed"}</h6>
<h6> {breakfast && "free breakfast imcluded"}</h6>
  </article>
</div>
</section>

<section className="room-extras">
<h6>Extras</h6>
<ul className="extras">
  {extras.map((item,index)=>{
    return <li key={index}>--{item}</li>
  })}
</ul>
<div className="p-4 clearfix">
   <div className="row">
      <div className="col-md-3 col-12 ml-auto">
      <Link to={`/booknow/${this.state.slug}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Book Now</Link>
            </div>
            </div>
               </div>

</section>

</>

      
    );
    }
  }

  