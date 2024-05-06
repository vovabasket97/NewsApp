/// <reference types="react-scripts" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
  export default content
}
