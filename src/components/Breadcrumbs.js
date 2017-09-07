import React from 'react';
import { Breadcrumb, BreadcrumbSection } from 'semantic-ui-react';
import BreadcrumbConfig from 'auto-breadcrumb';
import { Link } from 'react-router-dom'
import ingredients from '../data/ingredients'

const Breadcrumbs = BreadcrumbConfig({
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
    '/ingredients/:id': ['', ({id}) => { 
      //TODO: remove once the store is set up
      let ingredient = ingredients.filter( i => (i.unrs == id))[0];
      return ingredient.unrs + ' - ' + ingredient.name;
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
      : <div className='active section'>{name}</div>,
});

export default Breadcrumbs;