const React = require('react')
const Default = require('./layouts/default')

const Show = ({bread, index})=>{ //Class 5: bread part 5, adding index
  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            and it
            {bread.hasGluten ? <span> does </span> : <span> does not </span>}
            have gluten
        </p>
        <img width="480" src={bread.image} alt={bread.name}></img>
        <li>
            <a href="/breads">Go Home</a>
        </li>
        
        <li>
          <form action={`/breads/${index}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE" />
          </form>
        </li>
      </Default>
    )
}

module.exports = Show
