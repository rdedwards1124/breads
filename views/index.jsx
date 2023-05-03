const React = require('react')
const Default = require('./layouts/default.jsx')

// JSX component
const Index = ({breads})=>{
    return (
      <Default>
        <h2>Index Page</h2>
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
