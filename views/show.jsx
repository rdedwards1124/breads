const React = require('react')
const Default = require('./layouts/default')

const Show = ({bread})=>{ //Class 5: bread part 5, adding index
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
        <p>
          {bread.getBakedBy()}
        </p>
        <li>
            <a href="/breads">Go Home</a>
        </li>
        <a href={`/breads/${bread.id}/edit`}>
          <button>Edit</button>
        </a>
        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
          <input type="submit" value="DELETE" />
        </form>
      </Default>
    )
}

module.exports = Show
