import React from 'react'
import { graphql } from 'gatsby'

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allStrapiVariant(
      filter: { qty: { eq: 1 }, product: { name: { eq: "Jeep" } } }
    ) {
      totalCount
      nodes {
        qty
        colorLabel
        description
        model
        car_vin
        car_drivetrain
        car_engine
        car_fuel_economy
        car_exterior_color
        car_info
        car_info2
        car_interior_color
        car_name
        car_price
        car_special
        car_stock
        car_transmission
        car_url
        color
        createdAt(fromNow: false)
        dealership
        id
        images {
          url
          localFile {
            absolutePath
          }
        }
        model_name
        product {
          category
          id
          name
        }
        strapiId
        style
        updatedAt(fromNow: false)
        vehicle_status
        year
      }
    }
  }
`

export default ComponentName
