import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { format, parseISO } from 'date-fns';

import { client } from '../lib/sanityClient.js';

const builder = imageUrlBuilder(client);

export function getSanityImageUrl(source: SanityImageSource) {
  return builder.image(source);
}

export function formatBlogPostDate(date: string) {
  const dateString = parseISO(date);
  const formattedDateString = format(dateString, 'MMMM do, yyyy');
  return `${formattedDateString}`;
}
