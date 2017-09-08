import React from 'react';
import { Breadcrumb, BreadcrumbSection } from 'semantic-ui-react';
import BreadcrumbConfig from 'auto-breadcrumb';
import { Link } from 'react-router-dom'

//TODO: remove once the store is set up     
import ingredients from '../data/ingredients'
import recipes from '../data/recipes'

const AutoBreadCrumb = BreadcrumbConfig({
  staticRoutesMap: {
    "/ingredients": "Ingredients",
    "/recipes": "Recipes",
    "/menuPlans": "Menu Plans",
    "/deliveries": "Deliveries",
    "/documents": "Documents",
    "/documents/search": "Search",
    "/documents/upload": "Upload",
  },
  dynamicRoutesMap: {
    '/ingredients/:id': ['', ({ id }) => {
      let int_id = parseInt(id, 10);
      let ingredient = ingredients.filter(i => {
        let unrs = parseInt(i.unrs, 10);
        return (int_id === unrs)
      })[0];
      return ingredient.unrs + ' - ' + ingredient.name;
    }],
    '/recipes/:id': ['', ({ id }) => {
      let int_id = parseInt(id, 10);
      let recipe = recipes.filter(r => {
        let r_id = parseInt(r.id, 10);
        return (int_id === r_id)
      })[0];
      return recipe.name;
    }],
  },
  Breadcrumb,
  BreadcrumbItem: BreadcrumbSection,
  containerProps: {
    size: 'large',
  },
  itemRender: (name, path) =>
    path
      ? <div>
        <div className='section'><Link to={path}>
          {name}
        </Link></div><i className="right angle icon divider" /></div>
      : <div className='active section'>{name}
      </div>,
});

class Breadcrumbs extends React.Component {
  render() {
    return (
      <div>
        <AutoBreadCrumb pathname={this.props.pathname} />
        <div>&nbsp;</div>
      </div>
    );
  }
}

export default Breadcrumbs;