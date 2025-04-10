export function applyHeader(content, start, end, level) {
    const lines = content.split('\n');
    const before = content.slice(0, start);
    const after = content.slice(end);
    const selected = content.slice(start, end);
    const selectedLines = selected.split('\n');
  
    const updatedLines = selectedLines.map(line => {
      const trimmed = line.trim().replace(/^#{1,6}\s*/, '');
      return '#'.repeat(level) + ' ' + trimmed;
    });
  
    const newText = before + updatedLines.join('\n') + after;
    return newText;
  }
  
  export function wrapWith(content, start, end, wrapper) {
    const before = content.slice(0, start);
    const selected = content.slice(start, end);
    const after = content.slice(end);
    return before + wrapper + selected + wrapper + after;
  }
  
  
  
  