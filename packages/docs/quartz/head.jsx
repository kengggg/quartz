/** @type {import("@jackyzha0/quartz-plugins").TypedComponent<"head">} */
export default function({ title, description, externalResources, baseDir }) {
  const { css, js } = externalResources
  const iconPath = baseDir + "/static/icon.png"
  return <head>
    <title>{title}</title>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={title}/>
    <meta property="og:image" content={iconPath}/>
    <link rel="icon" href={iconPath}/>
    <meta name="description" content={description}/>
    <meta name="generator" content="Quartz"/>
    <meta charSet="UTF-8"/>
    {css.map(href => <link key={href} href={href} rel="stylesheet" type="text/css" />)}
    {js.filter(resource => resource.loadTime === "beforeDOMReady").map(resource => <script key={resource.src} src={resource.src} />)}
  </head>
}