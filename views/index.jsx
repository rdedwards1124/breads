const React = require('react')
const Default = require('./layouts/default.jsx')

// JSX component
const Index = ({breads, bakers})=>{
    return (
      <Default>
        <h2>Index Page</h2>
        <h3>Bakers</h3>
        <ul>
          {
            bakers.map((baker)=>{
              return (
                <li key={baker.id}>
                  <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                </li>
              )
            })
          }
        </ul>
        <div className="newButton">
          <a className="button" href="/breads/new">Add a new bread</a>
        </div>
        <ul>
        {
            breads.map((bread)=> {
                return (
                <li key={bread.id}>
                    <a href={`/breads/${bread.id}`}>{bread.name}</a>
                </li>
                )
            })
        }
        </ul>
      </Default>
    )
}

module.exports = Index
