import { graphql, useStaticQuery } from 'gatsby'

export default function NewProducts() {
  useStaticQuery(graphql`
    query GoogleSheetsCJDandKiaa {
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
  `)

  {
  }
}