import '../Person.css'

const Person = (props) => {
    const {name, title, city, employer, id, favoriteMovies, country} = props.person
    const {data, i} = props
    return (
        <body>
        <div className='content'>
            <section className = 'person'>
                 <h1 class = 'id'>{id}/25</h1>
                 <h1 class = 'fullname'>{name.first} {name.last}</h1> 
                 <p><strong>From:</strong> {city}, {country} </p>
                 <p><strong>Job Title:</strong>  {title} </p>
                 <p><strong>Employer:  </strong> {employer}</p><br/>
                 <h4>Favorite Movies:</h4>
                        <ol className='movieList'>
                    1.<span> {favoriteMovies[0]}</span><br/>
                    2.<span> {favoriteMovies[1]}</span><br/>
                    3.<span> {favoriteMovies[2]}</span>
                     </ol>


                 
            </section> 

            <section className='buttons'>
            <span onClick={props.dec}>&lt;Prev</span>
            <span onClick={props.inc}>Next&gt;</span>
            </section>
            
        </div>
        </body>
    )
}

export default Person