import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "./estate.scss"

const Estate = ({
  name = "Estate not found",
  childContentfulEstateDescriptionRichTextNode: description = "We couldn't find anything, sorry.",
  thumbnailURL = "NO PHOTO URL",
}) => {
  return (
    <div className="estate">
      <h2 className="estate_name">{name}</h2>
      <div className="estate_description">
        {documentToReactComponents(description.json)}
      </div>
      <img className="estate_thumbnail" src={thumbnailURL} alt={name} />
    </div>
  )
}

export default Estate
