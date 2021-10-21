//* Potential Problem: Commented out onCreateWebpackConfig that included /react-spring-3d-carousel/ for /bad-module/
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        products: allStrapiProduct {
          edges {
            node {
              name
              strapiId
              description
              category {
                name
              }
              variants {
                id
                color
                size
                style
                price
                images {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              name
              description
              filterOptions {
                Size {
                  checked
                  label
                }

                Color {
                  checked
                  label
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const products = result.data.products.edges
  const categories = result.data.categories.edges

  products.forEach(product => {
    createPage({
      path: `/dashboard/${product.node.category.name.toLowerCase()}/${product.node.name
        .split(' ')[0]
        .toLowerCase()}`,
      component: require.resolve('./src/templates/ProductDetail.js'),
      context: {
        name: product.node.name,
        id: product.node.strapiId,
        category: product.node.category.name,
        description: product.node.description,
        variants: product.node.variants,
        product,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/dashboard/${category.node.name.toLowerCase()}`,
      component: require.resolve('./src/templates/ProductList.js'),
      context: {
        name: category.node.name,
        description: category.node.description,
        id: category.node.strapiId,
        filterOptions: category.node.filterOptions,
      },
    })
  })

  const resultdata = await graphql(
    `
    allGoogleAllcarsSheet {
      totalCount
      edges {
        node {
          drivetrainnew: carDrivetrain
          carEngine
          color: carExteriorColor
          carFuelEconomy
          carHighlightedFeatures1Feature
          carHighlightedFeatures2Feature
          carHighlightedFeatures3Feature
          carHighlightedFeatures4Feature
          carHighlightedFeatures5Feature
          carHighlightedFeatures6Feature
          carHighlightedFeatures7Feature
          carHighlightedFeatures8Feature
          name: carInfo
          carInfo2
          carName
          carInteriorColor
          carOdometer
          carPackageOptions1Attribute1
          carPackageOptions1Attribute10
          carPackageOptions1Attribute12
          carPackageOptions1Attribute11
          carPackageOptions1Attribute2
          carPackageOptions1Name
          carPackageOptions1Attribute3
          carPackageOptions1Price
          carPackageOptions2Attribute1
          carPackageOptions2Attribute10
          carPackageOptions2Attribute11
          carPackageOptions2Attribute12
          carPackageOptions2Attribute2
          carPackageOptions2Attribute3
          carPackageOptions2Name
          carPackageOptions2Price
          carPackageOptions3Attribute1
          carPackageOptions3Attribute10
          carPackageOptions3Attribute11
          carPackageOptions3Attribute12
          carPackageOptions3Attribute2
          carPackageOptions3Attribute3
          carPackageOptions3Name
          carPackageOptions3Price
          carPackageOptions4Attribute1
          carPackageOptions4Attribute10
          carPackageOptions4Attribute11
          carPackageOptions4Attribute12
          carPackageOptions4Attribute2
          carPackageOptions4Attribute3
          carPackageOptions4Name
          carPackageOptions4Price
          carPackageOptions5Attribute1
          carPackageOptions5Attribute10
          carPackageOptions5Attribute11
          carPackageOptions5Attribute12
          carPackageOptions5Attribute2
          carPackageOptions5Attribute3
          carPackageOptions5Name
          carPackageOptions5Price
          carPackageOptions6Attribute1
          carPackageOptions6Attribute2
          carPackageOptions6Attribute3
          carPackageOptions6Name
          carPackageOptions6Price
          price: carPrice
          carSpecial
          carSpecial2
          carStock
          carTransmission
          carUrl
          carVin
          description: dealership
          id: id
          cover: imageSource1
          createdAt: refreshTime
          requestedURLPath
          status: vehicleStatus
        }
      }
    }
  }
`
  )

  if (result.errors) {
    throw result.errors
  }

  const cars = resultdata.data.allGoogleAllcarsSheet.edges

  cars.forEach(car => {
    createPage({
      path: `/dashboard/cars/${car.node.id}`,
      component: require.resolve('./src/templates/CarDetail.js'),
      context: {
        name: car.node.carName,
        id: car.node.id,
        description: car.node.description,
        drivetrain: car.node.drivetrainnew,
        engine: car.node.carEngine,
        exteriorColor: car.node.color,
        fuelEconomy: car.node.carFuelEconomy,
        interiorColor: car.node.carInteriorColor,
        odometer: car.node.carOdometer,
        packageOptions: [
          {
            name: car.node.carPackageOptions1Name,
            price: car.node.carPackageOptions1Price,
            attributes: [
              {
                name: car.node.carPackageOptions1Attribute1,
                value: car.node.carPackageOptions1Attribute2,
              },
              {
                name: car.node.carPackageOptions1Attribute3,
                value: car.node.carPackageOptions1Attribute4,
              },
            ],
          },
        ],
        price: car.node.price,
        name: car.node.carName,
        otherName: car.node.carInfo2,
        info: car.node.carInfo,
      },
    })
  })
}

// exports.modifyBabelrc = ({ babelrc }) => ({
//   ...babelrc,
//   plugins: babelrc.plugins.concat(['transform-regenerator']),
// })
//! Commenting out below...
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [{ test: /react-spring-3d-carousel/, use: loaders.null() }],
//       },
//     })
//   }
// }
//! Replacing with below...
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: 'process/browser' })],
      resolve: {
        fallback: {
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve('stream-browserify'),
        },
      },
    })
  }
}

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [{ test: /react-spring-3d-carousel/, use: loaders.null() }],
//       },
//       plugins: [
//         // fix "process is not defined" error:
//         // (do "npm install process" before running the build)
//         new webpack.ProvidePlugin({
//           process: 'process/browser',
//         }),
//       ],
//     })
//   }
// }

// exports.onCreateNode = ({ node, actions, reporter }) => {
//   const { createNodeField } = actions

//   reporter.info(`>>>>${node.internal.type}`)
//   if (node.internal.type === 'StrapiProduct') {
//     const slug = `/${node.category.name.toLowerCase()}/${
//       node.name.split(' ')[0]
//     }`

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }
