//* Redux
//* This gets fed into the CarDetails.js component
import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import { findIndex } from 'lodash'
import PropTypes from 'prop-types'
// material
import { alpha, styled } from '@mui/material/styles'
import { Box } from '@mui/material'
// redux
import { useSelector } from '../../../../redux/store'
//
import LightboxModal from '../../../LightboxModal'
import { CarouselControlsArrowsIndex } from '../../../carousel'

// ----------------------------------------------------------------------

const THUMB_SIZE = 64

const RootStyle = styled('div')(({ theme }) => ({
  '& .slick-slide': {
    float: theme.direction === 'rtl' ? 'right' : 'left',
    '&:focus': { outline: 'none' },
  },
}))

const ThumbWrapperStyle = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  width: THUMB_SIZE,
  overflow: 'hidden',
  height: THUMB_SIZE,
  position: 'relative',
  margin: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadiusSm,
  '&:hover': {
    opacity: 0.72,
    transition: theme.transitions.create('opacity'),
  },
  '& .isActive': {
    top: 0,
    zIndex: 9,
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: theme.shape.borderRadiusSm,
    border: `solid 3px ${theme.palette.primary.main}`,
    backgroundColor: alpha(theme.palette.grey[900], 0.48),
  },
}))

const LargeImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

const ThumbImgStyle = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

// ----------------------------------------------------------------------

LargeItem.propTypes = {
  item: PropTypes.string,
  onOpenLightbox: PropTypes.func,
}

function LargeItem({ item, onOpenLightbox }) {
  return (
    <Box sx={{ cursor: 'zoom-in', paddingTop: '100%', position: 'relative' }}>
      <LargeImgStyle
        alt="large image"
        src={item}
        onClick={() => onOpenLightbox(item)}
      />
    </Box>
  )
}

ThumbnailItem.propTypes = {
  item: PropTypes.string,
}

function ThumbnailItem({ item }) {
  return (
    <ThumbWrapperStyle>
      <Box className="isActive" />
      <ThumbImgStyle alt="thumb image" src={item} />
    </ThumbWrapperStyle>
  )
}

// export default function ProductDetailsCarousel(props) {
export default function ProductDetailsCarousel({ product }) {
  const [openLightbox, setOpenLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  // const { product } = useSelector(state => state.product)
  const { state } = useSelector(state => state)
  // console.log('This is props from ProductDetailsCarousel.js: ', props)
  console.log('This is from ProductDetailsCarousel.js state: ', state)
  console.log('This is from ProductDetailsCarpisel.js product: ', product)

  const {
    // sizes,
    cover,
    status,
    // colors,
    // available,
    price: priceSale,
    // totalRating,
    // totalReview,
    // inventoryType,
    //! below is all the props destructured out of product:
    carName,
    dealerhsip,
    engine,
    fuelEconomy,
    highlightedFeatures,
    id,
    imageSource1,
    info,
    interiorColor,
    moreInfo,
    name,
    odometer,
    packageOptions,
    price,
    refreshTime,
    special,
    special2,
    stock,
    transmission,
    url,
    vehicleStatus: inventoryType,
    vin,
  } = product

  // const imagesLightbox = product.images.map(_image => _image)
  const imagesLightbox = { imageSource1 }

  const handleOpenLightbox = url => {
    const selectedImage = findIndex(imagesLightbox, index => index === url)
    setOpenLightbox(true)
    setSelectedImage(selectedImage)
  }

  const settings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setCurrentIndex(next),
  }

  const settings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    // slidesToShow: product.images.length > 3 ? 3 : product.images.length,
  }

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [currentIndex])

  const handlePrevious = () => {
    slider2.current.slickPrev()
  }

  const handleNext = () => {
    slider2.current.slickNext()
  }

  return (
    <RootStyle>
      <Box sx={{ p: 1 }}>
        <Box
          sx={{
            zIndex: 0,
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Slider {...settings1} asNavFor={nav2} ref={slider1}>
            {/* {product.images.map(item => (
              <LargeItem
                key={item}
                item={item}
                onOpenLightbox={handleOpenLightbox}
              />
            ))} */}

            <LargeItem
              key={imageSource1}
              item={imageSource1}
              onOpenLightbox={handleOpenLightbox}
            />
          </Slider>
          <CarouselControlsArrowsIndex
            index={currentIndex}
            // total={product.images.length}
            total={1}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </Box>
      </Box>

      {/* <Box
        sx={{
          my: 3,
          mx: 'auto',
          '& .slick-current .isActive': { opacity: 1 },
          ...(product.images.length === 1 && { maxWidth: THUMB_SIZE * 1 + 16 }),
          ...(product.images.length === 2 && { maxWidth: THUMB_SIZE * 2 + 32 }),
          ...(product.images.length === 3 && { maxWidth: THUMB_SIZE * 3 + 48 }),
          ...(product.images.length === 4 && { maxWidth: THUMB_SIZE * 3 + 48 }),
          ...(product.images.length >= 5 && { maxWidth: THUMB_SIZE * 6 }),
          ...(product.images.length > 2 && {
            position: 'relative',
            '&:before, &:after': {
              top: 0,
              zIndex: 9,
              content: "''",
              height: '100%',
              position: 'absolute',
              width: (THUMB_SIZE * 2) / 3,
              backgroundImage: theme =>
                `linear-gradient(to left, ${alpha(
                  theme.palette.background.paper,
                  0
                )} 0%, ${theme.palette.background.paper} 100%)`,
            },
            '&:after': { right: 0, transform: 'scaleX(-1)' },
          }),
        }}
      >
        <Slider {...settings2} asNavFor={nav1} ref={slider2}>
          {product.images.map(item => (
            <ThumbnailItem key={item} item={item} />
          ))}
        </Slider>
      </Box> */}

      {/* <LightboxModal
        images={imagesLightbox}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onClose={() => setOpenLightbox(false)}
      /> */}
    </RootStyle>
  )
}
