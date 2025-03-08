import { sanityClient } from "sanity:client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source)
}

export const sanityFetch = (query) => {
  return sanityClient.fetch(query)
}

export const imageQuery = (name) => {
  return `"${name}": ${name}.asset->{
    ...,
    "dimensions": metadata.dimensions,
    url
  }`
}

export const videoQuery = (name) => {
  return `..., "${name}": ${name}.asset->{
    url
  }`
}