import { useEffect } from "react"
import mermaid from "mermaid"

const useMermaidEffect = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    })
    if (!document) return
    const elements: any = document.getElementsByClassName("language-mermaid")
    if (!elements) return

    const renderMermaid = async () => {
      for (let i = 0; i < elements.length; i++) {
        const { svg } = await mermaid.render(
          "mermaid" + i,
          elements[i].textContent || ""
        )
        elements[i].innerHTML = svg
      }
    }

    renderMermaid()
  }, [])

  return
}

export default useMermaidEffect
