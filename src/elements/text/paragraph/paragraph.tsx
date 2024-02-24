interface ParagraphProps {
  content: string
}

import './Paragraph.css' 

export const Paragraph = (props: ParagraphProps) => {

  const { content } = props

  return <p className="paragraph-el">{content}</p>
}
