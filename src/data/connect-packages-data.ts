export const CONNECT_PACKAGES = [
    { label: "10 for $1.5", value: "10", price: 1.5 },
    { label: "20 for $3", value: "20", price: 3 },
    { label: "40 for $6", value: "40", price: 6 },
  ]
  
  export type ConnectPackage = (typeof CONNECT_PACKAGES)[0]
  