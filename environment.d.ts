declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TREFLE_TOKEN: string;
      TREFLE_PAGES: string;
    }
  }
}

// export {};