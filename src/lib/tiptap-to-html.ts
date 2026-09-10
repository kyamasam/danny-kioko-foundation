type Mark = { type: string; attrs?: Record<string, string | number | boolean | null> };
type Node = { type: string; text?: string; marks?: Mark[]; attrs?: Record<string, string | number | boolean | null>; content?: Node[] };

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderMark(mark: Mark, inner: string): string {
  switch (mark.type) {
    case "bold": return `<strong>${inner}</strong>`;
    case "italic": return `<em>${inner}</em>`;
    case "strike": return `<s>${inner}</s>`;
    case "code": return `<code>${inner}</code>`;
    case "underline": return `<u>${inner}</u>`;
    case "link": {
      const href = mark.attrs?.href ? escapeHtml(String(mark.attrs.href)) : "#";
      const target = mark.attrs?.target ? ` target="${escapeHtml(String(mark.attrs.target))}"` : "";
      return `<a href="${href}"${target}>${inner}</a>`;
    }
    default: return inner;
  }
}

function renderNode(node: Node): string {
  if (node.type === "text") {
    let text = escapeHtml(node.text ?? "");
    for (const mark of node.marks ?? []) {
      text = renderMark(mark, text);
    }
    return text;
  }

  const children = (node.content ?? []).map(renderNode).join("");

  switch (node.type) {
    case "doc": return children;
    case "paragraph": return `<p>${children}</p>`;
    case "hardBreak": return "<br />";
    case "horizontalRule": return "<hr />";
    case "blockquote": return `<blockquote>${children}</blockquote>`;
    case "codeBlock": {
      const lang = node.attrs?.language ? ` class="language-${escapeHtml(String(node.attrs.language))}"` : "";
      return `<pre><code${lang}>${children}</code></pre>`;
    }
    case "heading": {
      const level = Number(node.attrs?.level ?? 1);
      return `<h${level}>${children}</h${level}>`;
    }
    case "bulletList": return `<ul>${children}</ul>`;
    case "orderedList": return `<ol>${children}</ol>`;
    case "listItem": return `<li>${children}</li>`;
    case "bold": return `<strong>${children}</strong>`;
    case "italic": return `<em>${children}</em>`;
    default: return children;
  }
}

export function tiptapToHtml(doc: unknown): string {
  return renderNode(doc as Node);
}
