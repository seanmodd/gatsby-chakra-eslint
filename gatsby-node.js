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
        allGoogleAllcarsSheet {
          totalCount
          edges {
            node {
              carDrivetrain
              carEngine
              carExteriorColor
              carFuelEconomy
              carHighlightedFeatures1Feature
              carHighlightedFeatures2Feature
              carHighlightedFeatures3Feature
              carHighlightedFeatures4Feature
              carHighlightedFeatures5Feature
              carHighlightedFeatures6Feature
              carHighlightedFeatures7Feature
              carHighlightedFeatures8Feature
              carInfo
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
              carPrice
              carSpecial
              carSpecial2
              carStock
              carTransmission
              carUrl
              carVin
              dealership
              id
              imageSource1
              refreshTime
              requestedURLPath
              vehicleStatus
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

  const cars = result.data.allGoogleAllcarsSheet.edges

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
        allHighlights: [
          { feature: car.node.carHighlightedFeatures1Feature },
          { feature: car.node.carHighlightedFeatures2Feature },
          { feature: car.node.carHighlightedFeatures3Feature },
          { feature: car.node.carHighlightedFeatures4Feature },
          { feature: car.node.carHighlightedFeatures5Feature },
          { feature: car.node.carHighlightedFeatures6Feature },
          { feature: car.node.carHighlightedFeatures7Feature },
          { feature: car.node.carHighlightedFeatures8Feature },
        ],
        info: car.node.carInfo,
        moreInfo: car.node.carInfo2,
        carName: car.node.carName,
        odometer: car.node.carOdometer,
        allPackages: [
          {
            packageName: car.node.carPackageOptions1Name,
            packagePrice: car.node.carPackageOptions1Price,
            packageAttributes: {
              attribute: car.node.carPackageOptions1Attribute1,
              attribute: car.node.carPackageOptions1Attribute2,
              attribute: car.node.carPackageOptions1Attribute3,
              attribute: car.node.carPackageOptions1Attribute10,
              attribute: car.node.carPackageOptions1Attribute11,
              attribute: car.node.carPackageOptions1Attribute12,
            },
            packageName: car.node.carPackageOptions2Name,
            packagePrice: car.node.carPackageOptions2Price,
            packageAttributes: {
              attribute: car.node.carPackageOptions2Attribute1,
              attribute: car.node.carPackageOptions2Attribute2,
              attribute: car.node.carPackageOptions2Attribute3,
              attribute: car.node.carPackageOptions2Attribute10,
              attribute: car.node.carPackageOptions2Attribute11,
              attribute: car.node.carPackageOptions2Attribute12,
            },
            packageName: car.node.carPackageOptions3Name,
            packagePrice: car.node.carPackageOptions3Price,
            packageAttributes: {
              attribute: car.node.carPackageOptions3Attribute1,
              attribute: car.node.carPackageOptions3Attribute2,
              attribute: car.node.carPackageOptions3Attribute3,
              attribute: car.node.carPackageOptions3Attribute10,
              attribute: car.node.carPackageOptions3Attribute11,
              attribute: car.node.carPackageOptions3Attribute12,
            },
            packageName: car.node.carPackageOptions4Name,
            packagePrice: car.node.carPackageOptions4Price,
            packageAttributes: {
              attribute: car.node.carPackageOptions4Attribute1,
              attribute: car.node.carPackageOptions4Attribute2,
              attribute: car.node.carPackageOptions4Attribute3,
              attribute: car.node.carPackageOptions4Attribute10,
              attribute: car.node.carPackageOptions4Attribute11,
              attribute: car.node.carPackageOptions4Attribute12,
            },
            packageName: car.node.carPackageOptions5Name,
            packagePrice: car.node.carPackageOptions5Price,
            packageAttributes: {
              attribute: car.node.carPackageOptions5Attribute1,
              attribute: car.node.carPackageOptions5Attribute2,
              attribute: car.node.carPackageOptions5Attribute3,
              attribute: car.node.carPackageOptions5Attribute10,
              attribute: car.node.carPackageOptions5Attribute11,
              attribute: car.node.carPackageOptions5Attribute12,
            },
            packageName: car.node.carPackageOptions6Name,
            packagePrice: car.node.carPackageOptions6Price,
            packageAttributes: {
              attribute: car.node.carPackageOptions6Attribute1,
              attribute: car.node.carPackageOptions6Attribute2,
              attribute: car.node.carPackageOptions6Attribute3,
            },
          },
        ],
        price: car.node.carPrice,
        special: car.node.carSpecial,
        special2: car.node.carSpecial2,
        stock: car.node.carStock,
        transmission: car.node.carTransmission,
        url: car.node.carUrl,
        vin: car.node.carVin,
        dealership: car.node.dealership,
        id: car.node.id,
        imageSource1: car.node.imageSource1,
        refreshTime: car.node.refreshTime,
        requestedURLPath: car.node.requestedURLPath,
        vehicleStatus: car.node.vehicleStatus,
        highlightedFeatures: {
          highlight1: car.node.carHighlightedFeatures1Feature,
          highlight2: car.node.carHighlightedFeatures2Feature,
          highlight3: car.node.carHighlightedFeatures3Feature,
          highlight4: car.node.carHighlightedFeatures4Feature,
          highlight5: car.node.carHighlightedFeatures5Feature,
          highlight6: car.node.carHighlightedFeatures6Feature,
          highlight7: car.node.carHighlightedFeatures7Feature,
          highlight8: car.node.carHighlightedFeatures8Feature,
        },
        packageOptions: {
          packageName1: car.node.carPackageOptions1Name,
          packagePrice1: car.node.carPackageOptions1Price,
          packageAttributes1: {
            attribute1: car.node.carPackageOptions1Attribute1,
            attribute2: car.node.carPackageOptions1Attribute2,
            attribute3: car.node.carPackageOptions1Attribute3,
            attribute4: car.node.carPackageOptions1Attribute10,
            attribute5: car.node.carPackageOptions1Attribute11,
            attribute6: car.node.carPackageOptions1Attribute12,
          },
          packageName2: car.node.carPackageOptions2Name,
          packagePrice2: car.node.carPackageOptions2Price,
          packageAttributes2: {
            attribute1: car.node.carPackageOptions2Attribute1,
            attribute2: car.node.carPackageOptions2Attribute2,
            attribute3: car.node.carPackageOptions2Attribute3,
            attribute4: car.node.carPackageOptions2Attribute10,
            attribute5: car.node.carPackageOptions2Attribute11,
            attribute6: car.node.carPackageOptions2Attribute12,
          },
          packageName3: car.node.carPackageOptions3Name,
          packagePrice3: car.node.carPackageOptions3Price,
          packageAttributes3: {
            attribute1: car.node.carPackageOptions3Attribute1,
            attribute2: car.node.carPackageOptions3Attribute2,
            attribute3: car.node.carPackageOptions3Attribute3,
            attribute4: car.node.carPackageOptions3Attribute10,
            attribute5: car.node.carPackageOptions3Attribute11,
            attribute6: car.node.carPackageOptions3Attribute12,
          },
          packageName4: car.node.carPackageOptions4Name,
          packagePrice4: car.node.carPackageOptions4Price,
          packageAttributes4: {
            attribute1: car.node.carPackageOptions4Attribute1,
            attribute2: car.node.carPackageOptions4Attribute2,
            attribute3: car.node.carPackageOptions4Attribute3,
            attribute4: car.node.carPackageOptions4Attribute10,
            attribute5: car.node.carPackageOptions4Attribute11,
            attribute6: car.node.carPackageOptions4Attribute12,
          },
          packageName5: car.node.carPackageOptions5Name,
          packagePrice5: car.node.carPackageOptions5Price,
          packageAttributes5: {
            attribute1: car.node.carPackageOptions5Attribute1,
            attribute2: car.node.carPackageOptions5Attribute2,
            attribute3: car.node.carPackageOptions5Attribute3,
            attribute4: car.node.carPackageOptions5Attribute10,
            attribute5: car.node.carPackageOptions5Attribute11,
            attribute6: car.node.carPackageOptions5Attribute12,
          },
          packageName6: car.node.carPackageOptions6Name,
          packagePrice6: car.node.carPackageOptions6Price,
          packageAttributes6: {
            attribute1: car.node.carPackageOptions6Attribute1,
            attribute2: car.node.carPackageOptions6Attribute2,
            attribute3: car.node.carPackageOptions6Attribute3,
          },
        },
      },
    })
  })
}

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
