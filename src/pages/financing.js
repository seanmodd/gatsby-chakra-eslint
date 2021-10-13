// old: Commented out all validate related functions

import React, { useState, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import SEO from '../components/ui/seo'
import { FeedbackContext } from '../contexts'
import { setSnackbar } from '../contexts/actions'

import address from '../images/address.svg'
import Email from '../images/EmailAdornment'
import send from '../images/send.svg'
import nameAdornment from '../images/name-adornment.svg'
import PhoneAdornment from '../images/PhoneAdornment'

import Layout from '../components/ui/layout'
import validate from '../components/ui/validate'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '15rem',
    height: '45rem',
    backgroundColor: theme.palette.primary.main,
    marginBottom: '10rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '8rem',
      height: '90rem',
    },
  },
  formContainer: {
    height: '100%',
  },
  formWrapper: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: '50%',
      marginTop: '-8rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  blockContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: '8rem',
    width: '40rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '30rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  titleContainer: {
    marginTop: '-4rem',
  },
  buttonContainer: {
    marginBottom: '-4rem',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  sendIcon: {
    marginLeft: '2rem',
  },
  contactInfo: {
    fontSize: '1.5rem',
    marginLeft: '1rem',
  },
  contactIcon: {
    height: '3rem',
    width: '3rem',
  },
  contactEmailIcon: {
    height: '2.25rem',
    width: '3rem',
  },
  infoContainer: {
    height: '21.25rem',
    [theme.breakpoints.down('xs')]: {
      height: '15.25rem',
    },
  },
  middleInfo: {
    borderTop: '2px solid #fff',
    borderBottom: '2px solid #fff',
  },
  iconContainer: {
    borderRight: '2px solid #fff',
    height: '7rem',
    width: '8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '5rem',
      width: '6rem',
    },
  },
  textField: {
    width: '30rem',
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
    },
  },
  input: {
    color: '#fff',
  },
  fieldContainer: {
    marginBottom: '1rem',
  },
  multilineContainer: {
    marginTop: '1rem',
  },
  emailAdornment: {
    height: 17,
    width: 22,
    marginBottom: 10,
  },
  phoneAdornment: {
    width: 25.173,
    height: 25.122,
  },
  multiline: {
    border: '2px solid #fff',
    borderRadius: 10,
    padding: '1rem',
  },
  multilineError: {
    border: `2px solid ${theme.palette.error.main}`,
  },
  buttonDisabled: {
    backgroundColor: theme.palette.grey[500],
  },
  sendMessage: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  '@global': {
    '.MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before':
      {
        borderBottom: '2px solid #fff',
      },
    '.MuiInput-underline:after': {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}))

const Page = () => {
  const classes = useStyles()
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'))

  return (
    <Layout>
      <SEO
        title="Financing"
        description="Find out why we're the best solution for your auto financing."
      />
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
        direction={matchesMD ? 'column' : 'row'}
      >
        {/* Contact Form */}
        <Grid
          component="form"
          name="contact"
          method="POST"
          data-netlify="true"
          item
          classes={{ root: classes.formWrapper }}
        >
          <Grid
            container
            classes={{ root: classes.formContainer }}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              classes={{
                root: clsx(classes.titleContainer, classes.blockContainer),
              }}
            >
              <Typography variant="h4">Coming Soon!</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Page
