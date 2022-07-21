interface ImportMetaEnv {
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  readonly PUBLIC_SANITY_API_VERSION: string;
  readonly PUBLIC_SANITY_READ_TOKEN: string;
}

// eslint-disable-next-line no-redeclare, no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
