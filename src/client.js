///* eslint-disable no-undef */
/**
 * This file contains helper functions and configurations for interacting with the Sanity CMS.
 */

// Import the necessary libraries from '@sanity/client' and '@sanity/image-url'
//import sanityClient from '@sanity/client'; // sanityClient is depreciated in SanityVersion3 use createClient instead.
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

// Create a Sanity client instance with the provided configuration options
// This client is used to interact with the Sanity CMS
export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production', // The dataset within the Sanity project (usually 'production')
  apiVersion: '2022-03-25', // The version of the Sanity API to use (current version: 2022-03-25)
  useCdn: true, // Enable the use of the Sanity CDN (Content Delivery Network) for faster image delivery
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN, // An optional token for API access, sourced from environment variables
});

// Create an image URL builder instance using the Sanity client
const builder = imageUrlBuilder(client);

// Export a utility function 'urlFor' that takes a source and returns a URL for the provided image source
export const urlFor = (source) => builder.image(source);

// Summary:
// This script sets up a Sanity client with the provided configuration options,
// which includes the project ID, dataset, API version, and an optional token for authentication.
// It also creates an image URL builder that can be used to generate URLs for images stored in Sanity.
// The 'client' instance is then exported to be used in other parts of the application to fetch data from the Sanity CMS.
// The 'urlFor' function is exported to help create image URLs by passing the image source as an argument.
