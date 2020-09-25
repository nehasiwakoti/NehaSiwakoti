import React,{Component} from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa';

export default class Services extends Component{

    state={
        services:[{
        icon:<FaCocktail />,
        title:"Free Cocktail",
        info:"A cocktail is an alcoholic mixed drink, which is either a combination of spirits"
        },
        {
        icon:<FaHiking />,
         title:"Hiking",
          info:"Hiking is an outdoor activity which consists of walking in natural environments"
           },
            {
             icon:<FaShuttleVan />,
             title:"Free Shuttle",
              info:" We will provide shuttleVan for guests.shuttle consisting of a bus that travels between two points."
                },
             
                 {
                icon:<FaBeer />,
                title:"Strongest beer",
                 info:"Beer is one of the oldest and most widely consumed alcoholic drinks in the world."
                    }
        ]
    };
   /*  render(){
        return(
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return(
                            <article key={index} className="services">
                                <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>

            </section>
        )
    }
}
*/
render() {
    return (
        <section className="services">
         <Title title="Services" />
            <div className="row">
               {this.state.services.map((item, index) => {
                  return(
                    <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                        <div className="card shadow-lg border-0 p-4">
                            <article className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            </article>              
                       </div>
                    </div>
                  )
               })}
            </div>
        </section>
    )
}
}